//Ejercicio 11

/*
Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
La función debe tener dos parámetros:
● El primer parámetro es el array entero que se quiere dividir.
● El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.
*/

function splitArrayIntoChunks(arr, size) {
    let newArr = [];
    for (let i = 0; i <= arr.length; i+= size)
    newArr.push(arr.slice(i, i + size));
    return newArr;
  }

  const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 2);
  console.log(result);