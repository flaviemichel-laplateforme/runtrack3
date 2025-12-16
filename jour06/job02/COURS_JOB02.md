# Cours Complet - Job 02 : Intégration Bootstrap et Interactivité JavaScript

## Table des matières

1. [Introduction](#introduction)
2. [Structure HTML et Bootstrap](#structure-html-et-bootstrap)
3. [Les composants Bootstrap utilisés](#les-composants-bootstrap-utilisés)
4. [Les fonctionnalités JavaScript](#les-fonctionnalités-javascript)
5. [Concepts avancés](#concepts-avancés)

---

## Introduction

Ce job02 est un exercice complet qui combine l'utilisation de **Bootstrap 5** pour la mise en page et le style, avec **JavaScript vanilla** pour l'interactivité. L'objectif est de créer une page web riche en fonctionnalités sans framework JavaScript supplémentaire.

### Objectifs pédagogiques :

- Maîtriser les composants Bootstrap 5
- Manipuler le DOM avec JavaScript
- Gérer les événements utilisateur
- Créer des interactions dynamiques
- Utiliser les modales Bootstrap
- Gérer des séquences de touches clavier

---

## Structure HTML et Bootstrap

### 1. Configuration de base

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- CSS Bootstrap -->
    <link
      href="./assets/bootstrap-5.3.8/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <!-- Bootstrap Icons -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    />
  </head>
</html>
```

**Points importants :**

- `viewport` : Essentiel pour le responsive design
- Bootstrap Icons : Bibliothèque d'icônes vectorielles
- Version Bootstrap 5.3.8 (locale)

### 2. Structure générale

La page est divisée en plusieurs sections :

- **Header** : Navigation
- **Main** : Contenu principal avec cards, jumbotron, liste
- **Modales** : Fenêtres popup
- **Formulaire** : Collecte de données

---

## Les composants Bootstrap utilisés

### 1. Navbar (Barre de navigation)

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="https://laplateforme.io/">LPTF</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

**Classes importantes :**

- `navbar` : Conteneur principal
- `navbar-expand-lg` : Responsive à partir du breakpoint large
- `navbar-toggler` : Bouton hamburger pour mobile
- `collapse` : Masque le contenu sur petits écrans
- `nav-item` / `nav-link` : Éléments de navigation

**Comportement :**

- Sur mobile : Menu hamburger
- Sur desktop : Menu horizontal

### 2. Cards (Cartes)

```html
<div class="card" style="width: 15%;">
  <img src="./assets/img/papillon.jpg" class="card-img-top" alt="Papillon" />
  <div class="card-body">
    <h5 class="card-title">Un Papillon</h5>
    <p class="card-text">Description...</p>
    <a
      href="#"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#papillonModal"
    >
      Commander votre propre papillon
    </a>
  </div>
</div>
```

**Anatomie d'une card :**

- `card` : Conteneur avec bordure et padding
- `card-img-top` : Image en haut
- `card-body` : Corps de la carte
- `card-title` : Titre
- `card-text` : Texte de description

**Utilisation :**

- Présentation structurée de contenu
- Responsive par défaut
- Facile à personnaliser

### 3. Jumbotron (Version Bootstrap 5)

```html
<div class="bg-light p-5 rounded-3" style="width: 70%;">
  <div class="container-fluid py-3">
    <h1 class="display-3" id="jumbotronTitle">Bonjour, monde!</h1>
    <p class="fs-4" id="jumbotronText">
      Il existe plusieurs visions du terme...
    </p>
    <hr class="my-4" />
    <p class="lead" id="jumbotronLead">Le sens étendu désigne l'univers...</p>
    <a href="#" class="btn btn-danger btn-lg">Rebooter le Monde</a>
  </div>
</div>
```

**⚠️ Important :** Le jumbotron a été supprimé de Bootstrap 5 !

**Alternative avec classes utilitaires :**

- `bg-light` : Fond gris clair
- `p-5` : Padding important (3rem)
- `rounded-3` : Coins arrondis
- `display-3` : Titre très large
- `fs-4` : Font-size niveau 4
- `lead` : Texte mis en avant
- `my-4` : Marge verticale

### 4. List Group (Liste cliquable)

```html
<ul class="list-group list-group-flush">
  <a
    href="#"
    class="list-group-item list-group-item-action active"
    data-cercle="1"
  >
    Limbes
  </a>
  <a href="#" class="list-group-item list-group-item-action" data-cercle="2">
    Luxure
  </a>
</ul>
```

**Classes importantes :**

- `list-group` : Conteneur de liste
- `list-group-flush` : Retire les bordures latérales
- `list-group-item` : Élément de liste
- `list-group-item-action` : Effet hover/active
- `list-group-item-primary` : Coloration bleue
- `active` : État actif (bleu avec texte blanc)

**Avantages :**

- Liens stylisés sans CSS custom
- États visuels clairs
- Accessible au clavier

### 5. Progress Bar (Barre de progression)

```html
<div
  class="progress flex-grow-1"
  role="progressbar"
  aria-valuenow="90"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div
    class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
    id="progressBar"
    style="width: 90%"
  ></div>
</div>
```

**Composants :**

- `progress` : Conteneur
- `progress-bar` : Barre interne
- `progress-bar-striped` : Rayures diagonales
- `progress-bar-animated` : Animation de défilement
- `bg-warning` : Couleur jaune/orange

**Attributs ARIA :**

- `role="progressbar"` : Type de composant
- `aria-valuenow` : Valeur actuelle
- `aria-valuemin` / `aria-valuemax` : Min/Max

### 6. Modal (Fenêtre modale)

```html
<div class="modal" id="papillonModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Commande de papillon</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
        ></button>
      </div>
      <div class="modal-body">
        <p>Êtes-vous sûr de vouloir commander un papillon ?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Annuler
        </button>
        <button type="button" class="btn btn-primary">Commander</button>
      </div>
    </div>
  </div>
</div>
```

**Structure :**

- `modal` : Overlay de fond
- `modal-dialog` : Conteneur centré
- `modal-content` : Contenu de la modale
- `modal-header` : En-tête avec titre et fermeture
- `modal-body` : Corps du message
- `modal-footer` : Boutons d'action

**Déclenchement :**

**Méthode 1 - Attributs HTML :**

```html
<button data-bs-toggle="modal" data-bs-target="#papillonModal">Ouvrir</button>
```

**Méthode 2 - JavaScript :**

```javascript
const modal = new bootstrap.Modal(document.getElementById("papillonModal"));
modal.show();
```

### 7. Pagination

```html
<nav aria-label="Page navigation">
  <ul class="pagination justify-content-end">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#" data-page="1">1</a></li>
    <li class="page-item"><a class="page-link" href="#" data-page="2">2</a></li>
    <li class="page-item"><a class="page-link" href="#" data-page="3">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

**Classes :**

- `pagination` : Conteneur
- `page-item` : Élément de page
- `page-link` : Lien cliquable
- `justify-content-end` : Alignement à droite
- `active` : Page active

**Attributs personnalisés :**

- `data-page="1"` : Identifiant de page pour JavaScript

### 8. Formulaires Bootstrap

```html
<div class="mb-3">
  <label for="inputEmail4" class="form-label">Email address</label>
  <input type="email" class="form-control" id="inputEmail4" />
</div>

<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Login" />
</div>
```

**Classes de formulaire :**

- `form-label` : Label stylisé
- `form-control` : Input stylisé
- `form-check` : Checkbox/radio
- `input-group` : Groupe avec addons
- `input-group-text` : Texte avant/après input
- `mb-3` : Marge bottom (spacing)

### 9. Spinner (Indicateur de chargement)

```html
<div class="spinner-border ms-3" role="status" aria-hidden="true"></div>
```

**Variantes :**

- `spinner-border` : Cercle tournant
- `spinner-grow` : Animation de pulsation
- `text-primary`, `text-danger`, etc. : Couleurs

---

## Les fonctionnalités JavaScript

### 1. Modale au clic sur le bouton Papillon

**HTML :**

```html
<a
  href="#"
  id="btnPapillon"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#papillonModal"
>
  Commander votre propre papillon
</a>
```

**Fonctionnement :**

- `data-bs-toggle="modal"` : Active le comportement modale
- `data-bs-target="#papillonModal"` : Cible la modale spécifique
- Aucun JavaScript nécessaire (Bootstrap gère tout)

### 2. Citation aléatoire de Blade Runner

**JavaScript :**

```javascript
const btnReboot = document.querySelector(".btn-danger");
const jumbotronTitle = document.querySelector(".display-3");
const jumbotronText = document.querySelector(".fs-4");
const jumbotronLead = document.querySelector(".lead");

const citations = [
  {
    titre: "J'ai vu des choses...",
    texte: "J'ai vu des choses que vous, humains, ne pourriez pas croire.",
    lead: "Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie.",
  },
  // ... autres citations
];

btnReboot.addEventListener("click", (e) => {
  e.preventDefault();

  const citationAleatoire =
    citations[Math.floor(Math.random() * citations.length)];

  jumbotronTitle.textContent = citationAleatoire.titre;
  jumbotronText.innerHTML = citationAleatoire.texte;
  jumbotronLead.textContent = citationAleatoire.lead;
});
```

**Concepts clés :**

**a) Sélection d'éléments :**

- `querySelector()` : Sélectionne le premier élément correspondant
- `.btn-danger` : Sélecteur CSS de classe
- `.display-3` : Cible par classe Bootstrap

**b) Tableau d'objets :**

```javascript
const citations = [
  { titre: "...", texte: "...", lead: "..." },
  { titre: "...", texte: "...", lead: "..." },
];
```

Structure de données pour stocker plusieurs citations.

**c) Sélection aléatoire :**

```javascript
Math.floor(Math.random() * citations.length);
```

- `Math.random()` : Nombre entre 0 et 1
- `* citations.length` : Multiplie par le nombre d'éléments
- `Math.floor()` : Arrondit vers le bas

**d) Modification du DOM :**

- `textContent` : Remplace le texte (échappe le HTML)
- `innerHTML` : Remplace en interprétant le HTML

**e) Prévention du comportement par défaut :**

