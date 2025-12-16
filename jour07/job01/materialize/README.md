# Café Délice - Guide de Création

Ce projet est un site web responsive pour un café, créé avec Materialize CSS.

## Étape 1 : Structure HTML de base

Commence par créer la structure HTML avec les liens vers Materialize :

```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

**Pourquoi ?**
- `Material Icons` : pour avoir accès aux icônes Google (comme les trois points verticaux)
- `materialize.min.css` : la bibliothèque CSS qui fait tout le travail de style
- `viewport` : essentiel pour le responsive sur mobile

## Étape 2 : Appliquer le thème café

Ajoute des classes de couleur au body et à la navigation :

```html
<body class="brown lighten-5">
  <nav class="brown darken-3">
```

**Pourquoi ces classes ?**
- `brown lighten-5` : fond beige très clair (5 = le plus clair)
- `brown darken-3` : marron foncé pour la nav (3 = moyennement foncé)
- Materialize propose des couleurs prédéfinies avec des variations (lighten/darken de 1 à 5)

## Étape 3 : Créer la navigation

```html
<nav class="brown darken-3">
  <div class="nav-wrapper">
    <a href="index.php" class="brand-logo">Café Délice</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="./parallax-template">Parallax-Template</a></li>
    </ul>
  </div>
</nav>
```

**Pourquoi ces classes ?**
- `nav-wrapper` : conteneur obligatoire pour la nav Materialize
- `brand-logo` : style spécial pour le logo (plus grand, padding automatique)
- `right` : aligne le menu à droite
- `hide-on-med-and-down` : cache le menu sur tablette et mobile (pour un menu burger plus tard)

## Étape 4 : Structure du contenu principal

```html
<main class="container">
  <section class="section">
    <div class="row">
      <!-- Tes cartes ici -->
    </div>
  </section>
</main>
```

**Pourquoi cette structure ?**
- `container` : centre le contenu avec des marges automatiques (largeur max 70%)
- `section` : ajoute du padding vertical automatique
- `row` : système de grille, obligatoire pour utiliser les colonnes

## Étape 5 : Créer les grandes cartes (Hero Cards)

```html
<article class="col s12 m6">
  <div class="card hoverable large">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator responsive-img" src="assets/img/photo.jpg" alt="Description">
    </div>
    <div class="card-content">
      <span class="card-title activator brown-text text-darken-4">
        Titre
        <i class="material-icons right">more_vert</i>
      </span>
      <p><a href="#" class="brown-text text-darken-2">En savoir plus</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title brown-text text-darken-4">
        Titre
        <i class="material-icons right">close</i>
      </span>
      <p>Description détaillée...</p>
    </div>
  </div>
</article>
```

**Comprendre les classes colonnes :**
- `col` : indique que c'est une colonne
- `s12` : prend 12 colonnes sur 12 en mobile (Small = pleine largeur)
- `m6` : prend 6 colonnes sur 12 en tablette (Medium = 50%)
- Tu peux ajouter `l4` (Large = 33%) ou `xl3` (Extra Large = 25%)

**Comprendre les classes cartes :**
- `card` : style de base de la carte
- `hoverable` : ajoute une ombre au survol
- `large` : augmente la hauteur de la carte
- `card-image` : conteneur pour l'image
- `waves-effect waves-block waves-light` : effet d'ondulation au clic (animation Material)
- `activator` : rend l'élément cliquable pour révéler `card-reveal`
- `responsive-img` : l'image s'adapte à son conteneur (max-width: 100%)
- `card-reveal` : partie cachée qui s'affiche au clic sur l'icône

## Étape 6 : Créer les petites cartes

```html
<article class="col s12 m6 l4 xl3">
  <div class="card hoverable">
    <!-- Même structure que les grandes cartes -->
  </div>
</article>
```

**Pourquoi cette grille ?**
- `s12` : 1 carte par ligne sur mobile
- `m6` : 2 cartes par ligne sur tablette
- `l4` : 3 cartes par ligne sur desktop
- `xl3` : 4 cartes par ligne sur très grand écran

## Étape 7 : Créer le footer

```html
<footer class="page-footer brown darken-3">
  <div class="container">
    <div class="row">
      <div class="col l6 s12">
        <h5 class="white-text">Titre</h5>
        <p class="brown-text text-lighten-4">Description</p>
      </div>
      <div class="col l4 offset-l2 s12">
        <h5 class="white-text">Navigation</h5>
        <ul>
          <li><a class="brown-text text-lighten-4" href="index.php">Lien</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-copyright brown darken-4">
    <div class="container">
      © 2025 Texte
      <a class="brown-text text-lighten-3 right" href="index.php">Accueil</a>
    </div>
  </div>
</footer>
```

**Pourquoi ces classes ?**
- `page-footer` : style spécifique footer Materialize (padding, couleurs)
- `offset-l2` : décale la colonne de 2 colonnes sur desktop (pour l'espacer)
- `white-text` : texte blanc (pour contraster sur fond foncé)
- `brown-text text-lighten-4` : texte marron clair
- `footer-copyright` : section spéciale pour le copyright (plus foncée)

## Étape 8 : Ajouter les scripts

Avant la fermeture du `</body>` :

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

**Pourquoi ?**
- jQuery : requis par Materialize pour les animations
- materialize.min.js : active les composants interactifs (cards reveal, etc.)

## Résumé des couleurs Materialize

```
brown lighten-5  → Beige très clair (fond)
brown lighten-4  → Beige clair (texte sur fond foncé)
brown darken-2   → Marron moyen (liens)
brown darken-3   → Marron foncé (nav, footer)
brown darken-4   → Marron très foncé (copyright)
```

## Astuce Pro

La grille Materialize fonctionne sur 12 colonnes :
- Tu veux 2 éléments ? Utilise `col s6` (6+6=12)
- Tu veux 3 éléments ? Utilise `col s4` (4+4+4=12)
- Tu veux 4 éléments ? Utilise `col s3` (3+3+3+3=12)

Tu peux mixer les tailles pour du responsive :
```html
<div class="col s12 m6 l4 xl3">
```
= 1 par ligne (mobile), 2 par ligne (tablette), 3 par ligne (desktop), 4 par ligne (grand écran)

## Ressources

- [Documentation Materialize](https://materializecss.com/)
- [Palette de couleurs](https://materializecss.com/color.html)
- [Grille responsive](https://materializecss.com/grid.html)
- [Composant Card](https://materializecss.com/cards.html)
