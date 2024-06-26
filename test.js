const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.74); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One euro should be 156.5 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 dólar es equivalente a 1.07 euros, entonces 3.5 dólares convertidos a yenes sería:
    const valueInEuro = 3.5 / 1.07;

    // Convertimos este valor a yenes y redondeamos hacia abajo
    const expected = Math.floor((valueInEuro * 156.5) * 100) / 100;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(expected);
})

test("One euro should be 0.87 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(3.5);

    // Si 1 yen es equivalente a 156.5 euros, entonces 3.5 dólares convertidos a pound sería:
    const valueInEuro = 3.5 / 156.5;

    // Convertimos este valor a pound y redondeamos hacia abajo
    const expected = Math.floor((valueInEuro * 0.87) * 100) / 100;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(expected);
})