```javascript
e.preventDefault();
```

Empêche le lien de naviguer vers `#`.

### 3. Pagination et changement de contenu

**HTML :**

```html
<li class="page-item">
  <a class="page-link" href="#" data-page="1">1</a>
</li>
```

**JavaScript :**

```javascript
const pagesContent = {
  1: {
    title: "Bonjour, monde!",
    text: "Il existe plusieurs visions du terme...",
    lead: "Le sens étendu désigne l'univers dans son ensemble.",
  },
  2: {
    title: "La Plateforme",
    text: "École de développement web...",
    lead: "Apprenez à coder en vous amusant !",
  },
};

document.querySelectorAll("[data-page]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const pageNum = e.target.getAttribute("data-page");
    const content = pagesContent[pageNum];

    // Modifier le contenu du jumbotron
    document.getElementById("jumbotronTitle").textContent = content.title;
    document.getElementById("jumbotronText").textContent = content.text;
    document.getElementById("jumbotronLead").textContent = content.lead;

    // Marquer la page active
    document.querySelectorAll(".page-item").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.parentElement.classList.add("active");

    // Activer l'élément de liste correspondant
    document.querySelectorAll("[data-cercle]").forEach((item) => {
      item.classList.remove("active", "list-group-item-primary");
    });

    const cercleActif = document.querySelector(`[data-cercle="${pageNum}"]`);
    if (cercleActif) {
      cercleActif.classList.add("active", "list-group-item-primary");
    }
  });
});
```

