const TOWERS = [
    {
        id: "medieval",
        name: "La Fortalesa (Edat Mitjana)",
        style: "medieval",
        full_tower_img: "img/torremitjana.jpg",
        phases: [
            {
                phase: "BASE",
                q: "Quins ciments aguantaran millor la fe?",
                options: ["Ciment de Cant Gregorià (Uníson i sòlid)", "Ciment de Jazz (Massa inestable)", "Ciment de Plàstic (No existeix encara)"],
                correct: 0,
                img: "img/basemitjana.jpg"
            },
            {
                phase: "COS INFERIOR",
                q: "De quin material fem els murs?",
                options: ["Murs de Monodia (Una sola línia de pedra)", "Murs de Polifonia (Massa complex ara)", "Murs de Cartró Pedra"],
                correct: 0,
                img: "img/cosmitjana.jpg"
            },
            {
                phase: "FAÇANA SUPERIOR",
                q: "Les finestres han de ser pures. Com?",
                options: ["Finestres 'A Cappella' (Sense instruments)", "Finestres amb Cortines Elèctriques", "Finestres amb Doble Vidre Climalit"],
                correct: 0,
                img: "img/fachadamitjana.jpg"
            },
            {
                phase: "SOSTRE",
                q: "Qui vigila des dels merlets?",
                options: ["Un Trobador (Amor i Pedra)", "Un DJ Medieval", "Un Astronauta"],
                correct: 0,
                img: "img/decomitjana.jpg"
            }
        ]
    },
    {
        id: "renaixement",
        name: "El Duomo (Renaixement)",
        style: "renaissance",
        full_tower_img: "img/torrerenaixement.jpg",
        phases: [
            {
                phase: "BASE",
                q: "La nova base ha de ser humana. Què posem?",
                options: ["Base Teocèntrica (Déu al centre)", "Base Humanista (L'Home al centre)", "Base Alienígena"],
                correct: 1,
                img: "img/baserenaixement.jpg"
            },
            {
                phase: "COS INFERIOR",
                q: "L'estructura es complica. Com?",
                options: ["Columnes de Polifonia (Veus independents)", "Columnes d'una sola veu", "Columnes Bluetooth"],
                correct: 0,
                img: "img/cosrenaixement.jpg"
            },
            {
                phase: "FAÇANA SUPERIOR",
                q: "Com distribuïm les finestres?",
                options: ["Amb Caos Medieval", "Amb Equilibri i Simetria Perfecta", "Amb Graffitis Urbans"],
                correct: 1,
                img: "img/fachadarenaixement.jpg"
            },
            {
                phase: "CÚPULA",
                q: "Quina tecnologia ens ajuda a difondre l'obra?",
                options: ["La Cúpula de la Impremta", "La Cúpula del PDF", "La Cúpula del Fax"],
                correct: 0,
                img: "img/decorenaixement.jpg"
            }
        ]
    },
    {
        id: "barroc",
        name: "El Palau Daurat (Barroc)",
        style: "baroque",
        full_tower_img: "img/torrebarroc.jpg",
        phases: [
            {
                phase: "BASE",
                q: "El ritme de construcció no pot parar. Usem...",
                options: ["Fonaments de Baix Continu (Sempre sonant)", "Fonaments de Silenci", "Fonaments de Reggaeton"],
                correct: 0,
                img: "img/basebarroc.jpg"
            },
            {
                phase: "COS INFERIOR",
                q: "Volem drama a la façana! Què fem?",
                options: ["Contrast Fort/Fluix (Terrasses)", "Tot pla i avorrit", "Minimalisme Suec"],
                correct: 0,
                img: "img/cosbarroc.jpg"
            },
            {
                phase: "FAÇANA SUPERIOR",
                q: "Queda un espai buit a la paret...",
                options: ["Deixa'l respirar", "Omple'l d'Ornaments! (Horror Vacui)", "Posa-hi un pòster de gatets"],
                correct: 1,
                img: "img/fachadabarroc.jpg"
            },
            {
                phase: "SOSTRE",
                q: "El teatre del palau serà per a...",
                options: ["Recitar poemes", "Cantar Òpera (Teatre total)", "Fer Karaokes"],
                correct: 1,
                img: "img/decebarroc.jpg"
            }
        ]
    },
    {
        id: "classicisme",
        name: "El Temple Grec (Classicisme)",
        style: "classic",
        full_tower_img: "img/torreclassica.jpg",
        phases: [
            {
                phase: "BASE",
                q: "Busquem la bellesa ideal. Què mana?",
                options: ["La Raó i l'Ordre", "L'Emoció descontrolada", "L'Atzar pur"],
                correct: 0,
                img: "img/baseclassica.jpg"
            },
            {
                phase: "COS INFERIOR",
                q: "Les columnes han de tenir una jerarquia.",
                options: ["Melodia Acompanyada (Melodia + Suport)", "Polifonia complexa", "Soroll Blanc"],
                correct: 0,
                img: "img/cosclassic.jpg"
            },
            {
                phase: "FAÇANA SUPERIOR",
                q: "Quin instrument presideix el saló?",
                options: ["El vell Clavicèmbal", "El nou Piano-Forte (Forts i Fluixos)", "Un Sintetitzador"],
                correct: 1,
                img: "img/fachadaclassica.jpg"
            },
            {
                phase: "FRONTO",
                q: "Com tanquem l'edifici?",
                options: ["Amb Elegància i Senzillesa", "Amb Exageració Barroca", "Amb Llums de Neó"],
                correct: 0,
                img: "img/decoclassica.jpg"
            }
        ]
    },
    {
        id: "romanticisme",
        name: "La Torre Gòtica (Romanticisme)",
        style: "romantic",
        full_tower_img: "img/torreromanticisme.jpg",
        phases: [
            {
                phase: "BASE",
                q: "Què barregem amb el ciment?",
                options: ["Lògica pura", "Sentiment i Passió", "Aigua destil·lada"],
                correct: 1,
                img: "img/baseromanticisme.jpg"
            },
            {
                phase: "COS INFERIOR",
                q: "Els murs han de poder respirar. Com?",
                options: ["Estructura 'Rubato' (Flexible)", "Estructura Rígida", "Estructura de Gel"],
                correct: 0,
                img: "img/cosromanticisme.jpg"
            },
            {
                phase: "FAÇANA SUPERIOR",
                q: "Qui és l'arquitecte heroi?",
                options: ["El Virtuós (El geni solitari)", "L'oficinista", "El robot"],
                correct: 0,
                img: "img/fachadaromanticisme.jpg"
            },
            {
                phase: "AGULLA",
                q: "La torre s'inspira en...",
                options: ["La Fàbrica gris", "La Natura Salvatge i Misteriosa", "Un Centre Comercial"],
                correct: 1,
                img: "img/decoromanticisme.jpg"
            }
        ]
    },
    {
        id: "segle_xx",
        name: "El Gratacels (S. XX)",
        style: "modern",
        full_tower_img: "img/torresegleXX.jpg",
        phases: [
            {
                phase: "BASE",
                q: "Què fem amb les normes antigues?",
                options: ["Les Trenquem (Ruptura)", "Les respectem", "Les plastifiquem"],
                correct: 0,
                img: "img/basesegleXX.jpg"
            },
            {
                phase: "COS INFERIOR",
                q: "Aquesta estructura sona estranya...",
                options: ["És formigó Dissonant (Tensió)", "És harmonia clàssica", "És cotó fluix"],
                correct: 0,
                img: "img/cossegleXX.jpg"
            },
            {
                phase: "FAÇANA SUPERIOR",
                q: "Quin estil té aquest vidre?",
                options: ["Impressionisme (Atmòsfera)", "Realisme Avorrit", "Pixel Art"],
                correct: 0,
                img: "img/façana segleXX.jpg"
            },
            {
                phase: "ANTENA",
                q: "Quina tecnologia corona l'edifici?",
                options: ["L'Enregistrament Sonor i Ràdio", "El Telègraf", "El Tam-Tam"],
                correct: 0,
                img: "img/decosegleXX.jpg"
            }
        ]
    }
];

