# 🎮 Jeu du Taquin - Explication Complète

## 📋 Qu'est-ce que le Jeu du Taquin ?

Le **taquin** (aussi appelé "puzzle coulissant" ou "15-puzzle") est un jeu de réflexion où :

- Une grille de **3×3** contient **8 tuiles numérotées** et **1 case vide**
- Les tuiles peuvent glisser dans la case vide adjacente
- Le but est de remettre les tuiles dans l'ordre (1, 2, 3, 4, 5, 6, 7, 8, vide)

---

## 🎯 Fonctionnalités implémentées

✅ Mélange aléatoire **résolvable** au démarrage  
✅ Clic sur une tuile pour la déplacer (si adjacente à la case vide)  
✅ Détection automatique de la victoire  
✅ Message "Vous avez gagné" en vert  
✅ Blocage du jeu après victoire  
✅ Bouton "Recommencer" qui apparaît après victoire

---

## 📁 Structure des fichiers

```
job03/
├── index.php          (HTML + CSS)
├── script.js          (Logique du jeu)
├── 1.PNG              (Partie 1 du logo)
├── 2.PNG              (Partie 2)
├── 3.PNG              (Partie 3)
├── 4.PNG              (Partie 4)
├── 5.PNG              (Partie 5)
├── 6.PNG              (Partie 6)
├── 7.PNG              (Partie 7)
├── 8.PNG              (Partie 8)
└── 9.PNG              (Case vide - non affichée)
```

---

## 💻 Partie 1 : Structure HTML/CSS

### HTML

```html
<div id="gameBoard"></div>
<div id="message"></div>
<button id="restart">🔄 Recommencer</button>
```

**Explications :**

- `#gameBoard` → Container qui contiendra les 9 tuiles
- `#message` → Zone pour afficher le message de victoire
- `#restart` → Bouton pour relancer une partie (caché au départ)

### CSS - Grille 3×3

```css
#gameBoard {
  display: grid;
  grid-template-columns: repeat(3, 150px); /* 3 colonnes de 150px */
  grid-template-rows: repeat(3, 150px); /* 3 lignes de 150px */
  gap: 2px; /* Espace entre les tuiles */
  margin: 20px auto;
  width: fit-content;
}
```

**Explication :**

- `display: grid` → Utilise CSS Grid pour créer une grille
- `repeat(3, 150px)` → Crée 3 colonnes/lignes de 150px chacune
- `gap: 2px` → Espacement entre les tuiles pour simuler des bordures

### CSS - Tuiles

```css
.tile {
  width: 150px;
  height: 150px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
}

.tile.empty {
  background-color: #ddd; /* Case vide grise */
  cursor: default;
}
```

---

## 🧠 Partie 2 : Logique JavaScript

### 1. Variables globales

```javascript
let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Positions des tuiles
let emptyIndex = 8; // Position de la case vide
let gameWon = false; // État du jeu
```

**Explications :**

- `tiles` → Tableau représentant l'état du plateau (9 = case vide)
- `emptyIndex` → Position actuelle de la case vide (0-8)
- `gameWon` → Booléen pour savoir si le jeu est terminé

---

### 2. Initialisation du jeu

```javascript
function initGame() {
  gameWon = false;
  $("#message").text("");
  $("#restart").hide();
  shuffleTiles();
  renderBoard();
}
```

**Étapes :**

1. Réinitialiser l'état du jeu
2. Effacer le message de victoire
3. Cacher le bouton "Recommencer"
4. Mélanger les tuiles
5. Afficher le plateau

---

### 3. Mélange aléatoire avec Fisher-Yates

```javascript
function shuffleTiles() {
  do {
    tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Fisher-Yates shuffle
    for (let i = tiles.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }

    emptyIndex = tiles.indexOf(9);
  } while (!isSolvable() || isAlreadySolved());
}
```

**Explications :**

#### a) Algorithme Fisher-Yates

```javascript
for (let i = tiles.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [tiles[i], tiles[j]] = [tiles[j], tiles[i]]; // Swap
}
```

- Parcourt le tableau de la fin vers le début
- À chaque itération, échange `tiles[i]` avec un élément aléatoire avant lui
- Garantit un mélange uniforme

#### b) Boucle `do...while`

```javascript
do {
  // Mélanger
} while (!isSolvable() || isAlreadySolved());
```

- Continue de mélanger tant que :
  - Le puzzle n'est pas résolvable OU
  - Le puzzle est déjà résolu (évite de démarrer avec la solution)

