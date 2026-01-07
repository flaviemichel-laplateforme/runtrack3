# 📚 COURS COMPLET - Projet Site La Plateforme_

## Table des matières
1. [Introduction et architecture](#1-introduction-et-architecture)
2. [Concepts JavaScript fondamentaux](#2-concepts-javascript-fondamentaux)
3. [Système d'inscription](#3-système-dinscription)
4. [Système de connexion](#4-système-de-connexion)
5. [Gestion de session](#5-gestion-de-session)
6. [Calendrier utilisateur](#6-calendrier-utilisateur)
7. [Backoffice modérateur](#7-backoffice-modérateur)
8. [Interface administrateur](#8-interface-administrateur)
9. [Workflow complet](#9-workflow-complet)
10. [Bootstrap et responsive design](#10-bootstrap-et-responsive-design)

---

## 1. Introduction et architecture

### 📁 Structure du projet

```
bigjob/
├── index.html                    # Page d'accueil
├── data/
│   ├── users.json               # Base de données utilisateurs (pré-existants)
│   └── request.json             # Événements approuvés (pré-existants)
├── assets/
│   ├── js/
│   │   ├── script.js           # Navigation et déconnexion
│   │   ├── inscription.js      # Logique d'inscription
│   │   ├── connexion.js        # Logique de connexion
│   │   ├── calendrier.js       # Gestion du calendrier
│   │   ├── backoffice.js       # Interface modérateur
│   │   └── admin.js            # Interface administrateur
│   └── css/
│       └── styles.css          # Styles personnalisés
├── utilisateurs/
│   ├── inscription.html        # Formulaire inscription
│   ├── connexion.html          # Formulaire connexion
│   └── calendrier.html         # Interface calendrier
├── moderateurs/
│   └── backoffice.html         # Interface modération
└── administrateurs/
    └── gestion-droits.html     # Interface administration
```

### 🎯 Rôles utilisateurs

| Rôle | Droits |
|------|--------|
| **user** | Créer des demandes de présence |
| **moderator** | Approuver/refuser les demandes |
| **admin** | Tout (approuver + gérer les rôles) |

---

## 2. Concepts JavaScript fondamentaux

### 🔹 localStorage vs sessionStorage

#### localStorage (Stockage permanent)
```javascript
// ÉCRITURE - Sauvegarder des données
localStorage.setItem("clé", "valeur");

// LECTURE - Récupérer des données
const valeur = localStorage.getItem("clé");

// SUPPRESSION
localStorage.removeItem("clé");

// Exemple concret du projet
const users = [{id: 1, nom: "Dupont"}];
localStorage.setItem("users", JSON.stringify(users)); // Convertir en texte
```

**💡 Important :** localStorage ne stocke que du **texte**. Pour les objets/tableaux, on utilise :
- `JSON.stringify()` → convertir objet en texte (pour sauvegarder)
- `JSON.parse()` → convertir texte en objet (pour lire)

#### sessionStorage (Stockage temporaire)
```javascript
// Même syntaxe que localStorage
sessionStorage.setItem("currentUser", JSON.stringify(user));

// Différence : Les données disparaissent quand on ferme l'onglet
```

**📌 Dans notre projet :**
- `localStorage` → Stocker les utilisateurs inscrits, demandes en attente
- `sessionStorage` → Stocker l'utilisateur connecté (session)

---

### 🔹 Fonctions async/await et fetch

#### fetch() - Charger des fichiers JSON
```javascript
// SANS async/await (ancien style)
fetch('../data/users.json')
    .then(response => response.json())
    .then(data => console.log(data));

// AVEC async/await (moderne) ✅
async function loadUsers() {
    try {
        const response = await fetch('../data/users.json');
        const users = await response.json();
        return users;
    } catch (error) {
        console.error("Erreur:", error);
        return [];
    }
}
```

**💡 Vocabulaire :**
- `async` → "Cette fonction est asynchrone (peut prendre du temps)"
- `await` → "Attends que cette action soit terminée avant de continuer"
- `try/catch` → "Essaye, et si erreur, attrape-la"

---

### 🔹 Manipulation du DOM

```javascript
// SÉLECTIONNER un élément
const bouton = document.getElementById('monBouton');
const tableau = document.querySelector('tbody');

// MODIFIER le contenu HTML
tableau.innerHTML = '<tr><td>Nouveau contenu</td></tr>';

// AJOUTER du contenu
tableau.innerHTML += '<tr><td>Ajout</td></tr>';

// ÉVÉNEMENTS
bouton.addEventListener('click', function() {
    alert("Cliqué !");
});

// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page prête !");
});
```

---

## 3. Système d'inscription

### 📄 Fichier : `inscription.js`

#### Étape 1 : Validation du domaine email

```javascript
function isLaPlateformeEmail(email) {
    // Vérifie si l'email se termine par "@laplateforme.io"
    return email.endsWith("@laplateforme.io");
}

// Exemple d'utilisation
isLaPlateformeEmail("john@laplateforme.io");  // ✅ true
isLaPlateformeEmail("john@gmail.com");         // ❌ false
```

**📝 Explication :**
- `endsWith()` est une méthode JavaScript qui vérifie la fin d'une chaîne
- Seuls les emails La Plateforme_ sont acceptés (consigne du projet)

---

#### Étape 2 : Validation format email

```javascript
function isValidEmail(email) {
    // Expression régulière (regex) pour valider le format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
```

**📝 Décomposition du regex :**
- `^` → Début de la chaîne
- `[^\s@]+` → Un ou plusieurs caractères (sauf espace et @)
- `@` → Le symbole @
- `[^\s@]+` → Un ou plusieurs caractères (domaine)
- `\.` → Un point
- `[^\s@]+` → Extension (.io, .com, etc.)
- `$` → Fin de la chaîne

---

#### Étape 3 : Charger les utilisateurs existants

```javascript
async function loadUsers() {
    try {
        // Essayer de charger users.json
        const response = await fetch('../data/users.json');
        
        // Si le fichier existe
        if (response.ok) {
            const users = await response.json();
            return users;
        }
        
        // Sinon, retourner un tableau vide
        return [];
    } catch (error) {
        console.error('Erreur:', error);
        return [];
    }
}
```

**💡 Pourquoi ?**
- Vérifier si l'email existe déjà (éviter doublons)
- Obtenir le dernier ID pour créer le nouveau

---

#### Étape 4 : Créer et sauvegarder un utilisateur

```javascript
async function handleRegister(event) {
    event.preventDefault(); // Empêche rechargement de la page
    
    // 1️⃣ RÉCUPÉRER les valeurs du formulaire
    const email = document.getElementById('inputEmail4').value;
    const password = document.getElementById('inputPassword4').value;
    const nom = document.getElementById('inputNom').value;
    const prenom = document.getElementById('inputPrenom').value;
    
    // 2️⃣ VALIDER le format email
    if (!isValidEmail(email)) {
        alert('Veuillez entrer une adresse email valide');
        return; // Arrêter l'exécution
    }
    
    // 3️⃣ VALIDER le domaine
    if (!isLaPlateformeEmail(email)) {
        alert("Seuls les emails @laplateforme.io sont acceptés");
        return;
    }
    
    // 4️⃣ VÉRIFIER si l'email existe déjà
    const users = await loadUsers();
    const emailExists = users.some(u => u.email === email);
    
    if (emailExists) {
        alert('Un compte existe déjà avec cet email');
        return;
    }
    
    // 5️⃣ CRÉER le nouvel utilisateur
    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        email,
        nom,
        prenom,
        password,
        role: "user", // Rôle par défaut
        dateInscription: new Date().toISOString().split('T')[0],
        actif: true
    };
    
    // 6️⃣ SAUVEGARDER dans localStorage
    const localUsers = JSON.parse(localStorage.getItem("users")) || users;
    localUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(localUsers));
    
    // 7️⃣ REDIRIGER vers la connexion
    alert('Inscription réussie !');
    window.location.href = 'connexion.html';
}
```

**📝 Explications détaillées :**

**Ligne 1 :** `event.preventDefault()`
- Par défaut, un formulaire recharge la page à la soumission
- On empêche ce comportement pour gérer l'inscription en JavaScript

**Ligne 4-7 :** Récupération des valeurs
- `document.getElementById()` trouve l'élément HTML par son ID
- `.value` récupère ce que l'utilisateur a +

**Ligne 20 :** `users.some()`
- `some()` vérifie si AU MOINS UN élément correspond
- Retourne `true` ou `false`

**Ligne 27 :** Calcul de l'ID
```javascript
Math.max(...users.map(u => u.id)) + 1
//        ↑         ↑
//        |         Récupère tous les IDs
//        Trouve le plus grand
// +1 → Nouveau ID unique
```

**Ligne 28 :** Syntaxe courte
```javascript
email,  // équivaut à → email: email
nom,    // équivaut à → nom: nom
```

---

#### Étape 5 : Initialisation au chargement

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    
    if (form) {
        form.addEventListener('submit', handleRegister);
    }
});
```

**📝 Explication :**
1. Attendre que la page soit complètement chargée
2. Trouver le formulaire d'inscription
3. Écouter l'événement "submit" (soumission)
4. Appeler `handleRegister` quand le formulaire est soumis

---

## 4. Système de connexion

### 📄 Fichier : `connexion.js`

#### Étape 1 : Charger utilisateurs (JSON + localStorage)

```javascript
async function loadUsers() {
    try {
        // Charger depuis users.json
        const response = await fetch('../data/users.json');
        let jsonUsers = [];
        
        if (response.ok) {
            jsonUsers = await response.json();
        }
        
        // Charger depuis localStorage (utilisateurs inscrits)
        const localUsers = JSON.parse(localStorage.getItem("users")) || [];
        
        // FUSIONNER les deux sources
        return [...jsonUsers, ...localUsers];
    } catch (error) {
        console.error('Erreur:', error);
        return JSON.parse(localStorage.getItem("users")) || [];
    }
}
```

**💡 Syntaxe importante :**
```javascript
[...jsonUsers, ...localUsers]
// Le spread operator (...) fusionne deux tableaux
// [1, 2] + [3, 4] → [1, 2, 3, 4]
```

---

#### Étape 2 : Gestion de la connexion

```javascript
async function handleLogin(event) {
    event.preventDefault();
    
    // 1️⃣ RÉCUPÉRER email et mot de passe
    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;
    
    // 2️⃣ VALIDER le format
    if (!isValidEmail(email)) {
        alert('Veuillez entrer une adresse email valide');
        return;
    }
    
    // 3️⃣ VÉRIFIER le domaine
    if (!isLaPlateformeEmail(email)) {
        alert("Seuls les emails @laplateforme.io sont acceptés");
        return;
    }
    
    // 4️⃣ CHARGER tous les utilisateurs
    const users = await loadUsers();
    
    // 5️⃣ CHERCHER l'utilisateur
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // 6️⃣ STOCKER dans sessionStorage
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        
        // 7️⃣ REDIRIGER selon le rôle
        switch (user.role) {
            case 'admin':
                window.location.href = '../administrateurs/gestion-droits.html';
                break;
            case 'moderator':
                window.location.href = '../moderateurs/backoffice.html';
                break;
            case 'user':
            default:
                window.location.href = 'calendrier.html';
                break;
        }
    } else {
        alert('Email ou mot de passe incorrect');
    }
}
```

**📝 Explications :**

**Ligne 24 :** `find()` vs `some()`
```javascript
// find() → Retourne l'ÉLÉMENT trouvé (ou undefined)
const user = users.find(u => u.email === email);

// some() → Retourne true/false
const exists = users.some(u => u.email === email);
```

**Ligne 30 :** switch/case
- Structure pour gérer plusieurs cas
- Équivalent à plusieurs `if/else`

---

## 5. Gestion de session

### 📄 Fichier : `script.js`

#### Fonction de déconnexion

```javascript
function logout() {
    // 1️⃣ SUPPRIMER les données de session
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('currentUser');
    
    // 2️⃣ DÉTECTER le dossier actuel
    const currentPath = window.location.pathname;
    let redirectPath = 'connexion.html';
    
    // Si on est dans moderateurs/ ou administrateurs/
    if (currentPath.includes('/moderateurs/') || 
        currentPath.includes('/administrateurs/')) {
        redirectPath = '../utilisateurs/connexion.html';
    }
    
    // 3️⃣ REDIRIGER vers la connexion
    window.location.href = redirectPath;
}
```

---

#### Vérification d'authentification

```javascript
function checkAuth() {
    const currentUser = sessionStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
}
```

**💡 Opérateur ternaire :**
```javascript
// Version courte
return currentUser ? JSON.parse(currentUser) : null;

// Équivaut à :
if (currentUser) {
    return JSON.parse(currentUser);
} else {
    return null;
}
```

---

#### Adapter la navigation selon le rôle

```javascript
function updateNavByRole() {
    const user = checkAuth();
    
    if (user) {
        // 1️⃣ CACHER inscription/connexion
        const inscriptionLink = document.querySelector('a[href*="inscription.html"]');
        const connexionLink = document.querySelector('a[href*="connexion.html"]');
        
        if (inscriptionLink) inscriptionLink.closest('.nav-item').style.display = 'none';
        if (connexionLink) connexionLink.closest('.nav-item').style.display = 'none';
        
        // 2️⃣ AFFICHER le bouton déconnexion
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) logoutBtn.closest('.nav-item').style.display = 'block';
        
        // 3️⃣ GÉRER les dropdowns selon le rôle
        const allDropdowns = document.querySelectorAll('.nav-item.dropdown');
        
        allDropdowns.forEach(dropdown => {
            const backofficeLink = dropdown.querySelector('a[href*="backoffice.html"]');
            const gestionDroitsLink = dropdown.querySelector('a[href*="gestion-droits.html"]');
            
            // Dropdown modérateur (visible pour moderator ET admin)
            if (backofficeLink) {
                dropdown.style.display = 
                    (user.role === 'moderator' || user.role === 'admin') 
                    ? 'block' : 'none';
            }
            
            // Dropdown admin (visible seulement pour admin)
            if (gestionDroitsLink) {
                dropdown.style.display = 
                    user.role === 'admin' ? 'block' : 'none';
            }
        });
    } else {
        // Si pas connecté, cacher les menus utilisateur
        // ... (logique inverse)
    }
}
```

**📝 Concepts utilisés :**

**querySelector** avec `*=`
```javascript
// Trouve un lien dont l'attribut href CONTIENT "inscription.html"
document.querySelector('a[href*="inscription.html"]')
```

**closest()**
```javascript
// Remonte dans l'arbre DOM pour trouver l'élément parent
// <li class="nav-item">
//     <a href="...">Lien</a>  ← on est ici
// </li>                        ← closest('.nav-item') trouve ça

element.closest('.nav-item')
```

**forEach()**
```javascript
// Boucle sur chaque élément d'un tableau
allDropdowns.forEach(dropdown => {
    // Traiter chaque dropdown
});
```

---

## 6. Calendrier utilisateur

### 📄 Fichier : `calendrier.js`

#### Protection de la page

```javascript
function requireAuth() {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!user) {
        alert("Vous devez être connecté pour accéder au calendrier");
        window.location.href = 'connexion.html';
        return false;
    }
    
    return true;
}
```

**💡 Pourquoi ?**
- Empêche l'accès direct au calendrier sans connexion
- Redirige automatiquement vers la connexion

---

#### Vérification des dates passées

```javascript
function isPastDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Réinitialiser l'heure à minuit
    
    return date < today;
}

// Utilisation
isPastDate("2025-12-01"); // ✅ true (date passée)
isPastDate("2026-02-01"); // ❌ false (date future)
```

**📝 Manipulation de dates :**
```javascript
new Date("2026-01-15")    // Créer une date
date.setHours(0, 0, 0, 0) // Mettre à minuit (ignorer l'heure)
date1 < date2             // Comparer deux dates
```

---

#### Créer une demande de présence

```javascript
function createPresenceRequest(requestData) {
    // 1️⃣ RÉCUPÉRER l'utilisateur connecté
    const user = JSON.parse(sessionStorage.getItem("currentUser"));
    
    if (!user) {
        alert("Vous devez être connecté pour faire une demande");
        return false;
    }
    
    // 2️⃣ VÉRIFIER les dates
    if (isPastDate(requestData.dateDebut)) {
        alert("Impossible de réserver une date passée");
        return false;
    }
    
    // 3️⃣ CRÉER la demande
    const newRequest = {
        id: Date.now(), // Timestamp unique
        people: `${user.prenom} ${user.nom}`,
        start: `${requestData.dateDebut} ${requestData.heureDebut}`,
        end: `${requestData.dateFin} ${requestData.heureFin}`,
        title: requestData.motif,
        description: requestData.description || "",
        location: requestData.location || "Non spécifié",
        status: "pending", // En attente de validation
        userId: user.id,
        userEmail: user.email,
        dateCreation: new Date().toISOString()
    };
    
    // 4️⃣ SAUVEGARDER dans localStorage
    const requests = loadPendingRequests();
    requests.push(newRequest);
    localStorage.setItem("pendingRequests", JSON.stringify(requests));
    
    alert("Votre demande a été envoyée et est en attente de validation");
    return true;
}
```

**📝 Points importants :**

**Template literals** (backticks)
```javascript
`${user.prenom} ${user.nom}`
// Au lieu de : user.prenom + " " + user.nom
```

**Valeur par défaut** avec `||`
```javascript
description: requestData.description || ""
// Si description est vide → utiliser ""
```

**Date.now()**
```javascript
Date.now() // → 1736276400000 (timestamp en millisecondes)
// ID unique basé sur le temps
```

---

#### Afficher tous les événements

```javascript
async function getAllEvents() {
    // 1️⃣ CHARGER depuis request.json
    const approvedEvents = await loadEvents();
    
    // 2️⃣ CHARGER depuis localStorage (approuvées)
    const approvedRequests = JSON.parse(localStorage.getItem("approvedRequests")) || [];
    
    // 3️⃣ CHARGER depuis localStorage (en attente)
    const pendingRequests = loadPendingRequests();
    
    // 4️⃣ AJOUTER des indicateurs visuels
    const approved = approvedEvents.map(event => ({
        ...event,
        title: `✓ ${event.title}`,
        status: "approved"
    }));
    
    const localApproved = approvedRequests.map(req => ({
        ...req,
        title: `✓ ${req.title}`,
        status: "approved"
    }));
    
    const pending = pendingRequests.map(req => ({
        ...req,
        title: `⏳ ${req.title}`,
        status: "pending"
    }));
    
    // 5️⃣ FUSIONNER tout
    return [...approved, ...localApproved, ...pending];
}
```

**💡 Spread operator dans les objets :**
```javascript
const event = { id: 1, title: "Test" };

const newEvent = {
    ...event,           // Copie toutes les propriétés
    title: `✓ ${event.title}`,  // Remplace le title
    status: "approved"          // Ajoute une propriété
};

// Résultat :
// { id: 1, title: "✓ Test", status: "approved" }
```

---

## 7. Backoffice modérateur

### 📄 Fichier : `backoffice.js`

#### Protection de l'accès

```javascript
function requireAuth(requiredRole) {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    
    // 1️⃣ VÉRIFIER si connecté
    if (!user) {
        alert("Vous devez être connecté");
        window.location.href = '../utilisateurs/connexion.html';
        return false;
    }
    
    // 2️⃣ VÉRIFIER le rôle (moderator OU admin)
    if (requiredRole && user.role !== requiredRole && user.role !== 'admin') {
        alert("Accès non autorisé");
        window.location.href = '../utilisateurs/calendrier.html';
        return false;
    }
    
    return true;
}
```

**💡 Logique :**
- Les admins ont accès à TOUT (ligne 13)
- Les modérateurs ont accès uniquement au backoffice

---

#### Afficher les demandes en attente

```javascript
function displayRequestsInTable(requests) {
    const tbody = document.querySelector('tbody');
    
    // 1️⃣ VÉRIFIER que le tableau existe
    if (!tbody) {
        console.error("Tableau non trouvé");
        return;
    }
    
    // 2️⃣ VIDER le tableau
    tbody.innerHTML = '';
    
    // 3️⃣ CAS SPÉCIAL : aucune demande
    if (requests.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center">Aucune demande en attente</td></tr>';
        return;
    }
    
    // 4️⃣ BOUCLE sur chaque demande
    requests.forEach((request) => {
        // Séparer prénom et nom
        const nameParts = request.people.split(' ');
        const prenom = nameParts[0] || '';
        const nom = nameParts.slice(1).join(' ') || '';
        
        // Créer une ligne HTML
        const row = `
            <tr>
                <th scope="row">${request.id}</th>
                <td>${nom}</td>
                <td>${prenom}</td>
                <td>${request.userEmail}</td>
                <td>
                    <button class="btn btn-success btn-sm" onclick="approveRequest(${request.id})">
                        Accepter
                    </button>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="rejectRequest(${request.id})">
                        Refuser
                    </button>
                </td>
            </tr>
        `;
        
        // 5️⃣ AJOUTER au tableau
        tbody.innerHTML += row;
    });
}
```

**📝 Techniques utilisées :**

**split() et slice()**
```javascript
const people = "John Doe Martin";
const parts = people.split(' '); // ['John', 'Doe', 'Martin']

const prenom = parts[0];              // 'John'
const nom = parts.slice(1).join(' '); // 'Doe Martin'
```

**colspan**
```javascript
<td colspan="6">Texte sur 6 colonnes</td>
// Fusionne 6 colonnes en une seule
```

**onclick dans le HTML**
```javascript
<button onclick="approveRequest(${request.id})">
// Appelle la fonction JavaScript au clic
```

---

#### Approuver une demande

```javascript
function approveRequest(requestId) {
    // 1️⃣ CHARGER les demandes en attente
    const pending = JSON.parse(localStorage.getItem("pendingRequests")) || [];
    
    // 2️⃣ TROUVER la demande
    const request = pending.find(r => r.id === requestId);
    
    if (request) {
        // 3️⃣ CHANGER le statut
        request.status = "approved";
        
        // 4️⃣ AJOUTER aux approuvées
        const approved = JSON.parse(localStorage.getItem("approvedRequests")) || [];
        approved.push(request);
        localStorage.setItem("approvedRequests", JSON.stringify(approved));
        
        // 5️⃣ RETIRER des en attente
        const updatedPending = pending.filter(r => r.id !== requestId);
        localStorage.setItem("pendingRequests", JSON.stringify(updatedPending));
        
        // 6️⃣ RAFRAÎCHIR l'affichage
        alert("Demande approuvée !");
        loadPendingRequests();
    }
}
```

**💡 filter() - Retirer un élément :**
```javascript
const pending = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" }
];

// Garder tous SAUF celui avec id=2
const updated = pending.filter(r => r.id !== 2);
// Résultat : [{ id: 1 }, { id: 3 }]
```

---

#### Refuser une demande

```javascript
function rejectRequest(requestId) {
    // 1️⃣ DEMANDER confirmation
    if (!confirm("Êtes-vous sûr de vouloir refuser cette demande ?")) {
        return; // Si annulation, ne rien faire
    }
    
    // 2️⃣ RETIRER la demande
    const pending = JSON.parse(localStorage.getItem("pendingRequests")) || [];
    const updatedPending = pending.filter(r => r.id !== requestId);
    localStorage.setItem("pendingRequests", JSON.stringify(updatedPending));
    
    alert("Demande refusée !");
    loadPendingRequests();
}
```

---

## 8. Interface administrateur

### 📄 Fichier : `admin.js`

#### Gérer les deux tableaux

```javascript
// TABLEAU 1 : Demandes en attente
function loadPendingRequests() {
    const requests = JSON.parse(localStorage.getItem("pendingRequests")) || [];
    displayPendingRequestsTable(requests);
}

// TABLEAU 2 : Utilisateurs
async function loadAllUsers() {
    const users = await loadUsers();
    displayUsersInTable(users);
}
```

---

#### Afficher les utilisateurs avec sélecteur de rôle

```javascript
function displayUsersInTable(users) {
    const tbody = document.querySelectorAll('tbody')[1]; // 2ème tableau
    
    if (!tbody) {
        console.error("Deuxième tableau non trouvé");
        return;
    }
    
    tbody.innerHTML = '';
    
    users.forEach(user => {
        const row = `
            <tr>
                <th scope="row">${user.id}</th>
                <td>${user.nom}</td>
                <td>${user.prenom}</td>
                <td>${user.email}</td>
                <td>
                    <select class="form-select form-select-sm" id="role-${user.id}">
                        <option ${user.role === 'user' ? 'selected' : ''} value="user">Utilisateur</option>
                        <option ${user.role === 'moderator' ? 'selected' : ''} value="moderator">Modérateur</option>
                        <option ${user.role === 'admin' ? 'selected' : ''} value="admin">Administrateur</option>
                    </select>
                </td>
                <td class="text-center">
                    <button class="btn btn-primary btn-sm" onclick="updateUserRole(${user.id})">
                        Valider
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">
                        Supprimer
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}
```

**📝 Sélecteur avec option pré-sélectionnée :**
```html
<option ${user.role === 'admin' ? 'selected' : ''} value="admin">
<!--         ↑ Si le rôle est admin → ajouter "selected"         -->
```

---

#### Modifier le rôle d'un utilisateur

```javascript
function updateUserRole(userId) {
    // 1️⃣ RÉCUPÉRER le nouveau rôle sélectionné
    const newRole = document.getElementById(`role-${userId}`).value;
    
    // 2️⃣ CHARGER les utilisateurs
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // 3️⃣ TROUVER l'utilisateur
    const user = users.find(u => u.id === userId);
    
    if (user) {
        // 4️⃣ MODIFIER le rôle
        user.role = newRole;
        
        // 5️⃣ SAUVEGARDER
        localStorage.setItem("users", JSON.stringify(users));
        
        alert(`Rôle mis à jour : ${newRole}`);
    }
}
```

**💡 Template literal dans l'ID :**
```javascript
document.getElementById(`role-${userId}`)
// Si userId = 5 → cherche l'élément avec id="role-5"
```

---

#### Supprimer un utilisateur

```javascript
function deleteUser(userId) {
    // 1️⃣ CONFIRMATION
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
        return;
    }
    
    // 2️⃣ FILTRER (garder tous sauf celui-ci)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updated = users.filter(u => u.id !== userId);
    
    // 3️⃣ SAUVEGARDER
    localStorage.setItem("users", JSON.stringify(updated));
    
    alert("Utilisateur supprimé");
    loadAllUsers(); // Rafraîchir
}
```

---

## 9. Workflow complet

### 📊 Diagramme du flux de données

```
┌─────────────────────────────────────────────────────────────┐
│                  PARCOURS UTILISATEUR                        │
└─────────────────────────────────────────────────────────────┘

1️⃣ INSCRIPTION
   └─> inscription.html
       └─> inscription.js
           ├─> Validation email (@laplateforme.io)
           ├─> Création utilisateur
           └─> Stockage dans localStorage["users"]

2️⃣ CONNEXION
   └─> connexion.html
       └─> connexion.js
           ├─> Charge users.json + localStorage["users"]
           ├─> Vérifie email + password
           └─> Stockage session dans sessionStorage["currentUser"]

3️⃣ CRÉATION DEMANDE (utilisateur)
   └─> calendrier.html
       └─> calendrier.js
           ├─> Vérifie authentification
           ├─> Vérifie date (pas dans le passé)
           ├─> Crée demande avec status="pending"
           └─> Stockage dans localStorage["pendingRequests"]

4️⃣ MODÉRATION (moderator/admin)
   └─> backoffice.html
       └─> backoffice.js
           ├─> Charge localStorage["pendingRequests"]
           ├─> Affiche dans tableau
           └─> Action:
               ├─> APPROUVER → localStorage["approvedRequests"]
               └─> REFUSER → Suppression

5️⃣ GESTION UTILISATEURS (admin)
   └─> gestion-droits.html
       └─> admin.js
           ├─> Charge users.json + localStorage["users"]
           ├─> Affiche demandes en attente
           ├─> Affiche utilisateurs avec rôles
           └─> Actions: modifier rôle, supprimer

6️⃣ AFFICHAGE CALENDRIER
   └─> calendrier.html
       └─> Affiche:
           ├─> ✓ request.json (approuvées pré-existantes)
           ├─> ✓ localStorage["approvedRequests"]
           └─> ⏳ localStorage["pendingRequests"]
```

---

### 🗂️ Structure des données

#### localStorage["users"]
```json
[
    {
        "id": 4,
        "email": "marie@laplateforme.io",
        "nom": "Dupont",
        "prenom": "Marie",
        "password": "monpass123",
        "role": "user",
        "dateInscription": "2026-01-07",
        "actif": true
    }
]
```

#### localStorage["pendingRequests"]
```json
[
    {
        "id": 1736276400000,
        "people": "Marie Dupont",
        "start": "2026-01-15 09:00",
        "end": "2026-01-15 17:00",
        "title": "Formation React",
        "description": "Apprentissage des bases",
        "location": "Salle A",
        "status": "pending",
        "userId": 4,
        "userEmail": "marie@laplateforme.io",
        "dateCreation": "2026-01-07T10:30:00.000Z"
    }
]
```

#### sessionStorage["currentUser"]
```json
{
    "id": 2,
    "email": "flavie@laplateforme.io",
    "nom": "Michel",
    "prenom": "Flavie",
    "role": "admin"
}
```

---

## 10. Bootstrap et responsive design

### 📱 Classes Bootstrap utilisées

#### Grille responsive
```html
<div class="container-fluid px-3 px-md-5">
    <!-- container-fluid : pleine largeur
         px-3 : padding horizontal 1rem (mobile)
         px-md-5 : padding horizontal 3rem (tablette+) -->
</div>
```

#### Tableau responsive
```html
<div class="table-responsive">
    <table class="table table-success table-striped table-hover">
        <!-- table-responsive : scroll horizontal si besoin
             table-success : couleur verte
             table-striped : lignes alternées
             table-hover : survol -->
    </table>
</div>
```

#### Boutons
```html
<button class="btn btn-success btn-sm">Accepter</button>
<!-- btn : bouton de base
     btn-success : vert
     btn-sm : petit -->
```

#### Formulaire
```html
<select class="form-select form-select-sm">
    <!-- form-select : style de liste déroulante
         form-select-sm : version petite -->
</select>
```

#### Espacements
```html
<h1 class="text-center my-4 my-md-5">
    <!-- text-center : texte centré
         my-4 : margin vertical 1.5rem (mobile)
         my-md-5 : margin vertical 3rem (tablette+) -->
</h1>
```

#### Navigation
```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <!-- navbar : barre de navigation
         navbar-expand-lg : menu dépliable sur grand écran
         bg-body-tertiary : couleur de fond -->
    
    <button class="navbar-toggler">
        <!-- Bouton hamburger pour mobile -->
    </button>
    
    <div class="collapse navbar-collapse">
        <!-- Menu qui se cache sur mobile -->
    </div>
</nav>
```

---

### 📐 Breakpoints Bootstrap

| Taille | Largeur | Préfixe | Exemple |
|--------|---------|---------|---------|
| Mobile | < 576px | (rien) | `px-3` |
| Tablette | ≥ 768px | `-md-` | `px-md-5` |
| Desktop | ≥ 992px | `-lg-` | `navbar-expand-lg` |

---

## 📚 Récapitulatif des concepts JavaScript

### ✅ Stockage
- `localStorage` → Stockage permanent
- `sessionStorage` → Stockage temporaire (session)
- `JSON.stringify()` / `JSON.parse()` → Convertir objets ↔ texte

### ✅ Async/Await
- `async function` → Fonction asynchrone
- `await` → Attendre une promesse
- `fetch()` → Charger fichiers JSON

### ✅ Manipulation tableaux
- `.push()` → Ajouter à la fin
- `.find()` → Trouver un élément
- `.filter()` → Filtrer éléments
- `.map()` → Transformer éléments
- `.some()` → Vérifier si au moins un
- `.forEach()` → Boucler sur chaque

### ✅ DOM
- `document.getElementById()` → Trouver par ID
- `document.querySelector()` → Trouver par sélecteur CSS
- `.innerHTML` → Modifier contenu HTML
- `.value` → Récupérer valeur input
- `.addEventListener()` → Écouter événement

### ✅ Syntaxe moderne
- Template literals → `` `${variable}` ``
- Spread operator → `[...arr1, ...arr2]`
- Destructuring → `const { nom, prenom } = user`
- Arrow functions → `(param) => { }`
- Opérateur ternaire → `condition ? vrai : faux`

---

## 🎯 Points clés du projet

1. **Séparation des rôles** : user / moderator / admin
2. **Protection des routes** : Vérification authentification
3. **Validation des données** : Email, dates, format
4. **Gestion d'état** : localStorage + sessionStorage
5. **Interface dynamique** : Génération HTML en JavaScript
6. **Responsive design** : Bootstrap pour mobile/tablette/desktop
7. **Workflow complet** : Inscription → Connexion → Demande → Validation

---

## 🚀 Améliorations possibles

1. **Sécurité** : Hashage des mots de passe (bcrypt)
2. **Backend** : API REST avec Node.js/Express
3. **Base de données** : MongoDB, PostgreSQL
4. **Validation** : Formulaires avec contraintes HTML5
5. **Messages** : Toast notifications (au lieu d'alert)
6. **Recherche** : Filtres dans les tableaux
7. **Pagination** : Si beaucoup de données
8. **Export** : Télécharger les demandes en CSV
9. **Statistiques** : Graphiques avec Chart.js
10. **Tests** : Jest pour tester le code

---

## 📖 Ressources pour aller plus loin

- [MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3)
- [JavaScript.info](https://javascript.info/)
- [W3Schools](https://www.w3schools.com/js/)

---

**✨ Félicitations ! Vous maîtrisez maintenant un projet web complet avec JavaScript moderne et Bootstrap.**
