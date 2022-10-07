//Ejercicio 6
/* Crea una función que redondee un número float a un número específico de
decimales.
La función debe tener dos parámetros:
● Primer parámetro es un número float con x decimales
● Según parámetro es un int que indique el número de decimales al que redondear
● Evitar usar el método toFixed()
*/

function roundTo(number, cantDecimal) {
    let cont = 1;
    let numDecimal = 10;
    while (cantDecimal > cont && cantDecimal > 1) {
        numDecimal = numDecimal * 10;
        cont++;
    }

    return  Math.round(number * numDecimal) / numDecimal;
}

const roundedResult = roundTo(2.123, 2);

console.log(roundedResult);
console.log(roundTo(1.123456789, 6));
