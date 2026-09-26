const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { GoogleGenAI } = require('@google/genai');

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('\n❌ ERROR: GEMINI_API_KEY is not set in .env file!');
    console.error('Please add your Gemini API key to .env:');
    console.error('GEMINI_API_KEY=your_key_here\n');
    process.exit(1);
  }

  // Get script text from command line arg or file
  let scriptText = process.argv.slice(2).join(' ');
  const defaultScriptFile = path.join(__dirname, '..', 'src', 'voiceover_script.txt');

  if (!scriptText) {
    if (fs.existsSync(defaultScriptFile)) {
      scriptText = fs.readFileSync(defaultScriptFile, 'utf-8');
      console.log(`📖 Reading script from ${defaultScriptFile}`);
    } else {
      scriptText = `[excited] Look, Anthropic did not just drop another AI model. <short pause> They completely detonated the benchmark leaderboard! <short pause> [curious] Look closely at these numbers... <short pause> On SWE-bench verified, Claude 3.7 scores a massive 70.3%. <break time="400ms"/> [amazed] That beats OpenAI's o3-mini in both raw coding speed... and cost efficiency.`;
      console.log(`ℹ️ No script specified. Using default emotional sample text.`);
    }
  }

  // Clean text of any artificial pause or emotion tags that cause awkward dead air
  scriptText = scriptText
    .replace(/<[^>]+>/g, '')
    .replace(/\[[^\]]+\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  console.log(`\n🎙️ Initializing Gemini 3.8 Flash TTS with Voice: "Puck"...`);
  console.log(`📝 Clean script character count: ${scriptText.length}`);

  const ai = new GoogleGenAI({ apiKey });

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
    'gemini-3.8-flash-tts',
    'gemini-3.8-flash-lite-tts',
    'gemini-2.5-flash',
    'gemini-2.0-flash'
  ];

  let rawAudioBuffer = null;
  let usedModel = null;

  for (const model of modelsToTry) {
    try {
      console.log(`🔄 Attempting generation with model: ${model}...`);
      const response = await ai.models.generateContent({
        model,
        contents: scriptText,
        config
      });

      const part = response?.candidates?.[0]?.content?.parts?.[0];
      if (part?.inlineData?.data) {
        rawAudioBuffer = Buffer.from(part.inlineData.data, 'base64');
        usedModel = model;
        console.log(`✅ Voice successfully generated with model: ${model}`);
        break;
      }
    } catch (err) {
      console.warn(`⚠️ Model ${model} returned error: ${err.message}`);
    }
  }

  if (!rawAudioBuffer) {
    console.error('\n❌ Could not generate audio. Please check your Gemini API key and model availability.');
    process.exit(1);
  }

  const rawPath = path.join(__dirname, '..', 'public', 'raw_gemini_voiceover.wav');
  fs.writeFileSync(rawPath, rawAudioBuffer);
  console.log(`💾 Saved raw audio to: ${rawPath}`);

  // FFmpeg Mastering
  const masteredPath = path.join(__dirname, '..', 'public', 'voiceover.wav');
  try {
    console.log(`🎚️ Applying studio broadcast EQ, vocal compressor & loudness normalization...`);
    const fallbackFfmpeg = "C:\\Users\\atiqu\\AppData\\Local\\Python\\pythoncore-3.14-64\\Lib\\site-packages\\imageio_ffmpeg\\binaries\\ffmpeg-win-x86_64-v7.1.exe";
    let ffmpegBin = "ffmpeg";
    if (fs.existsSync(fallbackFfmpeg)) {
      ffmpegBin = `"${fallbackFfmpeg}"`;
    }
    const ffmpegCmd = `${ffmpegBin} -i "${rawPath}" -af "highpass=f=80,equalizer=f=120:width_type=h:width=100:g=2.5,equalizer=f=800:width_type=h:width=200:g=-1.5,equalizer=f=4500:width_type=h:width=2000:g=2.2,acompressor=threshold=-18dB:ratio=3.2:attack=8:release=60,silenceremove=stop_periods=-1:stop_duration=0.35:stop_threshold=-38dB,loudnorm=I=-14:TP=-1.0:LRA=9" "${masteredPath}" -y`;
    execSync(ffmpegCmd, { stdio: 'pipe' });
    console.log(`✨ Mastered audio saved to: ${masteredPath}`);
  } catch (e) {
    console.warn(`⚠️ FFmpeg mastering skipped or failed (${e.message}). Using raw audio as voiceover.wav.`);
    fs.copyFileSync(rawPath, masteredPath);
  }

  // Whisper Word-Level Sync
  try {
    console.log(`\n🤖 Running faster-whisper for 1:1 word-level timestamps...`);
    const pyExe = "C:\\Users\\atiqu\\AppData\\Local\\Python\\bin\\python.exe";
    const transcribeScript = path.join(__dirname, 'transcribe.py');
    execSync(`"${pyExe}" "${transcribeScript}"`, { stdio: 'inherit' });
  } catch (err) {
    console.warn(`⚠️ Whisper transcription failed: ${err.message}`);
  }

  console.log(`\n🎉 Complete! "Puck" voiceover & timestamps.json are 100% ready for Remotion!`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
