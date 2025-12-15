# 📚 Cours Détaillé - Jour 05 Job 01 : Formulaires avec Validation Asynchrone

## 📑 Table des matières

1. [Introduction](#1-introduction)
2. [Concepts théoriques](#2-concepts-théoriques)
3. [Architecture du projet](#3-architecture-du-projet)
4. [Création du formulaire HTML](#4-création-du-formulaire-html)
5. [Validation asynchrone en JavaScript](#5-validation-asynchrone-en-javascript)
6. [Sécurité côté front-end](#6-sécurité-côté-front-end)
7. [Styling et UX](#7-styling-et-ux)
8. [Bonnes pratiques](#8-bonnes-pratiques)
9. [Exercices pratiques](#9-exercices-pratiques)

---

## 1. Introduction

### 1.1 Objectif du Job

Créer deux formulaires sécurisés avec validation asynchrone :

- **Formulaire de connexion** : Email + Mot de passe
- **Formulaire d'inscription** : Nom, Prénom, Email, Mot de passe, Adresse, Code postal

### 1.2 Compétences visées

- ✅ Gérer la validation de formulaires en temps réel
- ✅ Utiliser les Promises et async/await en JavaScript
- ✅ Implémenter des sécurités côté front-end
- ✅ Améliorer l'expérience utilisateur (UX)
- ✅ Utiliser les expressions régulières (regex)

### 1.3 Technologies utilisées

| Technologie         | Utilisation                                       |
| ------------------- | ------------------------------------------------- |
| **HTML5**           | Structure sémantique avec attributs de validation |
| **CSS3**            | Design moderne et responsive                      |
| **JavaScript ES6+** | Validation asynchrone avec Promises               |
| **Regex**           | Validation de formats (email, code postal, etc.)  |

---

## 2. Concepts théoriques

### 2.1 Qu'est-ce que la validation asynchrone ?

La **validation asynchrone** permet de valider des champs sans bloquer l'interface utilisateur. Elle simule (ou effectue) des opérations qui prennent du temps, comme :

- Vérifier si un email existe déjà en base de données
- Valider un code postal via une API
- Vérifier la force d'un mot de passe

```javascript
// Validation synchrone (bloquante)
function validateEmailSync(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Validation asynchrone (non-bloquante)
function validateEmailAsync(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      resolve({ valid: isValid, message: isValid ? "" : "Email invalide" });
    }, 500); // Simule un délai réseau
  });
}
```

### 2.2 Les Promises en JavaScript

Une **Promise** représente une valeur qui sera disponible dans le futur.

```javascript
// Création d'une Promise
const maPromise = new Promise((resolve, reject) => {
  // Opération asynchrone
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Succès !"); // Résout la promesse
    } else {
      reject("Erreur !"); // Rejette la promesse
    }
  }, 1000);
});

// Utilisation avec .then()
maPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// Utilisation avec async/await (plus moderne)
async function utiliserPromise() {
  try {
    const result = await maPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

### 2.3 Le Debounce (anti-rebond)

Le **debounce** permet de retarder l'exécution d'une fonction jusqu'à ce que l'utilisateur arrête de taper.

```javascript
let timer;

input.addEventListener("input", function () {
  clearTimeout(timer); // Annule le timer précédent

  timer = setTimeout(() => {
    // Cette fonction ne s'exécute que 300ms après
    // que l'utilisateur a arrêté de taper
    validateField(this.value);
  }, 300);
});
```

**Pourquoi utiliser le debounce ?**

- ⚡ Améliore les performances (évite trop de validations)
- 💰 Économise les requêtes API
- 👍 Meilleure expérience utilisateur

### 2.4 Les expressions régulières (Regex)

Les **regex** permettent de valider des formats de texte.

```javascript
// Email
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Code postal français (5 chiffres)
const codePostalRegex = /^[0-9]{5}$/;

// Mot de passe fort
const hasUpperCase = /[A-Z]/; // Contient une majuscule
const hasLowerCase = /[a-z]/; // Contient une minuscule
const hasNumber = /[0-9]/; // Contient un chiffre
const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // Contient un caractère spécial

// Nom/Prénom (lettres, espaces, tirets, apostrophes, accents)
const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;

// Utilisation
if (emailRegex.test("test@example.com")) {
  console.log("Email valide");
}
```

**Composants des regex :**

| Symbole | Signification                  | Exemple                                        |
| ------- | ------------------------------ | ---------------------------------------------- |
| `^`     | Début de chaîne                | `^Hello` → commence par "Hello"                |
| `$`     | Fin de chaîne                  | `world$` → se termine par "world"              |
| `[a-z]` | Caractères de a à z            | `[a-z]+` → une ou plusieurs lettres minuscules |
| `[0-9]` | Chiffres de 0 à 9              | `[0-9]{5}` → exactement 5 chiffres             |
| `{n}`   | Exactement n fois              | `a{3}` → "aaa"                                 |
| `{n,}`  | Au moins n fois                | `a{2,}` → "aa", "aaa", "aaaa"...               |
| `{n,m}` | Entre n et m fois              | `a{2,4}` → "aa", "aaa", "aaaa"                 |
| `+`     | Une ou plusieurs fois          | `a+` → "a", "aa", "aaa"...                     |
| `*`     | Zéro ou plusieurs fois         | `a*` → "", "a", "aa"...                        |
| `.`     | N'importe quel caractère       | `a.b` → "aab", "acb", "a1b"...                 |
| `\s`    | Espace blanc                   | `\s+` → un ou plusieurs espaces                |
| `\d`    | Chiffre (équivalent à `[0-9]`) | `\d{3}` → 3 chiffres                           |

---

## 3. Architecture du projet

### 3.1 Structure des fichiers

```
jour05/
└── job01/
    ├── connexion.html      # Formulaire de connexion
    ├── connexion.js        # Validation connexion
    ├── inscription.html    # Formulaire d'inscription
    ├── inscription.js      # Validation inscription
    ├── style.css          # Styles communs
    └── COURS_JOB01.md     # Ce cours
```

### 3.2 Flux de validation

```
┌──────────────────┐
│  Utilisateur     │
│  tape dans input │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Event 'input'   │
│  est déclenché   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Debounce        │
│  (attente 300ms) │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Fonction de     │
│  validation      │
│  asynchrone      │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Promise         │
│  (setTimeout)    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Résultat        │
│  { valid, msg }  │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Affichage       │
│  erreur ou OK    │
└──────────────────┘
```

---

## 4. Création du formulaire HTML

### 4.1 Structure de base

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inscription</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <div class="form-wrapper">
        <h1>Inscription</h1>
        <form id="inscriptionForm" novalidate>
          <!-- Champs du formulaire -->
        </form>
      </div>
    </div>
    <script src="inscription.js"></script>
  </body>
</html>
```

**Points importants :**

- `novalidate` : Désactive la validation HTML5 native (on gère tout en JS)
- `id="inscriptionForm"` : Permet de cibler le formulaire en JavaScript
- Script chargé en fin de body (DOM déjà chargé)

### 4.2 Structure d'un champ de formulaire

```html
<div class="form-group">
  <!-- Label avec for correspondant à l'id de l'input -->
  <label for="email">Email *</label>

  <!-- Input avec attributs de sécurité -->
  <input type="email" <!-- type approprié -- />
  id="email"
  <!-- ID unique -->
  name="email"
  <!-- Nom pour le formulaire -->
  required
  <!-- Champ obligatoire -->
  autocomplete="email"
  <!-- Aide à l'autocomplétion -->
  placeholder="exemple@email.com"
  <!-- Exemple -->
  >

  <!-- Zone pour les messages d'erreur -->
  <span class="error-message" id="email-error"></span>
</div>
```

### 4.3 Attributs de sécurité et d'accessibilité

| Attribut       | Utilité                    | Exemple                           |
| -------------- | -------------------------- | --------------------------------- |
| `type`         | Type de donnée attendu     | `type="email"`, `type="password"` |
| `required`     | Champ obligatoire          | `required`                        |
| `minlength`    | Longueur minimale          | `minlength="8"`                   |
| `maxlength`    | Longueur maximale          | `maxlength="50"`                  |
| `pattern`      | Regex de validation        | `pattern="[0-9]{5}"`              |
| `autocomplete` | Type d'autocomplétion      | `autocomplete="family-name"`      |
| `placeholder`  | Texte d'exemple            | `placeholder="Votre nom"`         |
| `novalidate`   | Désactive validation HTML5 | `<form novalidate>`               |

### 4.4 Types d'autocomplete

```html
<!-- Identité -->
<input autocomplete="given-name" />
<!-- Prénom -->
<input autocomplete="family-name" />
<!-- Nom -->
<input autocomplete="email" />
<!-- Email -->

<!-- Adresse -->
<input autocomplete="street-address" />
<!-- Adresse -->
<input autocomplete="postal-code" />
<!-- Code postal -->
<input autocomplete="address-level2" />
<!-- Ville -->

<!-- Mot de passe -->
<input autocomplete="new-password" />
<!-- Nouveau mot de passe -->
<input autocomplete="current-password" />
<!-- Mot de passe actuel -->
```

---

## 5. Validation asynchrone en JavaScript

### 5.1 Structure générale

```javascript
document.addEventListener("DOMContentLoaded", function () {
  // 1. Récupération des éléments du DOM
  const form = document.getElementById("inscriptionForm");
  const emailInput = document.getElementById("email");

  // 2. Configuration
  const VALIDATION_DELAY = 500; // Délai pour simuler API
  let emailTimer; // Timer pour le debounce

  // 3. Fonction de validation asynchrone
  function validateEmail(email) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Logique de validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) {
          resolve({ valid: false, message: "L'email est requis" });
        } else if (!emailRegex.test(email)) {
          resolve({ valid: false, message: "Format d'email invalide" });
        } else {
          resolve({ valid: true, message: "" });
        }
      }, VALIDATION_DELAY);
    });
  }

  // 4. Fonction d'affichage des erreurs
  function showError(inputId, message) {
    const errorElement = document.getElementById(`${inputId}-error`);
    const inputElement = document.getElementById(inputId);

    if (message) {
      errorElement.textContent = message;
      errorElement.style.display = "block";
      inputElement.classList.add("invalid");
      inputElement.classList.remove("valid");
    } else {
      errorElement.textContent = "";
      errorElement.style.display = "none";
      inputElement.classList.remove("invalid");
      inputElement.classList.add("valid");
    }
  }

  // 5. Écouteur d'événement avec debounce
  emailInput.addEventListener("input", function () {
    clearTimeout(emailTimer);
    const email = this.value.trim();

    showError("email", "⏳ Validation en cours...");

    emailTimer = setTimeout(async () => {
      const result = await validateEmail(email);
      showError("email", result.valid ? "" : result.message);
    }, 300);
  });

  // 6. Validation au blur (perte de focus)
  emailInput.addEventListener("blur", async function () {
    clearTimeout(emailTimer);
    const result = await validateEmail(this.value.trim());
    showError("email", result.valid ? "" : result.message);
  });

  // 7. Validation à la soumission
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const emailResult = await validateEmail(emailInput.value.trim());
    showError("email", emailResult.valid ? "" : emailResult.message);

    if (emailResult.valid) {
      alert("Formulaire valide !");
    }
  });
});
```

### 5.2 Détail des fonctions de validation

#### Validation de l'email

```javascript
function validateEmail(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Regex stricte pour l'email
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      // Vérifications par priorité
      if (!email) {
        resolve({ valid: false, message: "L'email est requis" });
      } else if (!emailRegex.test(email)) {
        resolve({ valid: false, message: "Format d'email invalide" });
      } else if (email.length > 255) {
        resolve({
          valid: false,
          message: "L'email est trop long (max 255 caractères)",
        });
      } else {
        // Dans un vrai projet, vérifier si l'email existe déjà
        // const exists = await checkEmailExists(email);
        resolve({ valid: true, message: "" });
      }
    }, VALIDATION_DELAY);
  });
}
```

#### Validation du mot de passe

```javascript
function validatePassword(password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Tests de complexité
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (!password) {
        resolve({ valid: false, message: "Le mot de passe est requis" });
      } else if (password.length < 8) {
        resolve({ valid: false, message: "Minimum 8 caractères requis" });
      } else if (!hasUpperCase) {
        resolve({ valid: false, message: "Une majuscule requise" });
      } else if (!hasLowerCase) {
        resolve({ valid: false, message: "Une minuscule requise" });
      } else if (!hasNumber) {
        resolve({ valid: false, message: "Un chiffre requis" });
      } else if (!hasSpecialChar) {
        resolve({ valid: false, message: "Un caractère spécial requis" });
      } else {
        resolve({ valid: true, message: "" });
      }
    }, VALIDATION_DELAY);
  });
}
```

#### Validation du nom/prénom

```javascript
function validateNom(nom) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Accepte lettres, espaces, tirets, apostrophes, accents
      const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;

      if (!nom) {
        resolve({ valid: false, message: "Le nom est requis" });
      } else if (nom.length < 2) {
        resolve({ valid: false, message: "Minimum 2 caractères" });
      } else if (nom.length > 50) {
        resolve({ valid: false, message: "Maximum 50 caractères" });
      } else if (!nameRegex.test(nom)) {
        resolve({ valid: false, message: "Caractères invalides" });
      } else {
        resolve({ valid: true, message: "" });
      }
    }, VALIDATION_DELAY);
  });
}
```

#### Validation du code postal

```javascript
function validateCodePostal(codePostal) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Exactement 5 chiffres
      const codePostalRegex = /^[0-9]{5}$/;

      if (!codePostal) {
        resolve({ valid: false, message: "Le code postal est requis" });
      } else if (!codePostalRegex.test(codePostal)) {
        resolve({
          valid: false,
          message: "Format invalide (5 chiffres requis)",
        });
      } else {
        // On pourrait vérifier si le code postal existe réellement
        resolve({ valid: true, message: "" });
      }
    }, VALIDATION_DELAY);
  });
}
```

#### Validation de la confirmation du mot de passe

```javascript
function validateConfirmPassword(password, confirmPassword) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!confirmPassword) {
        resolve({ valid: false, message: "Confirmez votre mot de passe" });
      } else if (password !== confirmPassword) {
        resolve({
          valid: false,
          message: "Les mots de passe ne correspondent pas",
        });
      } else {
        resolve({ valid: true, message: "" });
      }
    }, VALIDATION_DELAY);
  });
}
```

### 5.3 Gestion du debounce avancée

```javascript
// Configuration des timers pour chaque champ
const timers = {};

// Fonction générique pour gérer le debounce
function setupValidation(inputId, validateFn) {
  const input = document.getElementById(inputId);

  // Validation avec debounce sur input
  input.addEventListener("input", function () {
    clearTimeout(timers[inputId]);
    const value = this.value.trim();

    showError(inputId, "⏳ Validation en cours...");

    timers[inputId] = setTimeout(async () => {
      const result = await validateFn(value);
      showError(inputId, result.valid ? "" : result.message);
    }, 300);
  });

  // Validation immédiate au blur
  input.addEventListener("blur", async function () {
    clearTimeout(timers[inputId]);
    const result = await validateFn(this.value.trim());
    showError(inputId, result.valid ? "" : result.message);
  });
}

// Utilisation
setupValidation("email", validateEmail);
setupValidation("nom", validateNom);
setupValidation("prenom", validatePrenom);
```

### 5.4 Validation complète à la soumission

```javascript
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Validation de tous les champs en parallèle
  const results = await Promise.all([
    validateNom(inputs.nom.value.trim()),
    validatePrenom(inputs.prenom.value.trim()),
    validateEmail(inputs.email.value.trim()),
    validatePassword(inputs.password.value),
    validateConfirmPassword(
      inputs.password.value,
      inputs.confirmPassword.value
    ),
    validateAdresse(inputs.adresse.value.trim()),
    validateCodePostal(inputs.codePostal.value.trim()),
  ]);

  // Affichage de toutes les erreurs
  const fields = [
    "nom",
    "prenom",
    "email",
    "password",
    "confirmPassword",
    "adresse",
    "codePostal",
  ];
  fields.forEach((field, index) => {
    showError(field, results[index].valid ? "" : results[index].message);
  });

  // Vérifier si tous les champs sont valides
  const allValid = results.every((result) => result.valid);

  if (allValid) {
    // Récupération des données
    const formData = {
      nom: inputs.nom.value.trim(),
      prenom: inputs.prenom.value.trim(),
      email: inputs.email.value.trim(),
      password: inputs.password.value,
      adresse: inputs.adresse.value.trim(),
      codePostal: inputs.codePostal.value.trim(),
    };

    console.log("Données valides:", formData);
    alert("Inscription réussie !");

    // Envoi au serveur (exemple)
    // await fetch('inscription.php', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // });

    form.reset();
  }
});
```

---

## 6. Sécurité côté front-end

### 6.1 Pourquoi sécuriser côté front-end ?

⚠️ **Important** : La sécurité front-end n'est **jamais suffisante** ! Elle améliore l'UX mais doit toujours être complétée par une validation côté serveur.

**Avantages de la validation front-end :**

- ✅ Retour immédiat à l'utilisateur
- ✅ Réduit la charge serveur
- ✅ Améliore l'expérience utilisateur
- ✅ Première barrière contre les erreurs

**Limitations :**

- ❌ Peut être contournée (désactivation JS, modification du code)
- ❌ N'empêche pas les requêtes malveillantes directes
- ❌ Ne protège pas contre les attaques automatisées

### 6.2 Protection contre les injections XSS

**XSS (Cross-Site Scripting)** : Injection de code JavaScript malveillant.

```javascript
// Protection basique : filtrer les caractères dangereux
Object.values(inputs).forEach((input) => {
  input.addEventListener("input", function () {
    // Empêcher les balises HTML
    if (this.type === "text" || this.type === "email") {
      this.value = this.value.replace(/<|>/g, "");
    }
  });
});

// Échapper les caractères HTML pour l'affichage
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
```

### 6.3 Limite de longueur des champs

```javascript
// Limites recommandées
const LIMITS = {
  nom: { min: 2, max: 50 },
  prenom: { min: 2, max: 50 },
  email: { min: 5, max: 255 },
  password: { min: 8, max: 128 },
  adresse: { min: 5, max: 200 },
  codePostal: { min: 5, max: 5 },
};

// Validation avec limites
function validateWithLimits(value, field) {
  const limits = LIMITS[field];

  if (value.length < limits.min) {
    return { valid: false, message: `Minimum ${limits.min} caractères` };
  }
  if (value.length > limits.max) {
    return { valid: false, message: `Maximum ${limits.max} caractères` };
  }
  return { valid: true, message: "" };
}
```

### 6.4 Sanitisation des entrées

```javascript
// Nettoyer les espaces multiples
function sanitizeInput(value) {
  return value
    .trim() // Supprimer espaces début/fin
    .replace(/\s+/g, " ") // Remplacer espaces multiples par un seul
    .replace(/[<>]/g, ""); // Supprimer < et >
}

// Nettoyer uniquement les chiffres (code postal)
function sanitizeNumbers(value) {
  return value.replace(/[^0-9]/g, "");
}

// Utilisation
codePostalInput.addEventListener("input", function () {
  this.value = sanitizeNumbers(this.value);
});
```

### 6.5 Protection du mot de passe

```javascript
// Empêcher le copier-coller (optionnel, débattu)
passwordInput.addEventListener('paste', function(e) {
    e.preventDefault();
    showError('password', 'Le copier-coller n\'est pas autorisé');
});

// Empêcher l'autocomplétion pour les mots de passe sensibles
<input type="password" autocomplete="new-password">

// Vérifier la force du mot de passe
function getPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    if (strength <= 2) return 'weak';
    if (strength <= 4) return 'medium';
    return 'strong';
}
```

### 6.6 Rate limiting côté client

```javascript
// Limiter le nombre de tentatives de soumission
let submitAttempts = 0;
let lastSubmitTime = 0;
const MAX_ATTEMPTS = 5;
const COOLDOWN_TIME = 60000; // 1 minute

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const now = Date.now();

  // Réinitialiser après le cooldown
  if (now - lastSubmitTime > COOLDOWN_TIME) {
    submitAttempts = 0;
  }

  // Vérifier le nombre de tentatives
  if (submitAttempts >= MAX_ATTEMPTS) {
    const timeLeft = Math.ceil((COOLDOWN_TIME - (now - lastSubmitTime)) / 1000);
    alert(`Trop de tentatives. Réessayez dans ${timeLeft} secondes.`);
    return;
  }

  submitAttempts++;
  lastSubmitTime = now;

  // Continuer avec la validation...
});
```

### 6.7 Liste de vérifications de sécurité

- [x] Validation de tous les champs avec regex appropriées
- [x] Limites de longueur min/max
- [x] Filtrage des caractères dangereux (`<`, `>`)
- [x] Échappement HTML pour l'affichage
- [x] Mot de passe fort (8+ caractères, majuscule, minuscule, chiffre, spécial)
- [x] Confirmation du mot de passe
- [x] Attribut `novalidate` pour contrôle total
- [x] Attributs `autocomplete` appropriés
- [x] Protection contre le spam (rate limiting)
- [x] Messages d'erreur clairs mais pas trop détaillés
- [ ] ⚠️ **Toujours valider côté serveur !**

---

## 7. Styling et UX

### 7.1 Feedback visuel

```css
/* État normal */
input {
  border: 2px solid #ddd;
  transition: all 0.3s ease;
}

/* Focus */
input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* Valide */
input.valid {
  border-color: #28a745;
}

/* Invalide */
input.invalid {
  border-color: #dc3545;
}
```

### 7.2 Messages d'erreur clairs

```javascript
// ❌ Mauvais : trop vague
"Erreur de validation";

// ✅ Bon : spécifique et actionnable
"Le mot de passe doit contenir au moins une majuscule";
```

### 7.3 Indicateur de chargement

```javascript
function showError(inputId, message) {
  const errorElement = document.getElementById(`${inputId}-error`);

  // Afficher l'indicateur de chargement
  if (message.includes("⏳")) {
    errorElement.classList.add("loading");
  } else {
    errorElement.classList.remove("loading");
  }

  errorElement.textContent = message;
}
```

```css
.error-message.loading {
  color: #667eea;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

### 7.4 Accessibilité (a11y)

```html
<!-- Attributs ARIA -->
<input
  type="email"
  id="email"
  aria-required="true"
  aria-invalid="false"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert" aria-live="polite"></span>
```

```javascript
// Mettre à jour les attributs ARIA
function showError(inputId, message) {
  const inputElement = document.getElementById(inputId);

  if (message) {
    inputElement.setAttribute("aria-invalid", "true");
  } else {
    inputElement.setAttribute("aria-invalid", "false");
  }
}
```

### 7.5 Design responsive

```css
/* Mobile first */
.form-wrapper {
  padding: 30px 20px;
  max-width: 500px;
}

/* Éviter le zoom sur iOS */
@media (max-width: 600px) {
  input {
    font-size: 16px; /* Minimum 16px pour éviter le zoom */
  }
}

/* Desktop */
@media (min-width: 768px) {
  .form-wrapper {
    padding: 40px;
  }
}
```

---

## 8. Bonnes pratiques

### 8.1 Organisation du code

```javascript
// ✅ Bon : code organisé et modulaire
const FormValidator = {
  // Configuration
  config: {
    VALIDATION_DELAY: 500,
    MIN_PASSWORD_LENGTH: 8,
  },

  // Timers
  timers: {},

  // Fonctions de validation
  validators: {
    email: function (email) {
      /* ... */
    },
    password: function (password) {
      /* ... */
    },
  },

  // Utilitaires
  utils: {
    showError: function (inputId, message) {
      /* ... */
    },
    sanitize: function (value) {
      /* ... */
    },
  },

  // Initialisation
  init: function () {
    this.setupEventListeners();
  },
};

// Initialiser
FormValidator.init();
```

### 8.2 Commentaires utiles

```javascript
/**
 * Valide un email de manière asynchrone
 * @param {string} email - L'email à valider
 * @returns {Promise<{valid: boolean, message: string}>}
 */
function validateEmail(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Validation...
    }, 500);
  });
}
```

### 8.3 Gestion des erreurs

```javascript
try {
  const result = await validateEmail(email);
  showError("email", result.valid ? "" : result.message);
} catch (error) {
  console.error("Erreur de validation:", error);
  showError("email", "Une erreur est survenue");
}
```

### 8.4 Tests

```javascript
// Tests unitaires (exemple avec Jest)
describe("validateEmail", () => {
  test("devrait rejeter un email vide", async () => {
    const result = await validateEmail("");
    expect(result.valid).toBe(false);
    expect(result.message).toBe("L'email est requis");
  });

  test("devrait accepter un email valide", async () => {
    const result = await validateEmail("test@example.com");
    expect(result.valid).toBe(true);
  });

  test("devrait rejeter un email sans @", async () => {
    const result = await validateEmail("testexample.com");
    expect(result.valid).toBe(false);
  });
});
```

### 8.5 Performance

```javascript
// ✅ Validation en parallèle pour le formulaire complet
const results = await Promise.all([
  validateNom(inputs.nom.value),
  validatePrenom(inputs.prenom.value),
  validateEmail(inputs.email.value),
]);

// ❌ Validation séquentielle (plus lent)
const nomResult = await validateNom(inputs.nom.value);
const prenomResult = await validatePrenom(inputs.prenom.value);
const emailResult = await validateEmail(inputs.email.value);
```

---

## 9. Exercices pratiques

### Exercice 1 : Validation du numéro de téléphone

Ajoutez un champ "Téléphone" avec validation asynchrone.

**Critères :**

- Format français : 10 chiffres commençant par 0
- Exemple : `0612345678`
- Espaces et tirets autorisés dans la saisie mais retirés pour la validation

<details>
<summary>Solution</summary>

```javascript
function validateTelephone(telephone) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Nettoyer : retirer espaces et tirets
            const cleanPhone = telephone.replace(/[\s-]/g, '');

            // Regex : 10 chiffres commençant par 0
            const phoneRegex = /^0[1-9][0-9]{8}$/;

            if (!telephone) {
                resolve({ valid: false, message: 'Le téléphone est requis' });
            } else if (!phoneRegex.test(cleanPhone)) {
                resolve({ valid: false, message: 'Format invalide (ex: 06 12 34 56 78)' });
            } else {
                resolve({ valid: true, message: '' });
            }
        }, 500);
    });
}

