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

async def generate_chunk(text, output_file):
    communicate = edge_tts.Communicate(text, VOICE, rate="+3%")
    await communicate.save(output_file)

async def generate_voice():
    print(f"=== GENERATING STUDIO-GRADE VOICEOVER VIA EDGE-TTS ({VOICE}) ===")
    
    with open(VOICEOVER_TXT, "r", encoding="utf-8") as f:
        full_text = f.read()

    # Split into clean paragraphs
    paragraphs = [p.strip() for p in full_text.split("\n\n") if p.strip()]
    print(f"Total script paragraphs: {len(paragraphs)}, Total words: ~{len(full_text.split())}")

    temp_dir = os.path.join(STUDIO_DIR, "public", "temp_chunks")
    os.makedirs(temp_dir, exist_ok=True)

    chunk_files = []
    concat_list_path = os.path.join(temp_dir, "concat_list.txt")

    for idx, p in enumerate(paragraphs):
        chunk_file = os.path.join(temp_dir, f"chunk_{idx:03d}.mp3")
        chunk_files.append(chunk_file)
        clean_chunk = p.replace("<short pause>", "... ").replace("[excited]", "").replace("[curious]", "").replace("[amazed]", "")
        print(f"  [Chunk {idx+1}/{len(paragraphs)}] Generating {len(clean_chunk.split())} words...")
        
        # Retry logic if needed
        success = False
        for attempt in range(3):
            try:
                await generate_chunk(clean_chunk, chunk_file)
                success = True
                break
            except Exception as e:
                print(f"    Retry {attempt+1} on chunk {idx}: {e}")
                await asyncio.sleep(1)
        if not success:
            raise RuntimeError(f"Failed to generate chunk {idx}")

    # Write concat list
    with open(concat_list_path, "w", encoding="utf-8") as f:
        for cf in chunk_files:
            # ffmpeg concat demuxer requires escaped forward slashes or safe paths
            safe_path = cf.replace("\\", "/")
            f.write(f"file '{safe_path}'\n")

    # Concatenate all chunks with ffmpeg
    print(f"Stitching {len(chunk_files)} audio chunks into: {RAW_AUDIO_PATH}...")
    cmd_concat = [
        FFMPEG_BIN,
        "-f", "concat",
        "-safe", "0",
        "-i", concat_list_path,
        "-c", "copy",
        RAW_AUDIO_PATH,
        "-y"
    ]
    subprocess.run(cmd_concat, check=True)
    print("[OK] All chunks stitched successfully into raw_voiceover.mp3!")

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

    cmd_wav = [
        FFMPEG_BIN,
        "-i", RAW_AUDIO_PATH,
        "-af", mastering_filter,
        MASTERED_WAV_PATH,
        "-y"
    ]
    subprocess.run(cmd_wav, check=True)
    print(f"[OK] Mastered radio-ready audio saved to: {MASTERED_WAV_PATH}")

    # Also export voiceover.mp3 for Remotion staticFile
    mastered_mp3_path = os.path.join(STUDIO_DIR, "public", "voiceover.mp3")
    cmd_mp3 = [
        FFMPEG_BIN,
        "-i", MASTERED_WAV_PATH,
        "-c:a", "libmp3lame",
        "-b:a", "192k",
        mastered_mp3_path,
        "-y"
    ]
    subprocess.run(cmd_mp3, check=True)
    print(f"[OK] Mastered MP3 saved to: {mastered_mp3_path}")

    # Run Whisper for word-level sync
    print("[WHISPER] Running faster-whisper for 1:1 timestamps.json...")
    try:
        subprocess.run([PYTHON_BIN, TRANSCRIBE_SCRIPT], check=True)
        print("[OK] Word-level timestamps generated successfully!")
    except Exception as e:
        print(f"[WARN] Whisper error: {e}")

if __name__ == "__main__":
    asyncio.run(generate_voice())
