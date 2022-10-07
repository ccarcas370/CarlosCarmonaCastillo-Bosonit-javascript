//Remove Items Using splice()

/*Codigo original
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
*/

//Codigo bueno
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.shift();
arr.splice(3, 4);
// Only change code above this line
console.log(arr);