const periodes = [
    {
        nom: "Edat Mitjana",
        definicio: "Aquest període va des de la caiguda de l'Imperi Romà fins al segle XV. La música era principalment religiosa, amb el cant gregorià com a protagonista. Les partitures s'escrivien amb neumes i la polifonia començava a aparèixer." 
    },
    {
        nom: "Renaixement",
        definicio: "En aquest període (segles XV-XVI), la música esdevé més polifònica i es desenvolupa la música vocal i instrumental. S'utilitzen formes com la missa, el motet i la cançó. L'art busca l'harmonia i l'equilibri." 
    },
    {
        nom: "Barroc",
        definicio: "Aquest període (aprox. 1600-1750) es caracteritza per l'ús del baix continu, l'òpera, i una gran expressivitat. Compositors com Bach, Händel i Vivaldi són destacats. La música és ornamentada i dramàtica." 
    },
    {
        nom: "Classicisme",
        definicio: "Entre 1750 i 1820, la música es torna més clara i equilibrada. S'estableixen les formes com la simfonia i el quartet de corda. Mozart, Haydn i Beethoven són compositors importants. Predomina la melodia i la simplicitat." 
    },
    {
        nom: "Romanticisme",
        definicio: "Al segle XIX, la música expressa sentiments intensos i llibertat creativa. Es fan servir grans orquestres i es busca l'expressivitat. Compositors com Chopin, Schumann i Txaikovski són representatius." 
    },
    {
        nom: "Segle XX",
        definicio: "Aquest període es caracteritza per la gran varietat d'estils i l'experimentació. Apareixen el jazz, la música electrònica i l'atonalitat. Compositors com Stravinsky, Schönberg i Debussy innoven constantment." 
    }
];

let periodeActual = {};

function nouPeriode() {
    periodeActual = periodes[Math.floor(Math.random() * periodes.length)];
    document.getElementById('definicio').textContent = periodeActual.definicio;
    document.getElementById('resposta').value = '';
    document.getElementById('missatge').textContent = '';
    document.getElementById('següent').style.display = 'none';
    document.getElementById('resposta').disabled = false;
    document.getElementById('comprova').disabled = false;
}

function comprovaResposta() {
    const respostaUsuari = document.getElementById('resposta').value.trim().toLowerCase();
    const respostaCorrecta = periodeActual.nom.toLowerCase();
    if (respostaUsuari === respostaCorrecta) {
        document.getElementById('missatge').textContent = 'Correcte! 🎉';
        document.getElementById('missatge').style.color = '#2a8a3e';
        document.getElementById('següent').style.display = 'inline-block';
        document.getElementById('resposta').disabled = true;
        document.getElementById('comprova').disabled = true;
    } else {
        document.getElementById('missatge').textContent = 'Incorrecte. Torna-ho a intentar!';
        document.getElementById('missatge').style.color = '#c0392b';
    }
}

document.getElementById('comprova').addEventListener('click', comprovaResposta);
document.getElementById('següent').addEventListener('click', nouPeriode);

document.getElementById('resposta').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        comprovaResposta();
    }
});

// Inicia el primer període
nouPeriode();

// --- JOC D'ADIVINANÇA DE PERÍODES MUSICALS ---

const periodesAdivinanza = [
    {
        nom: "Edat Mitjana",
        definicio: "Aquest període va des de la caiguda de l'Imperi Romà fins al segle XV. La música era principalment religiosa, amb el cant gregorià com a protagonista. Les partitures s'escrivien amb neumes i la polifonia començava a aparèixer."
    },
    {
        nom: "Renaixement",
        definicio: "En aquest període (segles XV-XVI), la música esdevé més polifònica i es desenvolupa la música vocal i instrumental. S'utilitzen formes com la missa, el motet i la cançó. L'art busca l'harmonia i l'equilibri."
    },
    {
        nom: "Barroc",
        definicio: "Aquest període (aprox. 1600-1750) es caracteritza per l'ús del baix continu, l'òpera, i una gran expressivitat. Compositors com Bach, Händel i Vivaldi són destacats. La música és ornamentada i dramàtica."
    },
    {
        nom: "Classicisme",
        definicio: "Entre 1750 i 1820, la música es torna més clara i equilibrada. S'estableixen les formes com la simfonia i el quartet de corda. Mozart, Haydn i Beethoven són compositors importants. Predomina la melodia i la simplicitat."
    },
    {
        nom: "Romanticisme",
        definicio: "Al segle XIX, la música expressa sentiments intensos i llibertat creativa. Es fan servir grans orquestres i es busca l'expressivitat. Compositors com Chopin, Schumann i Txaikovski són representatius."
    },
    {
        nom: "Segle XX",
        definicio: "Aquest període es caracteritza per la gran varietat d'estils i l'experimentació. Apareixen el jazz, la música electrònica i l'atonalitat. Compositors com Stravinsky, Schönberg i Debussy innoven constantment."
    }
];

let periodeAdivinanzaActual = {};

function nouAdivinanza() {
    periodeAdivinanzaActual = periodesAdivinanza[Math.floor(Math.random() * periodesAdivinanza.length)];
    document.getElementById('adivinanza-definicio').textContent = periodeAdivinanzaActual.definicio;
    document.getElementById('adivinanza-missatge').textContent = '';
    document.getElementById('adivinanza-seguent').style.display = 'none';
    mostrarOpcionsPeriodes();
}

function mostrarOpcionsPeriodes() {
    const opcions = periodesAdivinanza.map(p => p.nom);
    // Barregem les opcions
    const barrejades = opcions.sort(() => Math.random() - 0.5);
    const container = document.getElementById('opcions-periodes');
    container.innerHTML = '';
    barrejades.forEach(nom => {
        const btn = document.createElement('button');
        btn.textContent = nom;
        btn.className = 'boto';
        btn.onclick = () => comprovaAdivinanza(nom);
        container.appendChild(btn);
    });
}

function comprovaAdivinanza(resposta) {
    if (resposta === periodeAdivinanzaActual.nom) {
        document.getElementById('adivinanza-missatge').textContent = 'Correcte! 🎶';
        document.getElementById('adivinanza-missatge').style.color = '#2a8a3e';
        document.getElementById('adivinanza-seguent').style.display = 'inline-block';
        // Desactivar botons
        Array.from(document.querySelectorAll('#opcions-periodes button')).forEach(b => b.disabled = true);
    } else {
        document.getElementById('adivinanza-missatge').textContent = 'Incorrecte. Torna-ho a intentar!';
        document.getElementById('adivinanza-missatge').style.color = '#c0392b';
    }
}

document.getElementById('adivinanza-seguent').addEventListener('click', nouAdivinanza);

// Inicia la primera adivinanza quan es carrega la pàgina
if (document.getElementById('adivinanza-container')) {
    nouAdivinanza();
}
