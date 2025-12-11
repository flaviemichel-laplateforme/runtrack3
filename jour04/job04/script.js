// Fonction pour récupérer et afficher les utilisateurs
function updateUsers() {
    console.log("🔄 Mise à jour des utilisateurs...");

    // Récupérer les données depuis users.php
    fetch('users.php')
        .then(response => {
            // Vérifier si la requête a réussi
            if (!response.ok) {
                throw new Error('Erreur HTTP : ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log("✅ Données reçues :", data);

            // Vérifier s'il y a une erreur dans la réponse
            if (data.error) {
                showMessage('Erreur : ' + data.error, 'error');
                return;
            }

            // Sélectionner le tbody du tableau
            const tbody = document.querySelector('#users-table tbody');

            // Vider le tableau
            tbody.innerHTML = '';

            // Vérifier s'il y a des utilisateurs
            if (data.length === 0) {
                tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Aucun utilisateur trouvé</td></tr>';
                return;
            }

            // Parcourir les utilisateurs et créer les lignes
            data.forEach(user => {
                const tr = document.createElement('tr');

                tr.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;

                tbody.appendChild(tr);
            });

            showMessage(`✅ ${data.length} utilisateur(s) chargé(s)`, 'success');
        })
        .catch(error => {
            console.error("❌ Erreur :", error);
            showMessage('Erreur lors du chargement : ' + error.message, 'error');
        });
}

// Fonction pour afficher un message
function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = type;

    // Effacer le message après 3 secondes
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 3000);
}

// Événement : Clic sur le bouton Update
document.getElementById('update').addEventListener('click', updateUsers);

// Charger les utilisateurs au démarrage de la page
document.addEventListener('DOMContentLoaded', updateUsers);