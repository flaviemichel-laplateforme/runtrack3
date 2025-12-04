function afficherjourssemaines() {

    const jourssemaines = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    jourssemaines.forEach((item) => {
        console.log(`${item}`);
    });

}

afficherjourssemaines();

function afficherjourssemaines2() {


    const jourssemaines = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    const iterateur = jourssemaines.keys();
    for (const key of iterateur) {
        console.log(`${jourssemaines[key]}`);
    }
}

afficherjourssemaines2();
