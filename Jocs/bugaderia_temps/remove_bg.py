from PIL import Image
import os

def remove_background():
    img_dir = "img"
    if not os.path.exists(img_dir):
        print("Image directory not found.")
        return

    for filename in os.listdir(img_dir):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            # Skip already processed items if they are the result (though converting jpg to png implies name change)
            # But avoid reprocessing if possible
            if filename.endswith("_transparent.png"): 
                continue

            file_path = os.path.join(img_dir, filename)
            try:
                img = Image.open(file_path)
                img = img.convert("RGBA")
                datas = img.getdata()

                newData = []
                for item in datas:
                    # Change all white (also shades of whites)
                    # to transparent
                    if item[0] > 240 and item[1] > 240 and item[2] > 240:
                        newData.append((255, 255, 255, 0))
                    else:
                        newData.append(item)

                img.putdata(newData)
                
                # Save as same name but .png
                name_without_ext = os.path.splitext(filename)[0]
                new_filename = f"{name_without_ext}.png"
                img.save(os.path.join(img_dir, new_filename), "PNG")
                print(f"Processed: {filename} -> {new_filename}")

            except Exception as e:
                print(f"Failed to process {filename}: {e}")

if __name__ == "__main__":
    remove_background()
