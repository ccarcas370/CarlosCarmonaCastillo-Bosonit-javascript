//Ejercicio 9
/* Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
*/

function toLowercaseKeys(obj) {
    return Object.keys(obj).reduce((value, key) => {
        value[key.toLowerCase()] = obj[key];
        return value;
    }, {});
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); 