---

### 4. Vérification de résolvabilité

⚠️ **Concept important** : Tous les mélanges aléatoires d'un taquin ne sont pas résolvables !

```javascript
function isSolvable() {
  let inversions = 0;

  for (let i = 0; i < tiles.length - 1; i++) {
    for (let j = i + 1; j < tiles.length; j++) {
      if (tiles[i] !== 9 && tiles[j] !== 9 && tiles[i] > tiles[j]) {
        inversions++;
      }
    }
  }

  return inversions % 2 === 0;
}
```

**Explication :**

#### Qu'est-ce qu'une inversion ?

Une **inversion** est une paire de tuiles dans le mauvais ordre.

Exemple :

```
[2, 1, 3, 4, 5, 6, 7, 8, 9]
 ^  ^
 |__|  → 2 avant 1 = 1 inversion
```

#### Règle mathématique

Pour une grille 3×3 :

- Si le nombre d'inversions est **pair** → puzzle résolvable ✅
- Si le nombre d'inversions est **impair** → puzzle NON résolvable ❌

#### Exemple concret

**Configuration résolvable :**

```
[2, 1, 3, 4, 5, 6, 7, 8, 9]
Inversions : (2,1) = 1 inversion
1 est impair → PAS résolvable ❌
```

Attendez, erreur ! Recomptons :

```
[1, 2, 3, 4, 5, 6, 7, 8, 9] → 0 inversion (résolu)
[2, 1, 3, 4, 5, 6, 7, 8, 9] → 1 inversion (2>1)
```

En réalité, pour une grille 3×3, la règle est :

- **Inversions paires** = résolvable
- **Inversions impaires** = non résolvable

---

### 5. Affichage du plateau

```javascript
function renderBoard() {
  $("#gameBoard").empty(); // Vider le plateau

  tiles.forEach((tile, index) => {
    let $tile = $("<div>")
      .addClass("tile")
      .attr("data-index", index)
      .attr("data-value", tile);

    if (tile === 9) {
      $tile.addClass("empty"); // Case vide
    } else {
      $tile.css("background-image", `url('${tile}.PNG')`);

      if (!gameWon) {
        $tile.on("click", function () {
          handleTileClick(index);
        });
      }
    }

    $("#gameBoard").append($tile);
  });
}
```

**Étapes :**

1. Vider le plateau HTML
2. Pour chaque tuile du tableau `tiles[]` :
   - Créer une `<div>` avec la classe `tile`
   - Si c'est la case vide (9), ajouter la classe `empty`
   - Sinon, définir l'image de fond avec `background-image: url('X.PNG')`
   - Ajouter l'événement `click` (sauf si le jeu est gagné)
3. Ajouter la tuile au plateau

---

### 6. Gestion du clic sur une tuile

```javascript
function handleTileClick(clickedIndex) {
  if (gameWon) return;

  if (isAdjacent(clickedIndex, emptyIndex)) {
    // Échanger avec la case vide
    [tiles[clickedIndex], tiles[emptyIndex]] = [
      tiles[emptyIndex],
      tiles[clickedIndex],
    ];

    emptyIndex = clickedIndex;

    renderBoard();
    checkWin();
  }
}
```

**Logique :**

1. Si le jeu est gagné, ne rien faire
2. Vérifier si la tuile cliquée est adjacente à la case vide
3. Si oui :
   - Échanger les positions dans le tableau `tiles[]`
   - Mettre à jour `emptyIndex`
   - Réafficher le plateau
   - Vérifier si le joueur a gagné

---

### 7. Vérification d'adjacence

```javascript
function isAdjacent(index1, index2) {
  let row1 = Math.floor(index1 / 3); // Ligne de index1
  let col1 = index1 % 3; // Colonne de index1
  let row2 = Math.floor(index2 / 3);
  let col2 = index2 % 3;

  // Adjacent horizontalement
  if (row1 === row2 && Math.abs(col1 - col2) === 1) return true;

  // Adjacent verticalement
  if (col1 === col2 && Math.abs(row1 - row2) === 1) return true;

  return false;
}
```

**Explication avec grille :**

```
Index :  0  1  2
         3  4  5
         6  7  8

Position (row, col) :
0 = (0,0)   1 = (0,1)   2 = (0,2)
3 = (1,0)   4 = (1,1)   5 = (1,2)
6 = (2,0)   7 = (2,1)   8 = (2,2)
```

