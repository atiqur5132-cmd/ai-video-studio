import urllib.request
import os

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

urls = {
    "earth.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
    "black_hole.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Black_Hole_Milky_Way.jpg/1280px-Black_Hole_Milky_Way.jpg",
    "tidal_disruption.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Supermassive_black_hole_with_torn-apart_star_%28artist%27s_impression%29.jpg/1280px-Supermassive_black_hole_with_torn-apart_star_%28artist%27s_impression%29.jpg",
    "supernova.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/1024px-Crab_Nebula.jpg",
    "m87_eht.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg/1024px-Black_hole_-_Messier_87_crop_max_res.jpg"
}

dest_dir = os.path.join(os.path.dirname(__file__), "..", "public", "evidence", "space")

for name, url in urls.items():
    dest_path = os.path.join(dest_dir, name)
    try:
        print(f"Downloading {name} from {url}...")
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response, open(dest_path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"✅ Saved {dest_path} ({os.path.getsize(dest_path)} bytes)")
    except Exception as e:
        print(f"❌ Failed to download {name}: {e}")
