import os
import subprocess
import glob

FFMPEG_BIN = r"C:\Users\atiqu\AppData\Local\Python\pythoncore-3.14-64\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"
VIDEOS_DIR = r"C:\Users\atiqu\.gemini\antigravity\scratch\ai-video-studio\public\evidence\gemini4_argon\videos"

def normalize():
    print("=== NORMALIZING GEMINI 4 ARGON VIDEOS TO STRICT 30 FPS CFR & FASTSTART ===")
    raw_files = glob.glob(os.path.join(VIDEOS_DIR, "*_raw.mp4"))
    
    for rpath in raw_files:
        basename = os.path.basename(rpath).replace("_raw.mp4", ".mp4")
        outpath = os.path.join(VIDEOS_DIR, basename)
        print(f"\nProcessing: {basename}...")
        
        cmd = [
            FFMPEG_BIN,
            "-i", rpath,
            "-r", "30",
            "-c:v", "libx264",
            "-pix_fmt", "yuv420p",
            "-preset", "faster",
            "-crf", "19",
            "-g", "30",
            "-keyint_min", "30",
            "-sc_threshold", "0",
            "-movflags", "+faststart",
            "-an",
            outpath,
            "-y"
        ]
        
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode == 0:
            print(f"[OK] Successfully normalized: {basename} (100% 30 FPS CFR, faststart header)")
        else:
            print(f"[FAIL] Error processing {basename}: {res.stderr}")

if __name__ == "__main__":
    normalize()
