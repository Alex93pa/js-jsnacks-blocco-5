var zucchine = [
    {
        varieta : "a",
        peso : 200,
        lunghezza : 13,
    },
    {
        varieta : "b",
        peso : 310,
        lunghezza : 22,
    },
    {
        varieta : "c",
        peso : 110,
        lunghezza : 9,
    },
    {
        varieta : "d",
        peso :200,
        lunghezza : 14,
    },
    {
        varieta : "e",
        peso : 330,
        lunghezza : 21,
    },
    {
        varieta : "f",
        peso : 300,
        lunghezza : 18,
    },
    {
        varieta : "g",
        peso : 600,
        lunghezza : 32,
    },
    {
        varieta : "h",
        peso : 200,
        lunghezza : 20,
    },
    {
        varieta : "i",
        peso : 170,
        lunghezza : 13,
    },
    {
        varieta : "l",
        peso : 190,
        lunghezza : 14,
    },
];

function pesoTotale (zucchine){
    var pesoTotale = 0;
    
    for (var i = 0; i < zucchine.length; i++) {
        var pesoSingolo = zucchine[i].peso;
        pesoTotale += pesoSingolo;
    };
    return pesoTotale;
}

console.log("Il peso totale delle zucchine è " + pesoTotale(zucchine)
+" gr.")
