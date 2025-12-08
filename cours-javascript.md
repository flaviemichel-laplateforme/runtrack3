# 📚 Cours JavaScript - Les Bases

## 📋 Table des matières

1. [Introduction à JavaScript](#1-introduction-à-javascript)
2. [Les Variables](#2-les-variables)
3. [Les Opérateurs](#3-les-opérateurs)
4. [Les Conditions](#4-les-conditions)
5. [Les Boucles](#5-les-boucles)
6. [Les Fonctions](#6-les-fonctions)
7. [Les Tableaux (Arrays)](#7-les-tableaux-arrays)
8. [Les Objets](#8-les-objets)
9. [Manipulation du DOM](#9-manipulation-du-dom)
10. [Les Événements](#10-les-événements)
11. [Les Dates](#11-les-dates)
12. [Méthodes String utiles](#12-méthodes-string-utiles)
13. [Les Promesses et Async/Await](#13-les-promesses-et-asyncawait)
14. [Le Stockage Local](#14-le-stockage-local)
15. [Les Erreurs courantes à éviter](#15-les-erreurs-courantes-à-éviter)
16. [Récapitulatif rapide](#16-récapitulatif-rapide)
17. [Exercices pratiques](#17-exercices-pratiques)

---

## 1. Introduction à JavaScript

JavaScript est un langage de programmation qui permet de rendre les pages web **interactives**.

### 🎯 À quoi sert JavaScript ?

| Utilisation           | Exemple                                           |
| --------------------- | ------------------------------------------------- |
| Interactivité         | Boutons, menus déroulants, animations             |
| Validation            | Vérifier un formulaire avant envoi                |
| Manipulation DOM      | Modifier le contenu HTML dynamiquement            |
| Communication serveur | Charger des données sans recharger la page (AJAX) |
| Jeux                  | Créer des jeux dans le navigateur                 |

### 📍 Où placer le JavaScript ?

```html
<!-- Méthode 1 : Dans une balise <script> -->
<script>
  console.log("Hello World!");
</script>

<!-- Méthode 2 : Fichier externe (RECOMMANDÉ) -->
<script src="script.js"></script>

<!-- Méthode 3 : À la fin du body (MEILLEURE PRATIQUE) -->
<body>
  <h1>Ma page</h1>
  <script src="script.js"></script>
</body>
```

### 💬 Les commentaires

```javascript
// Ceci est un commentaire sur une ligne

/* Ceci est un commentaire
   sur plusieurs lignes */

// 💡 Les commentaires servent à :
// - Expliquer le code
// - Désactiver temporairement du code
// - Documenter les fonctions
```

### 🖥️ Afficher des informations

```javascript
// Dans la console du navigateur (F12)
console.log("Message normal");
console.warn("Avertissement");
console.error("Erreur");

// Boîte de dialogue
alert("Coucou !");

// Demander une valeur
let nom = prompt("Quel est ton nom ?");

// Confirmation (Oui/Non)
let reponse = confirm("Es-tu sûr ?");
```

---

## 2. Les Variables

### 🔑 Règles de nommage

```javascript
// ✅ Bonnes pratiques
let monAge = 25;           // camelCase (recommandé)
let prenom_utilisateur;    // snake_case (moins courant en JS)
let _variablePrivee;       // Commence par underscore
let $element;              // Commence par $

// ❌ Interdit
let 2nombre;               // Ne peut pas commencer par un chiffre
let mon-age;               // Pas de tiret
let let;                   // Pas de mot réservé
```

### Déclaration de variables

```javascript
// let : variable qui peut changer
let age = 25;
age = 26; // ✅ OK

// const : variable constante (ne change pas)
const nom = "Flavie";
nom = "Marie"; // ❌ Erreur !

// var : ancienne méthode (à éviter)
var prenom = "Jean";
```

### Types de données

```javascript
// String (chaîne de caractères)
let texte = "Bonjour";
let texte2 = "Bonjour";
let texte3 = `Bonjour ${nom}`; // Template literal

// Number (nombre)
let entier = 42;
let decimal = 3.14;

// Boolean (vrai/faux)
let estVrai = true;
let estFaux = false;

// Array (tableau)
let fruits = ["pomme", "banane", "orange"];

// Object (objet)
let personne = {
  nom: "Dupont",
  age: 25,
  ville: "Marseille",
};

// null et undefined
let vide = null; // Valeur vide intentionnelle
let nonDefini; // undefined (pas de valeur assignée)
```

### 💡 Différence entre let, const et var

| Caractéristique | `var`     | `let`         | `const`       |
| --------------- | --------- | ------------- | ------------- |
| Portée          | Fonction  | Bloc `{}`     | Bloc `{}`     |
| Réassignation   | ✅ Oui    | ✅ Oui        | ❌ Non        |
| Redéclaration   | ✅ Oui    | ❌ Non        | ❌ Non        |
| Hoisting        | ✅ Oui    | ❌ Non        | ❌ Non        |
| Usage           | ⚠️ Éviter | ✅ Recommandé | ✅ Par défaut |

```javascript
// Exemple de portée
if (true) {
  var x = 1; // Accessible en dehors du bloc
  let y = 2; // Accessible uniquement dans le bloc
}
console.log(x); // 1 ✅
console.log(y); // ❌ Erreur: y is not defined
```

---

## 3. Les Opérateurs

### Opérateurs arithmétiques

```javascript
let a = 10;
let b = 3;

a + b; // 13 (addition)
a - b; // 7  (soustraction)
a * b; // 30 (multiplication)
a / b; // 3.33... (division)
a % b; // 1  (modulo - reste de la division)
a ** b; // 1000 (puissance : 10³)

// Raccourcis
a++; // a = a + 1
a--; // a = a - 1
a += 5; // a = a + 5
a -= 3; // a = a - 3
a *= 2; // a = a * 2
a /= 2; // a = a / 2
```

### 💡 Le modulo (%) en pratique

```javascript
// Vérifier si un nombre est pair ou impair
let nombre = 7;
if (nombre % 2 === 0) {
  console.log("Pair");
} else {
  console.log("Impair"); // ← Résultat
}

// Limiter une valeur (cycle)
let heure = 25;
heure = heure % 24; // 1 (revient à 1h)
```

### Opérateurs de comparaison

```javascript
// Comparaison
5 == "5"; // true  (égalité de valeur)
5 === "5"; // false (égalité stricte : valeur ET type)
5 != "5"; // false
5 !== "5"; // true

5 > 3; // true  (supérieur)
5 < 3; // false (inférieur)
5 >= 5; // true  (supérieur ou égal)
5 <= 3; // false (inférieur ou égal)
```

### ⚠️ `==` vs `===` (Important !)

```javascript
// == compare seulement la VALEUR (avec conversion de type)
5 == "5"; // true  (string "5" converti en nombre)
0 == false; // true  (false converti en 0)
null == undefined; // true

// === compare la VALEUR et le TYPE (recommandé !)
5 === "5"; // false (number vs string)
0 === false; // false (number vs boolean)
null === undefined; // false

// 💡 Toujours utiliser === pour éviter les bugs !
```

### Opérateurs logiques

```javascript
// ET (&&) : les deux doivent être vrais
true && true; // true
true && false; // false

// OU (||) : au moins un doit être vrai
true || false; // true
false || false; // false

// NON (!) : inverse la valeur
!true; // false
!false; // true
```

### 💡 Court-circuit avec && et ||

```javascript
// && retourne la première valeur "falsy" ou la dernière
let nom = "" && "Jean"; // "" (chaîne vide est falsy)
let age = 25 && 30; // 30 (les deux sont truthy, retourne le dernier)

// || retourne la première valeur "truthy"
let prenom = "" || "Inconnu"; // "Inconnu"
let valeur = 0 || 10; // 10

// Utilisation pratique : valeur par défaut
function saluer(nom) {
  nom = nom || "Visiteur";
  console.log("Bonjour " + nom);
}
saluer(); // "Bonjour Visiteur"
saluer("Marie"); // "Bonjour Marie"
```

### 🆕 Opérateur Nullish Coalescing (??)

```javascript
// ?? retourne la valeur de droite seulement si gauche est null ou undefined
let a = null ?? "défaut"; // "défaut"
let b = undefined ?? "défaut"; // "défaut"
let c = 0 ?? "défaut"; // 0 (car 0 n'est pas null/undefined)
let d = "" ?? "défaut"; // "" (car "" n'est pas null/undefined)

// Différence avec ||
let valeur1 = 0 || 10; // 10 (0 est falsy)
let valeur2 = 0 ?? 10; // 0  (0 n'est pas null/undefined)
```

---

## 4. Les Conditions

### if / else if / else

```javascript
let age = 18;

if (age < 18) {
  console.log("Mineur");
} else if (age === 18) {
  console.log("Tout juste majeur !");
} else {
  console.log("Majeur");
}
```

### Opérateur ternaire

```javascript
// condition ? valeurSiVrai : valeurSiFaux
let message = age >= 18 ? "Majeur" : "Mineur";
```

### switch

```javascript
let jour = "lundi";

switch (jour) {
  case "lundi":
    console.log("Début de semaine");
    break;
  case "vendredi":
    console.log("Bientôt le week-end !");
    break;
  case "samedi":
  case "dimanche":
    console.log("Week-end !");
    break;
  default:
    console.log("Milieu de semaine");
}
```

---

## 5. Les Boucles

### for

```javascript
// Boucle classique
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Boucle sur un tableau
let fruits = ["pomme", "banane", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### 💡 Pourquoi utiliser `fruits.length` ?

`fruits.length` retourne le **nombre d'éléments** dans le tableau (ici 3).

```javascript
let fruits = ["pomme", "banane", "orange"];
fruits.length; // 3
```

**Déroulement de la boucle :**

| `i` | Condition `i < 3` | `fruits[i]` |
| --- | ----------------- | ----------- |
| 0   | `0 < 3` ✅        | `"pomme"`   |
| 1   | `1 < 3` ✅        | `"banane"`  |
| 2   | `2 < 3` ✅        | `"orange"`  |
| 3   | `3 < 3` ❌        | Stop !      |

**Avantage :** Le code s'adapte automatiquement si on ajoute ou supprime des éléments :

```javascript
// ❌ Mauvais : valeur fixe
for (let i = 0; i < 3; i++) {}

// ✅ Bon : s'adapte à la taille du tableau
for (let i = 0; i < fruits.length; i++) {}
```

### for...of (pour les tableaux)

```javascript
let fruits = ["pomme", "banane", "orange"];

for (let fruit of fruits) {
  console.log(fruit); // pomme, banane, orange
}
```

### for...in (pour les objets)

```javascript
let personne = { nom: "Dupont", age: 25 };

for (let cle in personne) {
  console.log(cle + ": " + personne[cle]);
}
// nom: Dupont
// age: 25
```

### while

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

### do...while

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

---

## 6. Les Fonctions

### Déclaration classique

```javascript
function direBonjour(prenom) {
  return "Bonjour " + prenom + " !";
}

let message = direBonjour("Flavie");
console.log(message); // "Bonjour Flavie !"
```

### Fonction fléchée (arrow function)

```javascript
// Syntaxe courte
const direBonjour = (prenom) => {
  return "Bonjour " + prenom + " !";
};

// Encore plus court (si une seule ligne)
const direBonjour = (prenom) => "Bonjour " + prenom + " !";

// Sans paramètre
const direHello = () => "Hello !";

// Un seul paramètre (parenthèses optionnelles)
const doubler = (x) => x * 2;
```

### Paramètres par défaut

```javascript
function saluer(nom = "inconnu") {
  console.log("Bonjour " + nom);
}

saluer(); // "Bonjour inconnu"
saluer("Marie"); // "Bonjour Marie"
```

---

## 7. Les Tableaux (Arrays)

### Création et accès

```javascript
let fruits = ["pomme", "banane", "orange"];

fruits[0]; // "pomme" (premier élément)
fruits[2]; // "orange" (troisième élément)
fruits.length; // 3 (nombre d'éléments)
```

### Méthodes principales

```javascript
let fruits = ["pomme", "banane"];

// Ajouter
fruits.push("orange"); // Ajoute à la fin → ["pomme", "banane", "orange"]
fruits.unshift("kiwi"); // Ajoute au début → ["kiwi", "pomme", "banane", "orange"]

// Supprimer
fruits.pop(); // Supprime le dernier → ["kiwi", "pomme", "banane"]
fruits.shift(); // Supprime le premier → ["pomme", "banane"]

// Trouver
fruits.indexOf("banane"); // 1 (position)
fruits.includes("pomme"); // true (existe ?)

// Transformer
fruits.join(", "); // "pomme, banane" (tableau → string)
"a,b,c".split(","); // ["a", "b", "c"] (string → tableau)
```

### Méthodes de boucle

```javascript
let nombres = [1, 2, 3, 4, 5];

// forEach : exécute une fonction pour chaque élément
nombres.forEach((n) => {
  console.log(n);
});

// map : transforme chaque élément
let doubles = nombres.map((n) => n * 2);
// [2, 4, 6, 8, 10]

// filter : garde les éléments qui passent le test
let pairs = nombres.filter((n) => n % 2 === 0);
// [2, 4]

// find : trouve le premier élément qui passe le test
let premier = nombres.find((n) => n > 3);
// 4

// reduce : réduit à une seule valeur
let somme = nombres.reduce((total, n) => total + n, 0);
// 15
```

---

## 8. Les Objets

### Création et accès

```javascript
let personne = {
  nom: "Dupont",
  prenom: "Marie",
  age: 25,
  adresse: {
    ville: "Marseille",
    cp: "13000",
  },
};

// Accès aux propriétés
personne.nom; // "Dupont"
personne["prenom"]; // "Marie"
personne.adresse.ville; // "Marseille"

// Modifier
personne.age = 26;

// Ajouter
personne.email = "marie@email.com";

// Supprimer
delete personne.email;
```

### Méthodes dans un objet

```javascript
let personne = {
  nom: "Dupont",
  age: 25,
  sePresenter: function () {
    return "Je suis " + this.nom + " et j'ai " + this.age + " ans";
  },
};

personne.sePresenter(); // "Je suis Dupont et j'ai 25 ans"
```

---

## 9. Manipulation du DOM

### Sélectionner des éléments

```javascript
// Par ID
let element = document.getElementById("monId");

// Par classe (retourne une collection)
let elements = document.getElementsByClassName("maClasse");

// Par balise
let paragraphes = document.getElementsByTagName("p");

// Sélecteur CSS (premier trouvé)
let element = document.querySelector(".maClasse");

// Sélecteur CSS (tous)
let elements = document.querySelectorAll(".maClasse");
```

### Modifier le contenu

```javascript
let element = document.getElementById("monId");

// Texte
element.textContent = "Nouveau texte";

// HTML
element.innerHTML = "<strong>Texte en gras</strong>";

// Valeur d'un input
document.getElementById("monInput").value = "Nouvelle valeur";
```

### Modifier le style

```javascript
let element = document.getElementById("monId");

element.style.color = "red";
element.style.backgroundColor = "#f0f0f0";
element.style.fontSize = "20px";
```

### Modifier les classes

```javascript
let element = document.getElementById("monId");

element.classList.add("maClasse"); // Ajouter
element.classList.remove("maClasse"); // Supprimer
element.classList.toggle("maClasse"); // Ajouter/Supprimer
element.classList.contains("maClasse"); // Vérifier (true/false)
```

### Créer des éléments

```javascript
// Créer un élément
let nouveauP = document.createElement("p");
nouveauP.textContent = "Nouveau paragraphe";

// L'ajouter au body
document.body.appendChild(nouveauP);
```

---

## 10. Les Événements

### Ajouter un événement

```javascript
let bouton = document.getElementById("monBouton");

bouton.addEventListener("click", function () {
  console.log("Bouton cliqué !");
});

// Avec fonction fléchée
bouton.addEventListener("click", () => {
  console.log("Bouton cliqué !");
});

// Avec fonction nommée
function handleClick() {
  console.log("Bouton cliqué !");
}
bouton.addEventListener("click", handleClick);
```

### Événements courants

| Événement   | Description                |
| ----------- | -------------------------- |
| `click`     | Clic de souris             |
| `dblclick`  | Double clic                |
| `mouseover` | Souris entre sur l'élément |
| `mouseout`  | Souris quitte l'élément    |
| `keydown`   | Touche enfoncée            |
| `keyup`     | Touche relâchée            |
| `submit`    | Formulaire soumis          |
| `change`    | Valeur d'un input changée  |
| `input`     | Valeur en cours de saisie  |
| `scroll`    | Défilement de la page      |
| `load`      | Page chargée               |

### L'objet event

```javascript
document.addEventListener("keydown", function (event) {
  console.log(event.key); // Touche appuyée
  console.log(event.code); // Code de la touche
  event.preventDefault(); // Empêcher le comportement par défaut
});

document.addEventListener("click", function (event) {
  console.log(event.target); // Élément cliqué
  console.log(event.clientX); // Position X de la souris
  console.log(event.clientY); // Position Y de la souris
});
```

---

## 11. Les Dates

```javascript
// Date actuelle
let maintenant = new Date();

// Date spécifique (mois: 0-11)
let date = new Date(2025, 11, 25); // 25 décembre 2025

// Récupérer les infos
date.getDate(); // Jour du mois (1-31)
date.getMonth(); // Mois (0-11) ⚠️
date.getFullYear(); // Année
date.getDay(); // Jour de la semaine (0=dimanche, 6=samedi)
date.getHours(); // Heures
date.getMinutes(); // Minutes
date.getSeconds(); // Secondes
```

---

## 12. Méthodes String utiles

```javascript
let texte = "Bonjour le monde";

texte.length; // 16 (longueur)
texte.toUpperCase(); // "BONJOUR LE MONDE"
texte.toLowerCase(); // "bonjour le monde"
texte.includes("jour"); // true
texte.startsWith("Bon"); // true
texte.endsWith("monde"); // true
texte.indexOf("le"); // 8 (position)
texte.replace("monde", "JavaScript"); // "Bonjour le JavaScript"
texte.split(" "); // ["Bonjour", "le", "monde"]
texte.trim(); // Supprime espaces début/fin

// padStart / padEnd
"5".padStart(2, "0"); // "05"
"5".padEnd(3, "0"); // "500"
```

---

## 13. Les Promesses et Async/Await

### 🔄 Qu'est-ce qu'une Promesse ?

Une promesse représente une opération **asynchrone** (qui prend du temps).

```javascript
// Créer une promesse
let maPromesse = new Promise((resolve, reject) => {
  let succes = true;

  if (succes) {
    resolve("Opération réussie !");
  } else {
    reject("Erreur !");
  }
});

// Utiliser une promesse
maPromesse
  .then((resultat) => {
    console.log(resultat); // "Opération réussie !"
  })
  .catch((erreur) => {
    console.log(erreur);
  });
```

### ⏳ Simuler un délai

```javascript
function attendre(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Utilisation
attendre(2000).then(() => {
  console.log("2 secondes passées !");
});
```

### 🚀 Async/Await (syntaxe moderne)

```javascript
// async : déclare une fonction asynchrone
// await : attend le résultat d'une promesse

async function chargerDonnees() {
  console.log("Début du chargement...");

  await attendre(2000);
  console.log("Données chargées !");

  return "Résultat";
}

// Appel
chargerDonnees().then((resultat) => {
  console.log(resultat);
});
```

### 📡 Fetch API (requêtes HTTP)

```javascript
// Récupérer des données depuis une API
async function getUtilisateurs() {
  try {
    let response = await fetch("https://api.example.com/users");
    let data = await response.json();
    console.log(data);
  } catch (erreur) {
    console.error("Erreur:", erreur);
  }
}

// Version avec .then()
fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((erreur) => console.error(erreur));
```

---

## 14. Le Stockage Local

### 💾 localStorage

Stocke des données **sans expiration** dans le navigateur.

```javascript
// Stocker une valeur
localStorage.setItem("nom", "Marie");

// Récupérer une valeur
let nom = localStorage.getItem("nom"); // "Marie"

// Supprimer une valeur
localStorage.removeItem("nom");

// Tout effacer
localStorage.clear();
```

### 📦 Stocker des objets

```javascript
// localStorage ne stocke que des strings !
// Il faut convertir avec JSON

let utilisateur = { nom: "Marie", age: 25 };

// Stocker (objet → string)
localStorage.setItem("user", JSON.stringify(utilisateur));

// Récupérer (string → objet)
let userRecupere = JSON.parse(localStorage.getItem("user"));
console.log(userRecupere.nom); // "Marie"
```

### ⏰ sessionStorage

Même syntaxe que localStorage, mais les données sont **effacées** quand l'onglet est fermé.

```javascript
sessionStorage.setItem("temporaire", "valeur");
sessionStorage.getItem("temporaire");
```

### 📊 Exemple pratique : Thème sombre

```javascript
// Sauvegarder la préférence
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.body.className = theme;
}

// Charger la préférence au démarrage
window.addEventListener("load", () => {
  let theme = localStorage.getItem("theme") || "light";
  document.body.className = theme;
});

// Bouton pour changer
document.getElementById("toggleTheme").addEventListener("click", () => {
  let currentTheme = localStorage.getItem("theme") || "light";
  let newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
});
```

---

## 15. Les Erreurs courantes à éviter

### ❌ Erreur 1 : `elseif` au lieu de `else if`

```javascript
// ❌ Mauvais
if (x > 0) {
    console.log("Positif");
} elseif (x < 0) {  // Erreur de syntaxe !
    console.log("Négatif");
}

// ✅ Correct
if (x > 0) {
    console.log("Positif");
} else if (x < 0) {
    console.log("Négatif");
}
```

### ❌ Erreur 2 : `=` au lieu de `===`

```javascript
// ❌ Mauvais (assignation au lieu de comparaison)
if ((x = 5)) {
  // Assigne 5 à x, toujours vrai !
  console.log("Égal à 5");
}

// ✅ Correct
if (x === 5) {
  console.log("Égal à 5");
}
```

### ❌ Erreur 3 : Oublier les accolades

```javascript
// ❌ Risqué
if (condition) faireQuelqueChose();
autreTruc(); // S'exécute TOUJOURS !

// ✅ Correct
if (condition) {
  faireQuelqueChose();
  autreTruc();
}
```

### ❌ Erreur 4 : getMonth() retourne 0-11

```javascript
let date = new Date(2025, 0, 1); // 1er JANVIER (pas février !)

// ❌ Mauvais
let mois = date.getMonth(); // 0 pour janvier

// ✅ Correct
let mois = date.getMonth() + 1; // 1 pour janvier
```

### ❌ Erreur 5 : Modifier un tableau pendant une boucle

```javascript
let nombres = [1, 2, 3, 4, 5];

// ❌ Problématique
for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] % 2 === 0) {
    nombres.splice(i, 1); // Décale les index !
  }
}

// ✅ Correct : utiliser filter
nombres = nombres.filter((n) => n % 2 !== 0);
```

### ❌ Erreur 6 : `document` dans Node.js

```javascript
// ❌ Erreur si exécuté avec Node.js
document.body.innerHTML = "Hello";

// ✅ Vérifier si on est dans un navigateur
if (typeof document !== "undefined") {
  document.body.innerHTML = "Hello";
}
```

### ❌ Erreur 7 : Confondre forEach et map

```javascript
let nombres = [1, 2, 3];

// forEach : ne retourne rien
let resultat1 = nombres.forEach((n) => n * 2);
console.log(resultat1); // undefined

// map : retourne un nouveau tableau
let resultat2 = nombres.map((n) => n * 2);
console.log(resultat2); // [2, 4, 6]
```

---

## 16. Récapitulatif rapide

| Concept        | Syntaxe                             |
| -------------- | ----------------------------------- |
| Variable       | `let x = 5;`                        |
| Constante      | `const PI = 3.14;`                  |
| Condition      | `if (x > 0) { }`                    |
| Boucle for     | `for (let i = 0; i < 5; i++) { }`   |
| Boucle forEach | `arr.forEach(x => { })`             |
| Fonction       | `function nom(param) { }`           |
| Arrow function | `const f = (x) => x * 2;`           |
| Tableau        | `let arr = [1, 2, 3];`              |
| Objet          | `let obj = { a: 1 };`               |
| Sélection DOM  | `document.querySelector("#id");`    |
| Événement      | `el.addEventListener("click", fn);` |
| Promesse       | `fetch(url).then(r => r.json())`    |
| Async/Await    | `const data = await fetch(url);`    |
| Stockage local | `localStorage.setItem("clé", val);` |

### 🎨 Bonnes pratiques

1. **Toujours utiliser `===`** au lieu de `==`
2. **Préférer `const`** par défaut, `let` si besoin de réassigner
3. **Nommer clairement** les variables et fonctions
4. **Commenter le code** quand c'est utile
5. **Utiliser des fonctions courtes** qui font une seule chose
6. **Tester souvent** dans la console (F12)

---

## 17. Exercices pratiques

### Exercice 1 : FizzBuzz

Afficher les nombres de 1 à 100. Si multiple de 3 → "Fizz", de 5 → "Buzz", des deux → "FizzBuzz".

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

### Exercice 2 : Nombre premier

Vérifier si un nombre est premier.

```javascript
function estPremier(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
```

### Exercice 3 : Jour travaillé

Vérifier si une date est un jour travaillé (pas week-end, pas férié).

```javascript
function jourtravaille(date) {
  const jour = date.getDate();
  const mois = date.getMonth() + 1;
  const annee = date.getFullYear();
  const jourSemaine = date.getDay();

  const joursFeries = [
    "01/01",
    "01/05",
    "08/05",
    "14/07",
    "15/08",
    "01/11",
    "11/11",
    "25/12",
  ];

  const jourFormate = String(jour).padStart(2, "0");
  const moisFormate = String(mois).padStart(2, "0");
  const dateFormatee = `${jourFormate}/${moisFormate}`;

  if (joursFeries.includes(dateFormatee)) {
    return "Jour férié";
  } else if (jourSemaine === 0 || jourSemaine === 6) {
    return "Week-end";
  } else {
    return "Jour travaillé";
  }
}
```

### Exercice 4 : Code Konami

Détecter la séquence ↑↑↓↓←→←→BA.

```javascript
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let konamiIndex = 0;

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  const expectedKey = konamiCode[konamiIndex].toLowerCase();

  if (key === expectedKey) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      console.log("Code Konami activé !");
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});
```

---

Bonne chance dans votre apprentissage ! 🚀

---

## 📚 Ressources supplémentaires

- [MDN Web Docs (fr)](https://developer.mozilla.org/fr/docs/Web/JavaScript) - Documentation officielle
- [JavaScript.info](https://javascript.info/) - Tutoriels complets
- [FreeCodeCamp](https://www.freecodecamp.org/) - Exercices pratiques gratuits

---

_Cours créé pour La Plateforme\_ - Décembre 2025_