// Dans le HTML
<div class="form-group">
    <label for="telephone">Téléphone *</label>
    <input
        type="tel"
        id="telephone"
        name="telephone"
        required
        autocomplete="tel"
        placeholder="06 12 34 56 78"
        pattern="[0-9\s-]{10,14}"
    >
    <span class="error-message" id="telephone-error"></span>
</div>
```

</details>

### Exercice 2 : Indicateur de force du mot de passe

Ajoutez un indicateur visuel de la force du mot de passe.

<details>
<summary>Solution</summary>

```javascript
function getPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    if (strength <= 2) return 'weak';
    if (strength <= 4) return 'medium';
    return 'strong';
}

// HTML
<div class="password-strength" id="password-strength">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>

// JavaScript
passwordInput.addEventListener('input', function() {
    const strength = getPasswordStrength(this.value);
    const strengthElement = document.getElementById('password-strength');

    strengthElement.className = 'password-strength ' + strength;
});

// CSS
.password-strength span {
    flex: 1;
    height: 4px;
    background: #ddd;
    border-radius: 2px;
}

.password-strength.weak span:nth-child(1) {
    background: #dc3545;
}

.password-strength.medium span:nth-child(1),
.password-strength.medium span:nth-child(2) {
    background: #ffc107;
}

.password-strength.strong span {
    background: #28a745;
}
```

</details>

### Exercice 3 : Vérification d'email unique

Simulez une vérification si l'email existe déjà.

<details>
<summary>Solution</summary>

```javascript
// Simuler une base de données
const existingEmails = ["test@example.com", "admin@example.com"];