**Concepts clés :**

**a) querySelectorAll() :**

```javascript
document.querySelectorAll("[data-page]");
```

Sélectionne TOUS les éléments avec l'attribut `data-page`.

**b) forEach() :**

```javascript
elements.forEach((link) => {
  // Traitement pour chaque élément
});
```

Parcourt tous les éléments sélectionnés.

**c) Attributs data-\* :**

```javascript
const pageNum = e.target.getAttribute("data-page");
```

Récupère la valeur de l'attribut personnalisé.

**d) Objet comme structure de données :**

```javascript
const pagesContent = {
  1: { title: "...", text: "..." },
  2: { title: "...", text: "..." },
};
```

Clés numériques ou chaînes pour organiser les données.

**e) Gestion des classes CSS :**

```javascript
element.classList.remove("active"); // Retire
element.classList.add("active"); // Ajoute
element.classList.toggle("active"); // Bascule
```

**f) Sélecteur avec template literal :**

```javascript
const cercle = document.querySelector(`[data-cercle="${pageNum}"]`);
```

Permet d'injecter une variable dans un sélecteur.

**g) parentElement :**

```javascript
e.target.parentElement;
```

Accède à l'élément parent dans le DOM.

### 4. Progress Bar interactive

**HTML :**

```html
<i class="bi bi-arrow-bar-left" id="btnRegresser" style="cursor: pointer;"></i>
<div class="progress flex-grow-1">
  <div class="progress-bar" id="progressBar" style="width: 90%"></div>
</div>
<i
  class="bi bi-arrow-bar-right"
  id="btnProgresser"
  style="cursor: pointer;"
></i>
```

