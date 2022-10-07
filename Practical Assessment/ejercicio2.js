//Ejercicio 2
//Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];

function onlyNumber(arr) {
   const onlyNumber = arr.filter(num => Number(num));
   return onlyNumber; 
}

console.log(onlyNumber(arrDirty));

