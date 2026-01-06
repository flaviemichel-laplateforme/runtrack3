
//Vérification des dates passées
function isPastDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
}

//Enregistrement d'une demande
function addRequest(date) {
    if (isPastDate(date)) {
        alert("Impossible de réserver une date passée");
        return;
    }
    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    const user = JSON.parse(sessionStorage.getItem("currentUser"));
    requests.push({
        id: Date.now(),
        userId: user.id,
        date: date,
        status: "pending"
    });
    localStorage.setItem("requests", JSON.stringify(requests));
}