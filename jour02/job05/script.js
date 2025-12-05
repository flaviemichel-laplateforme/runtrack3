document.addEventListener("keydown", function (event) {
    var textarea = document.getElementById("keylogger");
    var key = event.key;

    if (/^[a-zA-Z]$/.test(key)) {

        if (document.activeElement === textarea) {
            event.preventDefault(); // Empêche la lettre normale de s'afficher
            textarea.value += key + key; // Ajoute la lettre 2 fois
        } else {
            textarea.value += key;
        }
    }

});
