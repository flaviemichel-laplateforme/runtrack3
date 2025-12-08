window.addEventListener("scroll", function () {
    const footer = document.querySelector("footer");

    // Calcul du pourcentage de scroll
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    console.log("scrollTop :" + scrollTop, "Percent: " + scrollPercent, "height : " + docHeight);
    // Couleur qui évolue du gris (#e0e0e0) au vert (#4CAF50)
    // On utilise un dégradé pour créer l'effet barre de chargement
    footer.style.background = `linear-gradient(to right, #4CAF50 ${scrollPercent}%, #e0e0e0 ${scrollPercent}%)`;

    // Affiche le pourcentage
    footer.textContent = `${Math.round(scrollPercent)}%`;
});