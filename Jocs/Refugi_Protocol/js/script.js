const ERA_DATA = {
    "EDAT MITJANA": {
        bg: "img/fonsmitjana.jpg",
        characters: ["img/mitjana1.png", "img/mitjana2.png", "img/mitjana3.png", "img/mitjana4.png"],
        true: [
            "Els monjos cantaven en llatí per parlar amb Déu.",
            "El Cant Gregorià té una textura de Monodia (una sola veu).",
            "La música religiosa es cantava 'A Cappella', sense instruments.",
            "Els Trobadors eren músics poetes que vivien als castells.",
            "Les cançons dels Trobadors parlaven d'amor i cavallers.",
            "El Llaüt és un instrument de corda amb forma de pera.",
            "Hildegard von Bingen va ser una monja i compositora famosa.",
            "A l'Edat Mitjana la societat es dividia entre el Monestir i el Castell.",
            "Els Trobadors cantaven en la llengua del poble.",
            "La religió era el centre de la vida medieval."
        ],
        false: [
            "Els monjos cantaven en anglès antic.",
            "El Cant Gregorià utilitzava guitarres elèctriques.",
            "Els Trobadors vivien tancats als monestirs resant.",
            "La Polifonia (moltes veus) és típica del Cant Gregorià.",
            "Hildegard von Bingen va escriure la 9a Simfonia.",
            "El Llaüt és un instrument de vent semblant a la flauta.",
            "A l'església medieval tothom ballava mentre cantava.",
            "Els Trobadors cantaven només en llatí.",
            "El Piano era l'instrument preferit dels cavallers medievals.",
            "L'Edat Mitjana va ser l'època de la tecnologia i els robots."
        ]
    },
    "RENAIXEMENT": {
        bg: "img/fonsrenaixemenet.jpg",
        characters: ["img/renaixement1.png", "img/renaixement2.png", "img/renaixement3.png", "img/renaixement4.png"],
        true: [
            "L'Humanisme posa l'ésser humà al centre del pensament.",
            "La Impremta va permetre fer partitures molt més ràpid.",
            "La Polifonia significa que sonen moltes veus diferents alhora.",
            "Palestrina és el compositor més important de música religiosa.",
            "La veu de 'Soprano' és la veu més aguda de les dones.",
            "La música busca l'equilibri i la bellesa, sense exageracions.",
            "La música profana parlava d'amor i diversió.",
            "El 'Baix' és la veu masculina més greu del cor.",
            "Al Renaixement es continua cantant 'A Cappella' a l'església.",
            "La música profana sí que utilitzava instruments per ballar."
        ],
        false: [
            "Al Renaixement l'únic important era Déu (Teocentrisme).",
            "Les partitures encara es copiaven totes a mà, una per una.",
            "La Monodia (una veu) és la textura principal del Renaixement.",
            "Palestrina era un cantant de Rock molt famós.",
            "El Tenor és la veu més aguda de les dones.",
            "La música del Renaixement busca fer por i ser caòtica.",
            "La música profana es cantava en llatí obligatòriament.",
            "El Renaixement va passar abans que l'Edat Mitjana.",
            "No existien instruments musicals al Renaixement.",
            "La Impremta servia per fer pizzes, no llibres."
        ]
    },
    "BARROC": {
        bg: "img/fosbarroc.jpg",
        characters: ["img/barroc1.png", "img/barroc2.png", "img/barroc3.png", "img/barroc4.png"],
        true: [
            "L'art Barroc està ple d'ornaments, luxe i detalls.",
            "El contrast (Fort/Fluix) és clau en la música barroca.",
            "El Clavicèmbal és l'instrument rei de teclat (corda pinçada).",
            "El 'Baix Continu' és una base rítmica que mai para de sonar.",
            "L'Òpera neix a Itàlia com a teatre cantat.",
            "Vivaldi va compondre 'Les Quatre Estacions'.",
            "J.S. Bach és considerat el gran mestre del Barroc.",
            "Els reis tenien un poder absolut i vivien en grans palaus.",
            "La música barroca té molt ritme i moviment constant.",
            "L'Òpera imitava el teatre de l'antiga Grècia."
        ],
        false: [
            "L'art Barroc és minimalista, senzill i sense decoració.",
            "La música barroca és sempre suau i sense canvis de volum.",
            "El Piano va ser l'instrument més famós del Barroc.",
            "L'Òpera és un tipus de missa que es fa a l'església.",
            "Vivaldi era conegut per tocar la bateria.",
            "J.S. Bach odiava la música i no va compondre res.",
            "Al Barroc no hi havia reis, hi havia presidents.",
            "El 'Baix Continu' significa que la música s'atura sovint.",
            "L'Òpera es recita parlant, no cantant.",
            "Versalles era una cabana petita i humil."
        ]
    },
    "CLASSICISME": {
        bg: "img/fonsclassicisme.jpg",
        characters: ["img/clasic1.png", "img/classic2.png", "img/classic3.png", "img/classic4.png"],
        true: [
            "La Raó, l'ordre i la senzillesa són el més important.",
            "Neix el Piano-Forte, que pot fer dinàmiques (fort i fluix).",
            "Mozart va ser un nen prodigi que tocava des de petit.",
            "Haydn és considerat el pare de la Simfonia.",
            "La textura principal és la Melodia Acompanyada.",
            "L'orquestra s'organitza per seccions (corda, vent, percussió).",
            "La música busca ser elegant i fàcil d'escoltar.",
            "Viena era la capital mundial de la música.",
            "El Classicisme fuig de l'exageració del Barroc.",
            "La melodia clàssica és clara i ordenada."
        ],
        false: [
            "El Classicisme busca el desordre i el caos sentimental.",
            "El Clavicèmbal encara és més important que el Piano.",
            "Mozart va començar a compondre quan era un avi.",
            "La textura principal és la Polifonia complexa i difícil.",
            "L'orquestra clàssica no tenia director ni ordre.",
            "La música clàssica vol fer por i espantar.",
            "Haydn era conegut per ser molt antipàtic.",
            "Beethoven va néixer i morir dins del Classicisme pur.",
            "Al Classicisme s'inventa la guitarra elèctrica.",
            "La Raó no importava, només importava resar."
        ]
    },
    "ROMANTICISME": {
        bg: "img/fonsromanticisme.jpg",
        characters: ["img/romanticisme1.png", "img/romanticisme2.png", "img/romanticisme3.png", "img/romanticisme4.png"],
        true: [
            "Els sentiments i l'emoció són més importants que la raó.",
            "El Piano és l'instrument preferit per expressar passió.",
            "El 'Rubato' permet canviar la velocitat lliurement.",
            "Beethoven va escriure la 9a Simfonia estant sord.",
            "La natura salvatge i les tempestes inspiren als artistes.",
            "L'orquestra es fa gegant per tenir més potència.",
            "Neix el 'Virtuós', el músic superstar tècnic.",
            "La música busca el contrast extrem (silenci vs soroll).",
            "L'artista és vist com un geni solitari i incomprès.",
            "Beethoven fa de pont entre Classicisme i Romanticisme."
        ],
        false: [
            "La lògica i les matemàtiques són el més important.",
            "El Piano es deixa de fer servir al Romanticisme.",
            "El 'Rubato' significa tocar sempre al mateix ritme exacte.",
            "Beethoven tenia una oïda perfecta fins que va morir.",
            "Als romàntics els agraden els jardins ordenats i geomètrics.",
            "L'orquestra es fa molt petita, gairebé sense músics.",
            "La música romàntica és tranquil·la i sense emocions fortes.",
            "Els músics eren funcionaris que obeïen sempre al rei.",
            "La 9a Simfonia la va escriure Mozart.",
            "Al Romanticisme s'inventa el Dodecafonisme."
        ]
    },
    "SEGLE XX": {
        bg: "img/fonsegleXX.jpg",
        characters: ["img/segleXX1.png", "img/segleXX2.png", "img/segleXX3.png", "img/segleXX4.png"],
        true: [
            "Els artistes volen trencar les normes del passat.",
            "Apareix la tecnologia: la Ràdio i l'enregistrament.",
            "L'Impressionisme (Debussy) busca crear atmòsferes i somnis.",
            "L'Expressionisme (Schönberg) expressa angoixa i por.",
            "La dissonància (sons que xoquen) s'utilitza molt.",
            "El Dodecafonisme fa servir 12 notes sense jerarquia.",
            "Es trenca amb la Tonalitat clàssica.",
            "La música pot ser lletja expressament per dir una veritat.",
            "'El Crit' és un quadre relacionat amb l'Expressionisme.",
            "Debussy s'inspira en l'aigua i la llum (Impressionisme)."
        ],
        false: [
            "Els músics volen copiar exactament a Mozart i Bach.",
            "No hi ha cap invent tecnològic nou en aquesta època.",
            "L'Impressionisme busca explicar històries molt clares i realistes.",
            "L'Expressionisme vol transmetre pau i felicitat.",
            "Està prohibit fer servir dissonàncies, tot ha de sonar bé.",
            "El Dodecafonisme fa servir només 3 notes.",
            "La Tonalitat es respecta més que mai.",
            "La Ràdio no es va inventar fins l'any 2000.",
            "Debussy era un músic de Heavy Metal.",
            "Al segle XX es torna a cantar només Cant Gregorià."
        ]
    }
};

