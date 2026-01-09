/**
 * O'Clock - Réveil/Alarme Module
 * Copyright (c) 2026 Flavie Michel
 * Licensed under MIT License
 * See LICENSE file for details
 */

const nomReveilInput = document.getElementById('nomReveilInput');
const reveilInput = document.getElementById('reveilInput');
const ajouterAlarme = document.getElementById('ajouterAlarme');
const tableAlarme = document.getElementById('tableAlarme');
const listeAlarmes = document.getElementById('listeAlarmes');

let reveilAlarme = [];
let reveilIntervalId = null;

ajouterAlarme.addEventListener('click', () => {
    const heure = reveilInput.value;
    const message = nomReveilInput.value;

    if (!heure || !message) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    //Ajouter l'alarme au tableau
    reveilAlarme.push({ heure: heure, message: message, active: true });

    //Créer une nouvelle ligne dans le tableau
    const nouvelleLigne = document.createElement('tr');

    //Créer des cellules au tableau
    const celluleHeure = document.createElement('td');
    celluleHeure.textContent = heure;

    const celluleMessage = document.createElement('td');
    celluleMessage.textContent = message;

    const celluleStatut = document.createElement('td');
    celluleStatut.textContent = 'Active';

    const celluleActions = document.createElement('td');
    const boutonSupprimer = document.createElement('button');
    boutonSupprimer.textContent = 'Supprimer';
    boutonSupprimer.type = 'button';

    //Ajouter évènement de suppression
    boutonSupprimer.addEventListener('click', () => {
        nouvelleLigne.remove();

        //Supprimer du tableau reveilAlarme
        const index = reveilAlarme.findIndex(a => a.heure === heure && a.message === message);
        if (index > -1) {
            reveilAlarme.splice(index, 1);
        }

    });

    //Assembler tout
    celluleActions.appendChild(boutonSupprimer);
    nouvelleLigne.appendChild(celluleHeure);
    nouvelleLigne.appendChild(celluleMessage);
    nouvelleLigne.appendChild(celluleStatut);
    nouvelleLigne.appendChild(celluleActions);

    //Ajouter au tableau HTML
    listeAlarmes.appendChild(nouvelleLigne);

    //Réinitialiser les champs 
    reveilInput.value = '';
    nomReveilInput.value = '';
})

//fonction pour vérifier les alarmes
function verifierAlarmes() {
    const maintenant = new Date();
    const heures = maintenant.getHours().toString().padStart(2, '0');
    const minutes = maintenant.getMinutes().toString().padStart(2, '0');
    const heureActuelle = heures + ':' + minutes;

    //Parcourir toutes les alarmes
    reveilAlarme.forEach((alarme, index) => {
        if (alarme.active && alarme.heure === heureActuelle) {
            alert('ALARME ! ' + alarme.message);

            alarme.active = false;

            //Changer le statut dans le tablea html
            const lignes = listeAlarmes.getElementsByTagName('tr');
            lignes[index].cells[2].textContent = 'Déclenchée';
        }
    });

    mettreAJourStatuts();

}

function mettreAJourStatuts() {
    const maintenant = new Date();

    reveilAlarme.forEach((alarme, index) => {
        if (!alarme.active) return; // Si déclenchée, ne rien faire

        const [heureAlarme, minuteAlarme] = alarme.heure.split(':');
        const dateAlarme = new Date();
        dateAlarme.setHours(parseInt(heureAlarme));
        dateAlarme.setMinutes(parseInt(minuteAlarme));
        dateAlarme.setSeconds(0);

        // Si l'heure est déjà passée aujourd'hui, programmer pour demain
        if (dateAlarme <= maintenant) {
            dateAlarme.setDate(dateAlarme.getDate() + 1);
        }

        // Calculer la différence en millisecondes
        const diff = dateAlarme - maintenant;
        const heuresRestantes = Math.floor(diff / (1000 * 60 * 60));
        const minutesRestantes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        // Afficher le statut
        const lignes = listeAlarmes.getElementsByTagName('tr');
        if (lignes[index]) {
            lignes[index].cells[2].textContent = `Dans ${heuresRestantes}h ${minutesRestantes}min`;
        }
    });
}

setInterval(verifierAlarmes, 1000);

setInterval(verifierAlarmes, 1000);