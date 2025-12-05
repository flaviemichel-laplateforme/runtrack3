function jourtravaille(date) {
    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();
    const jourSemaine = date.getDay();

    //Jours fériés 2020 (format avec zéros)
    const joursFeries = [
        "01/01",  // Jour de l'an
        "13/04",  // Lundi de Pâques
        "01/05",  // Fête du travail
        "08/05",  // Victoire 1945
        "21/05",  // Ascension
        "01/06",  // Lundi de Pentecôte
        "14/07",  // Fête nationale
        "15/08",  // Assomption
        "01/11",  // Toussaint
        "11/11",  // Armistice
        "25/12"   // Noël
    ];

    // Formatage avec padStart : "1" devient "01"
    const jourFormate = String(jour).padStart(2, "0");
    const moisFormate = String(mois).padStart(2, "0");
    const dateFormatee = `${jourFormate}/${moisFormate}`;

    let message = "";

    if (annee === 2020 && joursFeries.includes(dateFormatee)) {
        message = `Le ${jourFormate}/${moisFormate}/${annee} est un jour férié`;
    }
    else if (jourSemaine === 0 || jourSemaine === 6) {
        message = `Non, ${jourFormate}/${moisFormate}/${annee} est un week-end`;
    }
    else {
        message = `Oui, ${jourFormate}/${moisFormate}/${annee} est un jour travaillé`;
    }

    // Affiche dans la console (et sur la page si dans un navigateur)
    console.log(message);
    if (typeof document !== 'undefined') {
        document.body.innerHTML += `<p>${message}</p>`;
    }
}

//TEST
jourtravaille(new Date(2020, 0, 1));
jourtravaille(new Date(2020, 6, 14));
jourtravaille(new Date(2020, 0, 4));
jourtravaille(new Date(2020, 0, 6));
