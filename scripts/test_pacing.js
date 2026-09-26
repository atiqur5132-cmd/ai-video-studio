const fs = require('fs');
const { execSync } = require('child_process');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

async function main() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  // Natural, fast-paced tech news delivery with directive
  const content = `Read this in a rapid, energetic tech news style with continuous momentum, seamless sentence transitions, and zero awkward pauses:

On September 17, 2026, Anthropic published an internal measurement index that sent an absolute shockwave through Silicon Valley. In February, Claude led less than 1% of internal AI research. By August, that number exploded to 26%. And today, over 90% of all engineering inside Anthropic is co-piloted or led by AI. What you are witnessing is not just another productivity boost. This is the quiet dawn of Recursive Self-Improvement, where the primary creator of the next frontier model is no longer a human engineer, but the previous model itself.`;

  console.log('Generating fast-paced natural audio...');
  const res = await ai.models.generateContent({
    model: 'gemini-3.8-flash-tts',
    contents: content,
    config: {
      responseModalities: ['AUDIO'],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: 'Puck' }
        }
      }
    }
  });

  const part = res.candidates[0].content.parts[0];
  const rawPath = 'public/test_fast_puck.wav';
  fs.writeFileSync(rawPath, Buffer.from(part.inlineData.data, 'base64'));

  const ffmpeg = "C:\\Users\\atiqu\\AppData\\Local\\Python\\pythoncore-3.14-64\\Lib\\site-packages\\imageio_ffmpeg\\binaries\\ffmpeg-win-x86_64-v7.1.exe";
  execSync(`"${ffmpeg}" -i "${rawPath}" -b:a 192k public/test_fast_puck.mp3 -y`);

  console.log('Done generating test_fast_puck.mp3!');
}

main().catch(console.error);
