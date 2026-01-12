import os
from rembg import remove
from PIL import Image
from tqdm import tqdm

# ==========================================
# ⚙️ TUS CARPETAS DEL MAC (CONFIGURACIÓN)
# ==========================================
# OPCIÓN A: Escribe aquí las carpetas exactas (como antes)
# ==========================================
# ⚙️ TUS CARPETAS DEL MAC (CONFIGURACIÓN)
# ==========================================
# OPCIÓN A: Escribe aquí las carpetas exactas (como antes)
FOLDERS_TO_PROCESS = [
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/TallerLuthier",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/RapBattle/img/beethoven.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/PentagramaRunner/img/sobreroromantico.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/PentagramaRunner/img/tempesa.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/PentagramaRunner/img/templeclasic.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/MascaraAnima/img/monodia-removebg-preview.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/history_dates/img/barroccontent.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/history_dates/img/barrocenfadat.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/history_dates/img/barrocneutral.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/history_dates/img/cormal.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/history_dates/img/mitjanaenfadat.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/history_dates/img/renaixementenfadat.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/EscanerMusical/img/concepto3.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/EscanerMusical/img/concepto2.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/DNI/img",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/cuina_fantasma/img/jazzjam-removebg-preview.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/Ascens_Olimp/img/poseidon.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/Ascens_Olimp/img/zeus.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/Ascens_Olimp/img/apollo.png",
    "/Users/jmateog13/Desktop/chronOS_1.0/Jocs/Ascens_Olimp/img/dionisio.png",
]

# OPCIÓN B: (NUEVO) Búsqueda Automática
# Si pones una carpeta aquí, buscaré dentro todas las subcarpetas que empiecen por lo que digas.
# Ejemplo: Busca en "Jocs" todas las carpetas que empiecen por "a"
AUTO_SEARCH_DIR = ""  # "/Users/jmateog13/Desktop/chronOS_1.0/Jocs"  # DESACTIVADO
FILTER_STARTS_WITH = "a"                                       # "a", "b", "Super", etc. (Vacío "" = todas)

