import json
import os
import sys

# Configure UTF-8 for Windows console
sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

# Ensure ffmpeg is found in PATH
venv_scripts = r"C:\Users\atiqu\.gemini\antigravity\scratch\transcribe_project\.venv\Scripts"
if venv_scripts not in os.environ.get("PATH", ""):
    os.environ["PATH"] = venv_scripts + os.pathsep + os.environ.get("PATH", "")

import whisper

def main():
    audio_path = os.path.join(os.path.dirname(__file__), "..", "public", "blackhole.wav")
    output_path = os.path.join(os.path.dirname(__file__), "..", "src", "timestamps.json")

    if not os.path.exists(audio_path):
        print(f"❌ Audio file not found: {audio_path}")
        sys.exit(1)

    print(f"🎙️ Transcribing {audio_path} using whisper ('base' multilingual)...")
    model = whisper.load_model("base")
    # Transcribe with word timestamps, without forcing language so it auto-detects
    result = model.transcribe(audio_path, word_timestamps=True)

    detected_lang = result.get("language", "unknown")
    print(f"🌐 Detected language: {detected_lang}")
    print(f"📝 Full text:\n{result.get('text', '')}\n")

    formatted_segments = []
    total_duration = 0

    for idx, seg in enumerate(result.get("segments", [])):
        words_list = []
        if "words" in seg and seg["words"]:
            for w in seg["words"]:
                words_list.append({
                    "word": w.get("word", ""),
                    "start": round(w.get("start", 0), 2),
                    "end": round(w.get("end", 0), 2),
                    "probability": round(w.get("probability", 1.0), 2)
                })
        
        seg_end = round(seg.get("end", 0), 2)
        if seg_end > total_duration:
            total_duration = seg_end

        formatted_segments.append({
            "id": idx,
            "start": round(seg.get("start", 0), 2),
            "end": seg_end,
            "text": seg.get("text", "").strip(),
            "words": words_list
        })

    fps = 30
    result_data = {
        "duration": round(total_duration, 2),
        "fps": fps,
        "totalFrames": int(round(total_duration * fps)),
        "language": detected_lang,
        "full_text": result.get("text", "").strip(),
        "segments": formatted_segments
    }

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(result_data, f, indent=2, ensure_ascii=False)

    print(f"✅ Generated {output_path} with {len(formatted_segments)} segments ({result_data['totalFrames']} frames @ {fps}fps, {total_duration}s).")

if __name__ == "__main__":
    main()
