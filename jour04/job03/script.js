async function afficherPokemons() {
    const reponse = await fetch("./pokemon.json");
    const pokemons = await reponse.json();
    console.log(pokemons);
}
