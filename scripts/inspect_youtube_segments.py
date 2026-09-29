import json

with open('src/timestamps.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print('Total segments:', len(data['segments']))
print('Total duration:', data['duration'], 'seconds')
print('Total frames:', data['totalFrames'])
print('\n=== ALL SEGMENTS WITH FRAME RANGES ===')
for s in data['segments']:
    start_f = int(round(s['start'] * 30))
    end_f = int(round(s['end'] * 30))
    duration_f = end_f - start_f
    print(f"[{start_f:5d} - {end_f:5d} ({duration_f:3d}f)] {s['text']}")
