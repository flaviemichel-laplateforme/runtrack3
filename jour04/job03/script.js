document.getElementById("filter").addEventListener('click', async function () {

    const idFilter = document.getElementById("id").value.trim();
    const nomFilter = document.getElementById("nom").value.trim();
    const typeFilter = document.getElementById("type").value.trim();

    // Correspondance français -> anglais pour les types
    const typeMapping = {
        "Plante": "Grass",
        "Feu": "Fire",
        "Eau": "Water",
        "Poison": "Poison",
        "Insecte": "Bug",
        "Vol": "Flying",
        "Électrik": "Electric",
        "Normal": "Normal"
    };

    const reponse = await fetch("./pokemon.json");
    const pokemons = await reponse.json();
    console.log(pokemons);
    console.log(typeFilter);

    //Filtrer les pokemons
    const filtered = pokemons.filter(pokemon => {
        //Filtre par l'ID
        if (idFilter && pokemon.id != idFilter) {
            return false;
        }
        //Filtre par le nom
        if (nomFilter && !pokemon.name.french.toLowerCase().includes(nomFilter)) {
            return false;
        }
        //Filtre par type
        if (typeFilter) {
            const typeEnglish = typeMapping[typeFilter];
            if (!pokemon.type.includes(typeEnglish)) {
                return false;
            }
        }

        return true;
    })
    // Afficher les résultats
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (filtered.length === 0) {
        resultsDiv.innerHTML = "<p>Aucun pokémon trouvé</p>";
    } else {
        filtered.forEach(pokemon => {

            const pokemonDiv = document.createElement("div");
            pokemonDiv.innerHTML = `
                <h3>#${pokemon.id} - ${pokemon.name.french}</h3>
                <p><strong>Type:</strong> ${pokemon.type.join(", ")}</p>
                <p><strong>PV:</strong> ${pokemon.base.HP} | <strong>Attaque:</strong> ${pokemon.base.Attack}</p>
                <hr>
            `;
            resultsDiv.appendChild(pokemonDiv);
        });
    }
})



