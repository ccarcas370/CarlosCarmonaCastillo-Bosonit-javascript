//Comparison with the Equality Operator

/*Codigo original
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
*/

//Codigo bueno
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  testEqual(12);
  testEqual("12");