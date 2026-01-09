const minuteurDisplay = document.getElementById('minuteurDisplay');

let tempsRestant = 300;
let intervalId = null;

function demarrerMinuteur() {
    intervalId = setInterval(function () {
        tempsRestant--;
        console.log("temps restant: ", tempsRestant);
        afficherTemps(tempsRestant);

        if (tempsRestant <= 0) {
            arreterMinuteur();
            alert('Le temps est écoulé');
        }
    }, 1000);
}
function redemarrerMinuteur() {
    arreterMinuteur();
    tempsRestant = 300;
    afficherTemps(tempsRestant);
}

function arreterMinuteur() {
    // Arrêter l'interval
    clearInterval(intervalId);
}

function afficherTemps(secondes) {
    tempsRestant = secondes;
    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    const sec = secondes % 60;


    const heureFormatee = `${formatNumber(heures)}:${formatNumber(minutes)}:${formatNumber(sec)}`;
    minuteurDisplay.textContent = heureFormatee;

}

afficherTemps(300);


console.log(tempsRestant);

function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}

const boutonDemarrer = document.getElementById('minuteurDemarrer');
const boutonStop = document.getElementById('minuteurStop');
const boutonReset = document.getElementById('minuteurReset');

boutonDemarrer.addEventListener('click', () => {
    demarrerMinuteur();
});

boutonStop.addEventListener('click', () => {
    arreterMinuteur();
});

boutonReset.addEventListener('click', () => {
    redemarrerMinuteur();
});

const retirer = document.getElementById('minuteurRetirer');
const ajouter = document.getElementById('minuteurAjouter');

retirer.addEventListener('click', () => {
    afficherTemps(tempsRestant - 60);
});

ajouter.addEventListener('click', () => {
    afficherTemps(tempsRestant + 60);
});


