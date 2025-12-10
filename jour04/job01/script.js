async function afficherCitation() {
    const reponse = await fetch("./expression.txt");
    const citation = await reponse.json();
    console.log(citation);
}
