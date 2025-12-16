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