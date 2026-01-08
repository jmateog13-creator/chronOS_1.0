const QUESTION_POOL = [
    // --- EDAT MITJANA (Déu, Monestirs, Monodia) ---
    { id: "m1", text: "Defineix la textura on tothom canta la mateixa melodia a l'uníson.", era: "EDAT MITJANA" },
    { id: "m2", text: "Indica quina funció tenien els Trobadors als castells (Amor i diversió).", era: "EDAT MITJANA" },
    { id: "m3", text: "Veritat o Fals: A l'església no s'utilitzaven instruments (A Cappella).", era: "EDAT MITJANA" },
    { id: "m4", text: "Identifica la primera compositora dona reconeguda: Hildegard von Bingen.", era: "EDAT MITJANA" },
    { id: "m5", text: "Descriu l'instrument de corda amb forma de pera (El Llaüt).", era: "EDAT MITJANA" },

    // --- RENAIXEMENT (Humanisme, Polifonia, Impremta) ---
    { id: "r1", text: "Explica el canvi de pensament del Teocentrisme a l'Humanisme.", era: "RENAIXEMENT" },
    { id: "r2", text: "Analitza la textura de 'moltes veus' amb ritmes independents (Polifonia).", era: "RENAIXEMENT" },
    { id: "r3", text: "Classifica les veus del cor: Soprano, Contralt, Tenor i Baix.", era: "RENAIXEMENT" },
    { id: "r4", text: "Quin invent va permetre deixar de copiar partitures a mà?", era: "RENAIXEMENT" },
    { id: "r5", text: "Compositor model de l'equilibri i la música religiosa (Palestrina).", era: "RENAIXEMENT" },

    // --- BARROC (Luxe, Òpera, Baix Continu) ---
    { id: "b1", text: "Característiques de l'arquitectura: 'Horror Vacui', luxe i ornamentació.", era: "BARROC" },
    { id: "b2", text: "Defineix la tècnica del 'Baix Continu' interpretada pel Clavicèmbal.", era: "BARROC" },
    { id: "b3", text: "Diferències entre estil recitat i ària en el naixement de l'Òpera.", era: "BARROC" },
    { id: "b4", text: "L'ús del contrast dramàtic: Fort vs Fluix, Ràpid vs Lent.", era: "BARROC" },
    { id: "b5", text: "La Monarquia Absoluta i la seva influència en les arts (Versalles).", era: "BARROC" },

    // --- CLASSICISME (Ordre, Piano, Mozart) ---
    { id: "c1", text: "La recerca de la Bellesa ideal a través de la Raó i l'Ordre.", era: "CLASSICISME" },
    { id: "c2", text: "Diferències tècniques entre el Clavicèmbal i el nou Piano-Forte.", era: "CLASSICISME" },
    { id: "c3", text: "Estructura de l'Orquestra: Distribució ordenada per seccions.", era: "CLASSICISME" },
    { id: "c4", text: "Anàlisi de la textura 'Melodia Acompanyada' (Senzillesa).", era: "CLASSICISME" },
    { id: "c5", text: "Biografia breu: W.A. Mozart, el nen prodigi de Viena.", era: "CLASSICISME" },

    // --- ROMANTICISME (Emoció, Natura, Beethoven) ---
    { id: "rom1", text: "L'exaltació de l'Individualisme i els sentiments (Por, Amor, Ràbia).", era: "ROMANTICISME" },
    { id: "rom2", text: "Ús del 'Rubato' com a eina expressiva de llibertat rítmica.", era: "ROMANTICISME" },
    { id: "rom3", text: "La Natura com a font d'inspiració: tempestes i misteri.", era: "ROMANTICISME" },
    { id: "rom4", text: "El fenomen del 'Virtuosisme' instrumental (El músic com a heroi).", era: "ROMANTICISME" },
    { id: "rom5", text: "Beethoven i el pas cap a l'expressió personal (La 9a Simfonia).", era: "ROMANTICISME" },

    // --- SEGLE XX (Ruptura, Avantguardes) ---
    { id: "s1", text: "L'impacte de la tecnologia: Enregistrament sonor i Ràdio.", era: "SEGLE XX" },
    { id: "s2", text: "Comparativa: Impressionisme (Atmòsfera) vs Expressionisme (Crit).", era: "SEGLE XX" },
    { id: "s3", text: "La ruptura amb la Tonalitat i les regles tradicionals.", era: "SEGLE XX" },
    { id: "s4", text: "Arnold Schönberg i la invenció del Dodecafonisme.", era: "SEGLE XX" },
    { id: "s5", text: "L'ús de la Dissonància com a element expressiu de tensió.", era: "SEGLE XX" }
];

