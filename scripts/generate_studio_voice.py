import os
import sys
import subprocess
import re
import numpy as np
import soundfile as sf
import imageio_ffmpeg
from kokoro_onnx import Kokoro

# Force UTF-8 stdout
sys.stdout.reconfigure(encoding='utf-8')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
STUDIO_DIR = os.path.dirname(SCRIPT_DIR)
VOICEOVER_TXT = os.path.join(STUDIO_DIR, "src", "voiceover_script.txt")
RAW_WAV_PATH = os.path.join(STUDIO_DIR, "public", "raw_voiceover.wav")
MASTERED_WAV_PATH = os.path.join(STUDIO_DIR, "public", "voiceover.wav")
MASTERED_MP3_PATH = os.path.join(STUDIO_DIR, "public", "voiceover.mp3")
TRANSCRIBE_SCRIPT = os.path.join(SCRIPT_DIR, "transcribe.py")

MODEL_DIR = r"C:\Users\atiqu\.gemini\antigravity\scratch\kokoro_models"
MODEL_PATH = os.path.join(MODEL_DIR, "kokoro-v1.0.onnx")
VOICES_PATH = os.path.join(MODEL_DIR, "voices-v1.0.bin")

# User-approved canonical documentary voice
VOICE = "bm_fable"   # British Male - Cinematic & Dramatic (#5)
LANG = "en-gb"
SPEED = 1.0

def clean_text_chunk(text):
    # Remove XML / bracket tags like <short pause>, [excited], etc.
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"\[[^\]]+\]", " ", text)
    # Normalize multiple spaces
    text = re.sub(r"\s+", " ", text).strip()
    return text

def generate_voice():
    print(f"=== GENERATING HIGH-RETENTION DOCUMENTARY VOICEOVER VIA KOKORO-82M ({VOICE}) ===")
    
    if not os.path.exists(MODEL_PATH) or not os.path.exists(VOICES_PATH):
        raise FileNotFoundError(f"Kokoro model files not found in {MODEL_DIR}")

    print(f"Loading Kokoro model: {MODEL_PATH}...")
    kokoro = Kokoro(MODEL_PATH, VOICES_PATH)

    with open(VOICEOVER_TXT, "r", encoding="utf-8") as f:
        full_text = f.read()

    # Split into clean paragraphs
    raw_paragraphs = [p.strip() for p in full_text.split("\n\n") if p.strip()]
    paragraphs = []
    for p in raw_paragraphs:
        cleaned = clean_text_chunk(p)
        if cleaned:
            paragraphs.append(cleaned)

    print(f"Total script paragraphs: {len(paragraphs)}, Total words: ~{len(full_text.split())}")

    all_audio_segments = []
    target_sample_rate = 24000
    # Natural 350ms pause between paragraphs for rhythmic documentary cadence
    inter_paragraph_silence = np.zeros(int(target_sample_rate * 0.35), dtype=np.float32)

    for idx, p in enumerate(paragraphs):
        print(f"  [Paragraph {idx+1}/{len(paragraphs)}] Synthesizing ({len(p.split())} words)...")
        try:
            samples, sr = kokoro.create(p, voice=VOICE, speed=SPEED, lang=LANG)
            target_sample_rate = sr
            all_audio_segments.append(samples)
            if idx < len(paragraphs) - 1:
                all_audio_segments.append(inter_paragraph_silence)
        except Exception as e:
            print(f"    Error on paragraph {idx+1}: {e}")
            raise

    print(f"Concatenating all {len(paragraphs)} paragraphs...")
    final_waveform = np.concatenate(all_audio_segments)
    duration_sec = len(final_waveform) / target_sample_rate
    print(f"Total raw audio generated: {duration_sec:.2f} seconds ({duration_sec/60:.2f} minutes).")

    print(f"Saving raw WAV to: {RAW_WAV_PATH}...")
    sf.write(RAW_WAV_PATH, final_waveform, target_sample_rate)
    print("[OK] Raw audio written successfully!")

    # FFmpeg Broadcast Mastering
    ffmpeg_bin = imageio_ffmpeg.get_ffmpeg_exe()
    print(f"[MASTERING] Applying studio broadcast mastering chain via FFmpeg ({ffmpeg_bin})...")
    mastering_filter = (
        "highpass=f=80,"
        "equalizer=f=120:width_type=h:width=100:g=2.5,"
        "equalizer=f=800:width_type=h:width=200:g=-1.5,"
        "equalizer=f=4500:width_type=h:width=2000:g=2.2,"
        "acompressor=threshold=-18dB:ratio=3.2:attack=8:release=60,"
        "loudnorm=I=-14:TP=-1.0:LRA=9"
    )

    cmd_wav = [
        ffmpeg_bin, "-y",
        "-i", RAW_WAV_PATH,
        "-af", mastering_filter,
        "-ar", "24000",
        "-ac", "1",
        MASTERED_WAV_PATH
    ]
    subprocess.run(cmd_wav, check=True)
    print(f"[OK] Mastered WAV saved to: {MASTERED_WAV_PATH}")

    # Export MP3 version for Remotion
    cmd_mp3 = [
        ffmpeg_bin, "-y",
        "-i", MASTERED_WAV_PATH,
        "-c:a", "libmp3lame",
        "-b:a", "192k",
        MASTERED_MP3_PATH
    ]
    subprocess.run(cmd_mp3, check=True)
    print(f"[OK] Mastered MP3 saved to: {MASTERED_MP3_PATH}")

    # Run Whisper for word-level sync
    print("[WHISPER] Running faster-whisper transcription for 1:1 timestamps.json...")
    try:
        cmd_transcribe = [
            "uv", "run",
            "--python", "3.11",
            "--with", "faster-whisper",
            "python", TRANSCRIBE_SCRIPT
        ]
        subprocess.run(cmd_transcribe, check=True)
        print("[OK] 1:1 Word-level timestamps updated in timestamps.json!")
    except Exception as e:
        print(f"[WARN] Whisper transcription note: {e}")

if __name__ == "__main__":
    generate_voice()
