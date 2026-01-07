function approvedPresence() {
    console.log(JSON.parse(localStorage.getItem("approvedRequests")));

}

approvedPresence();

// À ajouter dans backoffice.js
async function loadPendingRequests() {
    const requests = JSON.parse(localStorage.getItem("pendingRequests")) || [];
    displayRequestsInTable(requests);
}

function displayRequestsInTable(requests) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    requests.forEach((request, index) => {
        const row = `
            <tr>
                <th scope="row">${request.id}</th>
                <td>${request.people.split(' ')[1]}</td>
                <td>${request.people.split(' ')[0]}</td>
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

function rejectRequest(requestId) {
    const pending = JSON.parse(localStorage.getItem("pendingRequests")) || [];
    const updatedPending = pending.filter(r => r.id !== requestId);
    localStorage.setItem("pendingRequests", JSON.stringify(updatedPending));

    alert("Demande refusée !");
    loadPendingRequests();
}

// Charger au démarrage
document.addEventListener('DOMContentLoaded', loadPendingRequests);