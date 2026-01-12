import os
import re

ROOT_DIR = "/Users/jmateog13/Desktop/chronOS_1.0/Jocs"
EXTENSIONS_TO_SCAN = ['.html', '.js', '.css', '.json']
IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.webp', '.png', '.gif'] 
# We include PNG/GIF to check if they exist, but we primarily want to fix broken ones.

REPORT_FILE = "/Users/jmateog13/Desktop/chronOS_1.0/informe_auditoria.txt"

def get_game_name(path):
    # Returns the name of the immediate subdirectory of Jocs
    rel = os.path.relpath(path, ROOT_DIR)
    if rel == ".": return "Jocs Root"
    return rel.split(os.sep)[0]

def audit_and_fix():
    print("🚀 STARTING COMPREHENSIVE AUDIT...")
    
    # Structure to hold report data: { "GameName": [ "Change 1", "Change 2" ] }
    game_reports = {}
    
    # We'll traverse everything, but group by game
    for root, dirs, files in os.walk(ROOT_DIR):
        # Determine current game name
        game_name = get_game_name(root)
        if game_name not in game_reports:
            game_reports[game_name] = []

        code_files = [f for f in files if any(f.lower().endswith(ext) for ext in EXTENSIONS_TO_SCAN)]
        
        for filename in code_files:
            file_path = os.path.join(root, filename)
            
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                original_content = content
                file_changes = []

                # Regex to find image strings. 
                # We specifically look for extensions .jpg, .jpeg, .webp because those are the ones we deleted/converted.
                matches = list(re.finditer(r'([a-zA-Z0-9_\-\./\\]+\.(jpg|jpeg|webp))', content, re.IGNORECASE))
                
                replacements = {}
                
                for match in matches:
                    full_match = match.group(1) # e.g. "hildegard.jpg" or "img/hildegard.jpg"
                    
                    # Prevent checking the same match multiple times in one file
                    if full_match in replacements: continue

                    # DETERMINE IF BROKEN
                    # We need to find where this file is supposed to be.
                    # Heuristics:
                    # 1. Direct relative path
                    # 2. Relative to 'img/' folder (common in these games)
                    # 3. Relative to 'images/' folder
                    
                    possible_bases = [
                        "", # direct
                        "img", 
                        "images",
                        "assets",
                        "assets/img"
                    ]
                    
                    # First, check if the ORIGINAL exists. If so, leave it alone.
                    original_exists = False
                    for base in possible_bases:
                        check_path = os.path.join(root, base, full_match)
                        if os.path.exists(check_path):
                            original_exists = True
                            break
                    
                    if original_exists:
                        # File exists, no need to change reference
                        continue
                        
                    # IF WE ARE HERE, THE FILE IS MISSING.
                    # NOW LOOK FOR PNG VERSION.
                    
                    png_name = full_match.rsplit('.', 1)[0] + ".png"
                    found_png_fix = False
                    
                    for base in possible_bases:
                        check_path_png = os.path.join(root, base, png_name)
                        if os.path.exists(check_path_png):
                            # FOUND THE PNG REPLACEMENT!
                            # Now we need to decide what to replace.
                            # The code says "hildegard.jpg", we found it at "img/hildegard.png".
                            # If the code already said "img/hildegard.jpg", we replace with "img/hildegard.png".
                            # If the code said "hildegard.jpg" (implicit img path), we replace with "hildegard.png".
                            
                            # We replace the extension in the match string.
                            replacements[full_match] = png_name
                            found_png_fix = True
                            
                            # Log detailed info for debugging if needed
                            # print(f"  MATCH: {full_match} in {filename} -> Found PNG at {check_path_png}")
                            break
                    
                    if found_png_fix:
                        pass
                    else:
                        # Log missing? User only asked for changes or "nada". 
                        # But maybe we should warn? 
                        # For now, let's stick to fixing what we can.
                        pass

                # Apply changes to content
                if replacements:
                    for old, new in replacements.items():
                        content = content.replace(old, new)
                        file_changes.append(f"Fixed in {filename}: {old} -> {new}")
                    
                    # Write file
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                
                if file_changes:
                    game_reports[game_name].extend(file_changes)

            except Exception as e:
                print(f"Error checking {file_path}: {e}")

    # GENERATE REPORT
    with open(REPORT_FILE, 'w', encoding='utf-8') as f:
        f.write("INFORME DE REPARACIÓN DE JUEGOS\n")
        f.write("=================================\n\n")
        
        sorted_games = sorted(game_reports.keys())
        for game in sorted_games:
            changes = game_reports[game]
            
            # Skip "Jocs Root" if empty or irrelevant (usually just .DS_Store stuff)
            if game == "Jocs Root" and not changes: continue
            
            f.write(f"🎮 {game}\n")
            if changes:
                for change in changes:
                    f.write(f"   ✅ {change}\n")
            else:
                f.write("   (Nada)\n")
            f.write("\n")
            
    print(f"✅ DONE. Report saved to {REPORT_FILE}")
    print("Some changes were made." if any(game_reports.values()) else "No changes made.")

if __name__ == "__main__":
    audit_and_fix()
