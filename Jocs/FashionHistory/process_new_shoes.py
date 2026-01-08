from PIL import Image
import os
import shutil

# Map source files to target names (assuming order of creation/download)
# We have 4 files and 4 missing shoes.
mapping = [
    ("unnamed.jpg", "shoes_ren_boots.png"),      # 1. Renaissance
    ("unnamed-31.jpg", "shoes_flat.png"),         # 2. Classicism
    ("unnamed-32.jpg", "shoes_boots_black.png"),  # 3. Romantic
    ("unnamed-33.jpg", "shoes_shoes_black.png")   # 4. Modern
]

base_dir = "/Users/jmateog13/Desktop/chronOS/7.Totes_les_Epoces/Jocs/FashionHistory/img"

def remove_white_bg(img):
    img = img.convert("RGBA")
    datas = img.getdata()
    new_data = []
    for item in datas:
        # If white (or very light), make transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    return img

print("Processing images...")

for src, dest in mapping:
    src_path = os.path.join(base_dir, src)
    dest_path = os.path.join(base_dir, dest)
    
    if os.path.exists(src_path):
        print(f"Processing {src} -> {dest}...")
        try:
            img = Image.open(src_path)
            img = remove_white_bg(img)
            img.save(dest_path, "PNG")
            print(f"Saved {dest}")
            
            # Remove original
            os.remove(src_path)
        except Exception as e:
            print(f"Error processing {src}: {e}")
    else:
        print(f"Source file {src} not found.")

print("Done.")
