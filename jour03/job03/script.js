// Job 03 - Jeu du Taquin

$(document).ready(function () {
    console.log("Jeu du Taquin chargé !");

    // Configuration du jeu
    let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 9 = case vide
    let emptyIndex = 8; // Position de la case vide (index dans le tableau)
    let gameWon = false;

    // Initialiser le jeu
    function initGame() {
        gameWon = false;
        $('#message').text('');
        $('#restart').hide();
        shuffleTiles();
        renderBoard();
    }

    // Mélanger les tuiles de façon aléatoire (avec vérification de résolvabilité)
    function shuffleTiles() {
        // Mélanger jusqu'à obtenir une configuration résolvable
        do {
            tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            // Fisher-Yates shuffle
            for (let i = tiles.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
            }

            // Trouver la nouvelle position de la case vide
            emptyIndex = tiles.indexOf(9);

        } while (!isSolvable() || isAlreadySolved());
    }

    // Vérifier si le puzzle est résolvable (basé sur les inversions)
    function isSolvable() {
        let inversions = 0;

        // Compter les inversions (paires dans le mauvais ordre)
        for (let i = 0; i < tiles.length - 1; i++) {
            for (let j = i + 1; j < tiles.length; j++) {
                // Ignorer la case vide (9)
                if (tiles[i] !== 9 && tiles[j] !== 9 && tiles[i] > tiles[j]) {
                    inversions++;
                }
            }
        }

        // Pour une grille 3x3, le puzzle est résolvable si le nombre d'inversions est pair
        return inversions % 2 === 0;
    }

    // Vérifier si le puzzle est déjà résolu (éviter de démarrer avec la solution)
    function isAlreadySolved() {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i] !== i + 1) return false;
        }
        return true;
    }

    // Afficher le plateau de jeu
    function renderBoard() {
        $('#gameBoard').empty();

        tiles.forEach((tile, index) => {
            let $tile = $('<div>')
                .addClass('tile')
                .attr('data-index', index)
                .attr('data-value', tile);

            if (tile === 9) {
                // Case vide
                $tile.addClass('empty');
            } else {
                // Case avec image
                $tile.css('background-image', `url('${tile}.PNG')`);

                // Ajouter l'événement click seulement si le jeu n'est pas gagné
                if (!gameWon) {
                    $tile.on('click', function () {
                        handleTileClick(index);
                    });
                }
            }

            $('#gameBoard').append($tile);
        });
    }

    // Gérer le clic sur une tuile
    function handleTileClick(clickedIndex) {
        if (gameWon) return; // Ne rien faire si le jeu est gagné

        // Vérifier si la tuile cliquée est adjacente à la case vide
        if (isAdjacent(clickedIndex, emptyIndex)) {
            // Échanger la tuile cliquée avec la case vide
            [tiles[clickedIndex], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[clickedIndex]];

            // Mettre à jour la position de la case vide
            emptyIndex = clickedIndex;

            // Réafficher le plateau
            renderBoard();

            // Vérifier si le joueur a gagné
            checkWin();
        }
    }

    // Vérifier si deux positions sont adjacentes (horizontalement ou verticalement)
    function isAdjacent(index1, index2) {
        let row1 = Math.floor(index1 / 3);
        let col1 = index1 % 3;
        let row2 = Math.floor(index2 / 3);
        let col2 = index2 % 3;

        // Adjacent horizontalement (même ligne, colonnes voisines)
        if (row1 === row2 && Math.abs(col1 - col2) === 1) return true;

        // Adjacent verticalement (même colonne, lignes voisines)
        if (col1 === col2 && Math.abs(row1 - row2) === 1) return true;

        return false;
    }

    // Vérifier si le joueur a gagné
    function checkWin() {
        // Le puzzle est résolu si toutes les tuiles sont dans l'ordre
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i] !== i + 1) return; // Pas encore gagné
        }

        // Le joueur a gagné !
        gameWon = true;
        $('#message').text('🎉 Vous avez gagné !').addClass('success');
        $('#restart').show();

        console.log("Victoire !");
    }

    // Bouton Recommencer
    $('#restart').on('click', function () {
        console.log("Nouvelle partie...");
        initGame();
    });

    // Démarrer le jeu au chargement
    initGame();
});