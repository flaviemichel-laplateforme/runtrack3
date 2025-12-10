<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeu du Taquin - La Plateforme</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
            background-color: #f5f5f5;
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
        }

        #gameBoard {
            display: grid;
            grid-template-columns: repeat(3, 150px);
            grid-template-rows: repeat(3, 150px);
            gap: 2px;
            margin: 20px auto;
            width: fit-content;
            background-color: #333;
            padding: 2px;
            border-radius: 10px;
        }

        .tile {
            width: 150px;
            height: 150px;
            cursor: pointer;
            transition: all 0.3s ease;
            background-size: cover;
            background-position: center;
        }

        .tile:hover:not(.empty) {
            opacity: 0.8;
            transform: scale(0.95);
        }

        .tile.empty {
            background-color: #ddd;
            cursor: default;
        }

        #message {
            font-size: 24px;
            font-weight: bold;
            margin: 20px 0;
            min-height: 30px;
        }

        .success {
            color: #4CAF50;
        }

        button {
            padding: 12px 24px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #4CAF50;
            color: white;
            margin: 10px;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #45a049;
        }

        button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }

        #restart {
            display: none;
        }
    </style>
</head>

<body>
    <h1>🎮 Jeu du Taquin - La Plateforme</h1>
    
    <div id="gameBoard"></div>
    
    <div id="message"></div>
    
    <button id="restart">🔄 Recommencer</button>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="./script.js"></script>
</body>

</html>