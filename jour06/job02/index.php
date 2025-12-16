<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <!-- CSS Bootstrap -->
  <link href="./assets/bootstrap-5.3.8/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  <!-- Bootstrap Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>

<body>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://laplateforme.io/">LPTF</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Units</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Jobs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Skills</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </header>

  <main class="container-fluid bg-secondary-subtle">

    <h1 class="display-3 text-center">LaPlateforme_</h1>

    <section class="row gap-1 m-3 ">

      <article class="row gap-3 .mx-auto display: block with: 100%">
        <div class="card" style="width: 15%;">
          <img src="./assets\img\papillon.jpg" class="card-img-top" alt="Papillon">

          <div class="card-body">
            <h5 class="card-title">Un Papillon</h5>
            <p class="card-text">Un papillon, c'est un peu comme une chenille, mais avec des ailes.<br>
              Ne pas ingérer.
            </p>
            <a href="#" id="btnPapillon" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#papillonModal">Commander votre propre papillon</a>
          </div>
        </div>

        <div class="bg-light p-5 rounded-3" style="width: 70%;">
          <div class="container-fluid py-3">
            <h1 class="display-3" id="jumbotronTitle">Bonjour, monde!</h1>
            <p class="fs-4" id="jumbotronText">Il existe plusieurs visions du terme:<br>
              le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison.<br>
              Le sens le plus courant désigne notre planète. La terre, avec ses habitants, et son environnement plus ou moins naturel.</p>
            <hr class="my-4">
            <p class="lead" id="jumbotronLead">Le sens étendu désigne l'univers dans son ensemble.</p>

            <a href="#" class="btn btn-danger btn-lg">Rebooter le Monde</a>

            <div class="spinner-border ms-3" role="status" aria-hidden="true"></div>
          </div>

          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#" data-page="1">1</a></li>
              <li class="page-item"><a class="page-link" href="#" data-page="2">2</a></li>
              <li class="page-item"><a class="page-link" href="#" data-page="3">3</a></li>
              <li class="page-item"><a class="page-link" href="#" data-page="4">4</a></li>
              <li class="page-item"><a class="page-link" href="#" data-page="5">5</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        </div>
        <div class="card" style="width: 10%;">
          <ul class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action active" aria-current="true" data-cercle="1">Limbes</a>
            <a href="#" class="list-group-item list-group-item-action" data-cercle="2">Luxure</a>
            <a href="#" class="list-group-item list-group-item-action" data-cercle="3">Gourmandise</a>
            <a href="#" class="list-group-item list-group-item-action" data-cercle="4">Avarice</a>
            <a href="#" class="list-group-item list-group-item-action" data-cercle="5">Colère</a>
            <a href="#" class="list-group-item list-group-item-action" data-cercle="6">Heresie</a>
            <a href="#" class="list-group-item list-group-item-action" data-cercle="7">Violence</a>
            <a href="#" class="list-group-item list-group-item-action" data-cercle="8">Ruse et Tromperie</a>
            <a href="#" class="list-group-item list-group-item-action" data-cercle="9">Trahison</a>
            <a href="#" class="list-group-item list-group-item-action" data-cercle="10">Internet</a>
          </ul>
        </div>
        </div>
      </article>

    </section>

    <div class="w-50 mx-auto">
      <p class="text-end mb-2">Installation de AI 9000</p>
      <div class="d-flex align-items-center gap-2">
        <i class="bi bi-arrow-bar-left" id="btnRegresser" style="cursor: pointer; font-size: 1.5rem;"></i>

        <!-- <div class="progress flex-grow-1" role="progressbar" aria-label="Warning example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-warning" style="width: 90%"></div> -->

        <div class="progress flex-grow-1" role="progressbar" aria-label="Animated striped example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" id="progressBar" style="width: 90%"></div>

        </div> <i class="bi bi-arrow-bar-right" id="btnProgresser" style="cursor: pointer; font-size: 1.5rem;"></i>
      </div>

    </div>
    </div>


    <form action="" class="m-5">
      <div class="row mx-5">
        <div class="col">
          <p class="mb-3 fs-4">Recevez votre copie gratuite d'internet 2!</p>
          <div class="input-group mb-3 w-50">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Login" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3 w-50">
            <input type="password" class="form-control" placeholder="Mot de Passe" aria-label="password" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">@example.com</span>
          </div>
          <label for="" class="form-label ms-1">URL des Internets 2 et 2.1 Beta</label>
          <div class="input-group mb-3 w-50">
            <span class="input-group-text">DogeCoin</span>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
            <span class="input-group-text">.00</span>
          </div>
          <div class="mb-3 w-50">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3">https://l33t.lptf/dkwb/berlusconimkt/</span>
              <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
            </div>
            <div class="form-text" id="basic-addon4"></div>
          </div>
        </div>


        <div class="col-3 ms-auto">
          <div class="row g-2">
            <div class="col-12">
              <label for="inputEmail4" class="form-label fw-medium">Email address</label>
              <input type="email" class="form-control" id="inputEmail4">
              <p class="fs-6 fw-light mb-2">We'll never share your email with anyone else.</p>
            </div>
            <div class="col-12">
              <label for="inputPassword4" class="form-label fw-medium">Password</label>
              <input type="password" class="form-control" id="inputPassword4">
            </div>
            <div class="col-12">

            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                <label class="form-check-label" for="inlineFormCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>

    </form>
  </main>


<div class="modal" id="papillonModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Commande de papillon</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Êtes-vous sûr de vouloir commander un papillon ? Attention, ne pas ingérer !</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Annuler</button>
        <button type="button" class="btn btn-primary">Commander</button>
      </div>
    </div>
  </div>
</div>


<!-- Modale pour les informations du formulaire -->
<div class="modal" id="formulaireModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Récapitulatif du formulaire</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="recapitulatif">
        <!-- Le contenu sera inséré par JavaScript -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>


  <!-- Link scrip bootstrap -->
  <script src="./assets/bootstrap-5.3.8/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
   <script src="./script.js"></script>
</body>

</html>