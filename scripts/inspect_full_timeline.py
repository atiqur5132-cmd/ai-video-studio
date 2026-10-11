import json

with open('src/timestamps.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for i, seg in enumerate(data['segments']):
    start_f = int(seg['start'] * 30)
    end_f = int(seg['end'] * 30)
    text = seg['text'].strip()
    print(f"[{start_f:5d}f - {end_f:5d}f] ({seg['start']:5.1f}s - {seg['end']:5.1f}s) Seg {i:02d}: {text}")
