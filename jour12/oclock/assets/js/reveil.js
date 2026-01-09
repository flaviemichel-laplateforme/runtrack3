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
    boutonSupprimer.type = 'buton';

    //Ajouter évènement de suppression
    boutonSupprimer.addEventListener('click', () => {
        nouvelleLigne.remove();

        //Supprimer du tableau reveilAlarme
        const index = reveilAlarme.findIndex(a => a.heure === heure && a.message === message);
        if (indexx > -1) {
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