
var compteur = 0;

function addone() {
    compteur = compteur + 1;
    document.getElementById("compteur").textContent = compteur;
}

document.getElementById("button").addEventListener("click", addone);
