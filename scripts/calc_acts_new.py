import json
import re

with open("src/voiceover_script.txt", "r", encoding="utf-8") as f:
    text = f.read()

paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]

with open("src/timestamps.json", "r", encoding="utf-8") as f:
    ts_data = json.load(f)

segments = ts_data["segments"]
total_frames = ts_data["totalFrames"]

print(f"Total paragraphs: {len(paragraphs)}")
print(f"Total segments: {len(segments)}")
print(f"Total frames: {total_frames}")

# Match each paragraph to segments
para_idx = 0
para_start_times = []

# Simple matching
seg_idx = 0
for i, p in enumerate(paragraphs):
    first_words = [w.lower() for w in re.findall(r'\b\w+\b', p)[:4]]
    found_time = None
    while seg_idx < len(segments):
        seg_text = segments[seg_idx]["text"].lower()
        if any(w in seg_text for w in first_words):
            found_time = segments[seg_idx]["start"]
            break
        seg_idx += 1
    if found_time is None:
        found_time = segments[seg_idx - 1]["start"] if seg_idx > 0 else 0.0
    para_start_times.append(found_time)
    print(f"P{i+1}: start={found_time:.2f}s (~{int(found_time*30)}f) | text: {p[:50]}...")

print("\n--- Summary of paragraph durations in frames ---")
for i in range(len(para_start_times)):
    start_f = int(para_start_times[i] * 30)
    end_f = int(para_start_times[i+1] * 30) if i + 1 < len(para_start_times) else total_frames
    dur_f = end_f - start_f
    print(f"P{i+1}: {dur_f} frames ({dur_f/30:.1f}s)")
