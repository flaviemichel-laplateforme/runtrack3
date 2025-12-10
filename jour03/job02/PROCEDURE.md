# 🌈 Procédure complète : Puzzle Arc-en-Ciel avec jQuery UI

## 📋 Objectif de l'exercice

Créer un jeu de puzzle interactif où l'utilisateur doit reconstituer un arc-en-ciel en glissant-déposant 6 images dans le bon ordre.

---

## 🎯 Fonctionnalités requises

1. **Mélanger** : Un bouton pour mélanger aléatoirement les images
2. **Glisser-Déposer** : Pouvoir déplacer les images dans des zones de dépôt
3. **Vérifier** : Un bouton pour vérifier si l'ordre est correct
4. **Messages** : Afficher "Vous avez gagné" (vert) ou "Vous avez perdu" (rouge)

---

## 📁 Structure des fichiers

```
job02/
├── index.php          (HTML + CSS)
├── script.js          (jQuery + jQuery UI)
├── arc1.png           (Image 1 de l'arc-en-ciel)
├── arc2.png           (Image 2)
├── arc3.png           (Image 3)
├── arc4.png           (Image 4)
├── arc5.png           (Image 5)
└── arc6.png           (Image 6)
```

---

## 🔧 Étape 1 : Structure HTML

### 1.1 Inclure jQuery et jQuery UI

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
<script src="./script.js"></script>
```

**Pourquoi ?**

- **jQuery** : Simplifie la manipulation du DOM
- **jQuery UI** : Fournit les méthodes `.draggable()` et `.droppable()`

### 1.2 Créer les boutons

```html
<button id="melanger">Mélanger</button> <button id="verifier">Vérifier</button>
```

### 1.3 Container source (images à déplacer)

```html
<div id="container">
  <img src="arc1.png" data-order="1" />
  <img src="arc2.png" data-order="2" />
  <img src="arc3.png" data-order="3" />
  <img src="arc4.png" data-order="4" />
  <img src="arc5.png" data-order="5" />
  <img src="arc6.png" data-order="6" />
</div>
```

**Points clés :**

- `data-order="X"` → Attribut personnalisé pour identifier l'ordre correct de chaque image

### 1.4 Zone de destination (dropzones)

```html
<div id="destination">
  <div class="dropzone" data-position="1"></div>
  <div class="dropzone" data-position="2"></div>
  <div class="dropzone" data-position="3"></div>
  <div class="dropzone" data-position="4"></div>
  <div class="dropzone" data-position="5"></div>
  <div class="dropzone" data-position="6"></div>
</div>
```

**Points clés :**

- `data-position="X"` → Position attendue pour la vérification

### 1.5 Zone de message

```html
<p id="message"></p>
```

---

## 🎨 Étape 2 : CSS (Mise en page)

### 2.1 Style du container source

```css
#container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
}

