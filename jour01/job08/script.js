function sommenombresPremiers(a, b) {
    function nbrPremier(nbr) {
        for (var i = 2; i < nbr; i++)
            if (nbr % i === 0) return false;
        return true;
    }

    if (nbrPremier(a) && nbrPremier(b)) {
        return (a + b)
    } else {
        return false;
    }
}
console.log(sommenombresPremiers(3, 5));
console.log(sommenombresPremiers(4, 5));