# ==========================================
# 🚀 EL MOTOR (NO TOCAR NADA DE AQUÍ ABAJO)
# ==========================================
def process_images():
    print("\n🍏 INICIANDO PROTOCOLO DE LIMPIEZA PARA MAC...")
    
    files_to_process = []
    skipped_count = 0

    # 0. AUTO-DESCUBRIMIENTO DE CARPETAS
    if AUTO_SEARCH_DIR and os.path.exists(AUTO_SEARCH_DIR):
        print(f"🔎 Buscando carpetas en '{AUTO_SEARCH_DIR}' que empiecen por '{FILTER_STARTS_WITH}'...")
        found_folders = 0
        
        try:
            # Listamos las carpetas en la raíz
            for item in os.listdir(AUTO_SEARCH_DIR):
                item_path = os.path.join(AUTO_SEARCH_DIR, item)
                
                if os.path.isdir(item_path):
                    # Comprobamos si empieza por el filtro (ignorando mayúsculas/minúsculas)
                    if item.lower().startswith(FILTER_STARTS_WITH.lower()):
                        FOLDERS_TO_PROCESS.append(item_path)
                        found_folders += 1
                        # print(f"   + Añadida: {item}") # Descomentar para ver lista
            
            print(f"   ✅ Se han añadido {found_folders} carpetas automáticamete.")
            
        except Exception as e:
            print(f"   ❌ Error leyendo la carpeta madre: {e}")

    # 1. ESCÁNER: Buscamos imágenes en tus carpetas (RECURSIVO)
    print("📂 Escaneando directorios...", end="") if len(FOLDERS_TO_PROCESS) > 5 else print("📂 Escaneando directorios...")
    
    # Eliminar duplicados por si acaso
    unique_folders = list(set(FOLDERS_TO_PROCESS))
    
    # Estructura para el informe: { "RutaCarpeta": ["img1.png", "img2.png"] }
    report_data = {folder: [] for folder in unique_folders} 
    
    for item in unique_folders:
        if not os.path.exists(item):
            if len(unique_folders) < 10: 
                print(f"\n⚠️ AVISO: No encuentro: {item}")
            continue
            
        # CASO 1: ES UN ARCHIVO SUELTO
        if os.path.isfile(item):
            folder = os.path.dirname(item)
            filename = os.path.basename(item)
            
            # Asegurar entrada en report
            if folder not in report_data:
                report_data[folder] = []
                
            files_to_process.append((folder, filename))
            continue

        # CASO 2: ES UNA CARPETA (recursivo)
        folder = item
        for root, dirs, files in os.walk(folder):

            # Ignoramos carpetas ocultas
            dirs[:] = [d for d in dirs if not d.startswith('.')]
            
            # Si estamos en una subcarpeta, nos aseguramos de que tenga entrada en el reporte
            # (Opcional: Si prefieres agrupar todo bajo la carpeta principal del juego, habría que cambiar la lógica.
            #  Aquí reportaré EXACTAMENTE en qué subcarpeta se han creado cosas)
            if root not in report_data:
                report_data[root] = []

            for filename in files:
                if filename.startswith("._"): continue 
                
                # FILTRO: Si es fondo, lo ignoramos
                lower_name = filename.lower()
                # AÑADIDO: 'bg', 'inf', 'fonod' para evitar borrar assets de interfaz o fondos mal nombrados
                if any(keyword in lower_name for keyword in ['fons', 'fondo', 'background', 'bg', 'inf', 'fonod']):
                    continue
                
                if lower_name.endswith(('.png', '.jpg', '.jpeg', '.webp')):
                    files_to_process.append((root, filename))

    total_files = len(files_to_process)
    
    if total_files == 0:
        print("❌ No he encontrado ninguna imagen nueva (que no sea fondo).")
    else:
        print(f"✅ He detectado {total_files} imágenes para procesar. Empiezo a trabajar...\n")

    # 2. PROCESADO: Quitamos el fondo una a una
    if total_files > 0:
        for folder, filename in tqdm(files_to_process, desc="Limpiando", unit="img"):
            input_path = os.path.join(folder, filename)
            
            name_without_ext = os.path.splitext(filename)[0]
            output_filename = f"{name_without_ext}.png"
            output_path = os.path.join(folder, output_filename)

            try:
                # Leemos la imagen original
                with open(input_path, 'rb') as i:
                    input_data = i.read()
                    
                # La IA quita el fondo
                output_data = remove(input_data)

                # Guardamos la versión transparente
                with open(output_path, 'wb') as o:
                    o.write(output_data)
                    
                # Registrar en el informe
                if folder in report_data:
                    report_data[folder].append(output_filename)
                else:
                    report_data[folder] = [output_filename] # Por si acaso

                # BORRAR LA ANTIGUA SOLO SI EL PROCESO FUE BIEN
                if input_path != output_path:
                    os.remove(input_path)

            except Exception as e:
                print(f"\n❌ Error con {filename}: {e}")

    # 3. GENERACIÓN DE INFORME
    print("\n📝 Generando informe de limpieza...")
    report_path = os.path.join(os.path.dirname(__file__), "resumen_limpieza.txt")
    
    total_imgs_created = 0
    with open(report_path, "w", encoding="utf-8") as f:
        f.write("RESUMEN DE LIMPIEZA\n")
        f.write("===================\n\n")
        
        # Ordenamos las carpetas para que salga bonito
        sorted_folders = sorted(report_data.keys())
        
        # Filtramos para mostrar:
        # 1. Carpetas principales del scan (aunque estén vacías)
        # 2. Subcarpetas que SÍ hayan tenido cambios
        # (Para no llenar el log de subcarpetas vacías irrelevantes)
        
        files_written = False
        
        for folder in sorted_folders:
            images = report_data[folder]
            
            # Es una carpeta principal si está en unique_folders
            is_main_folder = folder in unique_folders
            has_changes = len(images) > 0
            
            if is_main_folder or has_changes:
                folder_name = os.path.basename(folder)
                if not is_main_folder:
                    # Si es subcarpeta, mostrar un poco de contexto
                    parent = os.path.basename(os.path.dirname(folder))
                    folder_display = f"{parent}/{folder_name}"
                else:
                    folder_display = folder_name

                f.write(f"📁 {folder_display}\n")
                if has_changes:
                    for img in images:
                        f.write(f"   - {img}\n")
                    total_imgs_created += len(images)
                else:
                    f.write("   (No hay imágenes cambiadas)\n")
                f.write("\n")
                files_written = True

        f.write("===================\n")
        f.write(f"Total imágenes creadas: {total_imgs_created}\n")
    
    print(f"✨ ¡TRABAJO TERMINADO! Informe guardado en: {report_path}")

if __name__ == "__main__":
    process_images()