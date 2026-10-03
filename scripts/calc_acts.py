import json

with open('src/timestamps.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total segments: {len(data['segments'])}")
print(f"Total frames: {data['totalFrames']}")

with open('src/voiceover_script.txt', 'r', encoding='utf-8') as f:
    paras = [p.strip() for p in f.read().split('\n\n') if p.strip()]

print(f"Total paragraphs in script: {len(paras)}")

# Match each paragraph first 5 words against segments
p_idx = 0
for s_idx, s in enumerate(data['segments']):
    if p_idx < len(paras):
        p_start_words = " ".join(paras[p_idx].lower().split()[:4])
        s_words = s['text'].lower()
        # check partial match
        first_word = paras[p_idx].lower().split()[0].replace(',', '').replace('.', '').replace('!', '')
        if first_word in s_words:
            print(f"P{p_idx+1:02d} | Frame {int(s['start']*30):5d} ({s['start']:6.1f}s) | {paras[p_idx][:60]}...")
            p_idx += 1
