const heureInput = document.getElementById('timeInput')

function formatNumber(num) {
    return num < 10 ? "0" + num : num;

}

console.log(formatNumber(5));

function updateTime() {
    const date = new Date();
    const heures = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    const millisecondes = date.getMilliseconds();

    const heureFormatee = `${formatNumber(heures)}:${formatNumber(minutes)}:${formatNumber(secondes)}`;
    heureInput.value = heureFormatee;
    console.log(heureInput);
}


updateTime();

setInterval(updateTime, 1000);



