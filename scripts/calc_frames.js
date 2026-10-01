const fs = require('fs');
const content = fs.readFileSync('src/scenes/GeminiArgonScenes.tsx', 'utf8');
const lines = content.split('\n');

let current = 0;
let seqIdx = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const match = line.match(/<Series\.Sequence\s+durationInFrames={(\d+)}>/);
  if (match) {
    const dur = parseInt(match[1]);
    // Look ahead 5 lines to find what component is rendered
    const snippet = lines.slice(i, i + 8).join(' ');
    let type = 'unknown';
    if (snippet.includes('SplitEvidenceDossier')) type = 'SplitEvidenceDossier';
    else if (snippet.includes('EvidenceDossierView')) type = 'EvidenceDossierView';
    else if (snippet.includes('SpeedometerGauge')) type = 'SpeedometerGauge';
    else if (snippet.includes('SiliconDieSchematic')) type = 'SiliconDieSchematic';
    else if (snippet.includes('RealEvidenceVideoCanvas')) type = 'VideoCanvas';
    else if (snippet.includes('OfficialLogoBadge')) type = 'OfficialLogoBadge';

    console.log(`Seq ${seqIdx.toString().padStart(2)}: frames [${current.toString().padStart(4)} - ${(current + dur).toString().padStart(4)}] (${dur.toString().padStart(3)}f) -> ${type}`);
    current += dur;
    seqIdx++;
  }
}
console.log('Total accumulated frames:', current);
