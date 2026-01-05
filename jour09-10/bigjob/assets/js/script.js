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
