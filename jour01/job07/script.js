function jourtravaille(date) {
    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();
    const jourSemaine = date.getDay();

    //Jours fériés 2020
    const joursFeries = [
        "1/1",   // Jour de l'an
        "13/4",  // Lundi de Pâques
        "1/5",   // Fête du travail
        "8/5",   // Victoire 1945
        "21/5",  // Ascension
        "1/6",   // Lundi de Pentecôte
        "14/7",  // Fête nationale
        "15/8",  // Assomption
        "1/11",  // Toussaint
        "11/11", // Armistice
        "25/12"  // Noël
    ];

    const dateFormatee = `${jour}/${mois}`;

    if (annee === 2020 && joursFeries.includes(dateFormatee)) {
        console.log(`Le ${jour} / ${mois} / ${annee} est un jour férié`);
    }
    else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour} / ${mois} / ${annee} est un week-end`);
    }
    else {
        console.log(`Oui, ${jour} / ${mois} / ${annee} est un jour travaillé`);
    }
    function jourtravaille(date) {
        const jour = date.getDate();
        const mois = date.getMonth() + 1;
        const annee = date.getFullYear();
        const jourSemaine = date.getDay();

        const joursFeries = [
            "1/1", "13/4", "1/5", "8/5", "21/5", "1/6",
            "14/7", "15/8", "1/11", "11/11", "25/12"
        ];

        const dateFormatee = `${jour}/${mois}`;
        let message = "";

        if (annee === 2020 && joursFeries.includes(dateFormatee)) {
            message = `Le ${jour} ${mois} ${annee} est un jour férié`;
        }
        else if (jourSemaine === 0 || jourSemaine === 6) {
            message = `Non, ${jour} ${mois} ${annee} est un week-end`;
        }
        else {
            message = `Oui, ${jour} ${mois} ${annee} est un jour travaillé`;
        }

        // Affiche dans la console ET sur la page
        console.log(message);
        document.body.innerHTML += `<p>${message}</p>`;
    }
}

//TEST
jourtravaille(new Date(2020, 0, 1));
jourtravaille(new Date(2020, 6, 14));
jourtravaille(new Date(2020, 0, 4));
jourtravaille(new Date(2020, 0, 6));
jourtravaille(new Date(2020, 0, 6));
