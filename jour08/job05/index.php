<!doctype html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Découvrez Tailwind CSS</title>
  <link rel="stylesheet" href="./assets/input.css">
  
</head>

<body class="min-h-screen flex flex-col">

  <!-- Header -->
  <header >
    <nav class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-5">
        <div>
        
        <ul  class=" flex flex-row-reverse gap-3 ">
              <li><a  href="index.php">Accueil</a></li>
              <li><a  href="index.php">Inscription</a></li>
              <li><a  href="index.php">Connexion</a></li>
              <li><a  href="index.php">Rechercher</a></li>
      </ul>

        </div>
    </nav>
  </header>

  <!-- Main Content -->
  <main class="flex-grow">
    <section class="flex justify-center items-center m-10">
          <form action="" method="post">

            <div class="w-auto relative m-4 p-2 bg-gray-300 shadow-xl/20 text-black rounded-sm">
          <label for="">Civilité</label>
          <input name="civilite" type="radio" value="mme" />
          <span>Mme</span>

          <input name="civilite" type="radio" value="mlle" />
          <span>Mlle</span>

          <input name="civilite" type="radio" value="mr" />
          <span>Mr</span>
        
</div>

          <div class="relative mb-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-cyan-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>
                </span>
                <input type="text" name="prenom" placeholder="Prénom" class="block w-64 w-1/2 pl-10 px-3 py-2 border border-cyan-700  shadow-xl/30" required>
            </div>

          <div class="relative mb-2"> 
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg fill="#000000ff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" class="w-5 h-5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M20.494,25.218c0-2.852-2.312-5.164-5.164-5.164h-1.333c-0.692,0-1.253-0.561-1.253-1.253 c0-0.257,0.104-0.503,0.287-0.683c0.775-0.756,1.427-1.77,1.899-2.862c0.096,0.071,0.199,0.122,0.315,0.122 c0.749,0,1.628-1.654,1.628-2.782s-0.104-2.042-0.854-2.042c-0.088,0-0.183,0.015-0.278,0.039 c-0.053-3.058-0.826-6.873-5.495-6.873c-4.872,0-5.441,3.808-5.495,6.863c-0.068-0.013-0.138-0.028-0.201-0.028 c-0.749,0-0.853,0.914-0.853,2.042s0.879,2.782,1.628,2.782c0.092,0,0.178-0.026,0.258-0.072c0.47,1.075,1.114,2.07,1.878,2.813 c0.184,0.18,0.287,0.426,0.287,0.683c0,0.692-0.561,1.253-1.253,1.253H5.164C2.312,20.054,0,22.366,0,25.218v1.432 c0,0.9,0.73,1.631,1.631,1.631h17.232c0.902,0,1.632-0.73,1.632-1.631L20.494,25.218L20.494,25.218z"></path> <path d="M16.34,5.886c0.417,0.923,0.715,2.059,0.84,3.465c0.309,0.19,0.539,0.498,0.729,0.869h12.883 C31.459,10.22,32,9.679,32,9.012V7.095c0-0.667-0.541-1.208-1.208-1.208L16.34,5.886L16.34,5.886z"></path> <path d="M15.857,16.784c-0.034,0.063-0.075,0.119-0.11,0.183v1.147h15.045c0.667,0,1.208-0.541,1.208-1.207V14.99 c0-0.667-0.541-1.208-1.208-1.208H18.204C17.863,15.073,17.02,16.423,15.857,16.784z"></path> <path d="M21.994,25.218v0.794h8.798c0.667,0,1.208-0.541,1.208-1.208v-1.917c0-0.667-0.541-1.208-1.208-1.208h-9.825 C21.613,22.704,21.994,23.915,21.994,25.218z"></path> </g> </g> </g></svg>
                </span>
                <input type="text" name="nom" id="last_name" placeholder="Nom" class="block w-64 w-1/2 pl-10 px-3 py-2 border border-cyan-700 rounded shadow-xl/30" required>
          </div>

          <div class="relative mb-2"> 
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z" fill="#0e7490"></path> </g></svg>
</span>
                <input placeholder="adresse" id="adresse" type="text" name="adresse"  class="block w-64 pl-10 px-3 py-2 border border-cyan-700 rounded shadow-xl/30" required>
          </div>

          <div class="relative mb-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-cyan-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </span>
                <input placeholder="E-mail" id="email" type="email" name="email" class="block w-64 pl-10 px-3 py-2 border border-cyan-700 rounded shadow-xl/30" required>
                
          </div>

          <div class="relative mb-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
</svg>
                </span>
                <input placeholder="Password" id="password" type="password" name="password" class="block w-64 pl-10 px-3 py-2 border border-cyan-700 rounded shadow-xl/30" required>

          </div>
                
          <div  class="relative m-4 p-2 bg-gray-300 shadow-xl/20 text-black rounded-sm">
                <p><label>Sélectionner vos passions !!</label></p>                
             
             
             
                <p>
                  <label>
                    <input class="accent-black hover:accent-blue-500" type="checkbox" name="passions[]" value="informatique" />
                    <span>Informatique</span>
                  </label>
                </p>



                <p>
                  <label>
                    <input class="accent-black hover:accent-blue-500" type="checkbox" name="passions[]" value="voyages" />
                    <span>Voyages</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input class="accent-black hover:accent-blue-500" type="checkbox" name="passions[]" value="sport" />
                    <span>Sport</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input class="accent-black hover:accent-blue-500" type="checkbox" name="passions[]" value="lecture" />
                    <span>Lecture</span>
                  </label>
                </p>
              </div>

              <div>
                <button class=" text-white w-64 bg-sky-500 hover:bg-blue-500 shadow-lg shadow-blue-500/50 700 rounded-sm p-2  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500
" type="submit" name="action">S'incrire</button>
              </div>
</div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-5">

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
npx @tailwindcss/cli -i ./assets/input.css -o ./assets/output.css --watch