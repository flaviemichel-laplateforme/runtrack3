
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
            let dropzone = $(this);
            let nouvelleImage = ui.draggable;

            console.log("Une image est déposée!");

            // Si la dropzone contient déjà une image, la remettre dans #container
            if (dropzone.find('img').length > 0) {
                let ancienneImage = dropzone.find('img');
                $('#container').append(ancienneImage);
            }

            // Ajouter la nouvelle image dans la dropzone
            dropzone.append(nouvelleImage);

            // Repositionner l'image (enlever les styles de position absolue du drag)
            nouvelleImage.css({
                top: 0,
                left: 0,
                position: 'relative'
            });
        }
    })

    // BOUTON MÉLANGER
    $('#melanger').on('click', function () {
        // Récupérer toutes les images du container ET des dropzones
        let toutesLesImages = $('#container img, .dropzone img').toArray();

        // Les remettre toutes dans le container
        toutesLesImages.forEach(function (img) {
            $('#container').append(img);
        });

        // Récupérer les images maintenant dans le container
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

        // Effacer le message
        $('#message').text('');
    });

    // BOUTON VÉRIFIER
    $('#verifier').on('click', function () {
        let toutCorrect = true;
        let toutRempli = true;

        // Parcourir toutes les dropzones
        $('.dropzone').each(function () {
            let position = $(this).data('position'); // Position attendue
            let image = $(this).find('img'); // Image dans la dropzone

            // Vérifier si une image est présente
            if (image.length === 0) {
                toutRempli = false;
            }
            // Vérifier si l'image est au bon endroit
            else if (image.data('order') !== position) {
                toutCorrect = false;
            }
        });

        // Afficher le message approprié
        if (!toutRempli) {
            $('#message').text('⚠️ Placez toutes les images !').css('color', 'orange');
        } else if (toutCorrect) {
            $('#message').text('🎉 Vous avez gagné !').css('color', 'green');
        } else {
            $('#message').text('❌ Vous avez perdu !').css('color', 'red');
        }
    });
});
