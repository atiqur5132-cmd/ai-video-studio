import os
import sys
import asyncio
import subprocess
import re
import edge_tts

# Force UTF-8 stdout
sys.stdout.reconfigure(encoding='utf-8')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
STUDIO_DIR = os.path.dirname(SCRIPT_DIR)
VOICEOVER_TXT = os.path.join(STUDIO_DIR, "src", "voiceover_script.txt")
RAW_MP3_PATH = os.path.join(STUDIO_DIR, "public", "raw_voiceover.mp3")
RAW_WAV_PATH = os.path.join(STUDIO_DIR, "public", "raw_voiceover.wav")
MASTERED_WAV_PATH = os.path.join(STUDIO_DIR, "public", "voiceover.wav")
MASTERED_MP3_PATH = os.path.join(STUDIO_DIR, "public", "voiceover.mp3")
TRANSCRIBE_SCRIPT = os.path.join(SCRIPT_DIR, "transcribe.py")

# Canonical YouTube Tech Creator Voice
VOICE = "en-US-ChristopherNeural"
RATE = "+3%" # Conversational American Male Silicon Valley tech creator pace (6.5 - 7 min)
PITCH = "+0Hz"

def clean_text_chunk(text):
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"\[[^\]]+\]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text

async def synthesize_script():
    print(f"=== GENERATING TECH EXPLAINER VOICEOVER VIA EDGE NEURAL ({VOICE}) ===")
    
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
    
    # We join paragraphs with natural SSML or slight pause if needed, or single communication
    full_clean_script = "\n\n".join(paragraphs)
    
    print(f"Synthesizing script via Microsoft Neural Cloud ({len(full_clean_script.split())} words)...")
    communicate = edge_tts.Communicate(full_clean_script, VOICE, rate=RATE, pitch=PITCH)
    await communicate.save(RAW_MP3_PATH)
    print(f"[OK] Raw audio generated: {RAW_MP3_PATH}")

def post_process_audio():
    ffmpeg_bin = r"C:\Users\atiqu\.gemini\antigravity\scratch\transcribe_project\.venv\Scripts\static_ffmpeg.exe"
    print(f"[FFMPEG] Converting raw MP3 to WAV for mastering...")
    subprocess.run([ffmpeg_bin, "-y", "-i", RAW_MP3_PATH, "-ar", "24000", "-ac", "1", RAW_WAV_PATH], check=True)

    print(f"[MASTERING] Applying broadcast mastering chain via FFmpeg...")
    mastering_filter = (
        "highpass=f=80,"
        "equalizer=f=120:width_type=h:width=100:g=2.2,"
        "equalizer=f=800:width_type=h:width=200:g=-1.2,"
        "equalizer=f=4500:width_type=h:width=2000:g=2.0,"
        "acompressor=threshold=-18dB:ratio=3.0:attack=8:release=60,"
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
            sys.executable,
            TRANSCRIBE_SCRIPT
        ]
        subprocess.run(cmd_transcribe, check=True)
        print("[OK] 1:1 Word-level timestamps updated in timestamps.json!")
    except Exception as e:
        print(f"[WARN] Whisper transcription note: {e}")

def main():
    asyncio.run(synthesize_script())
    post_process_audio()

if __name__ == "__main__":
    main()
