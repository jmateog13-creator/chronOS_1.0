import os

# Order from prompts_gabinet.txt
names = [
    "m1_monjo", "m2_llaut", "m3_catedral", "m4_trobador", "m5_neumes",
    "r1_impremta", "r2_llaut", "r3_cupula", "r4_llibre_segle_or", "r5_viola",
    "b1_clavicem", "b2_compositor", "b3_arpa", "b4_rei_sol", "b5_violi",
    "c1_piano", "c2_batuta", "c3_temple", "c4_clarinet", "c5_metronom",
    "rm1_piano", "rm2_mascara", "rm3_ballarina", "rm4_valquiria", "rm5_rosa",
    "s1_saxo", "s2_guitarra", "s3_tocadiscos", "s4_sintetitzador", "s5_caos"
]

# Files provided by user (unnamed.jpg, unnamed-2.jpg, ...)
# User said "el sin numero es el moje gregroriano, el 2 es el laud medieval etc"
# Assuming:
# 1. unnamed.jpg -> names[0]
# 2. unnamed-2.jpg -> names[1]
# 3. unnamed-3.jpg -> names[2]
# ...
# 30. unnamed-30.jpg -> names[29]

directory = "/Users/jmateog13/Desktop/chronOS/7.Totes_les_Epoces/Jocs/gabinet_curiositats/img"

# Rename unnamed.jpg to index 0 manually or handle in loop?
# Usually drive downloads give: unnamed.jpg, unnamed-1.jpg... OR unnamed.jpg, unnamed(1).jpg
# But `list_dir` showed: unnamed.jpg, unnamed-2.jpg, unnamed-3.jpg ... unnamed-30.jpg
# Wait, where is unnamed-1.jpg? It's not in the list.
# List showed: unnamed.jpg, unnamed-2.jpg...
# So likely:
# unnamed.jpg = #1
# unnamed-2.jpg = #2
# ...
# unnamed-30.jpg = #30

# Let's verify mapping:
# 1 -> unnamed.jpg
# 2 -> unnamed-2.jpg
# ...
# 30 -> unnamed-30.jpg

for i in range(30):
    idx = i + 1
    if idx == 1:
        old_name = "unnamed.jpg"
    else:
        old_name = f"unnamed-{idx}.jpg"
    
    new_name = f"{names[i]}.jpg"
    
    old_path = os.path.join(directory, old_name)
    new_path = os.path.join(directory, new_name)
    
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"Renamed {old_name} to {new_name}")
    else:
        print(f"File not found: {old_name}")
