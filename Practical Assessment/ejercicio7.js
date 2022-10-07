//Ejercicio 7
/* Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
La fundación debe tener dos parámetros:
● Primer parámetro es un objeto con x número de campos y valores
● Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro
*/

function returnFalsyValues(obj, x) {

    for (let key in obj) {
        if(typeof(obj[key]) === x) {
           delete obj[key];
        }
    }
      return obj;
}

//const result = returnFalsyValues([1, '2', 3, true, 5, 7, 'e', false], 'string');
//const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, 'number');
//const result = returnFalsyValues({ a: 1, b: '2', c: 3, d: true, e: 5, f: 7, g: 'e', h: false }, x => typeof x === 'number');
const result = returnFalsyValues({ a: 1, b: '2', c: 3, d: true, e: 5, f: 7, g: 'e', h: false }, 'number');
console.log(result);