let currentTowerIndex = 0; // Starts at 0, logic handles locking
let currentPhaseIndex = 0;
let highestUnlockedTower = 0; // Progress tracker
let towerState = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const gameUI = document.getElementById('game-ui');
const towerListEl = document.getElementById('tower-list');
const projectNameEl = document.getElementById('current-project-name');
const phaseEl = document.getElementById('current-phase');
const towerStackEl = document.getElementById('tower-stack');
const speechBubble = document.getElementById('speech-bubble');
const foremanQuestion = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const victoryModal = document.getElementById('victory-modal');
const victoryTitle = document.getElementById('victory-title');
const victoryMsg = document.getElementById('victory-msg');
const victoryImg = document.getElementById('victory-img');
const closeModalBtn = document.getElementById('close-modal-btn');
const bgMusic = document.getElementById('bg-music');
const volumeSlider = document.getElementById('bg-music-slider');

// Error Modal Elements
const feedbackModal = document.getElementById('feedback-modal');
const closeFeedbackBtn = document.getElementById('close-feedback-btn');

// Initialization
startBtn.addEventListener('click', startGame);
closeModalBtn.addEventListener('click', handleModalClose);
closeFeedbackBtn.addEventListener('click', () => {
    feedbackModal.classList.add('hidden');
});

// Volume Control
volumeSlider.addEventListener('input', (e) => {
    bgMusic.volume = e.target.value;
});

function startGame() {
    startScreen.classList.add('hidden');
    gameUI.classList.remove('hidden-ui');

    // Start Audio
    bgMusic.volume = 0.2;
    bgMusic.play().catch(e => console.log("Audio play blocked until interaction"));

    // Initialize State
    towerState = TOWERS.map(() => ({ completed: false }));
    highestUnlockedTower = 0;

    initSidebar();
    selectTower(0); // Auto select first tower
}

