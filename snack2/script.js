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

var zucchineCorte = [];
var zucchineLunghe = [];

for ( i = 0; i < zucchine.length ; i++) {
    var zucchina = zucchine[i];
    if (zucchina.lunghezza <= 15 ) {

        zucchineCorte.push(zucchina)
    } else {
        zucchineLunghe.push(zucchina)
    }
}

console.log(zucchineCorte);
console.log(zucchineLunghe);

function pesoTotaleCorte (zucchine){
    var pesoTotaleCorte = 0;
    
    for (var i = 0; i < zucchineCorte.length; i++) {
        var pesoSingoloCorte = zucchineCorte[i].peso;
        pesoTotaleCorte += pesoSingoloCorte;
    };
    return pesoTotaleCorte;
}

console.log("Il peso totale delle zucchine corte è " + pesoTotaleCorte(zucchine)
+" gr.")


function pesoTotaleLunghe (zucchine){
    var pesoTotaleLunghe = 0;
    
    for (var i = 0; i < zucchineLunghe.length; i++) {
        var pesoSingoloLunghe = zucchineLunghe[i].peso;
        pesoTotaleLunghe += pesoSingoloLunghe;
    };
    return pesoTotaleLunghe;
}

console.log("Il peso totale delle zucchine lunghe è " + pesoTotaleLunghe(zucchine)
+" gr.")