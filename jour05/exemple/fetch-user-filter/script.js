// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

// Web
// Web APIs
// Fetch API
// Using the Fetch API

async function afficherUsers() {
    const reponse = await fetch("./users.json");
    const users = await reponse.json();
    return users;
}


const users = afficherUsers();

// console.log(users) erreur manque la promise, utiliser la fonction callback ;

users.then(result => {

    console.log("ok");
    console.log(result);

});