function initSidebar() {
    towerListEl.innerHTML = "";
    TOWERS.forEach((t, i) => {
        const li = document.createElement('li');
        li.innerText = t.name;
        li.classList.add('tower-item');

        // Locking Logic
        if (i > highestUnlockedTower) {
            li.classList.add('locked');
        } else {
            li.addEventListener('click', () => selectTower(i));
        }

        if (towerState[i] && towerState[i].completed) {
            li.classList.add('completed');
        }

        towerListEl.appendChild(li);
    });
}

function selectTower(index) {
    if (index > highestUnlockedTower) return; // Security check
    if (towerState[index].completed) return; // Already done

    currentTowerIndex = index;
    currentPhaseIndex = 0;

    // UI Update
    updateSidebarUI(index);

    // Setup Game Area
    projectNameEl.innerText = TOWERS[index].name;
    towerStackEl.innerHTML = ""; // Clear current tower visuals

    loadPhase();
}

function updateSidebarUI(activeIndex) {
    const items = towerListEl.querySelectorAll('.tower-item');
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === activeIndex) item.classList.add('active');
    });
}

function loadPhase() {
    const towerData = TOWERS[currentTowerIndex];
    if (currentPhaseIndex >= towerData.phases.length) {
        completeTower();
        return;
    }

    const phaseData = towerData.phases[currentPhaseIndex];

    // Update HUD
    phaseEl.innerText = phaseData.phase;

    // Foreman Interaction
    speechBubble.classList.remove('hidden');
    foremanQuestion.innerText = phaseData.q;

    // Options Shuffling
    optionsContainer.innerHTML = "";

    // Create an array of indices [0, 1, 2] and shuffle it
    let indices = [0, 1, 2];
    shuffleArray(indices);

    indices.forEach(idx => {
        const btn = document.createElement('button');
        btn.classList.add('opt-btn');
        btn.innerText = phaseData.options[idx];
        btn.onclick = () => checkAnswer(idx, phaseData.correct);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIdx, correctIdx) {
    if (selectedIdx === correctIdx) {
        addBlock();
    } else {
        showFeedback();
    }
}

function showFeedback() {
    feedbackModal.classList.remove('hidden');
}

function addBlock() {
    const towerData = TOWERS[currentTowerIndex];
    const block = document.createElement('div');
    block.classList.add('block', towerData.style);

    const phaseData = towerData.phases[currentPhaseIndex];
    const phaseName = phaseData.phase;

    // Check if image exists
    if (phaseData.img) {
        block.style.backgroundImage = `url('${phaseData.img}')`;
        block.innerText = "";
    } else {
        block.innerText = `${phaseName} OK`;
    }

    // Prepend adds the new block as the FIRST child of the container.
    // With flex-direction: column and justify-content: flex-end, 
    // the container packs items to the bottom.
    // The first child is visually at the TOP of the stack if we imagine the stack grows upwards?
    // Wait. 
    // flex-direction: column. 
    // [Child 1, Child 2, Child 3]
    // Visual: 
    // Child 1 (Top)
    // Child 2
    // Child 3 (Bottom)

    // We want Base at Bottom. Base is added first.
    // Step 1: Add Base. 
    // If we Append: [Base]. Visual: Base.
    // Step 2: Add Body.
    // If we Prepend: [Body, Base]. Visual: Body (Top), Base (Bottom).
    // Step 3: Add Roof.
    // If we Prepend: [Roof, Body, Base]. Visual: Roof (Top), Body, Base (Bottom).

    // This is CORRECT for stacking upwards!
    towerStackEl.prepend(block);

    // Advance
    currentPhaseIndex++;
    setTimeout(loadPhase, 500);
}

function completeTower() {
    towerState[currentTowerIndex].completed = true;
    highestUnlockedTower++; // Unlock next

    // Refresh Sidebar to show checkmarks and unlock next
    initSidebar();

    // Show Modal
    victoryTitle.innerText = "TORRE COMPLETADA!";
    victoryMsg.innerText = `Has construït correctament: ${TOWERS[currentTowerIndex].name}`;

    if (TOWERS[currentTowerIndex].full_tower_img) {
        victoryImg.src = TOWERS[currentTowerIndex].full_tower_img;
        victoryImg.classList.remove('hidden');
    } else {
        victoryImg.classList.add('hidden');
    }

    victoryModal.classList.remove('hidden');

    // Check if ALL are completed
    if (highestUnlockedTower >= TOWERS.length) {
        grandVictory();
    }
}

function handleModalClose() {
    victoryModal.classList.add('hidden');

    // If not game over, move to next tower if available
    if (highestUnlockedTower < TOWERS.length) {
        selectTower(highestUnlockedTower);
    }
}

function grandVictory() {
    victoryTitle.innerText = "GRAN ARQUITECTE!";
    victoryMsg.innerText = "Has completat totes les etapes de la història de la música. Enhorabona!";
    victoryImg.classList.add('hidden'); // Hide tower image for grand victory
    closeModalBtn.innerText = "Jugar de nou";
    closeModalBtn.onclick = () => location.reload();
}

// Utility: Fisher-Yates Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
