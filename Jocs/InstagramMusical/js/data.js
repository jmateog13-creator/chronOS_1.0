// Helper to generate SVG placeholders
function getPlaceholder(text, color = '#333') {
    return `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'%3E%3Crect width='500' height='500' fill='${encodeURIComponent(color)}'/%3E%3Ctext x='50%' y='50%' dy='.3em' fill='white' font-family='Arial' font-size='50' text-anchor='middle'%3E${text}%3C/text%3E%3C/svg%3E`;
}

window.composers = [
    {
        id: 'alumne',
        username: 'alumne_laplana',
        name: 'Alumne La Plana',
        avatar: 'assets/avatars/alumne_books.png',
        bio: 'Estudiant de 3r d\'ESO. 🎓\nAmant de la història de la música.',
        followers: '100',
        following: 20,
        posts: []
    },
    {
        id: 'hildegard',
        username: 'hildegard.von.bingen',
        name: 'Hildegard von Bingen',
        avatar: 'assets/avatars/hildegard.jpg',
        bio: 'El perfil místic, naturista i "girl boss" original. 🌿✨',
        followers: '800k',
        following: 0,
        posts: [
            {
                id: 'hildegard1',
                image: 'assets/posts/hildegard_1.jpg',
                caption: 'Una altra visió a les 3 AM. 🔥 L\'Esperit no em deixa dormir, però les melodies que estic escrivint són d\'un altre món. Literalment. ✨ #Scivias #Visions #MedievalLife',
                likes: 5400,
                timestamp: '900 ANYS',
                audio: null,
                comments: [
                    { user: 'volmar_monk', text: 'Mestra, he transcrit les vostres visions. Són... intenses. ✍️' },
                    { user: 'richardis_von_stade', text: 'Sempre al vostre costat, mare. ✨' }
                ]
            },
            {
                id: 'hildegard2',
                image: "assets/posts/hildegard_2_new.jpg",
                caption: 'Dia de preparar remeis. Recordeu: la natura és la farmàcia de Déu. 🌿 Si us fa mal el cap, tinc una pedra per a això. #Physica #RemeisNaturals #SalutHolistica',
                likes: 4200,
                timestamp: '900 ANYS',
                audio: null,
                comments: [
                    { user: 'bernard_clairvaux', text: 'Les vostres pedres tenen la benedicció del cel. 🙏' },
                    { user: 'pope_eugene', text: 'Aprovat pel Vaticà. Continueu escrivint. 📜' }
                ]
            },
            {
                id: 'hildegard3',
                image: "assets/posts/hildegard_3_new.jpg",
                caption: 'Qui necessita polifonia quan una sola veu pot tocar el cel? 🎶 Ordo Virtutum en procés. El primer drama musical de la història és meu. 💅 #Monodia #Compositora',
                likes: 6100,
                timestamp: '900 ANYS',
                audio: null,
                comments: [
                    { user: 'anima_character', text: 'La meva part és la més difícil! Però sona diví. 🎶' },
                    { user: 'diabolus_in_musica', text: 'Jo només puc cridar? Injust! 👿' }
                ]
            },
            {
                id: 'hildegard4',
                image: 'assets/posts/hildegard_4.jpg',
                caption: 'A punt d\'enviar això a Frederic Barba-roja. Algú li ha de dir un parell de veritats i sembla que em toca a mi. ✉️🚫 #NoCallo #SibilaDelRin',
                likes: 3800,
                timestamp: '900 ANYS',
                audio: null,
                comments: [
                    { user: 'frederic_barbarossa', text: 'Dona, no em desafieu. Soc l\'Emperador. 👑' },
                    { user: 'hildegard_fan', text: 'Digueu-li la veritat al poder! 🔥' }
                ]
            },
            {
                id: 'hildegard5',
                image: "assets/posts/hildegard_5_new.jpg",
                caption: 'El meu lloc feliç. Vaig construir aquest monestir des de zero amb les meves germanes. 🏰💪 #Rupertsberg #Abadessa #DonesEnLaHistoria',
                likes: 7500,
                timestamp: '900 ANYS',
                audio: null,
                comments: [
                    { user: 'sister_gertrude', text: 'El millor monestir del Rin! 🌊' },
                    { user: 'bishop_mainz', text: 'Impressionant arquitectura, abadessa. ⛪' }
                ]
            }
        ]
    },
    {
        id: 'machaut',
        username: 'guillaume_machaut',
        name: 'Guillaume de Machaut',
        avatar: 'assets/avatars/machaut.jpg',
        bio: 'El poeta romàntic i matemàtic. 📜❤️',
        followers: '650k',
        following: 5,
        posts: [
            {
                id: 'machaut1',
                image: 'assets/posts/machaut_1.jpg',
                caption: 'Oficina del dia. ⛪️ Acabant la Messe de Nostre Dame. Diuen que és la primera missa polifònica completa escrita per un sol home. Sí, vaig ser jo. 😎 #Reims #ArsNova',
                likes: 3200,
                timestamp: '700 ANYS',
                audio: null,
                comments: [
                    { user: 'king_charles_v', text: 'Una obra digna de la coronació. 👑' },
                    { user: 'philippe_vitry', text: 'L\'Ars Nova està en bones mans. 🎼' }
                ]
            },
            {
                id: 'machaut2',
                image: 'assets/posts/machaut_2.jpg',
                caption: 'Escrivint per a Péronne... L\'amor cortès fa mal, però inspira les millors cançons. 💔📜 #Poeta #AmorCortes #Ballade',
                likes: 2800,
                timestamp: '700 ANYS',
                audio: null,
                comments: [
                    { user: 'peronne_armentieres', text: 'Guillaume, ets un romàntic incorregible. 💖' },
                    { user: 'froissart_poet', text: 'Quina mètrica! Quina rima! 📝' }
                ]
            },
            {
                id: 'machaut3',
                image: 'assets/posts/machaut_3.jpg',
                caption: 'Us agraden els enigmes? El meu rondó "Ma fin est mon commencement" es llegeix igual cap endavant que cap enrere. 🔄🧠 #MathRockMedieval #PuzzleMusical',
                likes: 4500,
                timestamp: '700 ANYS',
                audio: null,
                comments: [
                    { user: 'math_geek_1300', text: 'M\'explota el cap. Com ho fas? 🤯' },
                    { user: 'eustache_deschamps', text: 'Mestre, sou un mag de les notes. 🧙‍♂️' }
                ]
            },
            {
                id: 'machaut4',
                image: 'assets/posts/machaut_4.jpg',
                caption: 'La Pesta Negra està terrible fora. 😷 Em quedo a casa component motets. Cuideu-vos molt, amics. #Quarentena1350 #BlackDeath',
                likes: 5100,
                timestamp: '700 ANYS',
                audio: null,
                comments: [
                    { user: 'giovanni_boccaccio', text: 'Estic escrivint un llibre sobre això. Cuida\'t. 📖' },
                    { user: 'doctor_plague', text: 'Vinagre i herbes, mestre. És l\'únic remei. 🌿' }
                ]
            },
            {
                id: 'machaut5',
                image: 'assets/posts/machaut_5.jpg',
                caption: 'Acabo de supervisar la còpia de les meves obres completes. Vull que la meva música sobrevisqui segles. Creieu que algú m\'escoltarà el 2024? 📚✨ #Llegat #Manuscrit',
                likes: 6000,
                timestamp: '700 ANYS',
                audio: null,
                comments: [
                    { user: 'future_musicologist', text: 'Gràcies per guardar-ho tot! Ens has salvat la vida. 🙏' },
                    { user: 'duke_berry', text: 'Un manuscrit preciós. El vull per a la meva biblioteca. 📚' }
                ]
            }
        ]
    },
    {
        id: 'josquin',
        username: 'josquin_des_prez',
        name: 'Josquin des Prez',
        avatar: 'assets/avatars/josquin.jpg',
        bio: 'La superestrella internacional i "divo". 🌟🎶',
        followers: '900k',
        following: 10,
        posts: [
            {
                id: 'josquin1',
                image: 'assets/posts/josquin_1.jpg',
                caption: 'Vaig deixar la meva signatura a la Capella Sixtina perquè sàpiguen qui mana aquí. 🤫🔨 #JosquinWasHere #Vaticà #SistineChapel',
                likes: 4100,
                timestamp: '500 ANYS',
                audio: null,
                comments: [
                    { user: 'michelangelo_buonarroti', text: 'Jo pintaré el sostre, tu posa la música. 🎨🎶' },
                    { user: 'pope_sixtus', text: 'No guixis les parets, Josquin! 😠' }
                ]
            },
            {
                id: 'josquin2',
                image: 'assets/posts/josquin_2.jpg',
                caption: 'El Duc m\'ha demanat una altra missa, però encara no m\'ha pagat l\'anterior. 💸 Escriuré un motet sobre "recordar pagar als teus músics". #FreelanceLife #PayMe',
                likes: 5500,
                timestamp: '500 ANYS',
                audio: null,
                comments: [
                    { user: 'ercole_d_este', text: 'La transferència està en camí... crec. 🏦' },
                    { user: 'sforza_milan', text: 'Vine a Milà, nosaltres paguem al dia! 💰' }
                ]
            },
            {
                id: 'josquin3',
                image: 'assets/posts/josquin_3.jpg',
                caption: 'Buscant l\'equilibri perfecte. Imitació estricta, claredat... crec que això serà un èxit. 🎼🙌 #Polifonia #Masterpiece',
                likes: 6200,
                timestamp: '500 ANYS',
                audio: null,
                comments: [
                    { user: 'petrucci_printer', text: 'Això es vendrà com xurros. Imprimint! 🖨️' },
                    { user: 'tinctoris_theorist', text: 'Perfecte contrapunt. De llibre. 📐' }
                ]
            },
            {
                id: 'josquin4',
                image: 'assets/posts/josquin_4.jpg',
                caption: 'Luter va dir que "Josquin és l\'amo de les notes". No seré jo qui li porti la contrària. 🤷‍♂️🎶 #Respect #Mestre',
                likes: 7000,
                timestamp: '500 ANYS',
                audio: null,
                comments: [
                    { user: 'martin_luther', text: 'Altres segueixen les notes, les notes et segueixen a tu. 🙌' },
                    { user: 'melanchthon', text: 'Una inspiració per a la reforma. ⛪' }
                ]
            },
            {
                id: 'josquin5',
                image: 'assets/posts/josquin_5.jpg',
                caption: 'Tour europeu. 🌍 On vaig, em contracten. Soc el músic més car del mercat i ho valc. #TravelGram #FrancoFlamenc',
                likes: 8100,
                timestamp: '500 ANYS',
                audio: null,
                comments: [
                    { user: 'king_louis_xii', text: 'França et troba a faltar. Torna! 🇫🇷' },
                    { user: 'margaret_austria', text: 'La cort de Malines és més divertida. 😉' }
                ]
            }
        ]
    },
    {
        id: 'palestrina',
        username: 'giovanni.palestrina',
        name: 'G. P. da Palestrina',
        avatar: 'assets/avatars/palestrina.jpg',
        bio: 'El salvador de la música sacra, seriós i perfecte. 🙏✨',
        followers: '1.1M',
        following: 2,
        posts: [
            {
                id: 'palestrina1',
                image: 'assets/posts/palestrina_1.jpg',
                caption: 'Els bisbes volen prohibir la polifonia. Diuen que no s\'entén la lletra. 🙄 Aguanteu-me el calze, que vaig a demostrar-los com es fa. #ConciliDeTrento #SaveTheMusic',
                likes: 5600,
                timestamp: '450 ANYS',
                audio: null,
                comments: [
                    { user: 'council_trent_official', text: 'Vigila, Giovanni. Estem observant. 👀' },
                    { user: 'cardinal_borromeo', text: 'Fes que s\'entengui el "Credo", si us plau. 🙏' }
                ]
            },
            {
                id: 'palestrina2',
                image: 'assets/posts/palestrina_2.jpg',
                caption: 'Aquí està: Missa Papae Marcelli. Lletra clara, harmonia pura. La música sacra es queda. De res. 🙏✨ #SalvadorDeLaMusica #PolifoniaPura',
                likes: 6700,
                timestamp: '450 ANYS',
                audio: null,
                comments: [
                    { user: 'pope_marcellus', text: 'Sublim. Això és el que volíem. ✨' },
                    { user: 'jesuit_order', text: 'Això elevarà les ànimes. Ben fet. ✝️' }
                ]
            },
            {
                id: 'palestrina3',
                image: 'assets/posts/palestrina_3.jpg',
                caption: 'Diumenge de feina. Res com escoltar la teva música ressonant en aquesta acústica. 🏛️🇻🇦 #SanPedro #Roma #ChoirMaster',
                likes: 4800,
                timestamp: '450 ANYS',
                audio: null,
                comments: [
                    { user: 'victoria_spain', text: 'Mestre, algun dia aniré a Roma a aprendre de tu. 🇪🇸' },
                    { user: 'roman_choirboy', text: 'Aquesta acústica té massa reverb! 🗣️' }
                ]
            },
            {
                id: 'palestrina4',
                image: 'assets/posts/palestrina_4.jpg',
                caption: 'Les regles són les regles. Dissonàncies controlades, si us plau. Res de bogeries. 📏🎼 #EstilPalestrina #Perfeccio',
                likes: 3900,
                timestamp: '450 ANYS',
                audio: null,
                comments: [
                    { user: 'zarlino_theorist', text: 'Així és com s\'ha de fer. Sense salts bojos. 📏' },
                    { user: 'monteverdi_young', text: 'Una mica avorrit, no? 🥱 (És broma, respecte!)' }
                ]
            },
            {
                id: 'palestrina5',
                image: 'assets/posts/palestrina_5.jpg',
                caption: 'Formant la següent generació. Si no canten afinat, no hi ha postres. 🧒🎶 #EducacioMusical #MestreDeCapella',
                likes: 5200,
                timestamp: '450 ANYS',
                audio: null,
                comments: [
                    { user: 'nanino_student', text: 'Sí, mestre. Ho sento, mestre. 😓' },
                    { user: 'allegri_gregorio', text: 'Puc fer un agut molt alt? 🎵' }
                ]
            }
        ]
    },
    {
        id: 'monteverdi',
        username: 'claudio_monteverdi',
        name: 'Claudio Monteverdi',
        avatar: 'assets/avatars/monteverdi.jpg',
        bio: 'El revolucionari que ho va canviar tot. 🎭🎻',
        followers: '1.5M',
        following: 20,
        posts: [
            {
                id: 'monteverdi1',
                image: 'assets/posts/monteverdi_1.jpg',
                caption: 'Avui estrenem L\'Orfeo a Màntua. Diuen que això de "cantar una història sencera" és estrany. Jo en dic el futur. 🎭🎻 #NeixLOpera #Orfeo #Mantua',
                likes: 7800,
                timestamp: '400 ANYS',
                audio: null,
                comments: [
                    { user: 'alessandro_striggio', text: 'El meu llibret ha quedat genial amb la teva música! 📜' },
                    { user: 'euridice_diva', text: 'No et giris, Orfeu! 🐍' }
                ]
            },
            {
                id: 'monteverdi2',
                image: 'assets/posts/monteverdi_2.jpg',
                caption: 'Artusi em critica per les meves dissonàncies. Mira, Artusi: Prima Pratica (el vell) vs. Seconda Pratica (el meu). Les paraules manen sobre l\'harmonia. 🗣️💥 #Drama #SecondaPratica',
                likes: 6500,
                timestamp: '400 ANYS',
                audio: null,
                comments: [
                    { user: 'giovanni_artusi', text: 'Això és un insult a les regles! Quina vergonya! 😡' },
                    { user: 'claudio_bro', text: 'Ni cas, germà. Ets un visionari. 😎' }
                ]
            },
            {
                id: 'monteverdi3',
                image: 'assets/posts/monteverdi_3.jpg',
                caption: 'Nova feina a San Marco. Venècia és un altre nivell. L\'acústica dels balcons és perfecta per als meus cors dividits. 🛶🇮🇹 #Venezia #SanMarco',
                likes: 8200,
                timestamp: '400 ANYS',
                audio: null,
                comments: [
                    { user: 'doge_venice', text: 'Benvingut a la Sereníssima. Fes-nos brillar. 🦁' },
                    { user: 'gabrieli_fan', text: 'Omplir aquest espai no és fàcil, eh? 🎺' }
                ]
            },
            {
                id: 'monteverdi4',
                image: "assets/posts/monteverdi_4_new.jpg",
                caption: 'Sabíeu que vaig començar com a violista? El trèmolo el vaig inventar jo per donar dramatisme a una baralla. 🎻🔥 #EfectesEspecials #Innovacio',
                likes: 5900,
                timestamp: '400 ANYS',
                audio: null,
                comments: [
                    { user: 'violist_mantua', text: 'Mestre, se\'m cansa el braç amb tant de trèmolo! 💪' },
                    { user: 'tancredi_knight', text: 'Sona com una batalla real! ⚔️' }
                ]
            },
            {
                id: 'monteverdi5',
                image: 'assets/posts/monteverdi_5.jpg',
                caption: 'La meva última òpera. Escàndols, història romana i música increïble. Als meus 75 anys segueixo trencant les regles. 👑😈 #OperaVeneciana #Poppea',
                likes: 9100,
                timestamp: '400 ANYS',
                audio: null,
                comments: [
                    { user: 'busenello_poet', text: 'Un plaer escriure per a tu. Hem fet història. 🎭' },
                    { user: 'poppea_soprano', text: 'Pur ti miro... 😍' }
                ]
            }
        ]
    },
    {
        id: 'caccini',
        username: 'francesca.caccini',
        name: 'Francesca Caccini',
        avatar: 'assets/avatars/caccini.jpg',
        bio: 'La pionera oblidada. 💃🎶',
        followers: '950k',
        following: 12,
        posts: [
            {
                id: 'caccini1',
                image: "assets/posts/caccini_2_new.jpg",
                caption: 'Un altre dia a l\'oficina (Palazzo Pitti). Ser la músic més ben pagada de la cort té els seus avantatges. 💰⚜️ #Medici #FlorenceLife',
                likes: 6200,
                timestamp: '390 ANYS',
                audio: null,
                comments: [
                    { user: 'grand_duchess_christina', text: 'Ets la joia de la nostra cort, Francesca. 💎' },
                    { user: 'peri_jacopo', text: 'La Caccini sap el que es fa. 👌' }
                ]
            },
            {
                id: 'caccini2',
                image: 'assets/posts/caccini_4.jpg',
                caption: 'Fet! Acabo de compondre la primera òpera escrita per una dona. I a sobre va de bruixes i guerreres. 💪🧙‍♀️ #GirlPower #OperaHistory',
                likes: 7400,
                timestamp: '390 ANYS',
                audio: null,
                comments: [
                    { user: 'prince_wladyslaw', text: 'A Polònia ens ha encantat! 🇵🇱👏' },
                    { user: 'alcina_sorceress', text: 'Quin paperàs m\'has escrit! 🧙‍♀️' }
                ]
            },
            {
                id: 'caccini3',
                image: 'assets/posts/caccini_3.jpg',
                caption: 'No només componc, també canto i toco. El "cantar a la viola" és la meva especialitat. 🎵🎸 #Multitasking #Virtuosa',
                likes: 5300,
                timestamp: '390 ANYS',
                audio: null,
                comments: [
                    { user: 'monteverdi_claudio', text: 'Una veu i un talent únics. 🎶' },
                    { user: 'florentine_fan', text: 'La millor de la família, sens dubte. (Perdó pare Giulio) 🤭' }
                ]
            },
            {
                id: 'caccini4',
                image: 'assets/posts/caccini_4.jpg',
                caption: 'Classe amb les noies. Tenen talent. El futur de la música és femení. 👩‍🏫🎼 #Teaching #Cort',
                likes: 4800,
                timestamp: '390 ANYS',
                audio: null,
                comments: [
                    { user: 'medici_princess', text: 'Mestra, puc cantar l\'ària de la sirena? 🧜‍♀️' },
                    { user: 'signorini_mom', text: 'Orgullosa de tu, filla. ❤️' }
                ]
            },
            {
                id: 'caccini5',
                image: 'assets/posts/caccini_5.jpg',
                caption: 'M\'encanten els ballets de cavalls. Sí, cavalls ballant la meva música. El Barroc és excessiu i m\'encanta. 🐴💃 #Espectacle #Barroc',
                likes: 6900,
                timestamp: '390 ANYS',
                audio: null,
                comments: [
                    { user: 'horse_trainer', text: 'Els cavalls segueixen el ritme perfectament! 🐎' },
                    { user: 'festa_guest', text: 'Mai he vist res igual! 🎆' }
                ]
            }
        ]
    },
    {
        id: 'strozzi',
        username: 'barbara_strozzi',
        name: 'Barbara Strozzi',
        avatar: 'assets/avatars/strozzi.jpg',
        bio: 'La reina de les cantates i les festes privades. 🎤🍷',
        followers: '880k',
        following: 8,
        posts: [
            {
                id: 'strozzi1',
                image: 'assets/posts/strozzi_1.jpg',
                caption: 'Nit d\'Accademia degli Unisoni. Debatent sobre l\'amor i cantant les meves noves àries. 🍷🗣️ #Venecia #Intellectuals',
                likes: 4500,
                timestamp: '370 ANYS',
                audio: null,
                comments: [
                    { user: 'giulio_strozzi', text: 'Brillant com sempre, filla meva. 🌟' },
                    { user: 'venetian_noble', text: 'La vostra veu és l\'ànima de Venècia. 🎭' }
                ]
            },
            {
                id: 'strozzi2',
                image: 'assets/posts/strozzi_2.jpg',
                caption: '"Che si può fare" (Què es pot fer). A vegades la tristesa sona massa bé. El lamento és la meva especialitat. 😢🎻 #SadSongs #DramaQueen',
                likes: 5600,
                timestamp: '370 ANYS',
                audio: null,
                comments: [
                    { user: 'cavalli_francesco', text: 'Quin dramatisme! M\'encanta. 😭' },
                    { user: 'anonymous_lover', text: 'Aquesta cançó va per mi? 💔' }
                ]
            },
            {
                id: 'strozzi3',
                image: "assets/posts/strozzi_3_new.jpg",
                caption: 'No necessito un teatre d\'òpera. El meu escenari és la teva sala d\'estar. Música de cambra íntima i directa al cor. 💘🏠 #MusicaDaCamera #Cantata',
                likes: 4100,
                timestamp: '370 ANYS',
                audio: null,
                comments: [
                    { user: 'chamber_musician', text: 'Un plaer tocar aquestes harmonies. 🎻' },
                    { user: 'sophisticated_ear', text: 'Això és millor que l\'òpera pública. Més real. 🍷' }
                ]
            },
            {
                id: 'strozzi4',
                image: 'assets/posts/strozzi_4.jpg',
                caption: 'He publicat més cantates que qualsevol home de la meva època. Y sin apoyo de la Iglesia ni de la Corte. 📚🔥 #Independent #SelfMadeWoman',
                likes: 6700,
                timestamp: '370 ANYS',
                audio: null,
                comments: [
                    { user: 'publisher_gardano', text: 'Els teus llibres es venen sols, Barbara. 📚' },
                    { user: 'feminist_1650', text: 'Reina! 👑' }
                ]
            },
            {
                id: 'strozzi5',
                image: 'assets/posts/strozzi_5.jpg',
                caption: 'Inspirant-me als canals. Diuen coses sobre mi per ser dona i artista pública... que parlin. Jo segueixo component. 🛶💋 #HatersGonnaHate #VenetianVibes',
                likes: 5900,
                timestamp: '370 ANYS',
                audio: null,
                comments: [
                    { user: 'gondolier_luigi', text: 'Et sentim cantar des del canal! 🛶' },
                    { user: 'critic_sour', text: 'Massa expressiva per al meu gust... (Enveja)' }
                ]
            }
        ]
    },
    {
        id: 'vivaldi',
        username: 'antonio.vivaldi',
        name: 'Antonio Vivaldi',
        avatar: 'assets/avatars/vivaldi.jpg',
        bio: 'El capellà pèl-roig i rockstar del violí. 🎻🤘',
        followers: '2.1M',
        following: 10,
        posts: [
            {
                id: 'vivaldi1',
                image: 'assets/posts/vivaldi_1.jpg',
                caption: 'Allegro molto vivace. Si no toques ràpid, per a què toques? 🎻💨 #Speed #ViolinVirtuoso',
                likes: 12000,
                timestamp: '300 ANYS',
                audio: null,
                comments: [
                    { user: 'student_pieta', text: 'Mestre, els meus dits treuen fum! 🔥' },
                    { user: 'bach_js', text: 'Interessant... hauré de transcriure això per a orgue. 🤔' }
                ]
            },
            {
                id: 'vivaldi2',
                image: "assets/posts/vivaldi_2_new.jpg",
                caption: 'El meu nou set de concerts: Les Quatre Estacions. Inclou lladrucs de gos i tempestes d\'estiu. 🐶⛈️☀️❄️ #TheFourSeasons #NatureSounds',
                likes: 15000,
                timestamp: '300 ANYS',
                audio: null,
                comments: [
                    { user: 'count_morzin', text: 'Dedicat a mi! Quin honor, Antonio. 🏰' },
                    { user: 'nature_lover', text: 'Sento els ocells a la Primavera! 🐦' }
                ]
            },
            {
                id: 'vivaldi3',
                image: 'assets/posts/vivaldi_3.jpg',
                caption: 'Les meves noies de la Pietà són les millors músiques d\'Europa. L\'orquestra sona increïble avui. 🎼👧 #OrquestraFemenina #TeacherLife',
                likes: 9800,
                timestamp: '300 ANYS',
                audio: null,
                comments: [
                    { user: 'anna_giro', text: 'La millor orquestra del món. ❤️' },
                    { user: 'grand_tourist', text: 'He vingut a Venècia només per sentir-vos! 🎭' }
                ]
            },
            {
                id: 'vivaldi4',
                image: "assets/posts/vivaldi_2_new.jpg",
                caption: 'Em diuen "Il Prete Rosso" (El Capellà Pèl-roig). Sí, soc sacerdot, però la missa em dona asma, així que millor em dedico a compondre 500 concerts. 🔴🙏 #Prioritats #RedHead',
                likes: 11000,
                timestamp: '300 ANYS',
                audio: null,
                comments: [
                    { user: 'goldoni_carlo', text: 'Un personatge únic, mossèn Antonio. 😂' },
                    { user: 'bishop_venice', text: 'Mentre vingueu a missa... (encara que no l\'oficieu). ⛪' }
                ]
            },
            {
                id: 'vivaldi5',
                image: 'assets/posts/vivaldi_1.jpg',
                caption: 'Me\'n vaig a Viena a provar sort amb l\'Emperador. Venècia ja s\'ha cansat del meu estil. Desitgeu-me sort. 🇦🇹👋 #Mudança #VidaDeMusic',
                likes: 8500,
                timestamp: '300 ANYS',
                audio: null,
                comments: [
                    { user: 'emperor_charles_vi', text: 'Us espero a Viena amb els braços oberts! 🇦🇹' },
                    { user: 'sad_venetian', text: 'No marxis! Venècia no serà el mateix sense el Prete Rosso. 😢' }
                ]
            }
        ]
    },
    {
        id: 'bach',
        username: 'js.bach_official',
        name: 'Johann Sebastian Bach',
        avatar: 'assets/avatars/bach_real.jpg',
        bio: 'El pare de tots, treballador incansable. 🎹☕️',
        followers: '3.5M',
        following: 15,
        posts: [
            {
                id: 'bach1',
                image: 'assets/posts/bach_1.jpg',
                caption: 'Porteu-me el meu cafè! Si no, em converteixo en un tros de cabra rostida. He escrit una cantata sencera sobre la meva addicció a la cafeïna. ☕️🐐 #CoffeeCantata #Kaffee #BonDia',
                likes: 15204,
                timestamp: '2 HORES',
                audio: null,
                comments: [
                    { user: 'anna_magdalena', text: 'Johann, ja n\'has pres tres tasses! ☕🛑' },
                    { user: 'zimmermann_cafe', text: 'El millor client del mes! 🍰' }
                ]
            },
            {
                id: 'bach2',
                image: 'assets/posts/bach_2.jpg',
                caption: 'Provant els registres. Improvisaré una fuga a 6 veus a veure què surt. 🎹🤯 #Orgue #Leipzig #Improvisacio',
                likes: 12500,
                timestamp: '1 DIA',
                audio: null,
                comments: [
                    { user: 'cpe_bach', text: 'Pare, això és molt modern! M\'agrada. 😎' },
                    { user: 'organ_builder', text: 'Espero que l\'orgue aguanti la pressió! 💨' }
                ]
            },
            {
                id: 'bach3',
                image: "assets/posts/bach_5_new.png",
                caption: 'Intentant compondre El clave ben temperat però els meus 20 fills estan practicant a la vegada. El caos és la meva harmonia. 👶🎻🎺 #DadLife #FamiliaNombrosa',
                likes: 18000,
                timestamp: '2 DIES',
                audio: null,
                comments: [
                    { user: 'wilhelm_friedemann', text: 'Puc sortir a jugar ja? 🎻' },
                    { user: 'neighbor_leipzig', text: 'Com podeu concentrar-vos amb tant de xivarri? 🙉' }
                ]
            },
            {
                id: 'bach4',
                image: 'assets/posts/bach_3.jpg',
                caption: 'Crec que m\'he passat de complex i dramàtic per al Divendres Sant. Espero que el consell de la ciutat no es queixi. ✝️📜 #ObraMestra #Passio',
                likes: 16500,
                timestamp: '3 DIES',
                audio: null,
                comments: [
                    { user: 'town_council', text: 'Herr Bach, recordeu que volem música senzilla. 📉' },
                    { user: 'picander_poet', text: 'La lletra encaixa perfectament amb la música. ✍️' }
                ]
            },
            {
                id: 'bach5',
                image: 'assets/posts/bach_1.jpg',
                caption: 'Soli Deo Gloria. No componc per a la fama, componc per a Déu (i per ensenyar als meus alumnes). ☝️✨ #SDG #Humilitat #TreballDur',
                likes: 20000,
                timestamp: '4 DIES',
                audio: null,
                comments: [
                    { user: 'god_official', text: 'M\'arriba clar i fort, Johann. ✨' },
                    { user: 'student_altnikol', text: 'El millor mestre del món. 🎼' }
                ]
            }
        ]
    },
    {
        id: 'handel',
        username: 'georg.handel',
        name: 'Georg Friedrich Händel',
        avatar: 'assets/avatars/handel.jpg',
        bio: 'L\'empresari cosmopolita. 🌍👑',
        followers: '2.8M',
        following: 18,
        posts: [
            {
                id: 'handel1',
                image: "assets/posts/handel_4_new.jpg",
                caption: 'Festa al riu amb el Rei Jordi. He compost Música Aquàtica per a l\'ocasió. Espero que no plogui! 🛥️🎺 #WaterMusic #London #RoyalParty',
                likes: 11000,
                timestamp: '280 ANYS',
                audio: null,
                comments: [
                    { user: 'king_george_i', text: 'Molt millor que la música alemanya avorrida. 👑🇬🇧' },
                    { user: 'boatman_thames', text: 'Gairebé bolquem amb tanta trompeta! 🚣‍♂️' }
                ]
            },
            {
                id: 'handel2',
                image: 'assets/posts/handel_3.jpg',
                caption: 'L\'òpera italiana ja no ven a Londres... Doncs m\'invento els Oratoris en anglès! El Messies serà un èxit. 🇬🇧💡 #Pivotar #Emprenedor',
                likes: 13500,
                timestamp: '280 ANYS',
                audio: null,
                comments: [
                    { user: 'charles_jennens', text: 'Tinc uns textos bíblics que t\'encantaran. 📜' },
                    { user: 'diva_cuzzoni', text: 'Mentre em paguis bé... 💅' }
                ]
            },
            {
                id: 'handel3',
                image: "assets/posts/handel_2_new.jpg",
                caption: 'Després d\'un bon assaig, un bon sopar. La vida és per gaudir-la. 🍗🍷 #Foodie #BonVivant',
                likes: 9800,
                timestamp: '280 ANYS',
                audio: null,
                comments: [
                    { user: 'doctor_london', text: 'Compte amb la gota, Mr. Handel! 🍖' },
                    { user: 'cook_john', text: 'Més vi, senyor? 🍷' }
                ]
            },
            {
                id: 'handel4',
                image: 'assets/posts/handel_3.jpg',
                caption: 'Diuen que el Rei es va posar dempeus en escoltar-lo. Crec que vaig veure el cel obert mentre l\'escrivia. 🙌✨ #Hallelujah #Messiah',
                likes: 18000,
                timestamp: '280 ANYS',
                audio: null,
                comments: [
                    { user: 'king_george_ii', text: 'Simplement magnífic. M\'he d\'aixecar! 🧍‍♂️' },
                    { user: 'dublin_fan', text: 'Gràcies per estrenar-ho aquí! 🇮🇪' }
                ]
            },
            {
                id: 'handel5',
                image: 'assets/posts/handel_5.jpg',
                caption: 'Vaig néixer a Alemanya, vaig triomfar a Itàlia, i ara soc una llegenda a Anglaterra. Ciutadà del món. 🌍🇩🇪🇮🇹🇬🇧 #Cosmopolita #Exit',
                likes: 15200,
                timestamp: '280 ANYS',
                audio: null,
                comments: [
                    { user: 'scarlatti_cat', text: 'Miau? (Traducció: Ets un crack al teclat) 🎹' },
                    { user: 'london_gazette', text: 'El gran Händel ho ha tornat a fer. 📰' }
                ]
            }
        ]
    },
    {
        id: 'haydn',
        username: 'papa_haydn',
        name: 'Joseph Haydn',
        avatar: 'assets/avatars/haydn.jpg',
        bio: 'El "Papà" de la simfonia amb molt sentit de l\'humor. 😂🎼',
        followers: '2.2M',
        following: 30,
        posts: [
            {
                id: 'haydn1',
                image: 'assets/posts/haydn_1.jpg',
                caption: 'La meva gàbia daurada. Visc aïllat del món, així que m\'he vist obligat a ser original. No hi ha mal que per bé no vingui. 🏰🎼 #Esterhaza #ComposingMode',
                likes: 9500,
                timestamp: '250 ANYS',
                audio: null,
                comments: [
                    { user: 'prince_nikolaus', text: 'Haydn, vull una òpera de titelles per demà. 🏰' },
                    { user: 'mozart_wolfie', text: 'Papà Haydn, ets el més gran! ❤️' }
                ]
            },
            {
                id: 'haydn2',
                image: "assets/posts/haydn_2_new.png",
                caption: 'El públic s\'adorm en els moviments lents? PUM! Cop de timbal. A això li dic jo una Simfonia Sorpresa. 😂🥁 #Prankster #Sinfonia94',
                likes: 11000,
                timestamp: '250 ANYS',
                audio: null,
                comments: [
                    { user: 'sleepy_duke', text: 'Què ha passat?! M\'he despertat de cop! 😳' },
                    { user: 'orchestra_member', text: 'Ha estat divertit veure les seves cares. 😂' }
                ]
            },
            {
                id: 'haydn3',
                image: 'assets/posts/haydn_3.jpg',
                caption: 'Al Príncep li ha donat per tocar el Baríton, així que he d\'escriure 126 trios per a ell. El que s\'ha de fer per pagar el lloguer... 🎻👑 #VidaDeCort #Bariton',
                likes: 8200,
                timestamp: '250 ANYS',
                audio: null,
                comments: [
                    { user: 'prince_nikolaus', text: 'Més difícil, Haydn! Vull lluir-me. 🎻' },
                    { user: 'servant_hans', text: 'Senyor, s\'ha acabat la tinta. ✒️' }
                ]
            },
            {
                id: 'haydn4',
                image: "assets/posts/haydn_4_new.jpg",
                caption: 'Simfonia dels Adeus. Una forma subtil de dir-li al Príncep que volem vacances. A veure si pilla la indirecta! 🕯️👋 #VacancesJa #SindicatDeMusics',
                likes: 10500,
                timestamp: '250 ANYS',
                audio: null,
                comments: [
                    { user: 'violinist_franz', text: 'Per fi! Me\'n vaig a veure la meva dona. 👋' },
                    { user: 'prince_nikolaus', text: 'D\'acord, d\'acord... demà marxem a Viena. 😒' }
                ]
            },
            {
                id: 'haydn5',
                image: 'assets/posts/haydn_1.jpg',
                caption: 'Em diuen Papà Haydn. Vaig ensenyar a Mozart i ara estic donant classes a un jove anomenat Beethoven. Té caràcter, però promet. 👨‍🏫🎶 #Mentor #Llegat',
                likes: 12000,
                timestamp: '250 ANYS',
                audio: null,
                comments: [
                    { user: 'young_beethoven', text: 'Tinc algunes idees per millorar això... 🤔' },
                    { user: 'mozart_leopold', text: 'El meu fill t\'admira molt. 🤝' }
                ]
            }
        ]
    },
    {
        id: 'mozart',
        username: 'wolfgang.amadeus',
        name: 'Wolfgang Amadeus Mozart',
        avatar: 'assets/avatars/mozart_real.jpg',
        bio: 'El geni etern i irreverent. 🎱🎹',
        followers: '5.5M',
        following: 42,
        posts: [
            {
                id: 'mozart1',
                image: 'assets/posts/mozart_1.jpg',
                caption: '#TBT a quan era petit i em portaven de gira com un mico de fira. Almenys vaig viatjar molt. 🌍🎹 #ChildProdigy #Throwback',
                likes: 34020,
                timestamp: '5 HORES',
                audio: null,
                comments: [
                    { user: 'liszt_franz', text: 'Ningú toca el piano com tu (excepte jo, potser). 😉' },
                    { user: 'parisian_lady', text: 'Oh, Monsieur Chopin, quina delicadesa! 👒' }
                ],
                comments: [
                    { user: 'nannerl_sister', text: 'Recordes quan vam tocar per a l\'Emperadriu? 🎹' },
                    { user: 'leopold_dad', text: 'Wolfgang, practica més i juga menys! 😠' }
                ]
            },
            {
                id: 'mozart2',
                image: 'assets/posts/mozart_2.jpg',
                caption: 'Component una òpera mentre jugo al billar. El meu cervell no para mai. Bola 8 a la cantonada i Ària en Fa major. 🎱🎼 #Multitasking #Genius',
                likes: 41000,
                timestamp: '6 HORES',
                audio: null,
                comments: [
                    { user: 'constanze_wifey', text: 'Wolfie, vine a sopar! 🍲' },
                    { user: 'da_ponte_librettist', text: 'Tinc el llibret perfecte per a tu. Don Giovanni. 😈' }
                ]
            },
            {
                id: 'mozart3',
                image: 'assets/posts/mozart_3.jpg',
                caption: 'L\'Emperador diu que la meva música té massa notes. Quines sobren, Majestat? 🙄🎶 #Haters #TooManyNotes',
                likes: 38000,
                timestamp: '7 HORES',
                audio: null,
                comments: [
                    { user: 'joseph_ii_emperor', text: 'Bé, potser en sobren algunes... poques. 👑' },
                    { user: 'salieri_antonio', text: 'És... interessant. (Maleït geni) 😒' }
                ]
            },
            {
                id: 'mozart4',
                image: 'assets/posts/mozart_4.jpg',
                caption: 'Un paio estrany m\'ha encarregat un Rèquiem i em paga per avançat. Tinc un mal pressentiment sobre això... 💀🕯️ #Requiem #Misteri',
                likes: 50000,
                timestamp: '8 HORES',
                audio: null,
                comments: [
                    { user: 'sussmayr_student', text: 'Mestre, puc ajudar-vos a acabar-ho? ✍️' },
                    { user: 'constanze_wifey', text: 'No treballis tant, estàs molt pàl·lid. 🤒' }
                ]
            },
            {
                id: 'mozart5',
                image: 'assets/posts/mozart_1.jpg',
                caption: 'Escrivint a la meva cosina. Si llegiu les meves cartes privades veureu que tinc un humor... peculiar. 💩😂 #HumorMozart #SenseFiltre',
                likes: 29000,
                timestamp: '9 HORES',
                audio: null,
                comments: [
                    { user: 'basle_cousin', text: 'Wolfgang! Ets un porc! 😂💩' },
                    { user: 'haydn_papa', text: 'Davant de Déu us dic que el vostre fill és el compositor més gran que conec. 🤝' }
                ]
            }
        ]
    },
    {
        id: 'beethoven',
        username: 'ludwig_van_b',
        name: 'Ludwig van Beethoven',
        avatar: 'assets/avatars/beethoven.jpg',
        bio: 'El rebel sord que va trencar la música. 🌩️🎹',
        followers: '6.1M',
        following: 5,
        posts: [
            {
                id: 'beethoven1',
                image: 'assets/posts/beethoven_1.jpg',
                caption: 'Anava a dedicar-li la simfonia a Napoleó, però s\'ha proclamat Emperador. Traïdor a la llibertat! Ara es dirà EROICA. ✏️😡 #Cancelat #Revolucio',
                likes: 56000,
                timestamp: '3 DIES',
                audio: null,
                comments: [
                    { user: 'napoleon_bonaparte', text: 'Què has fet amb la dedicatòria?! 🇫🇷😠' },
                    { user: 'ries_student', text: 'Mestre, heu foradat el paper de tanta ràbia! ✏️' }
                ]
            },
            {
                id: 'beethoven2',
                image: 'assets/posts/beethoven_2.jpg',
                caption: 'He tornat a trencar el piano. Necessito que soni MÉS FORT. 🎹🔨 #ForçaBruta #Fortissimo',
                likes: 62000,
                timestamp: '3 DIES',
                audio: null,
                comments: [
                    { user: 'piano_maker_graf', text: 'Herr Beethoven, si us plau... és el tercer piano aquest mes. 🎹💸' },
                    { user: 'neighbor_vienna', text: 'PODEU BAIXAR EL VOLUM?! 🙉' }
                ]
            },
            {
                id: 'beethoven3',
                image: 'assets/posts/beethoven_3.jpg',
                caption: 'Més que un músic, soc un poeta dels sons. La Pastoral és el meu amor per la natura. Escolteu els ocells (jo els escolto a la meva ment). 🌳🐦 #Natura #Heiligenstadt',
                likes: 48000,
                timestamp: '3 DIES',
                audio: null,
                comments: [
                    { user: 'schindler_anton', text: 'Quina pau... res a veure amb la 5a. 🌳' },
                    { user: 'bird_lover', text: 'Això és un rossinyol o una flauta? 🐦' }
                ]
            },
            {
                id: 'beethoven4',
                image: 'assets/posts/beethoven_4.jpg',
                caption: 'El meu testament de Heiligenstadt. M\'estic quedant sord, però no em rendiré. Agafaré el destí pel coll. 👂🚫💪 #Resiliencia #Desti',
                likes: 75000,
                timestamp: '3 DIES',
                audio: null,
                comments: [
                    { user: 'brother_karl', text: 'Ludwig, estem preocupats per tu. ❤️' },
                    { user: 'inner_voice', text: 'L\'art exigeix sacrifici. 🎨' }
                ]
            },
            {
                id: 'beethoven5',
                image: 'assets/posts/beethoven_5.jpg',
                caption: 'Una simfonia amb cor? Mai s\'ha fet. M\'és igual. ODA A L\'ALEGRIA. 🌍✨ #Sinfonia9 #HimneDeLaHumanitat',
                likes: 90000,
                timestamp: '3 DIES',
                audio: null,
                comments: [
                    { user: 'schiller_poet', text: 'Mai vaig imaginar els meus versos amb aquesta grandesa. ✨' },
                    { user: 'caroline_ungher', text: 'Mestre, giri\'s! Estan aplaudint! (Li gira) 👏😭' }
                ]
            }
        ]
    },
    {
        id: 'schubert',
        username: 'franz.schubert',
        name: 'Franz Schubert',
        avatar: 'assets/avatars/schubert.jpg',
        bio: 'El bohemi de les festes íntimes. 👓🍷',
        followers: '2.4M',
        following: 15,
        posts: [
            {
                id: 'schubert1',
                image: 'assets/posts/schubert_1.jpg',
                caption: 'Diuen que dormo amb les ulleres posades per si em desperto amb una melodia. És veritat. 🤓💤 #Inspiracio #SempreLlest',
                likes: 8200,
                timestamp: '200 ANYS',
                audio: null,
                comments: [
                    { user: 'mayrhofer_poet', text: 'Franz, deixa de dormir i vine a beure! 🍷' },
                    { user: 'spaun_friend', text: 'Sempre amb el quadern a punt. 📓' }
                ]
            },
            {
                id: 'schubert2',
                image: 'assets/posts/schubert_2.jpg',
                caption: 'Nit de Schubertiades! Música, amics i poesia. No necessito grans sales de concert, només bona companyia. 🍷🎻 #Party #Viena',
                likes: 9500,
                timestamp: '200 ANYS',
                audio: null,
                comments: [
                    { user: 'vogl_singer', text: 'Ningú acompanya el piano com tu, Franz. 🎹🎤' },
                    { user: 'schober_party', text: 'Aquesta nit la cremem! 🔥' }
                ]
            },
            {
                id: 'schubert3',
                image: 'assets/posts/schubert_trout.jpg',
                caption: 'La Truita. 🐟 He escrit un quintet basant-me en la meva pròpia cançó. Tema i variacions, quina delícia. #LaTruita #MusicaDeCambra',
                likes: 7800,
                timestamp: '200 ANYS',
                audio: null,
                comments: [
                    { user: 'fisherman_fritz', text: 'M\'agrada més la cançó, però el quintet no està malament. 🎣' },
                    { user: 'cellist_friend', text: 'Quin contrabaix més divertit! 🎻' }
                ]
            },
            {
                id: 'schubert4',
                image: 'assets/posts/schubert_4.jpg',
                caption: 'Der Erlkönig. Un pare cavalca amb el seu fill moribund. El piano sona com el galop del cavall. Terror pur en 4 minuts. 🐴👻 #Lied #Drama',
                likes: 11000,
                timestamp: '200 ANYS',
                audio: null,
                comments: [
                    { user: 'goethe_jw', text: 'No m\'agradava, però aquesta versió... fa por. 😨' },
                    { user: 'scared_child', text: 'Pare, el Rei dels Elfs em vol agafar! 👻' }
                ]
            },
            {
                id: 'schubert5',
                image: 'assets/posts/schubert_1.jpg',
                caption: 'Només té dos moviments. Per a què afegir-ne més si ja és perfecta així? (O potser em vaig distreure i no la vaig acabar, qui sap). 🎼🤷‍♂️ #UnfinishedSymphony #Misteri',
                likes: 12500,
                timestamp: '200 ANYS',
                audio: null,
                comments: [
                    { user: 'huttenbrenner', text: 'Tens el tercer moviment per algun lloc? 📄' },
                    { user: 'future_fan', text: 'És l\'obra mestra inacabada més famosa. ✨' }
                ]
            }
        ]
    },
    {
        id: 'fanny',
        username: 'fanny.mendelssohn',
        name: 'Fanny Mendelssohn',
        avatar: 'assets/avatars/fanny.jpg',
        bio: 'El talent ocult rere el nom del seu germà. 🎹✨',
        followers: '1.8M',
        following: 10,
        posts: [
            {
                id: 'fanny1',
                image: 'assets/posts/fanny_1.jpg',
                caption: 'Tocant a quatre mans amb el Felix. Diuen que tenim els mateixos dits. Llàstima que el pare diu que per a mi la música és només un adorn. 😒🎹 #Siblings #Talent',
                likes: 7500,
                timestamp: '180 ANYS',
                audio: null,
                comments: [
                    { user: 'felix_mendelssohn', text: 'Ets la millor germana (i pianista) del món. ❤️' },
                    { user: 'abraham_dad', text: 'Fanny, recorda: per a tu la música és un ornament, per al Felix una professió. 🎩' }
                ]
            },
            {
                id: 'fanny2',
                image: 'assets/posts/fanny_1.jpg',
                caption: 'Els meus Diumenges Musicals són l\'esdeveniment de moda a Berlín. Aquí és on realment brillo com a directora i pianista. 🌟🏠 #Sonntagsmusiken #Hostess',
                likes: 8900,
                timestamp: '180 ANYS',
                audio: null,
                comments: [
                    { user: 'wilhelm_hensel', text: 'Dibuixaré a tots els convidats! 🎨' },
                    { user: 'berlin_elite', text: 'Gràcies per la invitació, Frau Hensel. 🥂' }
                ]
            },
            {
                id: 'fanny3',
                image: 'assets/posts/fanny_5.jpg',
                caption: 'El Felix ha publicat les meves cançons sota el seu nom perquè s\'escoltin. Si la Reina Victòria pregunta... aquesta cançó preferida seva és MEVA. 😉🤫 #Ghostwriter #DonaCompositora',
                likes: 10200,
                timestamp: '180 ANYS',
                audio: null,
                comments: [
                    { user: 'queen_victoria', text: 'Oh, Mr. Mendelssohn, aquesta cançó "Italien" és la meva preferida! 👑' },
                    { user: 'felix_mendelssohn', text: 'Ehem... Majestat, en realitat és de la Fanny. 😅' }
                ]
            },
            {
                id: 'fanny4',
                image: 'assets/posts/fanny_4.jpg',
                caption: 'Roma és inspiradora. Per fi em sento lliure per compondre sense lligams. El sol d\'Itàlia em dona vida. 🇮🇹☀️ #Viatge #Inspiracio',
                likes: 6800,
                timestamp: '180 ANYS',
                audio: null,
                comments: [
                    { user: 'gounod_charles', text: 'Madame, el vostre talent és immens. 🎹' },
                    { user: 'roman_sun', text: 'Bella Italia! 🇮🇹' }
                ]
            },
            {
                id: 'fanny5',
                image: 'assets/posts/fanny_5.jpg',
                caption: 'He decidit publicar el meu Op. 1 sota el MEU propi nom. Ja era hora. Mireu-me món! 💪🎼 #Opus1 #FannyHensel',
                likes: 11500,
                timestamp: '180 ANYS',
                audio: null,
                comments: [
                    { user: 'clara_schumann', text: 'Brava, Fanny! Ja era hora! 👏' },
                    { user: 'felix_mendelssohn', text: 'Tens la meva benedicció, germana. Publica-ho tot! 📚' }
                ]
            }
        ]
    },
    {
        id: 'chopin',
        username: 'frederic.chopin',
        name: 'Frédéric Chopin',
        avatar: 'assets/avatars/chopin.jpg',
        bio: 'El poeta del piano, malenconiós i exiliat. 🎹🇵🇱',
        followers: '4.9M',
        following: 8,
        posts: [
            {
                id: 'chopin1',
                image: 'assets/posts/chopin_1.jpg',
                caption: 'Vaig sortir de Polònia amb una copa de terra natal. Mai tornaré, però el meu cor sempre estarà a Varsòvia. 🇵🇱💔 #Exili #Patria',
                likes: 25000,
                timestamp: '175 ANYS',
                audio: null,
                comments: [
                    { user: 'constance_gladkowska', text: 'No m\'oblidis mai, Frédéric. 💔' },
                    { user: 'elsner_teacher', text: 'Ves i fes honor al nom de Polònia. 🇵🇱' }
                ]
            },
            {
                id: 'chopin2',
                image: "assets/posts/chopin_2_new.jpg",
                caption: 'Odio els grans concerts. El públic m\'intimida. Prefereixo tocar per a 10 amics en un saló amb els llums baixos. 🕯️🎹 #Introvertit #Nocturn',
                likes: 28000,
                timestamp: '175 ANYS',
                audio: null,
                comments: [
                    { user: 'george_sand', text: 'Ets massa sensible, mon petit. 🌹' },
                    { user: 'delacroix_painter', text: 'La teva música té els colors que jo busco. 🎨' }
                ]
            },
            {
                id: 'chopin3',
                image: 'assets/posts/chopin_3.jpg',
                caption: 'Vacances a Mallorca amb ella. Plou tot el temps. La meva salut empitjora, però he compost el Preludi de la Gota de Pluja. 🌧️💊 #Mallorca #AmorComplicat',
                likes: 31000,
                timestamp: '175 ANYS',
                audio: null,
                comments: [
                    { user: 'majorca_local', text: 'Aquests estrangers fan soroll... 🌧️' },
                    { user: 'george_sand', text: 'Maleïda pluja! Tornem a París. ☔' }
                ]
            },
            {
                id: 'chopin4',
                image: 'assets/posts/chopin_4.jpg',
                caption: 'Si no puc lluitar amb l\'espasa pel meu país, lluitaré amb la meva música. Visca Polònia! ⚔️🎹 #Revolucionari #Polonesa',
                likes: 45000,
                timestamp: '175 ANYS',
                audio: null,
                comments: [
                    { user: 'liszt_franz', text: 'Ningú toca el piano com tu (excepte jo, potser). 😉' },
                    { user: 'parisian_lady', text: 'Oh, Monsieur Chopin, quina delicadesa! 👒' }
                ]
            },
            {
                id: 'chopin5',
                image: 'assets/posts/chopin_5.jpg',
                caption: 'El temps en la meva música és com la flama d\'una espelma: respira. No toqueu com un metrònom, si us plau. 🌬️🎼 #Rubato #Anima',
                likes: 36000,
                timestamp: '175 ANYS',
                audio: null,
                comments: [
                    { user: 'schumann_robert', text: 'Barrets fora, senyors, un geni! 🎩' },
                    { user: 'student_jane', text: 'Mestre, el rubato és massa difícil! ⏳' }
                ]
            }
        ]
    },
    {
        id: 'clara',
        username: 'clara.schumann',
        name: 'Clara Schumann',
        avatar: 'assets/avatars/clara.jpg',
        bio: 'La dona meravella del piano. 🎹💪',
        followers: '3.2M',
        following: 12,
        posts: [
            {
                id: 'clara1',
                image: 'assets/posts/clara_1.jpg',
                caption: '#TBT El meu pare em va entrenar com a un soldat del piano. Als 11 anys ja feia gires internacionals. Sense infància, però amb tècnica. 🎹👧 #Prodigi #Disciplina',
                likes: 15000,
                timestamp: '170 ANYS',
                audio: null,
                comments: [
                    { user: 'wieck_father', text: 'Clara! A estudiar! Ara mateix! 😠' },
                    { user: 'young_robert', text: 'Toca com un àngel... 😍' }
                ]
            },
            {
                id: 'clara2',
                image: 'assets/posts/clara_2.jpg',
                caption: 'Vam haver d\'anar a judici contra el meu pare per casar-nos. L\'amor triomfa... i la música també. ❤️⚖️ #RobertAndClara #PowerCouple',
                likes: 18500,
                timestamp: '170 ANYS',
                audio: null,
                comments: [
                    { user: 'robert_schumann', text: 'Ets la meva musa i la meva vida. ❤️' },
                    { user: 'judge_leipzig', text: 'El permís està concedit. Podeu casar-vos. ⚖️' }
                ]
            },
            {
                id: 'clara3',
                image: 'assets/posts/clara_3.jpg',
                caption: '8 fills, un marit malalt i una carrera internacional. Qui va dir que les dones no poden amb tot? (Estic esgotada). 👶👶👶🎹 #Superwoman #Conciliacio',
                likes: 22000,
                timestamp: '170 ANYS',
                audio: null,
                comments: [
                    { user: 'brahms_johannes', text: 'Deixa que t\'ajudi amb els nens, Clara. 🧸' },
                    { user: 'concert_agent', text: 'Madame, Londres us reclama! 🇬🇧' }
                ]
            },
            {
                id: 'clara4',
                image: 'assets/posts/clara_4.jpg',
                caption: 'El Johannes ha vingut a sopar... una altra vegada. És un gran suport ara que el Robert és al sanatori. Un amic fidel. 👀🎻 #Brahms #Amistat',
                likes: 19000,
                timestamp: '170 ANYS',
                audio: null,
                comments: [
                    { user: 'joachim_violin', text: 'Sempre és un honor tocar amb vosaltres. 🎻' },
                    { user: 'robert_schumann', text: '(Des del sanatori) Us estimo... 🌫️' }
                ]
            },
            {
                id: 'clara5',
                image: 'assets/posts/clara_5.jpg',
                caption: '60 anys als escenaris. He estrenat obres del Robert, del Brahms i les meves. El piano ha estat la meva veu. 🎼🖤 #Llegenda #Pianista',
                likes: 25000,
                timestamp: '170 ANYS',
                audio: null,
                comments: [
                    { user: 'student_frankfurt', text: 'Mestra, gràcies per tot el que ens heu ensenyat. 🎹' },
                    { user: 'music_history', text: 'Una de les més grans de tots els temps. ✨' }
                ]
            }
        ]
    },
    {
        id: 'wagner',
        username: 'richard.wagner',
        name: 'Richard Wagner',
        avatar: 'assets/avatars/wagner.jpg',
        bio: 'El megalòman del drama total. ⚔️🐉',
        followers: '3.8M',
        following: 3,
        posts: [
            {
                id: 'wagner1',
                image: 'assets/posts/wagner_1.jpg',
                caption: 'Cap teatre existent és digne de la meva música. Així que me n\'estic construint un de propi. Aquí no hi haurà llotges perquè la gent xafardegi. Només art. 🏗️🎭 #Bayreuth #Festspielhaus',
                likes: 18000,
                timestamp: '150 ANYS',
                audio: null,
                comments: [
                    { user: 'king_ludwig_ii', text: 'Tot el que necessitis, Richard. Els meus diners són teus. 🏰💰' },
                    { user: 'cosima_wagner', text: 'El temple de l\'art ja és aquí. 🎭' }
                ]
            },
            {
                id: 'wagner2',
                image: 'assets/posts/wagner_2.jpg',
                caption: 'L\'Anell del Nibelung. 4 òperes. 15 hores de música. Nans, gegants, déus. Excessiu? No conec aquesta paraula. 💍🐉 #TheRing #Epic',
                likes: 21000,
                timestamp: '150 ANYS',
                audio: null,
                comments: [
                    { user: 'nietzsche_friedrich', text: 'Això és massa, fins i tot per a mi. 🤯' },
                    { user: 'dragon_fafner', text: 'Grrr... el meu or! 🐉' }
                ]
            },
            {
                id: 'wagner3',
                image: 'assets/posts/wagner_3.jpg',
                caption: 'Amb aquest acord he inventat la música moderna. La tensió que no es resol... com el desig etern. ❤️‍🔥🎼 #TristanUndIsolde #RevolucioArmonica',
                likes: 25000,
                timestamp: '150 ANYS',
                audio: null,
                comments: [
                    { user: 'hans_von_bulow', text: 'Dirigir això és un repte impossible. M\'encanta. 🎼' },
                    { user: 'isolde_soprano', text: 'Liebestod... quina mort més dolça. 💔' }
                ]
            },
            {
                id: 'wagner4',
                image: 'assets/posts/wagner_4.jpg',
                caption: 'Cada personatge té la seva musiqueta. Si sona l\'espasa, és que ve l\'espasa. Spoiler musical. 🗡️🎶 #Leitmotiv #Storytelling',
                likes: 19500,
                timestamp: '150 ANYS',
                audio: null,
                comments: [
                    { user: 'leitmotiv_fan', text: 'He comptat 50 motius diferents! 🤓' },
                    { user: 'sieglinde_valkyrie', text: 'Hojotoho! 🛡️' }
                ]
            },
            {
                id: 'wagner5',
                image: 'assets/posts/wagner_5.jpg',
                caption: 'No faig òperes, faig Obres d\'Art Totals (Gesamtkunstwerk). Música, teatre, poesia... tot controlat per mi. Soc el centre de l\'univers. 🌍✨ #Ego #Geni',
                likes: 30000,
                timestamp: '150 ANYS',
                audio: null,
                comments: [
                    { user: 'verdi_giuseppe', text: 'Tenim estils diferents, però respecto la teva visió. 🇮🇹🤝🇩🇪' },
                    { user: 'bayreuth_pilgrim', text: 'He vingut caminant per veure això. 🙏' }
                ]
            }
        ]
    },
    {
        id: 'tchaikovsky',
        username: 'piotr.tchaikovsky',
        name: 'Piotr Ilitx Txaikovski',
        avatar: 'assets/avatars/tchaikovsky.jpg',
        bio: 'L\'ànima russa sensible i melodiosa. 🦢🩰',
        followers: '5.1M',
        following: 10,
        posts: [
            {
                id: 'tchaikovsky1',
                image: 'assets/posts/tchaikovsky_1.jpg',
                caption: 'Diuen que la meva música de ballet és música simfònica ballable. El Llac dels Cignes ha estat un fracàs en l\'estrena, però sé que serà etern. 🦢🩰 #Ballet #SwanLake',
                likes: 32000,
                timestamp: '130 ANYS',
                audio: null,
                comments: [
                    { user: 'petipa_choreographer', text: 'No et preocupis, Piotr. La coreografia ho salvarà. 🩰' },
                    { user: 'odette_swan', text: 'Aquesta música em fa sentir lleugera com una ploma. 🦢' }
                ]
            },
            {
                id: 'tchaikovsky2',
                image: 'assets/posts/tchaikovsky_2.jpg',
                caption: 'La meva mecenes i millor amiga. Em paga perquè compongui, però tenim una regla: mai ens hem de veure en persona. Relació ideal per a un introvertit. ✉️🚫👀 #Mecenes #AmistatEpistolar',
                likes: 28000,
                timestamp: '130 ANYS',
                audio: null,
                comments: [
                    { user: 'nadezhda_von_meck', text: 'La vostra música és la meva única consolació. ✉️' },
                    { user: 'rubinstein_anton', text: 'No està malament... per ser rus. 😉' }
                ]
            },
            {
                id: 'tchaikovsky3',
                image: 'assets/posts/tchaikovsky_3.jpg',
                caption: 'Obertura 1812. Sí, he escrit una part per a CANONS de veritat. Tapeu-vos les orelles. 💣🎼 #Boom #1812Overture',
                likes: 45000,
                timestamp: '130 ANYS',
                audio: null,
                comments: [
                    { user: 'napoleon_ghost', text: 'Això no m\'agrada gens. 🇫🇷❄️' },
                    { user: 'cannon_operator', text: 'Foc a discreció! 💣💥' }
                ]
            },
            {
                id: 'tchaikovsky4',
                image: 'assets/posts/tchaikovsky_4.jpg',
                caption: 'La malenconia russa corre per les meves venes. Simfonia Patètica... crec que hi he posat tota la meva ànima patidora. ❄️😢 #Pathetique #Sentiments',
                likes: 38000,
                timestamp: '130 ANYS',
                audio: null,
                comments: [
                    { user: 'modest_brother', text: 'Piotr, aquesta simfonia és la teva millor obra. ❤️' },
                    { user: 'sad_violin', text: 'Mai he tocat res tan trist. 😭' }
                ]
            },
            {
                id: 'tchaikovsky5',
                image: 'assets/posts/tchaikovsky_5.jpg',
                caption: 'El Trencanous. He fet servir un instrument nou que vaig veure a París, la celesta. Sona com gotes de sucre. 🧚‍♀️🍬 #Nutcracker #Celesta #Nadal',
                likes: 42000,
                timestamp: '130 ANYS',
                audio: null,
                comments: [
                    { user: 'sugar_plum_fairy', text: 'La celesta sona màgica! ✨' },
                    { user: 'christmas_spirit', text: 'Això serà un clàssic de Nadal per sempre. 🎄' }
                ]
            }
        ]
    },
    {
        id: 'debussy',
        username: 'claude.debussy',
        name: 'Claude Debussy',
        avatar: 'assets/avatars/debussy.jpg',
        bio: 'El rebel que pintava amb sons. 🌊🎨',
        followers: '4.2M',
        following: 15,
        posts: [
            {
                id: 'debussy1',
                image: 'assets/posts/debussy_1.jpg',
                caption: 'La Mer. No vull descriure el mar, vull que sentiu el vent i l\'escuma. La música és color i llum. 🌊🎨 #Impressionisme #LaMer',
                likes: 28000,
                timestamp: '110 ANYS',
                audio: null,
                comments: [
                    { user: 'monet_claude', text: 'Pintes amb sons el que jo pinto amb llum. 🎨🌊' },
                    { user: 'hokusai_wave', text: 'M\'encanta la portada de la partitura. 🌊' }
                ]
            },
            {
                id: 'debussy2',
                image: 'assets/posts/debussy_faun.jpg',
                caption: 'Preludi a la migdiada d\'un faune. Una flauta sola, calor, somnis... L\'harmonia tradicional? M\'avorreix. 🐐flute #Simbolisme #Modernitat',
                likes: 31000,
                timestamp: '110 ANYS',
                audio: null,
                comments: [
                    { user: 'mallarme_poet', text: 'Has captat l\'essència del meu poema millor que jo. 📜' },
                    { user: 'nijinsky_dancer', text: 'Tinc unes idees per ballar això... una mica escandaloses. 🐐' }
                ]
            },
            {
                id: 'debussy3',
                image: 'assets/posts/debussy_3.jpg',
                caption: 'Clar de Lluna. Notes que floten, sense pressa. Menys és més. 🌕🎹 #ClairDeLune #PianoVibes',
                likes: 35000,
                timestamp: '110 ANYS',
                audio: null,
                comments: [
                    { user: 'verlaine_paul', text: 'La vostra ànima és un paisatge escollit. 🌙' },
                    { user: 'piano_student', text: 'És tan difícil fer que soni fàcil... 🎹' }
                ]
            },
            {
                id: 'debussy4',
                image: 'assets/posts/debussy_4.jpg',
                caption: 'Les regles del conservatori estan per trencar-se. "Quina regla segueix vostè, Monsieur Debussy?" El meu propi plaer. 😎🎼 #Rebel #Plaisir',
                likes: 29000,
                timestamp: '110 ANYS',
                audio: null,
                comments: [
                    { user: 'professor_guiraud', text: 'Però quina tonalitat és aquesta?! 🤯' },
                    { user: 'ravel_maurice', text: 'Mestre! 🙌' }
                ]
            },
            {
                id: 'debussy5',
                image: 'assets/posts/debussy_rain.jpg',
                caption: 'Escolteu com cauen les gotes. No hi ha principi ni fi clar, només atmosfera. Benvinguts al segle XX. 🌧️🎹 #Estampes #Atmosphere',
                likes: 33000,
                timestamp: '110 ANYS',
                audio: null,
                comments: [
                    { user: 'rain_drop', text: 'Plip, plop. 🌧️' },
                    { user: 'gardener_paris', text: 'Els jardins sota la pluja fan bona olor. 🌿' }
                ]
            }
        ]
    }
];

window.currentUser = window.composers.find(c => c.id === 'alumne');
