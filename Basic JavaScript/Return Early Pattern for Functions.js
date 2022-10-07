//Return Early Pattern for Functions

/*Codigo original
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
*/

//Codigo bueno
// Setup
function abTest(a, b) {
    // Only change code below this line
    if(a < 0 || b < 0){
      return undefined;
    }
  
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);
  abTest(-2,2);
  abTest(2,-2);
  abTest(2, 8);
  abTest(3, 3);
  abTest(0, 0);