//Comparison with the Strict Equality Operator

/*Codigo original
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
*/

//Codigo bueno
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  testStrict(7);
  testStrict("7");