// Duplicate variable removed


let currentScore = 0;
let currentEra = "EDAT MITJANA";
let currentVisitor = null;
let isProcessing = false;
let completedEras = []; // Track completion

// DOM Elements
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const eraMenu = document.getElementById('era-menu');
const backToStartBtn = document.getElementById('back-to-start');
const eraBtns = document.querySelectorAll('.era-btn');
const gameUI = document.getElementById('game-ui');
const currentEraDisplay = document.getElementById('current-era-display');
const scoreDisplay = document.getElementById('score');
const visitorEl = document.getElementById('visitor-silhouette');
const boothWindow = document.getElementById('booth-window'); // For background
const speechBubble = document.getElementById('speech-bubble');
const speechText = document.getElementById('visitor-statement');
const btnAllow = document.getElementById('btn-allow');
const btnDeny = document.getElementById('btn-deny');
const feedbackDisplay = document.getElementById('feedback-display');
const gameOverScreen = document.getElementById('game-over-screen');
const deathReasonEl = document.getElementById('death-reason');
const victoryScreen = document.getElementById('victory-screen');
const abortBtn = document.getElementById('abort-btn');

// Initialization
startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    eraMenu.classList.remove('hidden');
    updateEraMenu();

    // Attempt play on first interaction
    if (bgMusic.paused) {
        bgMusic.volume = 0.5;
        bgMusic.play().catch(e => console.log("Menu audio start:", e));
    }
});

