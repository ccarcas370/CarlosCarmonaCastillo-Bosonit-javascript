//Avoid Mutations and Side Effects Using Functional Programming

/*Codigo original
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line

  // Only change code above this line
}
*/

//Codigo bueno
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  let result = 1 + fixedValue;
  return result;
  // Only change code above this line
}