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
print(f"Total audio duration: {ts_data['duration']:.2f}s ({total_frames} frames)")

# We match each paragraph sequentially
para_map = []
curr_seg_idx = 0

for p_idx, p in enumerate(paragraphs):
    # Take first 5 words of paragraph
    p_words = [re.sub(r'[^a-zA-Z0-9]', '', w.lower()) for w in p.split()[:6] if re.sub(r'[^a-zA-Z0-9]', '', w.lower())]
    best_match_seg = curr_seg_idx
    best_score = -1

    # Search forward in segments
    for s_idx in range(curr_seg_idx, min(curr_seg_idx + 12, len(segments))):
        s_text = segments[s_idx]["text"].lower()
        score = sum(1 for w in p_words if w in s_text)
        if score > best_score and score >= 2:
            best_score = score
            best_match_seg = s_idx
            break

    curr_seg_idx = best_match_seg
    start_sec = segments[curr_seg_idx]["start"]
    para_map.append({
        "p_idx": p_idx + 1,
        "start_sec": start_sec,
        "start_frame": int(start_sec * 30),
        "text": p[:60]
    })
    # Advance at least 1 segment
    curr_seg_idx = min(curr_seg_idx + 2, len(segments) - 1)

# Compute durations
for i in range(len(para_map)):
    start_f = para_map[i]["start_frame"]
    end_f = para_map[i+1]["start_frame"] if i + 1 < len(para_map) else total_frames
    dur_f = end_f - start_f
    para_map[i]["duration_frames"] = dur_f
    para_map[i]["duration_sec"] = dur_f / 30.0
    print(f"P{para_map[i]['p_idx']:02d}: Start {start_f:5d}f ({para_map[i]['start_sec']:6.2f}s) | Dur {dur_f:5d}f ({para_map[i]['duration_sec']:5.1f}s) | {para_map[i]['text']}...")

with open("src/para_timing.json", "w", encoding="utf-8") as f:
    json.dump(para_map, f, indent=2)
