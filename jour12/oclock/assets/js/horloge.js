const currentTimeDisplay = document.getElementById('currentTime');

function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}

function updateTime() {
    const date = new Date();
    const heures = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();

    const heureFormatee = `${formatNumber(heures)}:${formatNumber(minutes)}:${formatNumber(secondes)}`;
    currentTimeDisplay.textContent = heureFormatee;
}

updateTime();
setInterval(updateTime, 1000);



