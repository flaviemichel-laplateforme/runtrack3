
//JOB 02

// Dans cet exercice, 6 images s’assemblent pour former un arc - en - ciel, il vous faudra les
// mélanger puis les remettre en ordre.

// Le but de ce job sera dans un premier temps de créer une balise < button >.Cette balise
// servira à mélanger l’ensemble des images de l’arc - en - ciel.
// Par la suite, vous devrez faire en sorte qu’il soit possible de remettre les images dans le
// bon ordre, en utilisant un ou plusieurs conteneurs.
// Une fois que les 6 images sont ordonnées, un message s’affiche en dessous:
// Si l'arc-en-ciel est bien reconstitué, le message “Vous avez gagné” s’affiche en vert.
// Sinon, le message “Vous avez perdu” s’affiche en rouge.

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