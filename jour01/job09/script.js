function compareNumbers(a, b) {
    return b - a;
}

function tri(number, order) {
    if (order === "desc") {
        number.sort(compareNumbers);
    } else {
        number.sort((a, b) => a - b);
    }
    console.log(number);
}

const tableau = [1, 4, 40, 60, 81];
tri(tableau, "asc");
tri(tableau, "desc");