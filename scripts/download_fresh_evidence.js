const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const FFMPEG = "C:\\Users\\atiqu\\AppData\\Local\\Python\\pythoncore-3.14-64\\Lib\\site-packages\\imageio_ffmpeg\\binaries\\ffmpeg-win-x86_64-v7.1.exe";

const VIDEOS_TO_DOWNLOAD = [
  {
    name: 'sonnet55_terminal_bench_vladic.mp4',
    url: 'https://video.twimg.com/amplify_video/2104637604381507584/vid/avc1/1920x1080/mmFPBA6ifkwucG_3.mp4?tag=29',
    destDir: path.join(__dirname, '..', 'public', 'evidence', 'sonnet55')
  },
  {
    name: 'sonnet55_claudecode_agent_dan.mp4',
    url: 'https://video.twimg.com/amplify_video/2104653215379668992/vid/avc1/2208x1774/GnUnXLKCKAqiOndm.mp4?tag=29',
    destDir: path.join(__dirname, '..', 'public', 'evidence', 'sonnet55')
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log("=== DOWNLOADING FRESH VIDEO EVIDENCE FOR SONNET 5.5 ===");
  for (const item of VIDEOS_TO_DOWNLOAD) {
    if (!fs.existsSync(item.destDir)) fs.mkdirSync(item.destDir, { recursive: true });
    const rawDest = path.join(item.destDir, 'raw_' + item.name);
    const finalDest = path.join(item.destDir, item.name);
    
    console.log(`Downloading ${item.name}...`);
    await downloadFile(item.url, rawDest);
    console.log(`[OK] Downloaded raw file: ${(fs.statSync(rawDest).size / 1024 / 1024).toFixed(2)} MB`);
    
    console.log(`Re-encoding with +faststart for Remotion: ${item.name}...`);
    const cmd = `"${FFMPEG}" -i "${rawDest}" -c:v libx264 -pix_fmt yuv420p -movflags +faststart "${finalDest}" -y`;
    execSync(cmd, { stdio: 'pipe' });
    fs.unlinkSync(rawDest);
    console.log(`[OK] Ready: ${finalDest} (${(fs.statSync(finalDest).size / 1024 / 1024).toFixed(2)} MB)\n`);
  }
}

main().catch(console.error);
