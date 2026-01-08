const minuteurInput = document.getElementById('minuteurInput');

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

    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    const sec = secondes % 60;


    const heureFormatee = `${formatNumber(heures)}:${formatNumber(minutes)}:${formatNumber(sec)}`;
    minuteurInput.value = heureFormatee;

}
afficherTemps(300);
console.log(minuteurInput);


console.log(tempsRestant);

function formatNumber(num) {
    return num < 10 ? "0" + num : num;

}

minuteurInput.addEventListener('change', () => {
    const valeur = minuteurInput.value;
    const parties = valeur.split(':');

    if (parties.length === 3) {
        const heures = parseInt(parties[0]) || 0;
        const minutes = parseInt(parties[1]) || 0;
        const secondes = parseInt(parties[2]) || 0;

        tempsRestant = (heures * 3600) + (minutes * 60) + secondes;
    }
})
console.log(formatNumber(5));




const boutonDemarrer = document.getElementById('minuteurDemarrer');
const boutonStop = document.getElementById('minuteurStop');
const boutonReset = document.getElementById('minuteurReset');

boutonDemarrer.addEventListener('click', () => {
    demarrerMinuteur();
});

boutonStop.addEventListener('click', () => {
    arreterMinuteur();
})

boutonReset.addEventListener('click', () => {
    redemarrerMinuteur();
})




