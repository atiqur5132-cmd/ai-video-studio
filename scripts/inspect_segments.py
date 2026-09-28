import json
with open('src/timestamps.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for s in data['segments']:
    print(f"Seg {s['id']:02d}: {s['start']:6.2f}s - {s['end']:6.2f}s (f:{int(s['start']*30):5d} - {int(s['end']*30):5d}) | {s['text'][:65]}")
