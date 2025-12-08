
let compteur = 0;

if (button) {
    function addone() {
        compteur = compteur + 1;
        if (compteur)
            document.getElementById("compteur").textContent = compteur;
    }

    document.getElementById("button").addEventListener("click", addone);
}

//Correction
// const button = document.getElementById("button");
//if (button) {
//function addOne(){
// const compteur = document.getElementById("compteur");
//if(compteur)
//compteur.textcontent++;
//}
//button.addEventListener("click", addOne);
//}