backToStartBtn.addEventListener('click', () => {
    eraMenu.classList.add('hidden');
    startScreen.classList.remove('hidden');
});

eraBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const era = btn.getAttribute('data-era');
        startGame(era);
    });
});

abortBtn.addEventListener('click', () => {
    gameUI.classList.add('hidden-ui');
    eraMenu.classList.remove('hidden');
    updateEraMenu(); // Refresh status
});

btnAllow.addEventListener('click', () => processDecision(true));
btnDeny.addEventListener('click', () => processDecision(false));

function updateEraMenu() {
    eraBtns.forEach(btn => {
        const era = btn.getAttribute('data-era');
        if (completedEras.includes(era)) {
            btn.classList.add('completed');
        } else {
            btn.classList.remove('completed');
        }
    });
}

function startGame(era) {
    currentEra = era;
    currentEraDisplay.innerText = `ERA: ${era}`;

    // Hide Menu, Show Game
    eraMenu.classList.add('hidden');
    gameUI.classList.remove('hidden-ui');

    // FORCE AUDIO PLAY ON INTERACTION
    if (bgMusic.paused) {
        bgMusic.play()
            .then(() => console.log("Audio playing"))
            .catch(e => console.error("Audio playback failed:", e));
    }

    // Load Assets
    const eraInfo = ERA_DATA[currentEra];
    if (eraInfo && eraInfo.bg) {
        boothWindow.style.backgroundImage = `url('${eraInfo.bg}')`;
    } else {
        boothWindow.style.backgroundImage = 'none';
    }

    currentScore = 0;
    scoreDisplay.innerText = currentScore;
    nextVisitor();
}

function initGame() {
    currentScore = 0;
    scoreDisplay.innerText = currentScore;
    nextVisitor();
}

