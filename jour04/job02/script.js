//  <!-- Job 02
// Créez une fonction javascript “jsonValueKey()” qui prend en paramètre une chaîne de
// caractères au format json et une clé.
function jsonValueKey(jsonString, key) {
    const obj = JSON.parse(jsonString);//JSON.parse() est une méthode JavaScript qui convertit une chaîne de caractères au format JSON en objet JavaScript.
    return obj[key];
}

const jsonStr = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

console.log(jsonValueKey(jsonStr, "city")); // Affiche : Marseille
console.log(jsonValueKey(jsonStr, "name")); // Affiche : La Plateforme_
console.log(jsonValueKey(jsonStr, "nb_staff")); // Affiche : 11

// Cette fonction retourne la valeur liée à cette clé dans la chaîne de caractères.
// Par exemple : si la string passée en paramètre est
// “{
// name: "La Plateforme_",
// address: "8 rue d'hozier",
// city: "Marseille",
// nb_staff: "11",
// creation:"2019"
// }”
// et la clé est “city”, la fonction retourne “Marseille -->
