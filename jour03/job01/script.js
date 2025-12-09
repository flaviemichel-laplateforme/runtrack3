// Job 01

// Créez une balise < button > et sélectionnez - la dans votre code JavaScript.
// En cliquant sur le bouton, vous devrez faire apparaître le texte sur votre page HTML:
// “Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit,
//     ensuite on prie.”
// Ensuite créez un bouton qui servira à cacher tout l’élément html.
// Job 01

$(document).ready(function () {
    // Bouton pour afficher le texte
    $('#button').on('click', function (e) {
        e.preventDefault();

        $("#text").show(1000);//vitesse
        $('#text').text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.");
        console.log("#button");
    });

    // Bouton pour cacher l'élément
    $('#hide').on('click', function (e) {
        e.preventDefault();

        $('#text').hide(1000);//vitesse
        console.log('#hide');
    });
});