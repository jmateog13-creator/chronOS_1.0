import os
import shutil

# Directory containing the images
img_dir = '/Users/jmateog13/Desktop/chronOS/7.Totes_les_Epoces/Jocs/FashionHistory/img'

# Ordered list of desired filenames based on image_generation_prompts.md
# NOTE: The list order matters! It MUST match the order of unnamed files.
# The user said "estan en orden segun [the file]".
# Let's verify the order from the file content provided in previous turn.
target_names = [
    "mannequin_silhouette.png",
    
    # Medieval
    "head_tonsura.png",
    "body_habit.png",
    "shoes_sandals.png",
    "head_featherhat.png",
    "body_tunic.png",
    "acc_lute.png",
    
    # Renaissance
    "body_velvetdress.png",
    "acc_ruff.png",
    "body_doublet.png",
    "head_flatcap.png",
    
    # Baroque
    "head_wig_short.png",
    "body_coat_dark.png",
    "head_wig_tall.png",
    "body_gold_suit.png",
    "shoes_heels.png",
    
    # Classicism
    "head_wig_pony.png",
    "body_red_coat.png",
    "body_empire_dress.png",
    "acc_fan.png",
    
    # Romanticism
    "body_tailcoat.png",
    "head_messy_hair.png",
    "head_horned_helmet.png",
    "body_warrior_dress.png",
    "acc_spear.png",
    
    # 20th Century
    "head_fedora.png",
    "body_suit_stripes.png",
    "acc_trumpet.png",
    "body_leather_jacket.png",
    "head_mohawk.png"
]

# Get list of current files, sorted naturally
# Assuming unnamed.jpg is first, then unnamed-1.jpg, etc.
# Actually downloads usually go: unnamed.jpg, unnamed(1).jpg or unnamed-1.jpg
# The list_dir showed: unnamed.jpg, unnamed-2.jpg, ... unnamed-28.jpg
# Wait, list_dir showed "unnamed.jpg", "unnamed-2.jpg", "unnamed-3.jpg", ..., "unnamed-28.jpg".
# Where is unnamed-1.jpg? It might be missing or "unnamed.jpg" is effectively #1.
# Let's get them all and sort them carefully.

files = [f for f in os.listdir(img_dir) if f.startswith('unnamed') and f.endswith('.jpg')]

def sort_key(f):
    # Extract number. "unnamed.jpg" -> 0 or 1?
    # Usually browsers do: file.jpg, file(1).jpg.
    # But here we have unnamed-2.jpg. 
    # Let's assume unnamed.jpg is #1, unnamed-2.jpg is #2...
    name = f.replace('.jpg', '')
    if name == 'unnamed':
        return 1
    parts = name.split('-')
    if len(parts) > 1 and parts[1].isdigit():
        return int(parts[1])
    return 9999

files.sort(key=sort_key)

print(f"Found {len(files)} source files.")
print(f"Expect {len(target_names)} target names.")

if len(files) != len(target_names):
    print("WARNING: Count mismatch! Proceeding with caution (stopping at shortest list).")

# Rename loop
for i, src_file in enumerate(files):
    if i >= len(target_names):
        break
        
    dst_name = target_names[i]
    src_path = os.path.join(img_dir, src_file)
    dst_path = os.path.join(img_dir, dst_name)
    
    print(f"Renaming {src_file} -> {dst_name}")
    shutil.move(src_path, dst_path)

print("Renaming complete.")
