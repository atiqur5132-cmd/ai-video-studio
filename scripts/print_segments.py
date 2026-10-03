import json

with open('src/timestamps.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

for i, s in enumerate(d['segments']):
    print(f"[{i}] {s['start']:6.1f}s - {s['end']:6.1f}s ({int(s['start']*30)}f): {s['text']}")