**Calculs :**

- `row = Math.floor(index / 3)` → Divise l'index par 3 (arrondi vers le bas)
- `col = index % 3` → Reste de la division par 3

**Exemples :**

- Index 4 : `row = 4/3 = 1`, `col = 4%3 = 1` → Position (1,1) = centre
- Index 7 : `row = 7/3 = 2`, `col = 7%3 = 1` → Position (2,1) = milieu bas

**Adjacent horizontalement :**

- Même ligne (`row1 === row2`)
- Colonnes voisines (`|col1 - col2| === 1`)

**Adjacent verticalement :**

- Même colonne (`col1 === col2`)
- Lignes voisines (`|row1 - row2| === 1`)

---

### 8. Détection de victoire

```javascript
function checkWin() {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] !== i + 1) return; // Pas encore gagné
  }

  // Victoire !
  gameWon = true;
  $("#message").text("🎉 Vous avez gagné !").addClass("success");
  $("#restart").show();
}
```

**Logique :**

- Parcourir le tableau `tiles[]`
- Vérifier que chaque tuile est à sa position correcte :
  - `tiles[0]` doit être `1`
  - `tiles[1]` doit être `2`
  - ...
  - `tiles[8]` doit être `9`
- Si une tuile est mal placée, sortir de la fonction
- Si toutes sont bien placées :
  - Marquer `gameWon = true`
  - Afficher le message de victoire
  - Montrer le bouton "Recommencer"

---

## 🔑 Concepts clés

### 1. Représentation de la grille

**Grille visuelle :**

```
+---+---+---+
| 1 | 2 | 3 |
+---+---+---+
| 4 | 5 | 6 |
+---+---+---+
| 7 | 8 |   |
+---+---+---+
```

**Représentation en tableau :**

```javascript
tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//       0  1  2  3  4  5  6  7  8  ← indices
```

**Conversion index ↔ (row, col) :**

```javascript
// Index → Position
row = Math.floor(index / 3);
col = index % 3;

// Position → Index
index = row * 3 + col;
```

### 2. Algorithme Fisher-Yates (mélange aléatoire)

```javascript
for (let i = array.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
}
```

**Fonctionnement :**

1. Partir de la fin du tableau
2. Pour chaque position `i`, choisir un index aléatoire `j` entre 0 et `i`
3. Échanger `array[i]` et `array[j]`

**Complexité** : O(n) - Très efficace !

### 3. Théorie des inversions

**Définition** : Une inversion est une paire `(i, j)` où `i < j` mais `tiles[i] > tiles[j]`.

**Exemple :**

```javascript
tiles = [3, 1, 2, 4, 5, 6, 7, 8, 9];
// Inversions : (3,1), (3,2) = 2 inversions (pair)
// → Résolvable ✅
```

**Règle pour grille 3×3 :**

- Inversions **paires** → Résolvable
- Inversions **impaires** → Non résolvable

### 4. Échange de valeurs (destructuring)

```javascript
[tiles[i], tiles[j]] = [tiles[j], tiles[i]];
```

Équivalent à :

```javascript
let temp = tiles[i];
tiles[i] = tiles[j];
tiles[j] = temp;
```

Mais plus élégant et moderne (ES6+) !

---

## 🎨 Flux d'exécution

```
1. Chargement de la page
   ↓
2. $(document).ready()
   ↓
3. initGame()
   ├─ shuffleTiles() → Mélange résolvable
   └─ renderBoard() → Affiche le plateau
   ↓
4. Joueur clique sur une tuile
   ↓
5. handleTileClick(index)
   ├─ isAdjacent() ? → Vérifie adjacence
   ├─ Swap avec case vide
   ├─ renderBoard() → Réaffiche
   └─ checkWin() → Vérifie victoire
   ↓
6. Si victoire :
   ├─ Afficher message vert
   ├─ Bloquer les clics
   └─ Montrer bouton "Recommencer"
   ↓
7. Clic sur "Recommencer"
   ↓
8. Retour à l'étape 3
```

---

## 🐛 Problèmes courants et solutions

### Problème 1 : Les images ne s'affichent pas

**Cause** : Noms de fichiers incorrects ou chemins relatifs
**Solution** : Vérifier que les images sont nommées `1.PNG`, `2.PNG`, etc. (majuscules)

### Problème 2 : Le puzzle est parfois insoluble

**Cause** : Mélange aléatoire sans vérification des inversions
**Solution** : Utiliser la fonction `isSolvable()` qui vérifie les inversions

