const chronoDisplay = document.getElementById('chronoDisplay');

function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}

let tempsEcoule = 0;
let intervalId = null;
let enMarche = false;
let tour = [];

const chronoMarcheArret = document.getElementById('chronoMarcheArret');

function toggleChrono() {
    if (enMarche) {
        arreterChrono();
        enMarche = false;
        chronoMarcheArret.classList.remove('btn-pause');
        chronoMarcheArret.classList.add('btn-neon');
        chronoMarcheArret.textContent = 'Démarrer';
    } else {
        demarrerChrono();
        enMarche = true;
        chronoMarcheArret.classList.remove('btn-neon');
        chronoMarcheArret.classList.add('btn-pause');
        chronoMarcheArret.textContent = 'Pause';
    }
}

function demarrerChrono() {
    intervalId = setInterval(function () {
        tempsEcoule++;
        console.log("temps ecoule: ", tempsEcoule);
        afficherTemps(tempsEcoule);

    }, 1000);

}

function arreterChrono() {
    clearInterval(intervalId);
}

function afficherTemps(secondes) {
    const heures = Math.floor((secondes / 3600));
    const minutes = Math.floor((secondes % 3600) / 60);
    const sec = secondes % 60;

    const heureFormatee = `${formatNumber(heures)}:${formatNumber(minutes)}:${formatNumber(sec)}`;
    chronoDisplay.textContent = heureFormatee;
}

const chronoTour = document.getElementById('chronoTour');
chronoTour.addEventListener('click', () => {
    enregistrerTour();
})


function enregistrerTour() {
    const listeTours = document.getElementById('listeTours');

    // Formater le temps actuel
    const heures = Math.floor(tempsEcoule / 3600);
    const minutes = Math.floor((tempsEcoule % 3600) / 60);
    const sec = tempsEcoule % 60;
    const tempsFormate = `${formatNumber(heures)}:${formatNumber(minutes)}:${formatNumber(sec)}`;

    // Ajouter au tableau
    tour.push(tempsFormate);

    // Créer une nouvelle ligne dans le tableau HTML
    const nouvelleLigne = document.createElement('tr');
    nouvelleLigne.innerHTML = `
        <td>Tour ${tour.length}</td>
        <td>${tempsFormate}</td>
    `;

    // Ajouter la ligne au tbody
    listeTours.appendChild(nouvelleLigne);
}

chronoMarcheArret.addEventListener('click', () => {
    toggleChrono();
});

const chronoReset = document.getElementById('chronoReset');
chronoReset.addEventListener('click', () => {
    arreterChrono();
    tempsEcoule = 0;
    enMarche = false;
    afficherTemps(0);

    // Vider le tableau des tours
    const listeTours = document.getElementById('listeTours');
    listeTours.innerHTML = '';
    tour = [];
});