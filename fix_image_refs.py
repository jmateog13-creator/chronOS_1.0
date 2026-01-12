import os
import re

# CONFIGURATION
ROOT_DIR = "/Users/jmateog13/Desktop/chronOS_1.0/Jocs"
EXTENSIONS_TO_SCAN = ['.html', '.js', '.css', '.json']
IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.webp'] # We want to replace these with .png if they don't exist
TARGET_EXTENSION = ".png"

def fix_references():
    print(f"🍏 STARTING AUDIT IN: {ROOT_DIR}")
    print("==================================================")
    
    total_files_scanned = 0
    total_fixes = 0
    files_with_changes = 0

    # Walk through all directories
    for root, dirs, files in os.walk(ROOT_DIR):
        # Filter files we care about (code files)
        code_files = [f for f in files if any(f.lower().endswith(ext) for ext in EXTENSIONS_TO_SCAN)]
        
        for filename in code_files:
            file_path = os.path.join(root, filename)
            total_files_scanned += 1
            
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                original_content = content
                
                # Regex to find potential image paths/filenames
                # Matches strings ending in extensions, allowing for paths / and _ and -
                # We interpret groups to handle quotes if possible, but basic catch-all is safer for loose JS
                # Regex explanation:
                # (?<=["'(/]) : Lookbehind for a quote, parenthesis or slash (start of path)
                # [\w\-\./]+ : The path itself (alphanumeric, -, ., /)
                # \.(jpg|jpeg|webp) : The extension
                # (?=["')\s]) : Lookahead for quote, paren, or whitespace
                
                # Simplified regex to catch most filenames:
                # We specifically look for "something.jpg" inside string delimiters or common patterns
                matches = re.finditer(r'([\w\-\./\\]+\.(jpg|jpeg|webp))', content, re.IGNORECASE)
                
                replacements = {}
                
                for match in matches:
                    full_match = match.group(1)
                    old_cursor_ext = match.group(2)
                    
                    # 1. Resolve the path
                    # Case A: Absolute path (starts with /) -> relative to project root? 
                    # Usually in web projects / refers to root, but local file system might differ.
                    # We will assume relative to THE FILE being scanned if no slash, 
                    # or try to guess.
                    
                    possible_paths = []
                    
                    # Option 1: Relative to current file
                    possible_paths.append(os.path.join(root, full_match))
                    
                    # Option 2: If it looks relative (img/foo.jpg), join it
                    # (Already covered by Option 1 if full_match is 'img/foo.jpg')
                    
                    found_broken = False
                    found_fix = None
                    
                    for p in possible_paths:
                        # Check if OLD file exists
                        if os.path.exists(p):
                            # It exists, so NO FIX needed for this specific path interpretation
                            continue
                        
                        # OLD file is missing. Check if NEW (.png) exists
                        base_name = os.path.splitext(p)[0]
                        new_path = base_name + TARGET_EXTENSION
                        
                        if os.path.exists(new_path):
                            # FOUND A FIX!
                            # The broken link 'p' corresponds to existing 'new_path'
                            found_fix = full_match.rsplit('.', 1)[0] + TARGET_EXTENSION
                            found_broken = True
                            break
                    
                    if found_broken and found_fix:
                        # We found that the JPG is missing but PNG is there.
                        # Schedule replacement
                         replacements[full_match] = found_fix

                # Apply replacements
                if replacements:
                    print(f"🔧 Fixing {filename} ({len(replacements)} changes):")
                    for old, new in replacements.items():
                        # Use simple replace. Warning: vague matches might stick, but with paths includes it's safer
                        content = content.replace(old, new)
                        print(f"   - {old}  ->  {new}")
                    
                    # Save file
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    
                    total_fixes += len(replacements)
                    files_with_changes += 1

            except Exception as e:
                print(f"❌ Error reading {filename}: {e}")

    print("==================================================")
    print(f"AUDIT COMPLETE.")
    print(f"Files Scanned: {total_files_scanned}")
    print(f"Files Modified: {files_with_changes}")
    print(f"Total References Fixed: {total_fixes}")

if __name__ == "__main__":
    fix_references()
