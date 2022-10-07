//Practice comparing different values

/*Codigo original
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
*/

//Codigo bueno
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  compareEquality(20, "20");