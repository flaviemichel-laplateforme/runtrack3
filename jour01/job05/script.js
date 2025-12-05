function afficherjourssemaines() {

    const jourssemaines = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    jourssemaines.forEach((jour) => {
        console.log(`${jour}`);
    });

}

afficherjourssemaines();

function afficherjourssemaines2() {


    const jourssemaines = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    // const iterateur = jourssemaines.keys();
    for (const jour of jourssemaines) {
        console.log(`${jour}`);
    }
}

afficherjourssemaines2();