function nextVisitor() {
    if (isProcessing) return;
    isProcessing = true;

    // Hide previous
    visitorEl.classList.remove('visitor-enter');
    speechBubble.classList.add('hidden');
    feedbackDisplay.innerText = "ESPERANT...";

    // Reset visitor visual
    visitorEl.style.backgroundImage = 'none';
    visitorEl.style.backgroundColor = '#0b0b0b'; // Fallback to silhouette color

    setTimeout(() => {
        // Generate new visitor logic
        generateVisitorData();

        // Setup Visuals
        const eraInfo = ERA_DATA[currentEra];
        if (eraInfo && eraInfo.characters && eraInfo.characters.length > 0) {
            const randomChar = eraInfo.characters[Math.floor(Math.random() * eraInfo.characters.length)];
            visitorEl.style.backgroundImage = `url('${randomChar}')`;
            visitorEl.style.backgroundColor = 'transparent'; // Hide black silhouette
        }

        // Show new visitor
        visitorEl.classList.add('visitor-enter');

        setTimeout(() => {
            speechBubble.classList.remove('hidden');
            isProcessing = false;
        }, 800);

    }, 1000);
}

function generateVisitorData() {
    // Random True/False for current era
    const isTruth = Math.random() > 0.5;
    const pool = ERA_DATA[currentEra][isTruth ? 'true' : 'false'];
    const statement = pool[Math.floor(Math.random() * pool.length)];

    currentVisitor = {
        statement: statement,
        isTruth: isTruth
    };

    speechText.innerText = statement;
}

function processDecision(admitted) {
    if (isProcessing) return;

    // Logic Verification
    const correctDecision = (admitted === currentVisitor.isTruth);

    if (correctDecision) {
        // SUCCESS
        currentScore++;
        scoreDisplay.innerText = currentScore;
        feedbackDisplay.innerText = "ACCÉS CORRECTE";
        feedbackDisplay.style.color = "var(--color-green)";
        playSound('success');

        if (currentScore >= 10) {
            triggerVictory();
        } else {
            nextVisitor();
        }
    } else {
        // FAIL - PERMADEATH
        triggerGameOver(admitted, currentVisitor.isTruth);
    }
}

function triggerVictory() {
    playSound('success');
    victoryScreen.classList.remove('hidden');

    // Mark as complete and save (simplified for now)
    if (!completedEras.includes(currentEra)) {
        completedEras.push(currentEra);
    }

    // Update button to return to menu instead of reload
    const btn = victoryScreen.querySelector('button');
    btn.onclick = () => {
        victoryScreen.classList.add('hidden');
        gameUI.classList.add('hidden-ui');
        eraMenu.classList.remove('hidden');
        updateEraMenu();
    };
    btn.innerText = "TORNAR AL MENÚ";
}

// Game Over Logic Update
// Game Over Logic Update
function triggerGameOver(action, wasTruth) {
    gameOverScreen.classList.remove('hidden');

    // Reset specific classes
    gameOverScreen.classList.remove('game-over-innocent');
    gameOverScreen.classList.remove('game-over-intruder');

    const titleEl = gameOverScreen.querySelector('h1');
    const msgEl = document.getElementById('death-reason');

    if (action && !wasTruth) {
        // ALLOWED ALIEN/LIE (INTRUDER)
        gameOverScreen.classList.add('game-over-intruder');
        titleEl.innerText = "PROTOCOL VIOLAT";
        msgEl.innerHTML = "ALERTA: <br>Has deixat entrar a un <span style='color:red'>VISITANT NO AUTORITZAT</span>.<br>El Refugi ha estat compromès."; // Using innerHTML for styling, ensure safe content
    } else if (!action && wasTruth) {
        // DENIED HUMAN/TRUTH (INNOCENT)
        gameOverScreen.classList.add('game-over-innocent');
        titleEl.innerText = "ERROR HUMÀ";
        msgEl.innerHTML = "ERRADA: <br>Has deixat fora a una <span style='color:orange'>PERSONA INNOCENT</span>.<br>El coneixement s'ha perdut per sempre.";
    }

    playSound('alarm');

    // Update restart button
    // Update restart button
    const btn = gameOverScreen.querySelector('button');
    btn.onclick = () => {
        location.reload();
    };
}

// Simple Sound Synth
function playSound(type) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'success') {
        osc.frequency.value = 800;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
    } else if (type === 'alarm') {
        osc.frequency.value = 200;
        osc.type = 'sawtooth';
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.5);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
    }
}
