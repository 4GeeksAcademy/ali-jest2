const sum = (a, b) => {
    return a + b;
}

console.log(sum(7, 3));

// Declaramos una función "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = Math.floor((valueInEuro * 1.07) * 100) / 100;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInEuro = valueInDollar / 1.07;
    // Convertimos el valor a yenes
    let valueInYen = Math.floor((valueInEuro * 156.5) * 100) / 100;
    // Retornamos el valor en yenes
    return valueInYen;
}

// Declaramos una función "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a yen
    let valueInEuro = valueInYen / 156.5;
    // Convertimos el valor a pound
    let valueInPound = Math.floor((valueInEuro * 0.87) * 100) /100;
    // Retornamos el valor en yenes
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };                    