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

const chronoMarcheArret = document.getElementById('chronoMarcheArret');

chronoMarcheArret.addEventListener('click', () => {
    toggleChrono();
})

