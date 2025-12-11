# 📚 Cours Complet JavaScript/PHP - La Plateforme

**Cours détaillé couvrant tous les exercices réalisés**

---

## 📖 Table des matières

1. [Introduction aux technologies web](#1-introduction-aux-technologies-web)
2. [Jour 01 - JavaScript Vanilla](#2-jour-01---javascript-vanilla)
3. [Jour 02 - Événements avancés](#3-jour-02---événements-avancés)
4. [Jour 03 - jQuery et jQuery UI](#4-jour-03---jquery-et-jquery-ui)
5. [Jour 04 - PHP et Base de données](#5-jour-04---php-et-base-de-données)
6. [Concepts avancés](#6-concepts-avancés)
7. [Sécurité web](#7-sécurité-web)
8. [Débogage et outils](#8-débogage-et-outils)

---

## 1. Introduction aux technologies web

### 1.1 Architecture Client-Serveur

```
┌──────────────┐         HTTP Request          ┌──────────────┐
│              │ ──────────────────────────────>│              │
│  Navigateur  │                                │   Serveur    │
│  (Client)    │ <──────────────────────────────│   (PHP)      │
│              │         HTTP Response          │              │
└──────────────┘                                └──────────────┘
     │                                                 │
     │ JavaScript                                      │ PHP + MySQL
     │ (Côté client)                                   │ (Côté serveur)
```

### 1.2 Les langages utilisés

| Langage | Exécution | Rôle |
|---------|-----------|------|
| **HTML** | Navigateur | Structure de la page |
| **CSS** | Navigateur | Mise en forme |
| **JavaScript** | Navigateur | Interactivité côté client |
| **PHP** | Serveur | Logique serveur, base de données |
| **MySQL** | Serveur | Stockage des données |

---

## 2. Jour 01 - JavaScript Vanilla

### 2.1 Variables et types de données

#### Déclaration de variables

```javascript
// Ancienne méthode (éviter)
var x = 10;

// Méthodes modernes (ES6+)
let y = 20;      // Variable modifiable
const z = 30;    // Constante (non modifiable)
```

**Règles importantes :**
- Utiliser `const` par défaut
- Utiliser `let` si la valeur doit changer
- Ne jamais utiliser `var` (problèmes de scope)

#### Types de données

```javascript
// Nombres
let age = 25;
let prix = 19.99;

// Chaînes de caractères
let nom = "Dupont";
let prenom = 'Jean';
let message = `Bonjour ${prenom}`; // Template literal

// Booléens
let estMajeur = true;
let estConnecte = false;

// Tableaux
let nombres = [1, 2, 3, 4, 5];
let fruits = ["pomme", "banane", "orange"];

// Objets
let personne = {
    nom: "Dupont",
    prenom: "Jean",
    age: 25
};

// Null et undefined
let vide = null;        // Valeur volontairement vide
let nonDefini;          // Undefined (pas encore assigné)
```

---

### 2.2 Fonctions

#### Exercice : FizzBuzz (job05)

**Énoncé :** Afficher les nombres de 1 à 100, mais :
- "Fizz" pour les multiples de 3
- "Buzz" pour les multiples de 5
- "FizzBuzz" pour les multiples de 3 ET 5

```javascript
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
```

**Explication :**
- `i % 3 === 0` → Le reste de la division par 3 est 0 (multiple de 3)
- `&&` → ET logique (les deux conditions doivent être vraies)
- `||` → OU logique (au moins une condition doit être vraie)

#### Ordre des conditions

⚠️ **Important** : Tester d'abord la condition la plus spécifique !

```javascript
// ✅ Correct
if (i % 3 === 0 && i % 5 === 0) { ... }  // FizzBuzz d'abord
else if (i % 3 === 0) { ... }             // Puis Fizz

// ❌ Incorrect
if (i % 3 === 0) { ... }                  // Fizz capturera aussi FizzBuzz !
else if (i % 3 === 0 && i % 5 === 0) { ... }
```

---

### 2.3 Exercice : Nombres premiers (job08)

**Énoncé :** Vérifier si deux nombres sont premiers et retourner leur somme.

```javascript
function sommenombrespremiers(a, b) {
    // Fonction pour vérifier si un nombre est premier
    function estPremier(n) {
        if (n <= 1) return false;        // 0 et 1 ne sont pas premiers
        if (n === 2) return true;        // 2 est le seul nombre premier pair
        if (n % 2 === 0) return false;   // Éliminer les nombres pairs
        
        // Tester uniquement jusqu'à √n (optimisation)
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    // Vérifier les deux nombres
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    }
    return false;
}

console.log(sommenombrespremiers(3, 5));  // 8
console.log(sommenombrespremiers(4, 6));  // false
```

**Concepts clés :**
- Fonction imbriquée (`estPremier` dans `sommenombrespremiers`)
- `Math.sqrt()` pour optimiser (pas besoin de tester au-delà de √n)
- `i += 2` pour sauter les nombres pairs

---

### 2.4 Manipulation du DOM

#### Sélection d'éléments

```javascript
// Par ID
let element = document.getElementById('monId');

// Par classe
let elements = document.getElementsByClassName('maClasse');

// Par sélecteur CSS (moderne)
let element = document.querySelector('#monId');
let elements = document.querySelectorAll('.maClasse');
```

#### Modification du contenu

```javascript
// Changer le texte
element.textContent = "Nouveau texte";

// Changer le HTML
element.innerHTML = "<strong>Texte en gras</strong>";

// Changer un attribut
element.setAttribute('src', 'image.jpg');

// Changer le style
element.style.color = "red";
element.style.backgroundColor = "#f0f0f0";
```

---

### 2.5 Exercice : Keylogger (job04)

**Énoncé :** 
- Afficher dans un textarea les touches tapées
- Si une touche est pressée 2 fois, la mettre en gras

```javascript
let textarea = document.getElementById('keylogger');
let lastKey = '';
let lastTime = 0;

document.addEventListener('keydown', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut
    
    let key = event.key;
    let currentTime = Date.now();
    
    // Vérifier si c'est la même touche en moins de 500ms
    if (key === lastKey && (currentTime - lastTime) < 500) {
        // Double frappe : mettre en gras
        textarea.value += key + key;
        lastKey = '';  // Réinitialiser
    } else {
        // Simple frappe
        textarea.value += key;
        lastKey = key;
        lastTime = currentTime;
    }
});
```

**Concepts clés :**
- `event.key` → Récupère la touche pressée
- `event.preventDefault()` → Empêche le comportement par défaut
- `Date.now()` → Timestamp actuel (en millisecondes)
- Variables pour mémoriser l'état précédent

---

## 3. Jour 02 - Événements avancés

### 3.1 Barre de progression au scroll (job05)

**Énoncé :** Créer un footer avec une barre de progression qui se remplit en scrollant.

#### HTML
```html
<footer id="footer">
    <div id="progress"></div>
</footer>
```

#### CSS
```css
#footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(
        to right,
        #00ff00 0%,      /* Début vert */
        #00ff00 0%,      /* Position dynamique */
        #eee 0%,         /* Reste gris */
        #eee 100%
    );
}
```

#### JavaScript
```javascript
window.addEventListener('scroll', function() {
    // Calculer le pourcentage de scroll
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let percentage = (scrollTop / scrollHeight) * 100;
    
    // Mettre à jour le gradient
    let footer = document.getElementById('footer');
    footer.style.background = `linear-gradient(
        to right,
        #00ff00 0%,
        #00ff00 ${percentage}%,
        #eee ${percentage}%,
        #eee 100%
    )`;
});
```

**Explications :**

| Variable | Description |
|----------|-------------|
| `scrollTop` | Distance scrollée depuis le haut (pixels) |
| `scrollHeight` | Hauteur totale scrollable |
| `percentage` | Pourcentage de scroll (0-100) |

**Formule :**
```
Pourcentage = (Position actuelle / Hauteur totale) × 100
```

---

### 3.2 Code Konami (job06)

**Énoncé :** Détecter la séquence ↑↑↓↓←→←→BA

```javascript
const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

let konamiIndex = 0;

document.addEventListener('keydown', function(event) {
    let key = event.key.toLowerCase();
    
    // Vérifier si la touche correspond à la séquence
    if (key === konamiCode[konamiIndex].toLowerCase()) {
        konamiIndex++;
        
        // Séquence complète ?
        if (konamiIndex === konamiCode.length) {
            document.body.classList.add('konami-active');
            console.log("🎮 Code Konami activé !");
            konamiIndex = 0; // Réinitialiser
        }
    } else {
        konamiIndex = 0; // Mauvaise touche, recommencer
    }
});
```

**Concepts clés :**
- **Index de suivi** : `konamiIndex` pour suivre la progression
- **Réinitialisation** : Si mauvaise touche, recommencer à 0
- **Détection complète** : Quand l'index atteint la longueur du tableau

---

## 4. Jour 03 - jQuery et jQuery UI

### 4.1 Introduction à jQuery

jQuery est une **bibliothèque JavaScript** qui simplifie :
- La sélection d'éléments
- La manipulation du DOM
- La gestion des événements
- Les requêtes AJAX

#### Installation

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

#### Syntaxe de base

```javascript
// Équivalent JavaScript vs jQuery

// JavaScript
document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('text').textContent = "Clic !";
});

// jQuery (plus court)
$('#btn').on('click', function() {
    $('#text').text('Clic !');
});
```

**Le symbole `$`** est un alias pour `jQuery()`.

---

### 4.2 Sélecteurs jQuery

| Sélecteur | Description | Exemple |
|-----------|-------------|---------|
| `$('#id')` | Par ID | `$('#container')` |
| `$('.class')` | Par classe | `$('.tile')` |
| `$('tag')` | Par balise | `$('img')` |
| `$('[attr]')` | Par attribut | `$('[data-order]')` |
| `$('parent child')` | Descendant | `$('#container img')` |
| `$('parent > child')` | Enfant direct | `$('#menu > li')` |

---

### 4.3 Méthodes jQuery essentielles

#### Manipulation du contenu

```javascript
// Lire/écrire du texte
$('#message').text();           // Lire
$('#message').text('Nouveau');  // Écrire

// Lire/écrire du HTML
$('#container').html();
$('#container').html('<p>Contenu</p>');

// Attributs
$('img').attr('src', 'image.jpg');
$('img').attr('src');  // Lire

// Data attributes
$('.tile').data('order', 5);
let order = $('.tile').data('order');
```

#### Manipulation du DOM

```javascript
// Ajouter du contenu
$('#container').append($tile);     // À la fin
$('#container').prepend($tile);    // Au début

// Vider un élément
$('#container').empty();

// Supprimer un élément
$('.tile').remove();

// Créer un élément
let $div = $('<div>').addClass('tile').text('Contenu');
```

#### CSS et classes

```javascript
// Ajouter/retirer des classes
$('.tile').addClass('active');
$('.tile').removeClass('active');
$('.tile').toggleClass('active');

// Vérifier une classe
if ($('.tile').hasClass('active')) { ... }

// Modifier le CSS
$('.tile').css('color', 'red');
$('.tile').css({
    color: 'red',
    fontSize: '20px'
});
```

---

### 4.4 Exercice : Puzzle Arc-en-ciel (job02)

**Énoncé :** Créer un puzzle avec drag & drop pour reconstituer un arc-en-ciel.

#### Structure HTML

```html
<button id="melanger">Mélanger</button>
<button id="verifier">Vérifier</button>

<!-- Zone source -->
<div id="container">
    <img src="arc1.png" data-order="1">
    <img src="arc2.png" data-order="2">
    <!-- ... -->
    <img src="arc6.png" data-order="6">
</div>

<!-- Zone destination -->
<div id="destination">
    <div class="dropzone" data-position="1"></div>
    <div class="dropzone" data-position="2"></div>
    <!-- ... -->
    <div class="dropzone" data-position="6"></div>
</div>

<p id="message"></p>
```

#### jQuery UI - Drag & Drop

```javascript
// Rendre les images déplaçables
$('#container img').draggable({
    revert: 'invalid',  // Retour si dépôt invalide
    cursor: 'grabbing'  // Curseur pendant le drag
});

// Créer les zones de dépôt
$('.dropzone').droppable({
    accept: 'img',  // N'accepte que les images
    drop: function(event, ui) {
        let dropzone = $(this);
        let image = ui.draggable;
        
        // Si dropzone contient déjà une image, la remettre
        if (dropzone.find('img').length > 0) {
            let oldImage = dropzone.find('img');
            $('#container').append(oldImage);
        }
        
        // Ajouter la nouvelle image
        dropzone.append(image);
        
        // Repositionner
        image.css({
            top: 0,
            left: 0,
            position: 'relative'
        });
    }
});
```

**Paramètres droppable :**
- `accept` → Type d'éléments acceptés
- `drop` → Fonction appelée lors du dépôt
- `event` → Événement jQuery
- `ui.draggable` → L'élément déplacé

---

#### Algorithme Fisher-Yates (mélange)

```javascript
$('#melanger').on('click', function() {
    // Récupérer toutes les images
    let images = $('#container img, .dropzone img').toArray();
    
    // Les remettre dans le container
    images.forEach(img => $('#container').append(img));
    
    // Mélanger avec Fisher-Yates
    images = $('#container img').toArray();
    for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    
    // Réafficher dans l'ordre mélangé
    $('#container').empty();
    images.forEach(img => $('#container').append(img));
    
    // Réactiver le draggable
    $('#container img').draggable({
        revert: 'invalid',
        cursor: 'grabbing'
    });
});
```

**Pourquoi Fisher-Yates ?**
- Complexité O(n) - très rapide
- Distribution uniforme (tous les ordres possibles ont la même probabilité)
- Algorithme standard pour mélanger des tableaux

---

#### Vérification de la solution

```javascript
$('#verifier').on('click', function() {
    let toutCorrect = true;
    let toutRempli = true;
    
    $('.dropzone').each(function() {
        let position = $(this).data('position');
        let image = $(this).find('img');
        
        if (image.length === 0) {
            toutRempli = false;
        } else if (image.data('order') !== position) {
            toutCorrect = false;
        }
    });
    
    if (!toutRempli) {
        $('#message').text('⚠️ Placez toutes les images !').css('color', 'orange');
    } else if (toutCorrect) {
        $('#message').text('🎉 Vous avez gagné !').css('color', 'green');
    } else {
        $('#message').text('❌ Vous avez perdu !').css('color', 'red');
    }
});
```

**Logique :**
1. Parcourir toutes les dropzones
2. Comparer `data-order` de l'image avec `data-position` de la dropzone
3. Afficher le message approprié

---

### 4.5 Exercice : Jeu du Taquin (job03)

**Énoncé :** Créer un jeu du taquin (8 tuiles + 1 case vide dans une grille 3×3).

#### Représentation de la grille

```
Grille visuelle :         Tableau :
┌───┬───┬───┐            [1, 2, 3,
│ 1 │ 2 │ 3 │             4, 5, 6,
├───┼───┼───┤             7, 8, 9]
│ 4 │ 5 │ 6 │
├───┼───┼───┤            Index 0-8
│ 7 │ 8 │   │            9 = case vide
└───┴───┴───┘
```

#### Conversion index ↔ position

```javascript
// Index → Position (row, col)
let row = Math.floor(index / 3);
let col = index % 3;

// Position → Index
let index = row * 3 + col;
```

**Exemples :**
```
Index 0 : row=0, col=0 → Case (0,0) = en haut à gauche
Index 4 : row=1, col=1 → Case (1,1) = au centre
Index 8 : row=2, col=2 → Case (2,2) = en bas à droite
```

---

#### Vérification d'adjacence

```javascript
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
```

**Exemples :**
```
Index 4 (centre) est adjacent à :
- Index 1 (haut)
- Index 7 (bas)
- Index 3 (gauche)
- Index 5 (droite)
```

---

#### Théorie de résolvabilité

⚠️ **Important** : Tous les mélanges ne sont pas résolvables !

**Inversion** = paire de tuiles dans le mauvais ordre.

Exemple :
```javascript
[2, 1, 3, 4, 5, 6, 7, 8, 9]
 ^  ^
 Inversion : 2 > 1
```

**Règle pour grille 3×3 :**
- Nombre d'inversions **pair** → Résolvable ✅
- Nombre d'inversions **impair** → NON résolvable ❌

```javascript
function isSolvable() {
    let inversions = 0;
    
    for (let i = 0; i < tiles.length - 1; i++) {
        for (let j = i + 1; j < tiles.length; j++) {
            // Ignorer la case vide
            if (tiles[i] !== 9 && tiles[j] !== 9) {
                if (tiles[i] > tiles[j]) {
                    inversions++;
                }
            }
        }
    }
    
    return inversions % 2 === 0;
}
```

---

## 5. Jour 04 - PHP et Base de données

### 5.1 Introduction à PHP

PHP (Hypertext Preprocessor) est un langage **côté serveur** qui :
- S'exécute sur le serveur (pas dans le navigateur)
- Génère du HTML dynamique
- Interagit avec des bases de données
- Traite les formulaires

#### Syntaxe de base

```php
<?php
// Ceci est du PHP

// Variables (commence par $)
$nom = "Dupont";
$age = 25;

// Affichage
echo "Bonjour $nom";
echo "Tu as $age ans";

// Concaténation
echo "Bonjour " . $nom . " !";

// Structures de contrôle
if ($age >= 18) {
    echo "Majeur";
} else {
    echo "Mineur";
}

// Boucles
for ($i = 0; $i < 10; $i++) {
    echo $i;
}

// Fonctions
function addition($a, $b) {
    return $a + $b;
}

$resultat = addition(5, 3);  // 8
?>
```

---

### 5.2 PDO - PHP Data Objects

PDO est une **interface** pour interagir avec des bases de données en PHP.

#### Connexion à MySQL

```php
<?php
function connect_pdo() {
    try {
        $pdo = new PDO(
            "mysql:host=localhost;dbname=utilisateurs;charset=utf8",
            "root",      // Utilisateur
            ""           // Mot de passe
        );
        
        // Mode d'erreur : exceptions
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Mode de récupération : tableau associatif
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        
        return $pdo;
    } catch (PDOException $e) {
        die("Erreur : " . $e->getMessage());
    }
}

$pdo = connect_pdo();
?>
```

**Paramètres de connexion :**
- `host=localhost` → Serveur en local
- `dbname=utilisateurs` → Nom de la base de données
- `charset=utf8` → Encodage des caractères
- `root` → Identifiant MySQL (par défaut sur Laragon)
- `""` → Mot de passe vide (par défaut)

---

### 5.3 Requêtes préparées

Les requêtes préparées **protègent contre l'injection SQL**.

#### Sans paramètres

```php
<?php
$sql = "SELECT id, nom, prenom, email FROM utilisateurs";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$users = $stmt->fetchAll();
?>
```

#### Avec paramètres

```php
<?php
// Avec marqueurs nommés
$sql = "SELECT * FROM utilisateurs WHERE nom = :nom AND age > :age";
$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':nom' => 'Dupont',
    ':age' => 18
]);
$users = $stmt->fetchAll();

// Avec marqueurs positionnels
$sql = "SELECT * FROM utilisateurs WHERE nom = ? AND age > ?";
$stmt = $pdo->prepare($sql);
$stmt->execute(['Dupont', 18]);
$users = $stmt->fetchAll();
?>
```

**Pourquoi des requêtes préparées ?**

❌ **Sans préparation (DANGEREUX) :**
```php
$nom = $_GET['nom'];  // Peut contenir : ' OR '1'='1
$sql = "SELECT * FROM users WHERE nom = '$nom'";
// Résultat : SELECT * FROM users WHERE nom = '' OR '1'='1'
// → Retourne TOUS les utilisateurs !
```

✅ **Avec préparation (SÉCURISÉ) :**
```php
$sql = "SELECT * FROM users WHERE nom = :nom";
$stmt->prepare($sql);
$stmt->execute([':nom' => $nom]);
// Le contenu de $nom est échappé automatiquement
```

---

### 5.4 Retourner du JSON

Pour communiquer avec JavaScript via Fetch API :

```php
<?php
header('Content-Type: application/json; charset=utf-8');

$pdo = connect_pdo();

$sql = "SELECT id, nom, prenom, email FROM utilisateurs";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$users = $stmt->fetchAll();

echo json_encode($users, JSON_UNESCAPED_UNICODE);
?>
```

**Options de `json_encode()` :**
- `JSON_UNESCAPED_UNICODE` → Préserve les accents (é, è, à)
- `JSON_PRETTY_PRINT` → Formatage lisible (pour déboguer)
- `JSON_NUMERIC_CHECK` → Convertit les chaînes numériques en nombres

---

### 5.5 Exercice : Tableau dynamique (job04)

**Énoncé :** Créer un tableau qui se met à jour avec les données de la BDD au clic sur "Update".

#### users.php (Backend)

```php
<?php
header('Content-Type: application/json; charset=utf-8');

function connect_pdo() {
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=utilisateurs", "root", "");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Erreur de connexion : ' . $e->getMessage()]);
        exit;
    }
}

try {
    $pdo = connect_pdo();
    $sql = "SELECT id, nom, prenom, email FROM utilisateurs";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $users = $stmt->fetchAll();
    echo json_encode($users, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erreur SQL : ' . $e->getMessage()]);
    exit;
}
?>
```

#### script.js (Frontend)

```javascript
function updateUsers() {
    fetch('users.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur HTTP : ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                console.error('Erreur :', data.error);
                return;
            }
            
            const tbody = document.querySelector('#users-table tbody');
            tbody.innerHTML = '';
            
            data.forEach(user => {
                const tr = document.createElement('tr');
                
                const tdId = document.createElement('td');
                tdId.textContent = user.id;
                
                const tdNom = document.createElement('td');
                tdNom.textContent = user.nom;
                
                const tdPrenom = document.createElement('td');
                tdPrenom.textContent = user.prenom;
                
                const tdEmail = document.createElement('td');
                tdEmail.textContent = user.email;
                
                tr.appendChild(tdId);
                tr.appendChild(tdNom);
                tr.appendChild(tdPrenom);
                tr.appendChild(tdEmail);
                
                tbody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
}

document.getElementById('update').addEventListener('click', updateUsers);
document.addEventListener('DOMContentLoaded', updateUsers);
```

---

## 6. Concepts avancés

### 6.1 Asynchrone en JavaScript

JavaScript est **mono-thread** mais peut faire des opérations **asynchrones**.

#### Callbacks

```javascript
setTimeout(function() {
    console.log("Après 1 seconde");
}, 1000);
```

#### Promises

```javascript
fetch('users.php')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

#### Async/Await (moderne)

```javascript
async function loadUsers() {
    try {
        const response = await fetch('users.php');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

### 6.2 Fetch API

```javascript
// GET simple
fetch('users.php')
    .then(response => response.json())
    .then(data => console.log(data));

// POST avec données
fetch('api.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nom: 'Dupont',
        prenom: 'Jean'
    })
})
.then(response => response.json())
.then(data => console.log(data));
```

---

## 7. Sécurité web

### 7.1 Injection SQL

❌ **Vulnérable :**
```php
$nom = $_GET['nom'];
$sql = "SELECT * FROM users WHERE nom = '$nom'";
$result = $pdo->query($sql);
```

Attaque : `nom = ' OR '1'='1`
```sql
SELECT * FROM users WHERE nom = '' OR '1'='1'
-- Retourne tous les utilisateurs !
```

✅ **Sécurisé :**
```php
$sql = "SELECT * FROM users WHERE nom = :nom";
$stmt = $pdo->prepare($sql);
$stmt->execute([':nom' => $nom]);
```

---

### 7.2 XSS (Cross-Site Scripting)

❌ **Vulnérable :**
```javascript
let nom = "<script>alert('XSS')</script>";
element.innerHTML = nom;  // Exécute le script !
```

✅ **Sécurisé :**
```javascript
element.textContent = nom;  // Échappe automatiquement le HTML
```

En PHP :
```php
echo htmlspecialchars($nom, ENT_QUOTES, 'UTF-8');
```

---

### 7.3 CSRF (Cross-Site Request Forgery)

Protection avec token :

```php
session_start();
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
```

```html
<form method="POST">
    <input type="hidden" name="csrf_token" value="<?= $_SESSION['csrf_token'] ?>">
    <!-- Autres champs -->
</form>
```

```php
if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die('Token CSRF invalide');
}
```

---

## 8. Débogage et outils

### 8.1 Console JavaScript

```javascript
console.log("Message simple");
console.error("Erreur");
console.warn("Avertissement");
console.table([{nom: "Dupont", age: 25}]);
console.time("timer");
// Code...
console.timeEnd("timer");  // Affiche le temps écoulé
```

### 8.2 Débogage PHP

```php
// Afficher les erreurs
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Afficher une variable
var_dump($variable);
print_r($variable);

// Arrêter l'exécution
die("Message d'arrêt");
exit();
```

### 8.3 Outils navigateur

- **F12** → Ouvrir les DevTools
- **Console** → Voir les logs JavaScript
- **Network** → Voir les requêtes HTTP
- **Elements** → Inspecter le HTML/CSS
- **Sources** → Déboguer le JavaScript (breakpoints)

---

## 📚 Ressources complémentaires

### Documentation officielle
- [MDN Web Docs](https://developer.mozilla.org/fr/) - HTML, CSS, JavaScript
- [PHP.net](https://www.php.net/manual/fr/) - PHP
- [jQuery API](https://api.jquery.com/) - jQuery

### Tutoriels
- [JavaScript.info](https://javascript.info/) - JavaScript moderne
- [W3Schools](https://www.w3schools.com/) - Tous les langages web
- [OpenClassrooms](https://openclassrooms.com/) - Cours en français

### Outils
- [JSFiddle](https://jsfiddle.net/) - Tester du code en ligne
- [Regex101](https://regex101.com/) - Tester des expressions régulières
- [Can I Use](https://caniuse.com/) - Compatibilité navigateurs

---

## ✅ Checklist de compétences acquises

### JavaScript
- [ ] Variables (let, const)
- [ ] Fonctions
- [ ] Boucles (for, while, forEach)
- [ ] Conditions (if, else, switch)
- [ ] Manipulation du DOM
- [ ] Événements (click, keydown, scroll)
- [ ] Tableaux et objets
- [ ] Asynchrone (Fetch, Promises)

### jQuery
- [ ] Sélecteurs
- [ ] Manipulation du DOM
- [ ] Événements
- [ ] AJAX
- [ ] jQuery UI (draggable, droppable)

### PHP
- [ ] Syntaxe de base
- [ ] Fonctions
- [ ] PDO et connexion MySQL
- [ ] Requêtes préparées
- [ ] JSON

### Concepts
- [ ] Architecture client-serveur
- [ ] Algorithmes (Fisher-Yates, inversions)
- [ ] Sécurité (XSS, SQL injection, CSRF)
- [ ] Débogage

---

**Félicitations ! Tu as maintenant une base solide en développement web full-stack.** 🎉

Continue à pratiquer et à créer des projets pour consolider tes compétences ! 🚀
