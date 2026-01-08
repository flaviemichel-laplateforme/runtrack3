const chronoInput = document.getElementById('chronoInput')

function formatNumber(num) {
    return num < 10 ? "0" + num : num;

}

let tempsEcoule = 0;
let intervalId = null;
let enMarche = false;
let tour = [];

function toggleChrono() {
    if (enMarche) {
        arreterChrono();
        enMarche = false;
    } else {
        demarrerChrono();
        enMarche = true;
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
    chronoInput.value = heureFormatee;
}

const chronoTour = document.getElementById('chronoTour');
chronoTour.addEventListener('click', () => {
    enregistrerTour();
})


function enregistrerTour() {

}

const chronoMarcheArret = document.getElementById('chronoMarcheArret');

chronoMarcheArret.addEventListener('click', () => {
    toggleChrono();
})

