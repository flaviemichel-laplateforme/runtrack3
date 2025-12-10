
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
    console.log("Tout est OK");

    $('#container img').draggable(
        {
            revert: 'invalid',
            cursor: 'grabbing'
        }
    )

    $('.dropzone').droppable({
        accept: 'img',
        drop: function (event, ui) {
            console.log("Une image est déposé!");
        }
    })

    // BOUTON MÉLANGER
    $('#melanger').on('click', function () {
        // Récupérer toutes les images
        let images = $('#container img').toArray();

        // Algorithme Fisher-Yates pour mélanger
        for (let i = images.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [images[i], images[j]] = [images[j], images[i]];
        }

        // Vider le conteneur et remettre dans le nouvel ordre
        $('#container').empty();
        images.forEach(img => $('#container').append(img));

        // Réinitialiser le draggable
        $('#container img').draggable({
            revert: 'invalid',
            cursor: 'grabbing'
        });
    });
});
