// Fonction pour récupérer les utilisateurs depuis le fichier JSON et localStorage
async function loadUsers() {
    try {
        // Charger depuis users.json
        const response = await fetch('../data/users.json');
        let jsonUsers = [];

        if (response.ok) {
            jsonUsers = await response.json();
        }

        // Charger depuis localStorage (utilisateurs inscrits)
        const localUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Fusionner les deux sources
        return [...jsonUsers, ...localUsers];
    } catch (error) {
        console.error('Erreur:', error);
        // En cas d'erreur, retourner au moins les utilisateurs du localStorage
        return JSON.parse(localStorage.getItem("users")) || [];
    }
}

// Fonction de connexion
async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;

    // Valider le format de l'email
    if (!isValidEmail(email)) {
        alert('Veuillez entrer une adresse email valide');
        return;
    }
    // Validation domaine email

    if (!isLaPlateformeEmail(email)) {
        alert("Seuls les emails @laplateforme.io sont acceptés");
        return;
    }

    // Récupérer les utilisateurs
    const users = await loadUsers();

    // Chercher l'utilisateur
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Stocker les infos de l'utilisateur dans sessionStorage
        sessionStorage.setItem('currentUser', JSON.stringify(user));

        // Rediriger selon le rôle
        switch (user.role) {
            case 'admin':
                window.location.href = '../administrateurs/gestion-droits.html';
                break;
            case 'moderator':
                window.location.href = '../moderateurs/backoffice.html';
                break;
            case 'user':
            default:
                window.location.href = 'calendrier.html';
                break;
        }
    } else {
        alert('Email ou mot de passe incorrect');
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', handleLogin);
    }
});

// Vérification email format
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function isLaPlateformeEmail(email) {
    return email.endsWith("@laplateforme.io");
}
