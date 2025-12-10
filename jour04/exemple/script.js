// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

// Web
// Web APIs
// Fetch API
// Using the Fetch API

async function afficherUsers() {
    const reponse = await fetch("./users.json");
    const users = await reponse.json();
    console.log(users);
}

afficherUsers();