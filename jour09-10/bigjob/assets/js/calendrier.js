
//Vérification des dates passées
function isPastDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
}

// Charger les événements depuis requests.json
async function loadEvents() {
    try {
        const response = await fetch('../data/request.json');
        if (!response.ok) throw new Error('Erreur de chargement');
        const events = await response.json();
        return events;
    } catch (error) {
        console.error('Erreur:', error);
        return [];
    }
}

// Charger les demandes en attente depuis localStorage
function loadPendingRequests() {
    const requests = JSON.parse(localStorage.getItem("pendingRequests")) || [];
    return requests;
}

// Créer une demande de présence (utilisateur)
function createPresenceRequest(requestData) {
    const user = JSON.parse(sessionStorage.getItem("currentUser"));

    if (!user) {
        alert("Vous devez être connecté pour faire une demande");
        return false;
    }

    // Vérifier les dates
    if (isPastDate(requestData.dateDebut)) {
        alert("Impossible de réserver une date passée");
        return false;
    }

    // Créer la nouvelle demande au format request.json
    const newRequest = {
        id: Date.now(),
        people: `${user.prenom} ${user.nom}`,
        start: `${requestData.dateDebut} ${requestData.heureDebut}`,
        end: `${requestData.dateFin} ${requestData.heureFin}`,
        title: requestData.motif,
        description: requestData.description || "",
        location: requestData.location || "Non spécifié",
        status: "pending", // Statut pour différencier en attente/approuvé
        userId: user.id,
        userEmail: user.email,
        dateCreation: new Date().toISOString()
    };

    // Sauvegarder dans localStorage (en attente de validation)
    const requests = loadPendingRequests();
    requests.push(newRequest);
    localStorage.setItem("pendingRequests", JSON.stringify(requests));

    alert("Votre demande a été envoyée et est en attente de validation par un modérateur");
    return true;
}

// Afficher toutes les demandes (approuvées + en attente)
async function getAllEvents() {
    const approvedEvents = await loadEvents(); // Depuis request.json
    const pendingRequests = loadPendingRequests(); // Depuis localStorage

    // Ajouter le statut "approved" aux événements déjà dans le JSON
    const approved = approvedEvents.map(event => ({
        ...event,
        title: `✓ ${event.title}`,
        status: "approved"
    }));

    // Ajouter le statut "pending" aux demandes en attente
    const pending = pendingRequests.map(req => ({
        ...req,
        title: `⏳ ${req.title}`,
        status: "pending"
    }));

    return [...approved, ...pending];
}

// Gérer la soumission du formulaire
document.getElementById('submitRequest').addEventListener('click', function () {
    const requestData = {
        dateDebut: document.getElementById('dateDebut').value,
        dateFin: document.getElementById('dateFin').value,
        heureDebut: document.getElementById('heureDebut').value,
        heureFin: document.getElementById('heureFin').value,
        motif: document.getElementById('motif').value,
        description: document.getElementById('description').value,
        location: document.getElementById('location').value
    };

    if (createPresenceRequest(requestData)) {
        // Fermer le modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('requestModal'));
        modal.hide();

        // Réinitialiser le formulaire
        document.getElementById('requestForm').reset();

        // Recharger le calendrier
        initCalendar();
    }
});