#container img {
  cursor: grab;
  border: 2px solid #999;
  border-radius: 5px;
  transition: transform 0.2s;
}
```

### 2.2 Style de la zone destination

```css
#destination {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background-color: #d0e8d0;
  border-radius: 10px;
}
```

### 2.3 Style des dropzones

```css
.dropzone {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropzone img {
  cursor: grab;
  border: 2px solid #999;
}
```

**Note** : Les dropzones n'ont pas de taille fixe, elles s'adaptent aux images.

---

## 💻 Étape 3 : JavaScript (jQuery UI)

### 3.1 Initialisation : Rendre les images déplaçables

```javascript
$(document).ready(function () {
  $("#container img").draggable({
    revert: "invalid", // Retour si dépôt invalide
    cursor: "grabbing", // Curseur pendant le drag
  });
});
```

**Explication :**

- `.draggable()` → Méthode jQuery UI pour rendre un élément déplaçable
- `revert: 'invalid'` → Si l'image est lâchée en dehors d'une dropzone, elle revient à sa position

### 3.2 Créer les zones de dépôt

```javascript
$(".dropzone").droppable({
  accept: "img",
  drop: function (event, ui) {
    let dropzone = $(this); // Zone où l'image est déposée
    let nouvelleImage = ui.draggable; // Image qui est déplacée

    // Si la dropzone contient déjà une image, la remettre dans #container
    if (dropzone.find("img").length > 0) {
      let ancienneImage = dropzone.find("img");
      $("#container").append(ancienneImage);
    }

    // Ajouter la nouvelle image dans la dropzone
    dropzone.append(nouvelleImage);

    // Repositionner l'image (enlever les styles de position absolue du drag)
    nouvelleImage.css({
      top: 0,
      left: 0,
      position: "relative",
    });
  },
});
```

**Explication détaillée :**

1. `.droppable()` → Méthode jQuery UI pour créer une zone de dépôt
2. `accept: 'img'` → N'accepte que les balises `<img>`
3. `event, ui` → Paramètres de l'événement drop
   - `ui.draggable` → L'élément qui est déposé
4. **Swap d'images** : Si une image existe déjà, elle retourne dans le container
5. `.append()` → Ajoute l'image dans la dropzone
6. `.css()` → Enlève les styles de position créés par le drag

### 3.3 Bouton Mélanger

```javascript
$("#melanger").on("click", function () {
  // Récupérer toutes les images (container + dropzones)
  let toutesLesImages = $("#container img, .dropzone img").toArray();

  // Les remettre toutes dans le container
  toutesLesImages.forEach(function (img) {
    $("#container").append(img);
  });

  // Récupérer les images maintenant dans le container
  let images = $("#container img").toArray();

  // Algorithme Fisher-Yates pour mélanger
  for (let i = images.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  // Vider le conteneur et remettre dans le nouvel ordre
  $("#container").empty();
  images.forEach((img) => $("#container").append(img));

  // Réinitialiser le draggable
  $("#container img").draggable({
    revert: "invalid",
    cursor: "grabbing",
  });

  // Effacer le message
  $("#message").text("");
});
```

**Explication détaillée :**

#### a) Récupération des images

```javascript
let toutesLesImages = $("#container img, .dropzone img").toArray();
```

- Sélectionne toutes les images du container ET des dropzones
- `.toArray()` → Convertit la collection jQuery en tableau JavaScript

#### b) Remise dans le container

```javascript
toutesLesImages.forEach(function (img) {
  $("#container").append(img);
});
```

- Boucle sur toutes les images
- `.append()` → Les déplace dans `#container`

#### c) Algorithme Fisher-Yates

```javascript
for (let i = images.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [images[i], images[j]] = [images[j], images[i]];
}
```

- Algorithme classique pour mélanger un tableau
- Parcourt le tableau de la fin vers le début
- À chaque étape, échange l'élément `i` avec un élément aléatoire `j`

#### d) Réaffichage dans l'ordre mélangé

```javascript
$("#container").empty();
images.forEach((img) => $("#container").append(img));
```

- `.empty()` → Vide complètement le container
- `.append()` → Rajoute les images dans le nouvel ordre

#### e) Réinitialisation

```javascript
$("#container img").draggable({
  revert: "invalid",
  cursor: "grabbing",
});
```

- **Important** : Après avoir manipulé le DOM, il faut réactiver `.draggable()`

### 3.4 Bouton Vérifier

```javascript
$("#verifier").on("click", function () {
  let toutCorrect = true;
  let toutRempli = true;

  // Parcourir toutes les dropzones
  $(".dropzone").each(function () {
    let position = $(this).data("position"); // Position attendue
    let image = $(this).find("img"); // Image dans la dropzone

    // Vérifier si une image est présente
    if (image.length === 0) {
      toutRempli = false;
    }
    // Vérifier si l'image est au bon endroit
    else if (image.data("order") !== position) {
      toutCorrect = false;
    }
  });

  // Afficher le message approprié
  if (!toutRempli) {
    $("#message").text("⚠️ Placez toutes les images !").css("color", "orange");
  } else if (toutCorrect) {
    $("#message").text("🎉 Vous avez gagné !").css("color", "green");
  } else {
    $("#message").text("❌ Vous avez perdu !").css("color", "red");
  }
});
```

**Explication détaillée :**

#### a) Variables de vérification

```javascript
let toutCorrect = true;
let toutRempli = true;
```

- `toutRempli` → Vérifie si toutes les dropzones contiennent une image
- `toutCorrect` → Vérifie si toutes les images sont au bon endroit

#### b) Parcours des dropzones

```javascript
$('.dropzone').each(function () {
    let position = $(this).data('position');
    let image = $(this).find('img');
```

- `.each()` → Boucle sur chaque dropzone
- `.data('position')` → Récupère l'attribut `data-position`
- `.find('img')` → Cherche une image dans la dropzone

#### c) Vérifications

```javascript
if (image.length === 0) {
  toutRempli = false;
}
```

- `image.length === 0` → Aucune image trouvée dans cette dropzone

```javascript
else if (image.data('order') !== position) {
    toutCorrect = false;
}
```

- Compare `data-order` de l'image avec `data-position` de la dropzone
- Si différents → L'image n'est pas au bon endroit

#### d) Affichage des messages

```javascript
if (!toutRempli) {
  $("#message").text("⚠️ Placez toutes les images !").css("color", "orange");
} else if (toutCorrect) {
  $("#message").text("🎉 Vous avez gagné !").css("color", "green");
} else {
  $("#message").text("❌ Vous avez perdu !").css("color", "red");
}
```

- `.text()` → Change le contenu texte
- `.css('color', ...)` → Change la couleur

---

## 🔑 Concepts clés à retenir

### 1. jQuery UI - Drag & Drop

| Méthode             | Description                          |
| ------------------- | ------------------------------------ |
| `.draggable()`      | Rend un élément déplaçable           |
| `.droppable()`      | Crée une zone de dépôt               |
| `revert: 'invalid'` | Retour automatique si dépôt invalide |
| `accept: 'img'`     | N'accepte que les images             |
| `ui.draggable`      | L'élément qui est déplacé            |

### 2. Manipulation du DOM avec jQuery

| Méthode     | Description                | Exemple                                |
| ----------- | -------------------------- | -------------------------------------- |
| `.append()` | Ajoute un élément à la fin | `$('#container').append(img)`          |
| `.find()`   | Cherche un enfant          | `dropzone.find('img')`                 |
| `.empty()`  | Vide un élément            | `$('#container').empty()`              |
| `.text()`   | Change le texte            | `$('#message').text('Gagné!')`         |
| `.css()`    | Change le style            | `$('#message').css('color', 'green')`  |
| `.data()`   | Récupère un attribut data  | `$(this).data('position')`             |
| `.each()`   | Boucle sur des éléments    | `$('.dropzone').each(function(){...})` |

### 3. Sélecteurs jQuery

| Sélecteur                            | Description                        |
| ------------------------------------ | ---------------------------------- |
| `$('#container')`                    | Élément avec `id="container"`      |
| `$('.dropzone')`                     | Éléments avec `class="dropzone"`   |
| `$('#container img')`                | Images dans `#container`           |
| `$('#container img, .dropzone img')` | Images dans container OU dropzones |

### 4. Algorithme Fisher-Yates

Algorithme efficace pour mélanger un tableau :

```javascript
for (let i = array.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]]; // Swap
}
```

**Complexité** : O(n) - Très performant

---

## ✅ Checklist de reproduction

- [ ] Créer 6 images nommées `arc1.png` à `arc6.png`
- [ ] Créer `index.php` avec la structure HTML
- [ ] Ajouter les attributs `data-order` sur les images
- [ ] Ajouter les attributs `data-position` sur les dropzones
- [ ] Inclure jQuery et jQuery UI via CDN
- [ ] Créer `script.js`
- [ ] Implémenter `.draggable()` sur les images
- [ ] Implémenter `.droppable()` sur les dropzones
- [ ] Coder la logique de swap d'images dans `.droppable()`
- [ ] Coder le bouton "Mélanger" avec Fisher-Yates
- [ ] Coder le bouton "Vérifier" avec la logique de comparaison
- [ ] Tester le mélange
- [ ] Tester le glisser-déposer
- [ ] Tester la vérification (gagné/perdu)

---

## 🐛 Problèmes fréquents et solutions

### Problème 1 : Les images ne se déplacent pas

**Cause** : jQuery UI n'est pas chargé
**Solution** : Vérifier que jQuery UI est bien inclus APRÈS jQuery

### Problème 2 : "Placez toutes les images" même quand elles sont placées

**Cause** : Les images ne sont pas réellement ajoutées dans les dropzones
**Solution** : Utiliser `.append()` dans la fonction `drop`

### Problème 3 : Après mélange, les images ne sont plus déplaçables

**Cause** : Le DOM a été modifié sans réinitialiser `.draggable()`
**Solution** : Rappeler `.draggable()` après chaque manipulation du DOM

### Problème 4 : Les images restent en position absolue après le dépôt

**Cause** : jQuery UI ajoute des styles `position: absolute` pendant le drag
**Solution** : Réinitialiser avec `.css({ position: 'relative', top: 0, left: 0 })`

---

## 📚 Ressources complémentaires

- [jQuery UI Draggable](https://jqueryui.com/draggable/)
- [jQuery UI Droppable](https://jqueryui.com/droppable/)
- [Algorithme Fisher-Yates](https://fr.wikipedia.org/wiki/M%C3%A9lange_de_Fisher-Yates)
- [jQuery API Documentation](https://api.jquery.com/)

---

## 🎓 Pour aller plus loin

### Améliorations possibles :

1. **Animation** : Ajouter des effets visuels lors du dépôt
2. **Compteur** : Afficher le nombre de mouvements
3. **Chronomètre** : Mesurer le temps de résolution
4. **Niveaux** : Augmenter le nombre d'images
5. **Images aléatoires** : Charger des images différentes à chaque partie
6. **Sauvegarde** : Utiliser localStorage pour sauvegarder la progression

Bon courage ! 🚀
