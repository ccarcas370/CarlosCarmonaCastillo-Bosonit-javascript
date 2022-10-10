//Ejercicio 8

/*Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
● Primer parámetro debe ser el número de bytes
● Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.
*/

function fromBytesToFormattedSizeUnits(x, a) {
    a = (typeof a !== 'undefined') ? a : 3;
    let position = Math.floor(Math.log(Math.abs(x)) / Math.log(1024));
    let format = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    return (x / Math.pow(1024, position)).toPrecision(a) * 1 + ' ' + format[position];
}


const result = fromBytesToFormattedSizeUnits(1000);
console.log(result);

const result1 = fromBytesToFormattedSizeUnits(1024);
console.log(result1);

const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2);

const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3);
