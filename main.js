function calculate(){
    // get the entered formel
    var formel = $("#formel").val();

    // split formel int bonds
    var bonds = formel.split(";");

    // get the result
    var result = getResult(bonds);

    $("#result").html(result);
}

function getResult(bonds){
    const ENWerte = {
        "h": 2.2,
        "li": 1.0,
        "na": 0.9,
        "k": 0.8,
        "rb": 0.8,
        "cs": 0.8,
        "be": 1.5,
        "mg": 1.3,
        "ca": 1.0,
        "sr": 1.0,
        "ba": 0.9,
        "b": 2.0,
        "al": 1.6,
        "ga": 1.8,
        "in": 1.8,
        "tl": 1.8,
        "c": 2.5,
        "si": 1.9,
        "ge": 2.0,
        "sn": 1.9,
        "pb": 1.8,
        "n": 3.0,
        "p": 2.2,
        "as": 2.2,
        "sb": 2.1,
        "bi": 2,
        "o": 3.4,
        "s": 2.5,
        "se": 2.6,
        "te": 2.1,
        "po": 2.0,
        "f": 4.0,
        "cl": 3.2,
        "br": 3.0,
        "i": 2.5,
        "at": 2.2,
        "he": 0.0,
        "ne": 0.0,
        "ar": 0.0,
        "kr": 0.0,
        "xe": 0.0,
        "rn": .00
    }

    var result = "";
    for (const bond of bonds) {
        var elements = bond.toLowerCase().split(" ");

        var EN = Math.abs(ENWerte[elements[0]] - ENWerte[elements[1]]).toFixed(1);

        result += "(" + elements[0].toUpperCase() + ", " + elements[1].toUpperCase() + ") |" + ENWerte[elements[0]].toFixed(1) + " - " + ENWerte[elements[1]].toFixed(1) + "| = " + EN + "<br>";
    }
    
    return result;
}