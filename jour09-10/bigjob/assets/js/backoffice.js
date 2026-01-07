// Vérification de l'authentification et des droits
function requireAuth(requiredRole) {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));

    if (!user) {
        alert("Vous devez être connecté");
        window.location.href = '../utilisateurs/connexion.html';
        return false;
    }

    if (requiredRole && user.role !== requiredRole && user.role !== 'admin') {
        alert("Accès non autorisé");
        window.location.href = '../utilisateurs/calendrier.html';
        return false;
    }

    return true;
}

// Charger les demandes en attente depuis localStorage
function loadPendingRequests() {
    const requests = JSON.parse(localStorage.getItem("pendingRequests")) || [];
    displayRequestsInTable(requests);
}

// Afficher les demandes dans le tableau
function displayRequestsInTable(requests) {
    const tbody = document.querySelector('tbody');

    if (!tbody) {
        console.error("Tableau non trouvé dans le DOM");
        return;
    }

    tbody.innerHTML = '';

    if (requests.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center">Aucune demande en attente</td></tr>';
        return;
    }

    requests.forEach((request) => {
        // Séparer le nom et prénom
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
                    <button class="btn btn-success btn-sm" onclick="approveRequest(${request.id})">
                        Accepter
                    </button>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="rejectRequest(${request.id})">
                        Refuser
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Approuver une demande
function approveRequest(requestId) {
    const pending = JSON.parse(localStorage.getItem("pendingRequests")) || [];
    const request = pending.find(r => r.id === requestId);

    if (request) {
        // Changer le statut
        request.status = "approved";

        // Ajouter aux demandes approuvées
        const approved = JSON.parse(localStorage.getItem("approvedRequests")) || [];
        approved.push(request);
        localStorage.setItem("approvedRequests", JSON.stringify(approved));

        // Retirer des demandes en attente
        const updatedPending = pending.filter(r => r.id !== requestId);
        localStorage.setItem("pendingRequests", JSON.stringify(updatedPending));

        alert("Demande approuvée !");
        loadPendingRequests(); // Rafraîchir la table
    }
}

// Refuser une demande
function rejectRequest(requestId) {
    if (!confirm("Êtes-vous sûr de vouloir refuser cette demande ?")) {
        return;
    }

    const pending = JSON.parse(localStorage.getItem("pendingRequests")) || [];
    const updatedPending = pending.filter(r => r.id !== requestId);
    localStorage.setItem("pendingRequests", JSON.stringify(updatedPending));

    alert("Demande refusée !");
    loadPendingRequests();
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    // Vérifier l'authentification
    if (!requireAuth('moderator')) {
        return;
    }

    // Charger les demandes en attente
    loadPendingRequests();
});