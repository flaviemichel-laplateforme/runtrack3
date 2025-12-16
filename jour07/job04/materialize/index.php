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

  <body>
    <header>
      <nav>
    <div class="nav-wrapper light-green lighten-1">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down brown lighten-1">
        <li><a class="brown-text text-lighten-4" href="index.php">Accueil</a></li>
              <li><a class="brown-text text-lighten-4" href="index.php">Inscription</a></li>
              <li><a class="brown-text text-lighten-4" href="index.php">Connexion</a></li>
              <li><a class="brown-text text-lighten-4" href="index.php">Rechercher</a></li>
      </ul>
    </div>
  </nav>
    </header>

    <main>
      <section class="container">
        <div class="row">
          <form class="col s12" action="#" method="POST">
            
            <!-- Civilité -->
            <div class="row">
              <div class="col s12">
                <p><label>Civilité</label></p>
                <p>
                  <label>
                    <input name="civilite" type="radio" value="mme" checked />
                    <span>Mme</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="civilite" type="radio" value="mr" />
                    <span>Mr</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input class="with-gap" name="civilite" type="radio" value="mll" />
                    <span>Mll</span>
                  </label>
                </p>
              </div>
            </div>

            <!-- Prénom et Nom -->
            <div class="row">
              <div class="input-field col s12 m6">
                <input placeholder="Prénom" id="first_name" type="text" class="validate" name="prenom">
                <label for="first_name">Prénom</label>
              </div>
              <div class="input-field col s12 m6">
                <input id="last_name" type="text" class="validate" name="nom">
                <label for="last_name">Nom</label>
              </div>
            </div>

            <!-- Adresse -->
            <div class="row">
              <div class="input-field col s12">
                <input placeholder="Adresse" id="adresse" type="text" class="validate" name="adresse">
                <label for="adresse">Adresse</label>
              </div>
            </div>

            <!-- Email -->
            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate" name="email">
                <label for="email">Email</label>
              </div>
            </div>

            <!-- Password -->
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" name="password">
                <label for="password">Password</label>
              </div>
            </div>

            <!-- Passions -->
            <div class="row">
              <div class="col s12">
                <p><label>Sélectionner vos passions !!</label></p>
                <p>
                  <label>
                    <input type="checkbox" name="passions[]" value="informatique" />
                    <span>Informatique</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" name="passions[]" value="voyages" checked="checked" />
                    <span>Voyages</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" name="passions[]" value="sport" checked="checked" />
                    <span>Sport</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" name="passions[]" value="lecture" />
                    <span>Lecture</span>
                  </label>
                </p>
              </div>
            </div>

            <!-- Bouton Submit -->
            <div class="row">
              <div class="col s12">
                <button class="btn waves-effect waves-light brown" type="submit" name="action">
                  Submit
                  <i class="material-icons right">send</i>
                </button>
              </div>
            </div>

          </form>
        </div>
      </section>
    </main>

    <!-- ===== FOOTER : Pied de page avec infos et liens ===== -->
    <footer class="page-footer brown darken-3"> <!-- page-footer = style Materialize avec padding -->
      <div class="container">
        <div class="row">
          <!-- Colonne gauche : Présentation (50% desktop, 100% mobile) -->
          <div class="col l6 s12">
            <h5 class="white-text">Ma boutique</h5>
            <p class="brown-text text-lighten-4">Découvrez nos produits</p>
          </div>

          <!-- Colonne droite : Navigation (33% desktop décalée, 100% mobile) -->
          <div class="col l4 offset-l2 s12"> <!-- offset-l2 = décalage de 2 colonnes sur desktop -->
            <h5 class="white-text">Navigation</h5>
            <ul>
              <li><a class="brown-text text-lighten-4" href="index.php">Accueil</a></li>
              <li><a class="brown-text text-lighten-4" href="index.php">Inscription</a></li>
              <li><a class="brown-text text-lighten-4" href="index.php">Connexion</a></li>
              <li><a class="brown-text text-lighten-4" href="index.php">Rechercher</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Barre copyright (fond plus foncé) -->
      <div class="footer-copyright light-green lighten-1">
        <div class="container">
          © 2025 Michel Flavie - Tous droits réservés
          <a class="brown-text text-lighten-3 right" href="index.php">Accueil</a>
        </div>
      </div>
    </footer>

    <!-- ===== SCRIPTS : jQuery + Materialize JS pour les animations ===== -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>

  </html>