//Understanding Undefined Value returned from a Function

/*Codigo original
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
*/

//Codigo bueno
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();