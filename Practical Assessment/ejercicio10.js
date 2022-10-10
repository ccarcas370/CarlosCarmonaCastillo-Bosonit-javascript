//Ejercicio 10

/*Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
*/

function removeHTMLTags(str) {
    str = str.replace(/<[^>]+>/g, '');
    return str;
}

const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');

console.log(result); // lorem ipsum
