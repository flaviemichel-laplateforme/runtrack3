// function Hello(message) {
//     console.log(message);
// }

// Hello("Bonjour Jean !");

function bissextile(annee) {
    let result = (annee % 4 === 0 && annee % 100 != 0) || annee % 400 === 0
        ? `${annee} est une année bissextile`//si vrai
        : `${annee} n'est pas une année bissextile`;//Sinon
    console.log(result);
}

bissextile(2000);


// function dire(msg) {
//   console.log(msg);
// }


// if (age >= 18) {
//   console.log("Majeur");
// } else {
//   console.log("Mineur");
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
