// Fonction de déconnexion
function logout() {
    // Supprimer les données de session
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('currentUser');

    // Détecter le dossier actuel et rediriger correctement
    const currentPath = window.location.pathname;
    let redirectPath = 'connexion.html';

    if (currentPath.includes('/moderateurs/') || currentPath.includes('/administrateurs/')) {
        redirectPath = '../utilisateurs/connexion.html';
    }

    // Rediriger vers la page de connexion
    window.location.href = redirectPath;
}

// Vérifier si l'utilisateur est connecté
function checkAuth() {
    const currentUser = sessionStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
}

// Afficher/masquer les éléments selon le rôle
function updateNavByRole() {
    const user = checkAuth();

    if (user) {
        // Cacher inscription/connexion si connecté
        const inscriptionLink = document.querySelector('a[href*="inscription.html"]');
        const connexionLink = document.querySelector('a[href*="connexion.html"]');

        if (inscriptionLink) inscriptionLink.closest('.nav-item').style.display = 'none';
        if (connexionLink) connexionLink.closest('.nav-item').style.display = 'none';

        // Gérer l'affichage des dropdowns selon le rôle
        // Méthode compatible avec tous les navigateurs
        const allDropdowns = document.querySelectorAll('.nav-item.dropdown');

        allDropdowns.forEach(dropdown => {
            const calendrierLink = dropdown.querySelector('a[href*="calendrier.html"]');
            const backofficeLink = dropdown.querySelector('a[href*="backoffice.html"]');
            const gestionDroitsLink = dropdown.querySelector('a[href*="gestion-droits.html"]');

            // Dropdown utilisateur - visible pour tous les connectés
            if (calendrierLink) {
                dropdown.style.display = 'block';
            }

            // Dropdown modérateur - visible pour moderator et admin
            if (backofficeLink) {
                dropdown.style.display = (user.role === 'moderator' || user.role === 'admin') ? 'block' : 'none';
            }

            // Dropdown admin - visible seulement pour admin
            if (gestionDroitsLink) {
                dropdown.style.display = user.role === 'admin' ? 'block' : 'none';
            }
        });
    } else {
        // Si pas connecté, afficher inscription/connexion, cacher les dropdowns utilisateur
        const inscriptionLink = document.querySelector('a[href*="inscription.html"]');
        const connexionLink = document.querySelector('a[href*="connexion.html"]');

        if (inscriptionLink) inscriptionLink.closest('.nav-item').style.display = 'block';
        if (connexionLink) connexionLink.closest('.nav-item').style.display = 'block';

        // Cacher tous les dropdowns si non connecté
        const allDropdowns = document.querySelectorAll('.nav-item.dropdown');
        allDropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
}

// Initialiser les événements de déconnexion
document.addEventListener('DOMContentLoaded', function () {
    // Ajouter l'événement au bouton de déconnexion
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            logout();
        });
    }

    // Mettre à jour la navbar selon le rôle
    updateNavByRole();
});
