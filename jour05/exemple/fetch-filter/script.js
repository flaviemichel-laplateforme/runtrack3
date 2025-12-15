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

async function filterUsers() {
    const users = await afficherUsers();

    const filter = users.filter((users) => users.age >= 28);

    console.log('user filtrer: ', filter);
    console.log(filter[0].age = 40);

}

filterUsers();




