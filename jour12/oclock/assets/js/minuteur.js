const minuteurInput = document.getElementById('minuteurInput');

let tempsDepart = 300;
intervalId = null;

function demarrerMinuteur() {

}

function arreterMinuteur() {

}

function afficherTemps(secondes) {

    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor(secondes / 60);
    const sec = secondes % 60;


    const heureFormatee = `${formatNumber(heures)}:${formatNumber(minutes)}:${formatNumber(sec)}`;
    minuteurInput.value = heureFormatee;

}
afficherTemps(300);
console.log(minuteurInput);


console.log(tempsDepart);

function formatNumber(num) {
    return num < 10 ? "0" + num : num;

}
console.log(formatNumber(5));



