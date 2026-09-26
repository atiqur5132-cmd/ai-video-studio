import asyncio
import os
import sys
import subprocess
import edge_tts

# Force utf-8 stdout
sys.stdout.reconfigure(encoding='utf-8')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
STUDIO_DIR = os.path.dirname(SCRIPT_DIR)
VOICEOVER_TXT = os.path.join(STUDIO_DIR, "src", "voiceover_script.txt")
RAW_AUDIO_PATH = os.path.join(STUDIO_DIR, "public", "raw_voiceover.mp3")
MASTERED_WAV_PATH = os.path.join(STUDIO_DIR, "public", "voiceover.wav")
FFMPEG_BIN = r"C:\Users\atiqu\AppData\Local\Python\pythoncore-3.14-64\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"
PYTHON_BIN = r"C:\Users\atiqu\AppData\Local\Python\bin\python.exe"
TRANSCRIBE_SCRIPT = os.path.join(SCRIPT_DIR, "transcribe.py")

VOICE = "en-US-BrianMultilingualNeural"

async def generate_voice():
    print(f"=== GENERATING STUDIO-GRADE VOICEOVER VIA EDGE-TTS ({VOICE}) ===")
    
    if not os.path.exists(RAW_AUDIO_PATH):
        with open(VOICEOVER_TXT, "r", encoding="utf-8") as f:
            text = f.read()

        clean_text = text.replace("<short pause>", "... ").replace("[excited]", "").replace("[curious]", "").replace("[amazed]", "")
        print(f"Script character count: {len(clean_text)} characters (~{len(clean_text.split())} words)")
        print(f"Generating raw audio to: {RAW_AUDIO_PATH}...")

        communicate = edge_tts.Communicate(clean_text, VOICE, rate="+4%")
        await communicate.save(RAW_AUDIO_PATH)
        print("[OK] Raw Edge-TTS audio generated successfully!")
    else:
        print(f"[OK] Raw audio already exists: {RAW_AUDIO_PATH}")

    # FFmpeg Broadcast Mastering
    print("[MASTERING] Applying studio broadcast mastering chain...")
    mastering_filter = (
        "highpass=f=80,"
        "equalizer=f=120:width_type=h:width=100:g=2.5,"
        "equalizer=f=800:width_type=h:width=200:g=-1.5,"
        "equalizer=f=4500:width_type=h:width=2000:g=2.2,"
        "acompressor=threshold=-18dB:ratio=3.2:attack=8:release=60,"
        "loudnorm=I=-14:TP=-1.0:LRA=9"
    )

    cmd = [
        FFMPEG_BIN,
        "-i", RAW_AUDIO_PATH,
        "-af", mastering_filter,
        MASTERED_WAV_PATH,
        "-y"
    ]
    subprocess.run(cmd, check=True)
    print(f"[OK] Mastered radio-ready audio saved to: {MASTERED_WAV_PATH}")

    # Run Whisper for word-level sync
    print("[WHISPER] Running faster-whisper for 1:1 timestamps.json...")
    try:
        subprocess.run([PYTHON_BIN, TRANSCRIBE_SCRIPT], check=True)
        print("[OK] Word-level timestamps generated successfully!")
    except Exception as e:
        print(f"[WARN] Whisper error: {e}")

if __name__ == "__main__":
    asyncio.run(generate_voice())
