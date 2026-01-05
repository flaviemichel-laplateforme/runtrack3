// Fonction pour récupérer les utilisateurs depuis le fichier JSON
async function loadUsers() {
    try {
        const response = await fetch('../data/users.json');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement des données');
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Erreur:', error);
        return [];
    }
}

// Fonction de connexion
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;
    
    // Récupérer les utilisateurs
    const users = await loadUsers();
    
    // Chercher l'utilisateur
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Stocker les infos de l'utilisateur dans sessionStorage
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        
        // Rediriger selon le rôle
        switch(user.role) {
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
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('button[type="button"]');
    if (loginButton) {
        loginButton.addEventListener('click', handleLogin);
    }
    
    // Permettre la connexion avec la touche Enter
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleLogin);
    }
});
