import math
from PIL import Image, ImageDraw

def create_globe_icon(path):
    # 512x512 crisp vector-style globe
    size = (512, 512)
    im = Image.new('RGBA', size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(im)
    
    cx, cy, r = 256, 256, 200
    color = (59, 130, 246, 255) # Blue #3b82f6
    w = 20
    
    # Outer circle
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=color, width=w)
    
    # Equator line
    draw.line([cx - r, cy, cx + r, cy], fill=color, width=w)
    
    # Latitude lines
    draw.arc([cx - r * 0.9, cy - 130, cx + r * 0.9, cy + 70], start=200, end=340, fill=color, width=w)
    draw.arc([cx - r * 0.9, cy - 70, cx + r * 0.9, cy + 130], start=20, end=160, fill=color, width=w)
    
    # Longitude ellipse
    draw.ellipse([cx - 100, cy - r, cx + 100, cy + r], outline=color, width=w)
    draw.line([cx, cy - r, cx, cy + r], fill=color, width=w)
    
    im.save(path)
    print(f"Saved {path}")

def create_federal_icon(path):
    # 512x512 government capitol / pillars
    size = (512, 512)
    im = Image.new('RGBA', size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(im)
    
    color = (239, 68, 68, 255) # Crimson / Red #ef4444
    w = 20
    
    # Pediment (Triangle Roof)
    draw.polygon([(256, 70), (70, 190), (442, 190)], fill=color)
    
    # Entablature
    draw.rectangle([60, 190, 452, 220], fill=color)
    
    # 4 Classical Pillars
    pillars_x = [85, 180, 280, 375]
    for px in pillars_x:
        draw.rectangle([px, 220, px + 50, 390], fill=color)
        
    # Base / Steps
    draw.rectangle([50, 390, 462, 420], fill=color)
    draw.rectangle([30, 420, 482, 450], fill=color)
    
    im.save(path)
    print(f"Saved {path}")

def create_enterprise_icon(path):
    # 512x512 corporate office tower
    size = (512, 512)
    im = Image.new('RGBA', size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(im)
    
    color = (245, 158, 11, 255) # Amber #f59e0b
    
    # Main tower
    draw.rectangle([140, 100, 372, 460], outline=color, width=20)
    
    # Windows grid
    for y in range(140, 420, 50):
        for x in [180, 240, 300]:
            draw.rectangle([x, y, x + 32, y + 28], fill=color)
            
    # Antenna
    draw.line([256, 100, 256, 40], fill=color, width=16)
    draw.ellipse([244, 30, 268, 54], fill=color)
    
    im.save(path)
    print(f"Saved {path}")

create_globe_icon('public/logos/internet_globe.png')
create_federal_icon('public/logos/federal_regulators.png')
create_enterprise_icon('public/logos/enterprise_corp.png')
