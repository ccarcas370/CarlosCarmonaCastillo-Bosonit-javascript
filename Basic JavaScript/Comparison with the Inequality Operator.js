//Comparison with the Inequality Operator

/*Codigo original
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
*/

//Codigo bueno
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
  testNotEqual(99);
  testNotEqual("99");
  testNotEqual("12");
  testNotEqual("bob");