const ERAS = ["EDAT MITJANA", "RENAIXEMENT", "BARROC", "CLASSICISME", "ROMANTICISME", "SEGLE XX"];
let currentEraIndex = 0;
let currentEra = "";
let score = 0;
let draggedItem = null;
let touchOffset = { x: 0, y: 0 };
let completedEras = []; // Track completed eras

// Selectors
const startScreen = document.getElementById('start-screen');
const startGameBtn = document.getElementById('start-game-btn');
const eraMenu = document.getElementById('era-menu');
const eraSelectBtns = document.querySelectorAll('.era-select-btn');

const gameContainer = document.getElementById('game-container');
const pileEl = document.getElementById('question-pile');
const trashCan = document.getElementById('trash-can');
const eraTitleEl = document.getElementById('paper-era-title');
const eraDisplayEl = document.getElementById('current-era-display');
const dropZone = document.getElementById('exam-paper');
const dropZoneContent = document.getElementById('drop-zone-content');
const scoreEl = document.getElementById('score');
const feedbackEl = document.getElementById('feedback-msg');
const victoryModal = document.getElementById('victory-modal');
const nextBtn = document.getElementById('next-level-btn');
const menuBtn = document.getElementById('menu-btn');
const gradeStamp = document.getElementById('grade-stamp');

const bgMusic = document.getElementById('bg-music');
const volumeSlider = document.getElementById('volume-slider');

// --- APP FLOW ---

startGameBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    updateEraMenu();
    eraMenu.classList.remove('hidden');
});

eraSelectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const era = btn.dataset.era;
        currentEraIndex = ERAS.indexOf(era);
        startLevel(era);
    });
});

function updateEraMenu() {
    eraSelectBtns.forEach(btn => {
        const era = btn.dataset.era;
        if (completedEras.includes(era)) {
            btn.classList.add('completed');
        } else {
            btn.classList.remove('completed');
        }
    });
}

function startLevel(era) {
    currentEra = era;
    eraMenu.classList.add('hidden');

    // Start music if not playing
    if (bgMusic.paused) {
        bgMusic.play().catch(e => console.log("Audio play blocked", e));
    }

    initLevel();
}

volumeSlider.addEventListener('input', (e) => {
    bgMusic.volume = e.target.value;
});

menuBtn.addEventListener('click', () => {
    victoryModal.classList.add('hidden');
    updateEraMenu();
    eraMenu.classList.remove('hidden');
});

nextBtn.addEventListener('click', () => {
    victoryModal.classList.add('hidden');
    currentEraIndex = (currentEraIndex + 1) % ERAS.length;
    startLevel(ERAS[currentEraIndex]);
});

// --- GAME LOGIC ---

function initLevel() {
    score = 0;
    scoreEl.innerText = score;
    eraTitleEl.innerText = `ÈPOCA: ${currentEra}`;
    eraDisplayEl.innerText = currentEra;
    feedbackEl.innerText = "";
    gradeStamp.className = "stamp-area";

    pileEl.innerHTML = "";
    dropZoneContent.innerHTML = '<p class="placeholder-text">Arrossega aquí les preguntes...</p>';

    let correctQs = QUESTION_POOL.filter(q => q.era === currentEra);
    let otherQs = QUESTION_POOL.filter(q => q.era !== currentEra);

    otherQs.sort(() => Math.random() - 0.5);
    let distractors = otherQs.slice(0, 7); // More distractors to use the trash can

    let levelQs = [...correctQs, ...distractors];
    levelQs.sort(() => Math.random() - 0.5);

    levelQs.forEach((q, index) => createQuestionSlip(q, index, levelQs.length));
}

function createQuestionSlip(qData, index, total) {
    const slip = document.createElement('div');
    slip.classList.add('question-slip');
    slip.innerText = qData.text;
    slip.dataset.era = qData.era;
    slip.draggable = true;

    // Better spreading to avoid full overlap
    const row = Math.floor(index / 3);
    const col = index % 3;

    const baseLeft = 10 + (col * 25);
    const baseTop = 10 + (row * 20);

    const randomOffset = () => (Math.random() * 10) - 5;

    slip.style.left = (baseLeft + randomOffset()) + "%";
    slip.style.top = (baseTop + randomOffset()) + "%";

    const maxRot = 10;
    const rot = Math.floor(Math.random() * (maxRot * 2 + 1)) - maxRot;
    slip.style.transform = `rotate(${rot}deg)`;

    pileEl.appendChild(slip);

    slip.addEventListener('dragstart', dragStart);
    slip.addEventListener('dragend', dragEnd);
    slip.addEventListener('touchstart', touchStart, { passive: false });
    slip.addEventListener('touchmove', touchMove, { passive: false });
    slip.addEventListener('touchend', touchEnd, { passive: false });
}

