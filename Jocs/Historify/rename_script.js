const fs = require('fs');
const path = require('path');

const dir = '/Users/jmateog13/Desktop/chronOS/7.Totes_les_Epoces/Jocs/Historify/img';

// Defined Order from prompts_cover_art.txt
// 1-10: Playlists
// 11-81: Songs (71 songs)

const MAP = [
    // 1. PLAYLISTS
    { id: '1', name: 'playlist_medieval' }, // unnamed.jpg
    { id: '2', name: 'playlist_renaissance' }, // MISSING (unnamed-1)
    { id: '3', name: 'playlist_baroque' }, // unnamed-2
    { id: '4', name: 'playlist_classicism' },
    { id: '5', name: 'playlist_romanticism' },
    { id: '6', name: 'playlist_20th' },
    { id: '7', name: 'playlist_women' },
    { id: '8', name: 'playlist_instrumental' },
    { id: '9', name: 'playlist_sacred' },
    { id: '10', name: 'playlist_vocal' },

    // 2. SONGS (Mapping to IDs 1-71)
    // Medieval (11-17)
    { id: '11', name: 'song_1_hildegard' },
    { id: '12', name: 'song_11_puer_natus' },
    { id: '13', name: 'song_13_machaut' },
    { id: '14', name: 'song_30_estampies' },
    { id: '15', name: 'song_31_cantigas' },
    { id: '16', name: 'song_32_llibre_vermell' },
    { id: '17', name: 'song_33_sumer' },

    // Renaissance (18-23)
    { id: '18', name: 'song_12_palestrina' },
    { id: '19', name: 'song_18_tallis' },
    { id: '20', name: 'song_19_josquin' },
    { id: '21', name: 'song_34_dowland' },
    { id: '22', name: 'song_35_arcadelt' },
    { id: '23', name: 'song_36_victoria' },

    // Baroque (24-38)
    { id: '24', name: 'song_2_strozzi' },
    { id: '25', name: 'song_3_caccini' },
    { id: '26', name: 'song_14_bach_passion' },
    { id: '27', name: 'song_15_handel_messiah' },
    { id: '28', name: 'song_21_vivaldi_spring' },
    { id: '29', name: 'song_24_bach_brandenburg' },
    { id: '30', name: 'song_29_bach_lute' },
    { id: '31', name: 'song_37_pachelbel' },
    { id: '32', name: 'song_38_bach_toccata' },
    { id: '33', name: 'song_39_handel_fireworks' },
    { id: '34', name: 'song_40_purcell_dido' },
    { id: '35', name: 'song_61_handel_zadok' },
    { id: '36', name: 'song_62_bach_cello' },
    { id: '37', name: 'song_64_handel_water' },
    { id: '38', name: 'song_65_monteverdi_orfeo' },

    // Classicism (39-48)
    { id: '39', name: 'song_16_mozart_requiem' },
    { id: '40', name: 'song_22_beethoven_5' },
    { id: '41', name: 'song_23_mozart_eine_kleine' },
    { id: '42', name: 'song_41_mozart_40' },
    { id: '43', name: 'song_42_haydn_surprise' },
    { id: '44', name: 'song_43_mozart_magic_flute' },
    { id: '45', name: 'song_44_haydn_emperor' },
    { id: '46', name: 'song_45_mozart_rondo' },
    { id: '47', name: 'song_60_mozart_ave_verum' },
    { id: '48', name: 'song_59_beethoven_moonlight' },

    // Romanticism (49-63)
    { id: '49', name: 'song_4_schumann' },
    { id: '50', name: 'song_5_mendelssohn' },
    { id: '51', name: 'song_6_chaminade' },
    { id: '52', name: 'song_10_smyth' },
    { id: '53', name: 'song_17_verdi' },
    { id: '54', name: 'song_27_berlioz' },
    { id: '55', name: 'song_28_chopin' },
    { id: '56', name: 'song_46_wagner' },
    { id: '57', name: 'song_47_tchaikovsky' },
    { id: '58', name: 'song_48_liszt' },
    { id: '59', name: 'song_49_bizet' },
    { id: '60', name: 'song_50_dvorak' },
    { id: '61', name: 'song_67_beethoven_9' },
    { id: '62', name: 'song_68_tchaikovsky_1812' },
    { id: '63', name: 'song_69_sibelius' },

    // 20th Century (64-79)
    { id: '64', name: 'song_7_boulanger' },
    { id: '65', name: 'song_8_gubaidulina' },
    { id: '66', name: 'song_9_tailleferre' },
    { id: '67', name: 'song_20_britten' },
    { id: '68', name: 'song_25_holst' },
    { id: '69', name: 'song_26_ravel' },
    { id: '70', name: 'song_51_stravinsky' },
    { id: '71', name: 'song_52_gershwin' },
    { id: '72', name: 'song_53_orff' },
    { id: '73', name: 'song_54_barber' },
    { id: '74', name: 'song_55_cage' },
    { id: '75', name: 'song_56_schoenberg' },
    { id: '76', name: 'song_57_satie' },
    { id: '77', name: 'song_58_debussy' },
    { id: '78', name: 'song_70_copland' },
    { id: '79', name: 'song_71_bernstein' }
];

// File Mapping Logic
// unnamed.jpg -> MAP[0]
// (MAP[1] is SKIPPED)
// unnamed-2.jpg -> MAP[2]
// unnamed-3.jpg -> MAP[3]
// ...
// unnamed-79.jpg -> MAP[79]

const files = fs.readdirSync(dir).filter(f => f.startsWith('unnamed') && f.endsWith('.jpg'));

files.forEach(file => {
    let targetIndex = -1;

    if (file === 'unnamed.jpg') {
        targetIndex = 0;
    } else {
        // Extract number
        const match = file.match(/unnamed-(\d+)\.jpg/);
        if (match) {
            const num = parseInt(match[1]);
            // unnamed-2 corresponds to MAP[2] (skipping MAP[1])
            // unnamed-3 corresponds to MAP[3]
            // So if num >= 2, target is MAP[num] directly?
            // Let's check:
            // unnamed-2 (File #3 in sequence approx) -> MAP[2] (Item 3 in list: Baroque)
            // YES. 
            // Because unnamed (0), unnamed-1 (1, missing), unnamed-2 (2).
            targetIndex = num;
        }
    }

    if (targetIndex !== -1 && targetIndex < MAP.length) {
        if (targetIndex === 1) {
            console.log(`Skipping index 1 (Renaissance) as expected - File shouldn't exist`);
            return;
        }

        const mapItem = MAP[targetIndex];
        const oldPath = path.join(dir, file);
        const newPath = path.join(dir, `${mapItem.name}.jpg`);

        console.log(`Renaming ${file} -> ${mapItem.name}.jpg`);
        fs.renameSync(oldPath, newPath);
    }
});
