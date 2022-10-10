//Ejercicio 7
/* Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
La fundación debe tener dos parámetros:
● Primer parámetro es un objeto con x número de campos y valores
● Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro
*/
/*
 function returnFalsyValues(obj, x) {
   let a = (typeof x !== 'undefined') ? x : x;
    for (let key in obj) {
        if(typeof(obj[key]) === a) {
           delete obj[key];
        }
    }
      return obj;
} 
*/

function returnFalsyValues(obj, a) { 
  return x(obj, a); 
}

function x(obj, a) {
  let c = a + '';
  c = c.slice(18);
  c = c.replace("'", ' ');
  c = c.replace("'", ' ');
  c = c.trim();
  let b = (typeof c !== 'undefined') ? c : c;

  for (let key in obj) {
    if(typeof(obj[key]) === b) {
      delete obj[key];
    }
  }

  return obj;
}

const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string');
//const result = returnFalsyValues({ a: 1, b: '2', c: 3, d: true, e: 5, f: 7, g: 'e', h: false }, x => typeof x === 'number');
console.log(result);
