import json
import os
import sys

# Configure UTF-8 for Windows console
sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')
from faster_whisper import WhisperModel

def main():
    audio_path = os.path.join(os.path.dirname(__file__), "..", "public", "voiceover.wav")
    output_path = os.path.join(os.path.dirname(__file__), "..", "src", "timestamps.json")

    if not os.path.exists(audio_path):
        print(f"❌ Audio file not found: {audio_path}")
        sys.exit(1)

    print(f"🎙️ Transcribing {audio_path} using faster-whisper (base.en)...")
    model = WhisperModel("base.en", device="cpu", compute_type="int8")
    segments, info = model.transcribe(audio_path, word_timestamps=True)

    formatted_segments = []
    total_duration = info.duration

    for idx, seg in enumerate(segments):
        words_list = []
        if seg.words:
            for w in seg.words:
                words_list.append({
                    "word": w.word,
                    "start": round(w.start, 2),
                    "end": round(w.end, 2),
                    "probability": round(w.probability, 2)
                })

        formatted_segments.append({
            "id": idx,
            "start": round(seg.start, 2),
            "end": round(seg.end, 2),
            "text": seg.text.strip(),
            "words": words_list
        })

    fps = 30
    result_data = {
        "duration": round(total_duration, 2),
        "fps": fps,
        "totalFrames": int(round(total_duration * fps)),
        "segments": formatted_segments
    }

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(result_data, f, indent=2)

    print(f"✅ Generated {output_path} with {len(formatted_segments)} segments ({result_data['totalFrames']} frames @ {fps}fps).")

if __name__ == "__main__":
    main()