// DRAG & DROP

function dragStart(e) {
    draggedItem = this;
    setTimeout(() => this.style.opacity = '0.5', 0);
}

function dragEnd(e) {
    this.style.opacity = '1';
    draggedItem = null;

    // Clear hover visual on containers
    dropZone.classList.remove('hover');
    trashCan.classList.remove('hover');
}

// Desktop Hover Feedback
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('hover');
});

dropZone.addEventListener('dragleave', () => dropZone.classList.remove('hover'));

trashCan.addEventListener('dragover', (e) => {
    e.preventDefault();
    trashCan.classList.add('hover');
});

trashCan.addEventListener('dragleave', () => trashCan.classList.remove('hover'));

// Drop
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedItem) handleDropOnPaper(draggedItem);
});

trashCan.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedItem) handleDropOnTrash(draggedItem);
});

function handleDropOnPaper(element) {
    const era = element.dataset.era;
    if (era === currentEra) {
        feedbackEl.innerText = "Excel·lent!";
        feedbackEl.style.color = "#27ae60";
        acceptQuestion(element);
    } else {
        feedbackEl.innerText = "Error! Això no és d'aquesta època.";
        feedbackEl.style.color = "#e74c3c";
        element.classList.add('shake');
        setTimeout(() => element.classList.remove('shake'), 500);
    }
}

function handleDropOnTrash(element) {
    // Visual feedback
    element.style.transform = "scale(0) rotate(720deg)";
    element.style.opacity = "0";
    setTimeout(() => {
        element.remove();
    }, 300);

    feedbackEl.innerText = "Netejant la taula...";
    feedbackEl.style.color = "#aaa";
}

function acceptQuestion(element) {
    const placeholder = dropZoneContent.querySelector('.placeholder-text');
    if (placeholder) placeholder.remove();

    element.classList.add('stuck');
    element.style.transform = "none";
    element.style.left = "auto";
    element.style.top = "auto";
    element.removeAttribute('draggable');

    dropZoneContent.appendChild(element);

    score++;
    scoreEl.innerText = score;

    if (score >= 5) {
        levelComplete();
    }
}

function levelComplete() {
    if (!completedEras.includes(currentEra)) {
        completedEras.push(currentEra);
    }
    gradeStamp.classList.add('stamp-a');
    setTimeout(() => {
        victoryModal.classList.remove('hidden');
    }, 1500);
}

// --- TOUCH LOGIC ---
function touchStart(e) {
    e.preventDefault();
    draggedItem = this;
    const touch = e.touches[0];
    const rect = draggedItem.getBoundingClientRect();
    touchOffset.x = touch.clientX - rect.left;
    touchOffset.y = touch.clientY - rect.top;
    draggedItem.style.zIndex = 1000;
}

function touchMove(e) {
    e.preventDefault();
    if (!draggedItem) return;
    const touch = e.touches[0];
    draggedItem.style.position = 'fixed';
    draggedItem.style.left = (touch.clientX - touchOffset.x) + 'px';
    draggedItem.style.top = (touch.clientY - touchOffset.y) + 'px';

    // Check hit tests for mobile hover feedback if needed (optional)
}

function touchEnd(e) {
    e.preventDefault();
    if (!draggedItem) return;

    const paperRect = dropZone.getBoundingClientRect();
    const trashRect = trashCan.getBoundingClientRect();
    const itemRect = draggedItem.getBoundingClientRect();

    const cx = itemRect.left + itemRect.width / 2;
    const cy = itemRect.top + itemRect.height / 2;

    if (cx >= paperRect.left && cx <= paperRect.right && cy >= paperRect.top && cy <= paperRect.bottom) {
        handleDropOnPaper(draggedItem);
    } else if (cx >= trashRect.left && cx <= trashRect.right && cy >= trashRect.top && cy <= trashRect.bottom) {
        handleDropOnTrash(draggedItem);
    } else {
        // Re-append to desk so it's not fixed on screen
        const deskRect = pileEl.getBoundingClientRect();
        draggedItem.style.position = 'absolute';
        draggedItem.style.left = (cx - deskRect.left - itemRect.width / 2) + 'px';
        draggedItem.style.top = (cy - deskRect.top - itemRect.height / 2) + 'px';
    }

    draggedItem.style.zIndex = '';
    draggedItem = null;
}

// Ready
console.log("Teacher Simulator Loaded");