**JavaScript :**

```javascript
const progressBar = document.getElementById("progressBar");
const btnProgresser = document.getElementById("btnProgresser");
const btnRegresser = document.getElementById("btnRegresser");

let progression = 90; // Valeur initiale

btnProgresser.addEventListener("click", () => {
  if (progression < 100) {
    progression += 10;
    if (progression > 100) progression = 100;
    progressBar.style.width = progression + "%";
    progressBar.parentElement.setAttribute("aria-valuenow", progression);
  }
});

btnRegresser.addEventListener("click", () => {
  if (progression > 0) {
    progression -= 10;
    if (progression < 0) progression = 0;
    progressBar.style.width = progression + "%";
    progressBar.parentElement.setAttribute("aria-valuenow", progression);
  }
});
```

**Concepts clés :**

**a) Variable d'état :**

```javascript
let progression = 90;
```

Stocke la valeur actuelle (mutable avec `let`).

**b) Modification de style inline :**

```javascript
progressBar.style.width = progression + "%";
```

Change directement la propriété CSS.

**c) Limites avec conditions :**

```javascript
if (progression < 100) {
  progression += 10;
  if (progression > 100) progression = 100;
}
```

Empêche de dépasser 0-100%.

**d) Accessibilité (ARIA) :**

```javascript
progressBar.parentElement.setAttribute("aria-valuenow", progression);
```

Met à jour l'attribut pour les lecteurs d'écran.

**e) Opérateurs d'incrémentation :**

- `+=` : Ajoute à la valeur
- `-=` : Soustrait de la valeur
- `++` / `--` : Incrémente/décrémente de 1

### 5. Détection de séquence de touches (D-G-C)

**HTML :**

```html
<div class="modal" id="formulaireModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Récapitulatif du formulaire</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
        ></button>
      </div>
      <div class="modal-body" id="recapitulatif">
        <!-- Contenu dynamique -->
      </div>
    </div>
  </div>
</div>
```

**JavaScript :**

```javascript
let sequence = [];
const secretCode = ["d", "g", "c"];

document.addEventListener("keydown", (e) => {
  sequence.push(e.key.toLowerCase());

  if (sequence.length > 3) {
    sequence.shift();
  }

  if (JSON.stringify(sequence) === JSON.stringify(secretCode)) {
    const email = document.getElementById("inputEmail4").value;
    const password = document.getElementById("inputPassword4").value;
    const login = document.querySelector('input[placeholder="Login"]').value;

    const recapHTML = `
            <p><strong>Login:</strong> ${login || "Non renseigné"}</p>
            <p><strong>Email:</strong> ${email || "Non renseigné"}</p>
            <p><strong>Password:</strong> ${
              password ? "****" : "Non renseigné"
            }</p>
        `;

    document.getElementById("recapitulatif").innerHTML = recapHTML;

    const modal = new bootstrap.Modal(
      document.getElementById("formulaireModal")
    );
    modal.show();

    sequence = [];
  }
});
```

**Concepts clés :**

**a) Événement clavier global :**

