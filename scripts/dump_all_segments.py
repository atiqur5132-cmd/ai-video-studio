import json

with open('src/timestamps.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for s in data['segments']:
    words_summary = " ".join([w['word'] for w in s['words']])
    print(f"[{s['start']:6.2f}s - {s['end']:6.2f}s] ({int(s['start']*30):5d}-{int(s['end']*30):5d}f) #{s['id']:02d}: {words_summary}")
