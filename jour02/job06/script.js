// Le code Konami : ↑ ↑ ↓ ↓ ← → ← → B A

const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"

];
console.log(konamiCode);
let konamiIndex = 0; //Position actuelle

document.addEventListener("keydown", function (event) {

    const key = event.key.toLowerCase();
    const expectedKey = konamiCode[konamiIndex].toLocaleLowerCase();

    if (key === expectedKey) {
        //SI bonne touche, on passe à la suivante
        konamiIndex++;

        if (konamiIndex === konamiCode.length) {
            activerLaPlateforme();
            konamiIndex = 0;
        }

    } else {
        // Mauvaise touche, on recommence
        konamiIndex = 0;
    }
});

function activerLaPlateforme() {
    document.body.classList.add("laplateforme");
    console.log("Code Konami activé ! Bienvenue à la Plateforme_");
}