```javascript
document.addEventListener('keydown', (e) => { ... });
```

Écoute TOUTES les touches du clavier.

**b) Tableau pour stocker la séquence :**

```javascript
let sequence = [];
sequence.push(e.key.toLowerCase());
```

Ajoute chaque touche pressée.

**c) Limitation de taille avec shift() :**

```javascript
if (sequence.length > 3) {
  sequence.shift(); // Retire le premier élément
}
```

Garde seulement les 3 dernières touches.

**d) Comparaison de tableaux :**

```javascript
JSON.stringify(sequence) === JSON.stringify(secretCode);
```

Convertit en chaîne pour comparer (les tableaux ne sont pas directement comparables).

**e) Opérateur ternaire et OR :**

```javascript
${login || 'Non renseigné'}     // Si vide, affiche texte par défaut
${password ? '****' : 'Non renseigné'}  // Condition ternaire
```

**f) Template literals (backticks) :**

```javascript
const html = `
    <p>Bonjour ${nom}</p>
    <p>Email: ${email}</p>
`;
```

Permet l'interpolation de variables dans des chaînes.

**g) Instanciation de modale JavaScript :**

```javascript
const modal = new bootstrap.Modal(element);
modal.show();
```

Crée et affiche une modale programmatiquement.

**h) Propriété .value :**

```javascript
document.getElementById("inputEmail4").value;
```

Récupère la valeur d'un input.

### 6. Validation de formulaire et spinner coloré

**JavaScript :**

```javascript
const form = document.querySelector("form");
const spinner = document.querySelector(".spinner-border");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("inputEmail4").value;
  const password = document.getElementById("inputPassword4").value;

  if (email.trim() !== "" && password.trim() !== "") {
    const couleurs = [
      "text-primary",
      "text-secondary",
      "text-success",
      "text-danger",
      "text-warning",
      "text-info",
      "text-dark",
    ];

    couleurs.forEach((couleur) => spinner.classList.remove(couleur));

    const couleurAleatoire =
      couleurs[Math.floor(Math.random() * couleurs.length)];

    spinner.classList.add(couleurAleatoire);
  } else {
    alert("Veuillez remplir l'email et le mot de passe");
  }
});
```

**Concepts clés :**

**a) Événement submit :**

```javascript
form.addEventListener('submit', (e) => { ... });
```

Se déclenche quand le formulaire est soumis.

**b) Validation de champs :**

```javascript
if (email.trim() !== '' && password.trim() !== '') { ... }
```

- `trim()` : Retire les espaces avant/après
- `!== ''` : Vérifie que ce n'est pas vide
- `&&` : ET logique (les deux doivent être vrais)

**c) Nettoyage de classes multiples :**

```javascript
couleurs.forEach((couleur) => spinner.classList.remove(couleur));
```

Retire toutes les couleurs possibles avant d'en ajouter une nouvelle.

**d) Échappement dans les chaînes :**

```javascript
alert("Veuillez remplir l'email");
```

Le `\` échappe l'apostrophe.

---

## Concepts avancés

### 1. Manipulation du DOM

**Qu'est-ce que le DOM ?**
Le DOM (Document Object Model) est une représentation en arbre de la page HTML que JavaScript peut manipuler.

```
document
  └── html
      ├── head
      │   ├── meta
      │   └── title
      └── body
          ├── header
          │   └── nav
          └── main
              ├── section
              └── div
```

**Méthodes de sélection :**

```javascript
// Sélection unique
document.getElementById("monId"); // Par ID
document.querySelector(".maClasse"); // Premier élément correspondant
document.querySelector("#monId"); // Équivalent à getElementById
document.querySelector('[data-page="1"]'); // Par attribut

// Sélection multiple
document.querySelectorAll(".maClasse"); // Tous les éléments
document.getElementsByClassName("maClasse"); // HTMLCollection (live)
document.getElementsByTagName("div"); // Tous les div
```

**Différences importantes :**

- `querySelectorAll` retourne une **NodeList** (statique)
- `getElementsByClassName` retourne une **HTMLCollection** (live, se met à jour)

**Manipulation :**

```javascript
// Contenu
element.textContent = "Nouveau texte"; // Texte brut
element.innerHTML = "<p>HTML</p>"; // HTML interprété

