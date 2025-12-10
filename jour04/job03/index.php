<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form id="filterForm">

        <input type="text" id="id" placeholder="ID">
        <input type="text" id="nom" placeholder="nom">
        <select id="type">
            <option value="">-- Tous les types --</option>
            <option value="Plante">Plante</option>
            <option value="Feu">Feu</option>
            <option value="Eau">Eau</option>
            <option value="Poison">Poison</option>
            <option value="Insecte">Insecte</option>
            <option value="Vol">Vol</option>
            <option value="Électrik">Électrik</option>
            <option value="Normal">Normal</option>
        </select>

        <input type="button" id="filter" value="Filtrer">


    </form>
    <div id="results"></div>

    <script src="./script.js"></script>
</body>

<!-- </html>Téléchargez le fichier suivant : pokemon.json
Créez un formulaire permettant de trier ces données.
Il doit contenir les champs suivants :
● id (input type text),
● nom (input type text),
● type (liste déroulante <select>)
● filtrer (input type button).
Lorsque l’on clique sur “filtrer”, le script doit à l’aide de Fetch, récupérer le contenu du
fichier et lister les éléments répondant aux critères sélectionnés en les affichant sur une
page HTML.  -->