//Comparison with the Strict Inequality Operator

/*Codigo original
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
*/

//Cogido bueno
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(17);
  testStrictNotEqual("17");
  testStrictNotEqual(12);
  testStrictNotEqual("bob");