// Attributs
element.getAttribute("data-page"); // Lire
element.setAttribute("data-page", "2"); // Écrire
element.removeAttribute("data-page"); // Supprimer

// Classes
element.classList.add("active"); // Ajouter
element.classList.remove("active"); // Retirer
element.classList.toggle("active"); // Basculer
element.classList.contains("active"); // Vérifier

// Style
element.style.width = "100px"; // Style inline
element.style.backgroundColor = "red"; // camelCase pour CSS

// Relations
element.parentElement; // Parent
element.children; // Enfants
element.nextElementSibling; // Frère suivant
element.previousElementSibling; // Frère précédent
```

### 2. Événements JavaScript

**Types d'événements courants :**

```javascript
// Souris
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);

// Clavier
document.addEventListener("keydown", handler);
document.addEventListener("keyup", handler);
document.addEventListener("keypress", handler); // Obsolète

// Formulaire
form.addEventListener("submit", handler);
input.addEventListener("change", handler);
input.addEventListener("input", handler); // À chaque frappe
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);

// Fenêtre
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);
```

**L'objet Event :**

```javascript
element.addEventListener("click", (e) => {
  e.target; // Élément cliqué
  e.currentTarget; // Élément avec le listener
  e.preventDefault(); // Empêche le comportement par défaut
  e.stopPropagation(); // Arrête la propagation
  e.key; // Touche pressée (keydown)
  e.clientX, e.clientY; // Position souris
});
```

**Propagation des événements :**

```
┌─────────────────┐
│   document      │  3. Bubbling (remonte)
│  ┌───────────┐  │
│  │  parent   │  │  2. Target
│  │ ┌───────┐ │  │
│  │ │ child │ │  │  1. Capturing (descend)
│  │ └───────┘ │  │
│  └───────────┘  │
└─────────────────┘
```

### 3. Fonctions fléchées vs fonctions classiques

```javascript
// Fonction classique
function maFonction(param) {
  return param * 2;
}

// Fonction fléchée
const maFonction = (param) => {
  return param * 2;
};

// Fonction fléchée courte (return implicite)
const maFonction = (param) => param * 2;

// Plusieurs paramètres
const somme = (a, b) => a + b;

// Aucun paramètre
const saluer = () => console.log("Bonjour");
```

**Différences :**

- Pas de `this` propre dans les fonctions fléchées
- Syntaxe plus courte
- Return implicite si une seule expression

### 4. Structures de données JavaScript

**Tableaux (Arrays) :**

```javascript
const fruits = ["pomme", "banane", "orange"];

// Méthodes de modification
fruits.push("fraise"); // Ajoute à la fin
fruits.pop(); // Retire le dernier
fruits.shift(); // Retire le premier
fruits.unshift("kiwi"); // Ajoute au début
fruits.splice(1, 2); // Retire 2 éléments à partir de l'index 1

// Méthodes de parcours
fruits.forEach((fruit) => console.log(fruit));
fruits.map((fruit) => fruit.toUpperCase());
fruits.filter((fruit) => fruit.length > 5);
fruits.find((fruit) => fruit === "pomme");

// Autres
fruits.length; // Taille
fruits[0]; // Premier élément
fruits.includes("pomme"); // Vérifie présence
```

**Objets (Objects) :**

```javascript
const personne = {
  nom: "Dupont",
  prenom: "Jean",
  age: 30,
  saluer: function () {
    console.log("Bonjour !");
  },
};

// Accès
personne.nom; // Notation point
personne["nom"]; // Notation crochet
personne.saluer(); // Appel de méthode

// Modification
personne.age = 31;
personne.ville = "Paris"; // Ajout de propriété
delete personne.age; // Suppression

// Méthodes utiles
Object.keys(personne); // ['nom', 'prenom', 'age']
Object.values(personne); // ['Dupont', 'Jean', 30]
Object.entries(personne); // [['nom', 'Dupont'], ...]
```

### 5. Bootstrap JavaScript API

**Instanciation manuelle :**

```javascript
// Modale
const modal = new bootstrap.Modal(document.getElementById("myModal"));
modal.show();
modal.hide();
modal.toggle();

