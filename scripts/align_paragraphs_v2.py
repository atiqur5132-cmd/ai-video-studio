import json
import re

with open("src/voiceover_script.txt", "r", encoding="utf-8") as f:
    text = f.read()

paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]

with open("src/timestamps.json", "r", encoding="utf-8") as f:
    ts_data = json.load(f)

segments = ts_data["segments"]
total_frames = ts_data["totalFrames"]
total_duration = ts_data["duration"]

print(f"Total paragraphs: {len(paragraphs)}")
print(f"Total segments: {len(segments)}")

def clean_words(s):
    return [re.sub(r'[^a-zA-Z0-9]', '', w.lower()) for w in s.split() if re.sub(r'[^a-zA-Z0-9]', '', w.lower())]

para_map = []
curr_seg = 0

for p_idx, p in enumerate(paragraphs):
    p_lead = clean_words(p)[:12]
    best_s = curr_seg
    best_score = -1

    # Search forward in all remaining segments
    for s_idx in range(curr_seg, len(segments)):
        s_words = clean_words(segments[s_idx]["text"])
        score = sum(1 for w in p_lead if w in s_words)
        if score > best_score and score >= 2:
            best_score = score
            best_s = s_idx
            # If we match 3+ words, that's definitely the start of this paragraph
            if score >= 3:
                break

    curr_seg = best_s
    start_sec = segments[curr_seg]["start"]
    para_map.append({
        "p_idx": p_idx + 1,
        "start_sec": start_sec,
        "start_frame": int(round(start_sec * 30)),
        "text": p[:75],
        "full_text": p
    })
    # Move forward
    curr_seg = min(curr_seg + 1, len(segments) - 1)

# Fix start of P01 to 0
para_map[0]["start_sec"] = 0.0
para_map[0]["start_frame"] = 0

# Compute duration
for i in range(len(para_map)):
    start_f = para_map[i]["start_frame"]
    end_f = para_map[i+1]["start_frame"] if i + 1 < len(para_map) else total_frames
    dur_f = max(end_f - start_f, 90)
    para_map[i]["duration_frames"] = dur_f
    para_map[i]["duration_sec"] = dur_f / 30.0
    print(f"P{para_map[i]['p_idx']:02d}: Start {start_f:5d}f ({para_map[i]['start_sec']:6.2f}s) | Dur {dur_f:5d}f ({para_map[i]['duration_sec']:5.1f}s) | {para_map[i]['text']}...")

with open("src/para_timing.json", "w", encoding="utf-8") as f:
    json.dump(para_map, f, indent=2)

print("\nSaved accurate para_timing.json successfully!")