function checkEmailExists(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const exists = existingEmails.includes(email.toLowerCase());
      resolve(exists);
    }, 800);
  });
}

function validateEmail(email) {
  return new Promise(async (resolve) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      resolve({ valid: false, message: "L'email est requis" });
    } else if (!emailRegex.test(email)) {
      resolve({ valid: false, message: "Format d'email invalide" });
    } else {
      // Vérifier si l'email existe déjà
      const exists = await checkEmailExists(email);
      if (exists) {
        resolve({ valid: false, message: "Cet email est déjà utilisé" });
      } else {
        resolve({ valid: true, message: "" });
      }
    }
  });
}
```

</details>

### Exercice 4 : Validation de la date de naissance

Ajoutez un champ date de naissance avec vérification d'âge minimum (18 ans).

<details>
<summary>Solution</summary>

```javascript
function validateDateNaissance(dateStr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!dateStr) {
                resolve({ valid: false, message: 'La date de naissance est requise' });
                return;
            }

            const birthDate = new Date(dateStr);
            const today = new Date();

            // Calculer l'âge
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (birthDate > today) {
                resolve({ valid: false, message: 'La date ne peut pas être dans le futur' });
            } else if (age < 18) {
                resolve({ valid: false, message: 'Vous devez avoir au moins 18 ans' });
            } else if (age > 120) {
                resolve({ valid: false, message: 'Date invalide' });
            } else {
                resolve({ valid: true, message: '' });
            }
        }, 500);
    });
}

