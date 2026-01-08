#!/bin/bash

cd img

# Define the ordered list of target names (81 items from prompts)
TARGETS=(
# 1. PLAYLISTS
"playlist_medieval.jpg"
"playlist_renaissance.jpg"
"playlist_baroque.jpg"
"playlist_classicism.jpg"
"playlist_romanticism.jpg"
"playlist_20th.jpg"
"playlist_women.jpg"
"playlist_instrumental.jpg"
"playlist_sacred.jpg"
"playlist_vocal.jpg"

# 2. SONGS
# Medieval
"song_1_hildegard.jpg"
"song_11_puer_natus.jpg"
"song_13_machaut.jpg"
"song_30_estampies.jpg"
"song_31_cantigas.jpg"
"song_32_llibre_vermell.jpg"
"song_33_sumer.jpg"

# Renaissance
"song_12_palestrina.jpg"
"song_18_tallis.jpg"
"song_19_josquin.jpg"
"song_34_dowland.jpg"
"song_35_arcadelt.jpg"
"song_36_victoria.jpg"

# Baroque
"song_2_strozzi.jpg"
"song_3_caccini.jpg"
"song_14_bach_passion.jpg"
"song_15_handel_messiah.jpg"
"song_21_vivaldi_spring.jpg"
"song_24_bach_brandenburg.jpg"
"song_29_bach_lute.jpg"
"song_37_pachelbel.jpg"
"song_38_bach_toccata.jpg"
"song_39_handel_fireworks.jpg"
"song_40_purcell_dido.jpg"
"song_61_handel_zadok.jpg"
"song_62_bach_cello.jpg"
"song_64_handel_water.jpg"
"song_65_monteverdi_orfeo.jpg"

# Classicism
"song_16_mozart_requiem.jpg"
"song_22_beethoven_5.jpg"
"song_23_mozart_eine_kleine.jpg"
"song_41_mozart_40.jpg"
"song_42_haydn_surprise.jpg"
"song_43_mozart_magic_flute.jpg"
"song_44_haydn_emperor.jpg"
"song_45_mozart_rondo.jpg"
"song_60_mozart_ave_verum.jpg"
"song_59_beethoven_moonlight.jpg"

# Romanticism
"song_4_schumann.jpg"
"song_5_mendelssohn.jpg"
"song_6_chaminade.jpg"
"song_10_smyth.jpg"
"song_17_verdi.jpg"
"song_27_berlioz.jpg"
"song_28_chopin.jpg"
"song_46_wagner.jpg"
"song_47_tchaikovsky.jpg"
"song_48_liszt.jpg"
"song_49_bizet.jpg"
"song_50_dvorak.jpg"
"song_67_beethoven_9.jpg"
"song_68_tchaikovsky_1812.jpg"
"song_69_sibelius.jpg"

# 20th Century
"song_7_boulanger.jpg"
"song_8_gubaidulina.jpg"
"song_9_tailleferre.jpg"
"song_20_britten.jpg"
"song_25_holst.jpg"
"song_26_ravel.jpg"
"song_51_stravinsky.jpg"
"song_52_gershwin.jpg"
"song_53_orff.jpg"
"song_54_barber.jpg"
"song_55_cage.jpg"
"song_56_schoenberg.jpg"
"song_57_satie.jpg"
"song_58_debussy.jpg"
"song_70_copland.jpg"
"song_71_bernstein.jpg"
)

# Sort files naturally: unnamed.jpg first, then numbers
# We create a temporary list of files sorted numerically
# "ls -v" isn't always available on mac zsh, so we do manual construction
FILES=()
if [ -f "unnamed.jpg" ]; then
    FILES+=("unnamed.jpg")
fi

# Loop for unnamed-2 to unnamed-100 (covering range)
for i in {2..100}; do
    f="unnamed-$i.jpg"
    if [ -f "$f" ]; then
        FILES+=("$f")
    fi
done

# Perform Renaming
count=0
for file in "${FILES[@]}"; do
    if [ $count -ge ${#TARGETS[@]} ]; then
        echo "Warning: More files than targets! Skipping $file"
        break
    fi
    
    target="${TARGETS[$count]}"
    echo "Renaming $file -> $target"
    mv "$file" "$target"
    ((count++))
done

echo "Done! Renamed $count files."
