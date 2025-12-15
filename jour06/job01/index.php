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
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">LPTF</a>
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
            <a href="#" class="btn btn-primary">Commander votre propre papillon</a>
          </div>
        </div>

        <div class="card" style="width: 70%;">

          <div class="card-body">
            <h5 class="card-title display-3 mt-4">Bonjour, monde!</h5>
            <p class="card-text lh-1.8 fs-4">Il existe plusieurs visions du terme:<br>
              le monde est la matière,l'espace et les phénomènes qui nous sont accécibles par les sens,l'expérience ou la raison.<br>
              Le sens le plus courant désigne notre planète. La terre,avec ses habitants, et son envoronnemnt plus ou moins naturel.</p>
            <hr>
            <p>Le sens étendu désigne l'univers dans son ensemble.</p>

            <a href="#" class="btn btn-danger">Rebooter le Monde</a>

            <div class="spinner-border ms-auto" aria-hidden="true"></div>
          </div>



          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
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
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Limbes</li>
            <li class="list-group-item">Luxure</li>
            <li class="list-group-item">Gourmandise</li>
            <li class="list-group-item">Avarice</li>
            <li class="list-group-item">Colère</li>
            <li class="list-group-item">Heresie</li>
            <li class="list-group-item">Violence</li>
            <li class="list-group-item">Ruse et Tromperie</li>
            <li class="list-group-item">Trahison</li>
            <li class="list-group-item">Internet </li>
          </ul>
        </div>
        </div>
      </article>

    </section>

    <div class="w-50 mx-auto">
      <p class="text-end mb-2">Installation de AI 9000</p>
      <div class="d-flex align-items-center gap-2">
        <i class="bi bi-arrow-bar-left"></i>

        <!-- <div class="progress flex-grow-1" role="progressbar" aria-label="Warning example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-warning" style="width: 90%"></div> -->

        <div class="progress flex-grow-1" role="progressbar" aria-label="Animated striped example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 90%"></div>

        </div> <i class="bi bi-arrow-bar-right"></i>
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



  <!-- Link scrip bootstrap -->
  <script src="./assets/bootstrap-5.3.8/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>

</html>