// HTML
<div class="form-group">
    <label for="dateNaissance">Date de naissance *</label>
    <input
        type="date"
        id="dateNaissance"
        name="dateNaissance"
        required
        max="<?php echo date('Y-m-d'); ?>"
    >
    <span class="error-message" id="dateNaissance-error"></span>
</div>
```

</details>

---

## 🎯 Récapitulatif

### Ce que vous avez appris :

✅ **Validation asynchrone** avec Promises et async/await  
✅ **Debounce** pour optimiser les performances  
✅ **Expressions régulières** pour valider les formats  
✅ **Sécurité front-end** (filtrage XSS, limites, sanitisation)  
✅ **UX/UI** avec feedback visuel et messages clairs  
✅ **Accessibilité** avec attributs ARIA  
✅ **Bonnes pratiques** de code propre et maintenable

### Points clés à retenir :

1. **La validation front-end seule ne suffit pas** → toujours valider côté serveur
2. **Le debounce améliore l'expérience** → évite trop de validations
3. **Les regex sont puissantes** → apprenez à les maîtriser
4. **Le feedback utilisateur est crucial** → messages clairs et visuels
5. **La sécurité est multicouche** → combiner plusieurs protections

### Ressources complémentaires :

- 📖 [MDN Web Docs - Formulaires](https://developer.mozilla.org/fr/docs/Learn/Forms)
- 📖 [MDN - Promises](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- 📖 [Regex101](https://regex101.com/) - Testeur de regex en ligne
- 📖 [OWASP - Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- 📖 [Web.dev - Forms best practices](https://web.dev/sign-in-form-best-practices/)

---

**Bon courage pour vos projets ! 🚀**
