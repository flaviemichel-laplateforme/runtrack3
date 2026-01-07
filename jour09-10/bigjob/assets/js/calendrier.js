// Vérification de l'authentification
function requireAuth() {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));

    if (!user) {
        alert("Vous devez être connecté pour accéder au calendrier");
        window.location.href = 'connexion.html';
        return false;
    }

    return true;
}

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

    console.log("✅ Nouvelle demande créée:", newRequest);
    console.log("📋 Total demandes en attente:", requests.length);

    alert("Votre demande a été envoyée et est en attente de validation par un modérateur");
    return true;
}

// Afficher toutes les demandes (approuvées + en attente)
async function getAllEvents() {
    const approvedEvents = await loadEvents(); // Depuis request.json
    const pendingRequests = loadPendingRequests(); // Depuis localStorage
    const approvedRequests = JSON.parse(localStorage.getItem("approvedRequests")) || []; // Demandes approuvées

    // Formater les événements approuvés du JSON
    const approved = approvedEvents.map(event => ({
        id: event.id,
        start: event.start,
        end: event.end,
        title: `✓ ${event.title}`,
        description: event.description || "",
        location: event.location || "",
        people: Array.isArray(event.people) ? event.people : [event.people],
        status: "approved"
    }));

    // Formater les demandes approuvées depuis localStorage
    const localApproved = approvedRequests.map(req => ({
        id: req.id,
        start: req.start,
        end: req.end,
        title: `✓ ${req.title}`,
        description: req.description || "",
        location: req.location || "",
        people: Array.isArray(req.people) ? req.people : [req.people],
        status: "approved"
    }));

    // Formater les demandes en attente
    const pending = pendingRequests.map(req => ({
        id: req.id,
        start: req.start,
        end: req.end,
        title: `⏳ ${req.title}`,
        description: req.description || "",
        location: req.location || "",
        people: Array.isArray(req.people) ? req.people : [req.people],
        status: "pending"
    }));

    return [...approved, ...localApproved, ...pending];
}

// Gérer la soumission du formulaire
document.addEventListener('DOMContentLoaded', function () {
    // Vérifier l'authentification au chargement
    if (!requireAuth()) {
        return;
    }

    // Événement de soumission du formulaire
    const submitBtn = document.getElementById('submitRequest');
    if (submitBtn) {
        submitBtn.addEventListener('click', function () {
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
                if (modal) {
                    modal.hide();
                }

                // Réinitialiser le formulaire
                document.getElementById('requestForm').reset();

                // Recharger le calendrier - mettre à jour les événements
                if (window.calendarInstance) {
                    initCalendar();
                }
            }
        });
    }
});

// Fonction pour initialiser/recharger le calendrier avec tous les événements
async function initCalendar() {
    try {
        // Charger tous les événements
        const events = await getAllEvents();
        
        console.log("📅 Événements chargés:", events);
        console.log("📊 Nombre total d'événements:", events.length);
        
        // Si le calendrier existe déjà, le mettre à jour
        if (window.calendarInstance) {
            console.log("🔄 Mise à jour du calendrier existant");
            // Vider les anciens événements et ajouter les nouveaux
            window.calendarInstance.events.set(events);
        } else {
            console.log("⚠️ Instance du calendrier non trouvée - rechargement de la page");
            // Si pas d'instance, recharger la page pour réinitialiser
            window.location.reload();
        }
    } catch (error) {
        console.error("❌ Erreur lors du chargement des événements:", error);
    }
}