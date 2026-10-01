const fs = require('fs');
const ts = JSON.parse(fs.readFileSync('src/timestamps.json', 'utf8'));
const totalFrames = 4957;

const segs = ts.segments.map((s, idx) => {
  const startF = Math.round(s.start * 30);
  const nextStartF = idx < ts.segments.length - 1 ? Math.round(ts.segments[idx + 1].start * 30) : totalFrames;
  const dur = nextStartF - startF;
  return {
    id: s.id,
    startF,
    nextStartF,
    dur,
    text: s.text
  };
});

let sum = 0;
segs.forEach(s => {
  console.log(`Seg ${s.id.toString().padStart(2)}: [${s.startF.toString().padStart(4)} - ${s.nextStartF.toString().padStart(4)}] dur: ${s.dur.toString().padStart(3)}f | ${s.text.substring(0, 50)}`);
  sum += s.dur;
});
console.log('Total sum:', sum);
