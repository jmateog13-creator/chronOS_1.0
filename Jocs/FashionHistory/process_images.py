import os
import shutil
from PIL import Image

img_dir = '/Users/jmateog13/Desktop/chronOS/7.Totes_les_Epoces/Jocs/FashionHistory/img'

# 1. Rename remaining files
rename_map = {
    "unnamed-29.jpg": "body_leather_jacket.png",
    "unnamed-30.jpg": "head_mohawk.png"
}

print("--- Renaming specific files ---")
for src, dst in rename_map.items():
    src_path = os.path.join(img_dir, src)
    dst_path = os.path.join(img_dir, dst)
    if os.path.exists(src_path):
        print(f"Renaming {src} -> {dst}")
        shutil.move(src_path, dst_path)
    else:
        print(f"Skipping {src} (not found)")

# 2. Remove White Background from ALL PNG files in directory
print("\n--- Removing White Backgrounds ---")

def remove_white_bg(img_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Change all white (also shades of whites) to transparent
            # Threshold: 200-255
            if item[0] > 220 and item[1] > 220 and item[2] > 220:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        # Overwrite file
        img.save(img_path, "PNG")
        print(f"Processed: {os.path.basename(img_path)}")
    except Exception as e:
        print(f"Error processing {os.path.basename(img_path)}: {e}")

# Process all files that are supposed to be transparent
# We iterate over the directory again
for filename in os.listdir(img_dir):
    if filename.endswith(".png"): # Our assets are now .png (even if renamed from .jpg, shutil.move keeps them effectively as is, but we want to convert them)
        # Wait, simple rename doesn't convert JPG to PNG format interactions. 
        # PIL open will handle JPG, but we must save as PNG.
        # If I renamed .jpg to .png, PIL might complain or just handle it? 
        # Actually shutil.move just changes the name. The file header is still JPG.
        # So I need to open them, process, and save as proper PNG.
        
        file_path = os.path.join(img_dir, filename)
        remove_white_bg(file_path)

print("Background removal complete.")