### Problème 3 : Les tuiles ne bougent pas

**Cause** : La fonction `isAdjacent()` retourne toujours `false`
**Solution** : Vérifier les calculs de `row` et `col` avec `Math.floor()` et `%`

### Problème 4 : On peut cliquer même après avoir gagné

**Cause** : Les événements click ne sont pas désactivés
**Solution** : Vérifier `if (gameWon) return;` dans `handleTileClick()`

### Problème 5 : Le bouton "Recommencer" ne s'affiche pas

**Cause** : CSS `display: none` ou oubli de `$('#restart').show()`
**Solution** : Appeler `.show()` dans `checkWin()`

---

## 📚 Méthodes jQuery utilisées

| Méthode               | Description             | Exemple                         |
| --------------------- | ----------------------- | ------------------------------- |
| `$('#id')`            | Sélectionner par ID     | `$('#gameBoard')`               |
| `$('.class')`         | Sélectionner par classe | `$('.tile')`                    |
| `$('<div>')`          | Créer un élément        | `$('<div>').addClass('tile')`   |
| `.addClass()`         | Ajouter une classe      | `$tile.addClass('empty')`       |
| `.attr()`             | Définir un attribut     | `.attr('data-index', index)`    |
| `.css()`              | Définir un style        | `.css('background-image', url)` |
| `.on()`               | Ajouter un événement    | `.on('click', function(){})`    |
| `.append()`           | Ajouter un enfant       | `$('#gameBoard').append($tile)` |
| `.empty()`            | Vider un élément        | `$('#gameBoard').empty()`       |
| `.text()`             | Changer le texte        | `$('#message').text('Gagné !')` |
| `.show()` / `.hide()` | Afficher/masquer        | `$('#restart').show()`          |

---

## 🚀 Améliorations possibles

### 1. Compteur de coups

```javascript
let moves = 0;

function handleTileClick(clickedIndex) {
  // ... code existant ...
  moves++;
  $("#moves").text(`Coups : ${moves}`);
}
```

### 2. Chronomètre

```javascript
let startTime = Date.now();
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    let elapsed = Math.floor((Date.now() - startTime) / 1000);
    $("#timer").text(`Temps : ${elapsed}s`);
  }, 1000);
}
```

### 3. Difficulté (4×4, 5×5)

```javascript
let gridSize = 3; // Variable pour changer la taille

#gameBoard {
    grid-template-columns: repeat(var(--size), 150px);
}
```

### 4. Animation des déplacements

```css
.tile {
  transition: all 0.3s ease;
}
```

### 5. Meilleur score (localStorage)

```javascript
let bestMoves = localStorage.getItem("bestMoves") || Infinity;

if (moves < bestMoves) {
  localStorage.setItem("bestMoves", moves);
  $("#message").append(" 🏆 Nouveau record !");
}
```

---

## ✅ Checklist de reproduction

- [ ] Avoir 9 images nommées `1.PNG` à `9.PNG`
- [ ] Créer `index.php` avec grille CSS Grid 3×3
- [ ] Créer `script.js` avec jQuery
- [ ] Implémenter `shuffleTiles()` avec Fisher-Yates
- [ ] Implémenter `isSolvable()` pour vérifier les inversions
- [ ] Implémenter `renderBoard()` pour afficher les tuiles
- [ ] Implémenter `isAdjacent()` pour vérifier l'adjacence
- [ ] Implémenter `handleTileClick()` pour déplacer les tuiles
- [ ] Implémenter `checkWin()` pour détecter la victoire
- [ ] Ajouter le bouton "Recommencer"
- [ ] Tester le jeu plusieurs fois pour vérifier la résolvabilité

---

## 🎓 Concepts mathématiques

### Théorie des graphes

Le taquin peut être représenté comme un **graphe** où :

- Chaque **nœud** = une configuration du plateau
- Chaque **arête** = un mouvement valide
- Le **chemin** = séquence de mouvements pour résoudre

### Complexité

- États possibles : `9! = 362 880` configurations
- États résolvables : `9! / 2 = 181 440` (la moitié)
- Complexité minimale : O(n²) avec A\* (algorithme de recherche)

---

## 📖 Ressources

- [Taquin sur Wikipédia](https://fr.wikipedia.org/wiki/Taquin)
- [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
- [jQuery API Documentation](https://api.jquery.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

Bon jeu ! 🎮✨
