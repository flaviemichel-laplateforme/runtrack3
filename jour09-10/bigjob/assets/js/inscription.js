// Validation du domaine email
function isLaPlateformeEmail(email) {
    return email.endsWith("@laplateforme.io");
}

// Validation format email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Fonction pour charger les utilisateurs existants
async function loadUsers() {
    try {
        const response = await fetch('../data/users.json');
        if (!response.ok) {
            return [];
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Erreur:', error);
        return [];
    }
}

// Fonction d'inscription
async function handleRegister(event) {
    event.preventDefault();

    const email = document.getElementById('inputEmail4').value;
    const password = document.getElementById('inputPassword4').value;
    const nom = document.getElementById('inputNom').value;
    const prenom = document.getElementById('inputPrenom').value;

    // Validation format email
    if (!isValidEmail(email)) {
        alert('Veuillez entrer une adresse email valide');
        return;
    }

    // Validation domaine email
    if (!isLaPlateformeEmail(email)) {
        alert("Seuls les emails @laplateforme.io sont acceptés");
        return;
    }

    // Vérifier si l'email existe déjà
    const users = await loadUsers();
    const emailExists = users.some(u => u.email === email);

    if (emailExists) {
        alert('Un compte existe déjà avec cet email');
        return;
    }

    // Créer le nouvel utilisateur
    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        email,
        nom,
        prenom,
        password,
        role: "user",
        dateInscription: new Date().toISOString().split('T')[0],
        actif: true
    };

    // En mode développement, on stocke dans localStorage
    // (car on ne peut pas modifier users.json côté client)
    const localUsers = JSON.parse(localStorage.getItem("users")) || users;
    localUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(localUsers));

    alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
    window.location.href = 'connexion.html';
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    if (form) {
        form.addEventListener('submit', handleRegister);
    }
});