<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>job04</title>
</head>

<body>
    <h1>Liste des utilisateurs</h1>

    <button id="update">Mise à jour</button>

    <table id="users-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>

            </tr>
        </thead>
        <tbody>
            <!-- Les données seront insérées ici -->
        </tbody>

    </table>

    <div id="message"></div>

<!-- 
Dans votre page index.php, créez un tableau <table> permettant de contenir ces
informations ainsi qu’un <button> “update”. Lorsque l’on clique sur ce bouton, le tableau
doit se mettre à jour et contenir l’ensemble des informations des utilisateurs présents
dans la base de données.
Vous pouvez tester votre code en ajoutant/supprimant des utilisateurs à l’aide de
phpmyadmin entre deux clics -->
    <script src="./script.js"></script>
</body>

