// Vérification de l'authentification et des droits
function requireAuth(requiredRole) {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));

    if (!user) {
        alert("Vous devez être connecté");
        window.location.href = '../utilisateurs/connexion.html';
        return false;
    }

    if (requiredRole && user.role !== requiredRole) {
        alert("Accès non autorisé");
        window.location.href = '../utilisateurs/calendrier.html';
        return false;
    }

    return true;
}

// Charger tous les utilisateurs (JSON + localStorage)
async function loadUsers() {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];

    try {
        const response = await fetch('../data/users.json');
        const jsonUsers = await response.json();
        return [...jsonUsers, ...localUsers];
    } catch (error) {
        console.error("Erreur chargement users.json:", error);
        return localUsers;
    }
}

// Charger les demandes en attente pour le premier tableau
function loadPendingRequests() {
    const requests = JSON.parse(localStorage.getItem("pendingRequests")) || [];
    displayPendingRequestsTable(requests);
}

// Afficher les demandes en attente dans le premier tableau
function displayPendingRequestsTable(requests) {
    const tbody = document.querySelectorAll('tbody')[0]; // Premier tableau

    if (!tbody) {
        console.error("Premier tableau non trouvé");
        return;
    }

    tbody.innerHTML = '';

    if (requests.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center">Aucune demande en attente</td></tr>';
        return;
    }

    requests.forEach((request) => {
        const nameParts = request.people.split(' ');
        const prenom = nameParts[0] || '';
        const nom = nameParts.slice(1).join(' ') || '';

        const row = `
            <tr>
                <th scope="row">${request.id}</th>
                <td>${nom}</td>
                <td>${prenom}</td>
                <td>${request.userEmail}</td>
                <td>
                    <select class="form-select form-select-sm" disabled>
                        <option selected>En attente</option>
                    </select>
                </td>
                <td class="text-center">
                    <button class="btn btn-success btn-sm" onclick="approveRequestAsAdmin(${request.id})">
                        Approuver
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="rejectRequestAsAdmin(${request.id})">
                        Refuser
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Afficher les utilisateurs dans le deuxième tableau
function displayUsersInTable(users) {
    const tbody = document.querySelectorAll('tbody')[1]; // Deuxième tableau

    if (!tbody) {
        console.error("Deuxième tableau non trouvé");
        return;
    }

    tbody.innerHTML = '';

    if (users.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center">Aucun utilisateur</td></tr>';
        return;
    }

    users.forEach(user => {
        const row = `
            <tr>
                <th scope="row">${user.id}</th>
                <td>${user.nom}</td>
                <td>${user.prenom}</td>
                <td>${user.email}</td>
                <td>
                    <select class="form-select form-select-sm" id="role-${user.id}">
                        <option ${user.role === 'user' ? 'selected' : ''} value="user">Utilisateur</option>
                        <option ${user.role === 'moderator' ? 'selected' : ''} value="moderator">Modérateur</option>
                        <option ${user.role === 'admin' ? 'selected' : ''} value="admin">Administrateur</option>
                    </select>
                </td>
                <td class="text-center">
                    <button class="btn btn-primary btn-sm" onclick="updateUserRole(${user.id})">
                        Valider
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">
                        Supprimer
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Approuver une demande (en tant qu'admin)
function approveRequestAsAdmin(requestId) {
    const pending = JSON.parse(localStorage.getItem("pendingRequests")) || [];
    const request = pending.find(r => r.id === requestId);

    if (request) {
        request.status = "approved";

        const approved = JSON.parse(localStorage.getItem("approvedRequests")) || [];
        approved.push(request);
        localStorage.setItem("approvedRequests", JSON.stringify(approved));

        const updatedPending = pending.filter(r => r.id !== requestId);
        localStorage.setItem("pendingRequests", JSON.stringify(updatedPending));

        alert("Demande approuvée !");
        loadPendingRequests();
    }
}

// Refuser une demande (en tant qu'admin)
function rejectRequestAsAdmin(requestId) {
    if (!confirm("Êtes-vous sûr de vouloir refuser cette demande ?")) {
        return;
    }

    const pending = JSON.parse(localStorage.getItem("pendingRequests")) || [];
    const updatedPending = pending.filter(r => r.id !== requestId);
    localStorage.setItem("pendingRequests", JSON.stringify(updatedPending));

    alert("Demande refusée !");
    loadPendingRequests();
}

// Mettre à jour le rôle d'un utilisateur
function updateUserRole(userId) {
    const newRole = document.getElementById(`role-${userId}`).value;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.id === userId);
    if (user) {
        user.role = newRole;
        localStorage.setItem("users", JSON.stringify(users));
        alert(`Rôle mis à jour : ${newRole}`);
    }
}

// Supprimer un utilisateur
function deleteUser(userId) {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updated = users.filter(u => u.id !== userId);
    localStorage.setItem("users", JSON.stringify(updated));

    alert("Utilisateur supprimé");
    loadAllUsers();
}

// Charger tous les utilisateurs
async function loadAllUsers() {
    const users = await loadUsers();
    displayUsersInTable(users);
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', async function () {
    // Vérifier l'authentification
    if (!requireAuth('admin')) {
        return;
    }

    // Charger les demandes en attente
    loadPendingRequests();

    // Charger les utilisateurs
    await loadAllUsers();
});