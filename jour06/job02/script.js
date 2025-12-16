// Le bouton de la carte “papillon” doit afficher une modale confirmant
// l’achat d’un papillon.

const btnPapillon = document.getElementById('btnPapillon');
// Le bouton "Rebooter le Monde" modifie le contenu du jumbotron
// avec une citation aléatoire de Blade Runner

const btnReboot = document.querySelector('.btn-danger');
const jumbotronTitle = document.querySelector('.display-3');
const jumbotronText = document.querySelector('.fs-4');
const jumbotronLead = document.querySelector('.lead');

const citations = [
    {
        titre: "J'ai vu des choses...",
        texte: "J'ai vu des choses que vous, humains, ne pourriez pas croire.",
        lead: "Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie."
    },
    {
        titre: "Réveille-toi !",
        texte: "C'est l'heure de mourir.",
        lead: "C'est dommage qu'elle ne vivra pas. Mais qui vit éternellement ?"
    },
    {
        titre: "Souvenirs",
        texte: "Ce test de Voight-Kampff, vous l'avez déjà passé vous-même ?",
        lead: "Nous ne sommes pas des ordinateurs. Nous sommes physiques."
    },
    {
        titre: "Humanité",
        texte: "Je veux plus de vie.",
        lead: "La chandelle qui brûle deux fois plus fort brûle deux fois moins longtemps."
    },
    {
        titre: "Questions",
        texte: "Avez-vous déjà retiré un humain par erreur ?",
        lead: "Les réplicants sont comme n'importe quelle machine. Ils peuvent être un bienfait ou un danger."
    }
];

btnReboot.addEventListener('click', (e) => {
    e.preventDefault();

    // Sélectionner une citation aléatoire
    const citationAleatoire = citations[Math.floor(Math.random() * citations.length)];

    // Modifier le contenu du jumbotron
    jumbotronTitle.textContent = citationAleatoire.titre;
    jumbotronText.innerHTML = citationAleatoire.texte;
    jumbotronLead.textContent = citationAleatoire.lead;
});


const pagesContent = {
    1: {
        title: "Bonjour, monde!",
        text: "Il existe plusieurs visions du terme...",
        lead: "Le sens étendu désigne l'univers dans son ensemble."
    },

    2: {
        title: "La Plateforme",
        text: "Ecole de développement web et mobile à Marseille",
        lead: "Apprennez à coder en vous amusant !"
    },

    3: {
        title: "Le code",
        text: "Le code est le langage des ordinateurs...",
        lead: "Maitrisez les langages du web !"
    },

    4: {
        title: "La Plateforme",
        text: "Ecole de développement web et mobile à Marseille",
        lead: "Apprennez à coder en vous amusant !"
    },

    5: {
        title: "Langage de programmation",
        text: "Il existe de nombreux langages de programmation...",
        lead: "Choisissez celui qui vous convient le mieux !"
    },
};
// Sélectionner tous les liens de pagination
document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const pageNum = e.target.getAttribute('data-page');
        const content = pagesContent[pageNum];

        // Modifier le contenu du jumbotron
        document.getElementById('jumbotronTitle').textContent = content.title;
        document.getElementById('jumbotronText').textContent = content.text;
        document.getElementById('jumbotronLead').textContent = content.lead;

        // Marquer la page active dans la pagination
        document.querySelectorAll('.page-item').forEach(item => {
            item.classList.remove('active');
        });
        e.target.parentElement.classList.add('active');

        // Activer l'élément correspondant dans la liste avec couleur primary
        document.querySelectorAll('[data-cercle]').forEach(item => {
            item.classList.remove('active', 'list-group-item-primary', 'text-white');
            item.removeAttribute('aria-current');
        });

        const cercleActif = document.querySelector(`[data-cercle="${pageNum}"]`);
        if (cercleActif) {
            cercleActif.classList.add('active', 'list-group-item-primary');
            cercleActif.setAttribute('aria-current', 'true');
        }
    });
});

// Gestion de la barre de progression
const progressBar = document.getElementById('progressBar');
const btnProgresser = document.getElementById('btnProgresser');
const btnRegresser = document.getElementById('btnRegresser');

let progression = 90; // Valeur initiale

// Augmenter la progression
btnProgresser.addEventListener('click', () => {
    if (progression < 100) {
        progression += 10;
        if (progression > 100) progression = 100;
        progressBar.style.width = progression + '%';
        progressBar.parentElement.setAttribute('aria-valuenow', progression);
    }
});

// Diminuer la progression
btnRegresser.addEventListener('click', () => {
    if (progression > 0) {
        progression -= 10;
        if (progression < 0) progression = 0;
        progressBar.style.width = progression + '%';
        progressBar.parentElement.setAttribute('aria-valuenow', progression);
    }
});

// Détection de la séquence de touches D, G, C
let sequence = [];
const secretCode = ['d', 'g', 'c'];

document.addEventListener('keydown', (e) => {
    // Ajouter la touche pressée à la séquence
    sequence.push(e.key.toLowerCase());

    // Garder seulement les 3 dernières touches
    if (sequence.length > 3) {
        sequence.shift(); // Retire le premier élément
    }

    // Vérifier si la séquence correspond
    if (JSON.stringify(sequence) === JSON.stringify(secretCode)) {
        // Récupérer les valeurs du formulaire
        const email = document.getElementById('inputEmail4').value;
        const password = document.getElementById('inputPassword4').value;
        const login = document.querySelector('input[placeholder="Login"]').value;
        const motDePasse = document.querySelector('input[placeholder="Mot de Passe"]').value;
        const url = document.getElementById('basic-url').value;
        const checkBox = document.getElementById('inlineFormCheck').checked;

        // Créer le contenu du récapitulatif
        const recapHTML = `
            <p><strong>Login:</strong> ${login || 'Non renseigné'}</p>
            <p><strong>Mot de passe:</strong> ${motDePasse ? '****' : 'Non renseigné'}</p>
            <p><strong>Email:</strong> ${email || 'Non renseigné'}</p>
            <p><strong>Password (droite):</strong> ${password ? '****' : 'Non renseigné'}</p>
            <p><strong>URL:</strong> ${url || 'Non renseignée'}</p>
            <p><strong>Check me out:</strong> ${checkBox ? 'Coché' : 'Non coché'}</p>
        `;

        // Insérer dans la modale
        document.getElementById('recapitulatif').innerHTML = recapHTML;

        // Afficher la modale
        const modal = new bootstrap.Modal(document.getElementById('formulaireModal'));
        modal.show();

        // Réinitialiser la séquence
        sequence = [];
    }

    // Validation du formulaire et changement de couleur du spinner
    const form = document.querySelector('form');
    const spinner = document.querySelector('.spinner-border');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêcher l'envoi du formulaire

        const email = document.getElementById('inputEmail4').value;
        const password = document.getElementById('inputPassword4').value;

        // Vérifier que l'email et le mot de passe ne sont pas vides
        if (email.trim() !== '' && password.trim() !== '') {
            // Couleurs Bootstrap disponibles pour le spinner
            const couleurs = [
                'text-primary',
                'text-secondary',
                'text-success',
                'text-danger',
                'text-warning',
                'text-info',
                'text-dark'
            ];

            // Retirer toutes les classes de couleur existantes
            couleurs.forEach(couleur => spinner.classList.remove(couleur));

            // Choisir une couleur aléatoire
            const couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];

            // Appliquer la nouvelle couleur
            spinner.classList.add(couleurAleatoire);
        } else {
            alert('Veuillez remplir l\'email et le mot de passe');
        }
    });
});