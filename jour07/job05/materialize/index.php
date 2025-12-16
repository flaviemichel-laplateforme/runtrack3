  <!DOCTYPE html>
  <html>

  <head>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body class=" grey darken-4">
    <header>
      <nav class=" yellow darken-1">
        <div class="nav-wrapper">
          <a href="index.php" class="brand-logo black-text">
            <img src="assets/img/logo.png" alt="Logo Ma boutique dorée" style="height: 50px; vertical-align: middle; margin-right: 10px;">
            Ma boutique dorée
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="./parallax-template" class="black-text">Produits</a></li>
            <li><a href="./starter-template" class="black-text">Collections</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="container">
      <!-- section + row suffisent ; Materialize gère les gutters -->
      <section class="section">
        <div class="row">

          <!-- Deux grandes cartes en premier -->
          <article class="col s12 m6">
            <div class="card hoverable large">
              <div class="card-image waves-effect waves-block waves-light" style="height: 400px; overflow: hidden; display: flex; align-items: center; justify-content: center; position: relative;">
                <img class="activator responsive-img" src="assets/img/boucles-d-oreilles-chopard-l-heure-du-diamant-or-blanc-ethique-diamants.jpg" alt="Boucles d'oreilles Chopard diamants" style="width: 100%; height: 100%; object-fit: cover;">
                <img src="assets/img/logo.png" alt="Logo" style="position: absolute; top: 10px; right: 10px; width: 50px; opacity: 0.8;">
              </div>
              <div class="card-content">
                <span class="card-title activator brown-text text-darken-4">
                  Boucles d'Oreilles Luxe
                  <i class="material-icons right" aria-hidden="true">more_vert</i>
                </span>
                <p><a href="#" class="brown-text text-darken-2">En savoir plus</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title brown-text text-darken-4">
                  Boucles d'Oreilles Luxe
                  <i class="material-icons right" aria-hidden="true">close</i>
                </span>
                <p>Boucles d'oreilles Chopard en or blanc éthique serties de diamants, alliant élégance et raffinement.</p>
              </div>
            </div>
          </article>

          <article class="col s12 m6">
            <div class="card hoverable large">
              <div class="card-image waves-effect waves-block waves-light" style="position: relative;">
                <img class="activator responsive-img" src="assets/img/hopediamondok-730x380.webp" alt="Diamant Hope">
                <img src="assets/img/logo.png" alt="Logo" style="position: absolute; top: 10px; right: 10px; width: 50px; opacity: 0.8;">
              </div>
              <div class="card-content">
                <span class="card-title activator brown-text text-darken-4">
                  Diamant Hope
                  <i class="material-icons right" aria-hidden="true">more_vert</i>
                </span>
                <p><a href="#" class="brown-text text-darken-2">En savoir plus</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title brown-text text-darken-4">
                  Diamant Hope
                  <i class="material-icons right" aria-hidden="true">close</i>
                </span>
                <p>Un diamant bleu légendaire d'une beauté exceptionnelle, symbole de prestige et de rareté.</p>
              </div>
            </div>
          </article>

          <!-- 1 par ligne en mobile, 2 en tablette, 3 en desktop, 4 en très grand écran -->
          <article class="col s12 m6 l4 xl3">
            <div class="card hoverable">
              <div class="card-image waves-effect waves-block waves-light" style="position: relative;">
                <!-- alt + responsive-img pour accessibilité et responsive -->
                <img class="activator responsive-img" src="assets/img/solitaire-pellegrin-et-fils-diamants-luxe-argent.jpg" alt="Solitaire diamant argent">
                <img src="assets/img/logo.png" alt="Logo" style="position: absolute; top: 10px; right: 10px; width: 40px; opacity: 0.8;">
              </div>

              <div class="card-content">
                <span class="card-title activator brown-text text-darken-4">
                  Solitaire Diamant
                  <i class="material-icons right" aria-hidden="true">more_vert</i>
                </span>

                <p><a href="#" class="brown-text text-darken-2">Découvrir</a></p>
              </div>

              <div class="card-reveal">
                <span class="card-title brown-text text-darken-4">
                  Solitaire Diamant
                  <i class="material-icons right" aria-hidden="true">close</i>
                </span>
                <p>Un solitaire en argent orné d'un diamant éclatant, symbole d'élégance intemporelle.</p>
              </div>
            </div>
          </article>

          <article class="col s12 m6 l4 xl3">
            <div class="card hoverable">
              <div class="card-image waves-effect waves-block waves-light" style="position: relative;">
                <img class="activator responsive-img" src="assets/img/yellow-gold-color-46444413550857.webp" alt="Bague or jaune">
                <img src="assets/img/logo.png" alt="Logo" style="position: absolute; top: 10px; right: 10px; width: 40px; opacity: 0.8;">
              </div>
              <div class="card-content">
                <span class="card-title activator brown-text text-darken-4">
                  Bague Or Jaune
                  <i class="material-icons right" aria-hidden="true">more_vert</i>
                </span>
                <p><a href="#" class="brown-text text-darken-2">Découvrir</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title brown-text text-darken-4">
                  Bague Or Jaune
                  <i class="material-icons right" aria-hidden="true">close</i>
                </span>
                <p>Une magnifique bague en or jaune 18 carats, alliance parfaite entre tradition et modernité.</p>
              </div>
            </div>
          </article>

          <article class="col s12 m6 l4 xl3">
            <div class="card hoverable">
              <div class="card-image waves-effect waves-block waves-light" style="position: relative;">
                <img class="activator responsive-img" src="assets/img/1.jpg" alt="Bijou doré">
                <img src="assets/img/logo.png" alt="Logo" style="position: absolute; top: 10px; right: 10px; width: 40px; opacity: 0.8;">
              </div>
              <div class="card-content">
                <span class="card-title activator brown-text text-darken-4">
                  Collection Dorée
                  <i class="material-icons right" aria-hidden="true">more_vert</i>
                </span>
                <p><a href="#" class="brown-text text-darken-2">Découvrir</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title brown-text text-darken-4">
                  Collection Dorée
                  <i class="material-icons right" aria-hidden="true">close</i>
                </span>
                <p>Une pièce unique de notre collection dorée, symbole de luxe et de raffinement.</p>
              </div>
            </div>
          </article>

          <article class="col s12 m6 l4 xl3">
            <div class="card hoverable">
              <div class="card-image waves-effect waves-block waves-light" style="position: relative;">
                <img class="activator responsive-img" src="assets/img/hopediamondok-730x380.webp" alt="Diamant précieux">
                <img src="assets/img/logo.png" alt="Logo" style="position: absolute; top: 10px; right: 10px; width: 40px; opacity: 0.8;">
              </div>
              <div class="card-content">
                <span class="card-title activator brown-text text-darken-4">
                  Diamant Précieux
                  <i class="material-icons right" aria-hidden="true">more_vert</i>
                </span>
                <p><a href="#" class="brown-text text-darken-2">Découvrir</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title brown-text text-darken-4">
                  Diamant Précieux
                  <i class="material-icons right" aria-hidden="true">close</i>
                </span>
                <p>Un diamant d'exception taillé avec précision, reflet de l'excellence joaillière.</p>
              </div>
            </div>
          </article>

        </div>
      </section>
    </main>

    <!-- ===== FOOTER : Pied de page avec infos et liens ===== -->
    <footer class="page-footer yellow darken-2"> <!-- page-footer = style Materialize avec padding -->
      <div class="container">
        <div class="row">
          <!-- Colonne gauche : Présentation (50% desktop, 100% mobile) -->
          <div class="col l6 s12">
            <h5 class="black-text">Ma boutique dorée</h5>
            <p class="brown-text text-grey darken-4-4">Découvrez notre sélection de bijoux.</p>
          </div>

          <!-- Colonne droite : Navigation (33% desktop décalée, 100% mobile) -->
          <div class="col l4 offset-l2 s12"> <!-- offset-l2 = décalage de 2 colonnes sur desktop -->
            <h5 class="black-text">Navigation</h5>
            <ul>
              <li><a class="brown-text text-grey darken-4" href="index.php">Nos produits</a></li>
              <li><a class="brown-text text-grey darken-4-4" href="index.php">A propos</a></li>
              <li><a class="brown-text text-grey darken-4-4" href="index.php">Collections</a></li>
              <li><a class="brown-text text-grey darken-4-4" href="index.php">Thèmes</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Barre copyright (fond plus foncé) -->
      <div class="footer-copyright grey darken-4">
        <div class="container">
          © 2025 Ma boutique dorée - Tous droits réservés
          <a class="brown-text text-text-grey darken-4-3 right" href="index.php">Accueil</a>
        </div>
      </div>
    </footer>

    <!-- ===== SCRIPTS : jQuery + Materialize JS pour les animations ===== -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>

  </html>