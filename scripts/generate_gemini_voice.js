const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { GoogleGenAI } = require('@google/genai');

const FFMPEG_BIN = "C:\\Users\\atiqu\\AppData\\Local\\Python\\pythoncore-3.14-64\\Lib\\site-packages\\imageio_ffmpeg\\binaries\\ffmpeg-win-x86_64-v7.1.exe";
const PYTHON_BIN = "C:\\Users\\atiqu\\AppData\\Local\\Python\\bin\\python.exe";

async function generateAudioChunk(ai, textChunk, chunkIndex) {
  console.log(`\n🎙️ Generating Audio Chunk ${chunkIndex + 1} (${textChunk.length} chars)...`);
  
  const config = {
    responseModalities: ["AUDIO"],
    speechConfig: {
      voiceConfig: {
        prebuiltVoiceConfig: {
          voiceName: "Puck"
        }
      }
    }
  };

  const modelsToTry = [
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-3.8-flash-tts'
  ];

  for (const model of modelsToTry) {
    try {
      console.log(`  -> Trying model: ${model}...`);
      const response = await ai.models.generateContent({
        model,
        contents: textChunk,
        config
      });

      const part = response?.candidates?.[0]?.content?.parts?.[0];
      if (part?.inlineData?.data) {
        console.log(`  ✅ Chunk ${chunkIndex + 1} generated successfully with ${model}`);
        return Buffer.from(part.inlineData.data, 'base64');
      }
    } catch (err) {
      console.warn(`  ⚠️ Model ${model} error: ${err.message}`);
    }
  }

  throw new Error(`Failed to generate chunk ${chunkIndex + 1} with all models.`);
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('\n❌ ERROR: GEMINI_API_KEY is not set in .env file!');
    process.exit(1);
  }

  const scriptFile = path.join(__dirname, '..', 'src', 'voiceover_script.txt');
  if (!fs.existsSync(scriptFile)) {
    console.error(`❌ Script file not found: ${scriptFile}`);
    process.exit(1);
  }

  const rawScript = fs.readFileSync(scriptFile, 'utf-8');
  // Split by double newline or natural act paragraphs
  const paragraphs = rawScript
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 20);

  console.log(`📖 Read script: ${paragraphs.length} major paragraphs / sections.`);

  const ai = new GoogleGenAI({ apiKey });
  const chunkAudioFiles = [];

  for (let i = 0; i < paragraphs.length; i++) {
    const cleanText = paragraphs[i].replace(/\s+/g, ' ');
    const audioBuf = await generateAudioChunk(ai, cleanText, i);
    const chunkPath = path.join(__dirname, '..', 'public', `chunk_${i + 1}.wav`);
    fs.writeFileSync(chunkPath, audioBuf);
    chunkAudioFiles.push(chunkPath);
  }

  console.log(`\n🧩 Concatenating ${chunkAudioFiles.length} chunks with FFmpeg...`);
  const concatListPath = path.join(__dirname, '..', 'public', 'concat_list.txt');
  const fileLines = chunkAudioFiles.map(f => `file '${f.replace(/\\/g, '/')}'`).join('\n');
  fs.writeFileSync(concatListPath, fileLines, 'utf-8');

  const rawMasterPath = path.join(__dirname, '..', 'public', 'raw_gemini_voiceover.wav');
  execSync(`"${FFMPEG_BIN}" -f concat -safe 0 -i "${concatListPath}" -c copy "${rawMasterPath}" -y`, { stdio: 'pipe' });
  console.log(`💾 Concatenated full raw voiceover to: ${rawMasterPath}`);

  // FFmpeg Studio Mastering
  const masteredPath = path.join(__dirname, '..', 'public', 'voiceover.wav');
  console.log(`🎚️ Applying broadcast EQ, vocal compressor & loudness normalization...`);
  const masteringFilter = "highpass=f=80,equalizer=f=120:width_type=h:width=100:g=2.5,equalizer=f=800:width_type=h:width=200:g=-1.5,equalizer=f=4500:width_type=h:width=2000:g=2.2,acompressor=threshold=-18dB:ratio=3.2:attack=8:release=60,silenceremove=stop_periods=-1:stop_duration=0.35:stop_threshold=-38dB,loudnorm=I=-14:TP=-1.0:LRA=9";
  
  execSync(`"${FFMPEG_BIN}" -i "${rawMasterPath}" -af "${masteringFilter}" "${masteredPath}" -y`, { stdio: 'pipe' });
  console.log(`✨ Mastered audio saved to: ${masteredPath}`);

  // Clean up temporary chunk files
  chunkAudioFiles.forEach(f => { try { fs.unlinkSync(f); } catch (e) {} });
  try { fs.unlinkSync(concatListPath); } catch (e) {}

  // Run Whisper for 1:1 word-level sync
  console.log(`\n🤖 Running faster-whisper transcription for 1:1 timestamps.json...`);
  const transcribeScript = path.join(__dirname, 'transcribe.py');
  try {
    execSync(`"${PYTHON_BIN}" "${transcribeScript}"`, { stdio: 'inherit' });
    console.log(`✅ timestamps.json generated successfully!`);
  } catch (err) {
    console.warn(`⚠️ Whisper script failed: ${err.message}`);
  }

  console.log(`\n🎉 Full 8 to 9 minute studio voiceover & word sync complete!`);
}

main().catch(err => {
  console.error('Fatal error in voice pipeline:', err);
  process.exit(1);
});
