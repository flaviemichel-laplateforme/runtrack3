<!doctype html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Découvrez Tailwind CSS</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>

  <!-- Header -->
  <header>
    <nav>
        <div>
        
        <ul>
              <li><a  href="index.php">Accueil</a></li>
              <li><a  href="index.php">Inscription</a></li>
              <li><a  href="index.php">Connexion</a></li>
              <li><a  href="index.php">Rechercher</a></li>
      </ul>

        </div>
    </nav>
  </header>

  <!-- Main Content -->
  <main>
    <section>
          <form action="" method="post">

          <label for="">Civilité</label>
          <input name="civilite" type="radio" value="mme" />
          <span>Mme</span>

          <input name="civilite" type="radio" value="mlle" />
          <span>Mlle</span>

          <input name="civilite" type="radio" value="mr" />
          <span>Mr</span>
        
          <div> 
                <label for="first_name">Prénom</label>
                <input placeholder="Prénom" id="first_name" type="text" name="prenom">
          </div>

          <div> 
                <label for="last_name">Nom</label>
                <input placeholder="nom" id="last_name" type="text" name="nom">
          </div>

          <div> 
                <label for="adresse">Adresse</label>
                <input placeholder="adresse" id="adresse" type="text" name="adresse">
          </div>

          <div>
                <label for="email">Email</label>
                <input id="email" type="email" name="email">
                
          </div>

          <div>
                <label for="password">Password</label>
                <input id="password" type="password" name="password">
                
          </div>
                
          <div>
                <p><label>Sélectionner vos passions !!</label></p>
                <p>
                  <label>
                    <input type="checkbox" name="passions[]" value="informatique" />
                    <span>Informatique</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" name="passions[]" value="voyages" />
                    <span>Voyages</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" name="passions[]" value="sport" />
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

              <div>
                <button type="submit" name="action">Submit</button>
              </div>
                
    </section>
  </main>

  <!-- Footer -->
  <footer>
     <div>
        
        <ul>
              <li><a  href="index.php">Accueil</a></li>
              <li><a  href="index.php">Inscription</a></li>
              <li><a  href="index.php">Connexion</a></li>
              <li><a  href="index.php">Rechercher</a></li>
      </ul>

        </div>
  </footer>

 
</body>

</html>