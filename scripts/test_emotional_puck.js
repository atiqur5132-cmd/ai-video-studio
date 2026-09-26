const fs = require('fs');
const { execSync } = require('child_process');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

async function main() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  // Adding conversational natural cues, excitement, pauses, and emphasis
  const script = `[excited] Look, Anthropic did not just drop another AI model. <short pause> They completely detonated the benchmark leaderboard! <short pause> [curious] Look closely at these numbers... <short pause> On SWE-bench verified, Claude 3.7 scores a massive 70.3%. <break time="400ms"/> [amazed] That beats OpenAI's o3-mini in both raw coding speed... and cost efficiency.`;

  console.log('Generating voice with emotion & pause tags...');
  const res = await ai.models.generateContent({
    model: 'gemini-3.8-flash-tts',
    contents: script,
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
  const rawPath = 'public/puck_emotional.wav';
  fs.writeFileSync(rawPath, Buffer.from(part.inlineData.data, 'base64'));
  console.log(`Saved raw to ${rawPath}`);

  // Convert to standard 44.1kHz PCM and mp3
  const ffmpeg = "C:\\Users\\atiqu\\AppData\\Local\\Python\\pythoncore-3.14-64\\Lib\\site-packages\\imageio_ffmpeg\\binaries\\ffmpeg-win-x86_64-v7.1.exe";
  execSync(`"${ffmpeg}" -i "${rawPath}" -af "highpass=f=80,equalizer=f=120:width_type=h:width=100:g=2.5,equalizer=f=800:width_type=h:width=200:g=-1.5,equalizer=f=4500:width_type=h:width=2000:g=2.2,acompressor=threshold=-18dB:ratio=3.2:attack=8:release=60,loudnorm=I=-14:TP=-1.0:LRA=9" -ar 44100 -ac 2 public/puck_emotional_mastered.wav -y`);
  execSync(`"${ffmpeg}" -i public/puck_emotional_mastered.wav -b:a 192k public/puck_emotional.mp3 -y`);

  console.log('Done mastering emotional Puck audio!');
}

main().catch(console.error);