// Toast
const toast = new bootstrap.Toast(document.getElementById("myToast"));
toast.show();

// Tooltip
const tooltip = new bootstrap.Tooltip(document.getElementById("myButton"));

// Collapse
const collapse = new bootstrap.Collapse(document.getElementById("myCollapse"));
collapse.show();
collapse.hide();
```

**Événements Bootstrap :**

```javascript
const modal = document.getElementById("myModal");

modal.addEventListener("show.bs.modal", () => {
  console.log("Modale sur le point de s'ouvrir");
});

modal.addEventListener("shown.bs.modal", () => {
  console.log("Modale ouverte");
});

modal.addEventListener("hide.bs.modal", () => {
  console.log("Modale sur le point de se fermer");
});
```

### 6. Bonnes pratiques

**1. Nommage :**

```javascript
// ❌ Mauvais
const x = document.getElementById("btn");
const arr = [1, 2, 3];

// ✅ Bon
const submitButton = document.getElementById("submitBtn");
const userScores = [1, 2, 3];
```

**2. Éviter la répétition :**

```javascript
// ❌ Mauvais
document.getElementById("title").textContent = "Titre";
document.getElementById("title").style.color = "red";
document.getElementById("title").classList.add("active");

// ✅ Bon
const title = document.getElementById("title");
title.textContent = "Titre";
title.style.color = "red";
title.classList.add("active");
```

**3. Séparer les responsabilités :**

```javascript
// ❌ Mauvais - Tout dans un event listener
button.addEventListener("click", () => {
  const data = getData();
  processData(data);
  updateUI(data);
  saveToLocalStorage(data);
});

// ✅ Bon - Fonctions séparées
function handleButtonClick() {
  const data = getData();
  const processed = processData(data);
  updateUI(processed);
  saveData(processed);
}

button.addEventListener("click", handleButtonClick);
```

**4. Validation des données :**

```javascript
// ❌ Mauvais
const value = input.value;
const result = value * 2;

// ✅ Bon
const value = input.value.trim();
if (value !== "" && !isNaN(value)) {
  const result = parseFloat(value) * 2;
} else {
  console.error("Valeur invalide");
}
```

---

## Résumé des compétences acquises

### HTML/Bootstrap

✅ Structure sémantique HTML5  
✅ Système de grille Bootstrap  
✅ Composants (cards, navbar, modales, pagination)  
✅ Formulaires Bootstrap  
✅ Classes utilitaires (spacing, colors, display)  
✅ Responsive design  
✅ Accessibilité (ARIA)

### JavaScript

✅ Manipulation du DOM  
✅ Gestion des événements  
✅ Tableaux et objets  
✅ Fonctions fléchées  
✅ Template literals  
✅ Conditions et boucles  
✅ API Bootstrap JavaScript  
✅ Validation de formulaires

### Concepts avancés

✅ Séquence de touches  
✅ État d'application (variables)  
✅ Données structurées  
✅ Interactivité dynamique  
✅ Attributs data-\*  
✅ classList API

---

## Ressources complémentaires

**Documentation officielle :**

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

**Tutoriels :**

- [JavaScript.info](https://javascript.info/)
- [W3Schools Bootstrap](https://www.w3schools.com/bootstrap5/)

**Outils :**

- [CodePen](https://codepen.io/) - Tester du code rapidement
- [Bootstrap Builder](https://bootstrap.build/) - Générateur de composants

---

## Exercices supplémentaires

1. **Ajouter un système de favoris** : Permettre de marquer des pages comme favorites et les afficher dans la liste
2. **LocalStorage** : Sauvegarder la progression de la barre et la restaurer au rechargement
3. **Animation au scroll** : Faire apparaître les éléments progressivement lors du défilement
4. **Thème sombre/clair** : Ajouter un bouton pour basculer entre les thèmes
5. **Validation avancée** : Ajouter des règles de validation complexes (regex, longueur minimale)

---

**Fin du cours - Job02**
