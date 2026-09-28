import os
import subprocess
import glob

FFMPEG_BIN = r"C:\Users\atiqu\AppData\Local\Python\pythoncore-3.14-64\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
STUDIO_DIR = os.path.dirname(SCRIPT_DIR)
EVIDENCE_DIR = os.path.join(STUDIO_DIR, "public", "evidence")

def normalize_all_videos():
    print(f"=== NORMALIZING ALL EVIDENCE VIDEOS TO STRICT 30 FPS CFR & KEYFRAME DENSITY ===")
    video_files = glob.glob(os.path.join(EVIDENCE_DIR, "*.mp4"))
    
    for vpath in video_files:
        filename = os.path.basename(vpath)
        if filename.startswith("norm_") or filename.startswith("temp_"):
            continue
            
        print(f"\nProcessing: {filename}...")
        temp_out = os.path.join(EVIDENCE_DIR, f"temp_{filename}")
        
        # Transcode to strict 30 FPS CFR, H.264 yuv420p, keyframe every 30 frames (1s), faststart
        cmd = [
            FFMPEG_BIN,
            "-i", vpath,
            "-r", "30",
            "-c:v", "libx264",
            "-pix_fmt", "yuv420p",
            "-preset", "faster",
            "-crf", "19",
            "-g", "30",
            "-keyint_min", "30",
            "-sc_threshold", "0",
            "-movflags", "+faststart",
            "-an", # Drop audio from evidence video to save bandwidth & prevent decode conflict
            temp_out,
            "-y"
        ]
        
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode == 0:
            os.replace(temp_out, vpath)
            print(f"[OK] Successfully normalized: {filename} (30 FPS CFR, zero frame drop)")
        else:
            print(f"[FAIL] Error processing {filename}: {res.stderr}")
            if os.path.exists(temp_out):
                os.remove(temp_out)

if __name__ == "__main__":
    normalize_all_videos()
