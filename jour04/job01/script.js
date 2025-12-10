document.getElementById("button").addEventListener("click", async function () {
    const reponse = await fetch("./expression.txt");
    const citation = await reponse.text();
    document.getElementById("citation").textContent = citation;
    console.log("citation");
});
