import json

with open('src/timestamps.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

lines = []
for i, seg in enumerate(data['segments']):
    lines.append(f"{i} [{seg['start']:.1f}s - {seg['end']:.1f}s]: {seg['text']}")

with open('temp_all_segs.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print("Dumped", len(lines), "segments to temp_all_segs.txt")
