//Pass Arguments to Avoid External Dependence in a Function

/*Codigo original
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {

  // Only change code above this line
}
*/

//Codigo bueno
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValue) {
  return fixedValue + 1;
  // Only change code above this line
}