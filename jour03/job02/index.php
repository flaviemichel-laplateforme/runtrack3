<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
    background-color: #f5f5f5;
}

h1 {
    color: #333;
}

h2 {
    color: #666;
    margin-top: 30px;
}

button {
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
}

button:hover {
    background-color: #45a049;
}

/* Zone source */
#source {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    min-height: 120px;
    margin: 10px auto;
    max-width: 800px;
}

#source img {
    width: 100px;
    height: 100px;
    cursor: grab;
    border: 2px solid #999;
    border-radius: 5px;
    transition: transform 0.2s;
}

#source img:hover {
    transform: scale(1.1);
}

/* Zone destination */
#destination {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    background-color: #d0e8d0;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 800px;
}

/* Cases de dépôt */
.dropzone {
    width: 100px;
    height: 100px;
    border: 3px dashed #4CAF50;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dropzone.ui-droppable-hover {
    background-color: #c8e6c9;
    border-color: #2E7D32;
}

.dropzone img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
}

/* Message */
#message {
    font-size: 28px;
    font-weight: bold;
    margin-top: 30px;
}

.gagne {
    color: green;
}

.perdu {
    color: red;
}

/* Image en cours de drag */
.ui-draggable-dragging {
    z-index: 1000;
    opacity: 0.8;
}
</style>
<body>
    <h1>Reconstituer l'arc-en-ciel</h1>

    <button id="melanger">Melanger</button>
    <button id="verifier">Verifier</button>
    
<h2>Glisser les images pour reconstituer l'arc-en-ciel</h2>
    <div id="container">
        <img src="arc1.png" data-order="1">
        <img src="arc2.png" data-order="2">
        <img src="arc3.png" data-order="3">
        <img src="arc4.png" data-order="4">
        <img src="arc5.png" data-order="5">
        <img src="arc6.png" data-order="6">
    </div>

    <h2>Déposez ici dans l'ordre :</h2>
    <div id="destination">
        <div class="dropzone" data-position="1"></div>
        <div class="dropzone" data-position="2"></div>
        <div class="dropzone" data-position="3"></div>
        <div class="dropzone" data-position="4"></div>
        <div class="dropzone" data-position="5"></div>
        <div class="dropzone" data-position="6"></div>
    </div>

    <p id="message"></p>

        
   
    
    
    

    

   


<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
 <script src="./script.js"></script>
</body>

</html>