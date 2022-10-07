//Comparisons with the Logical And Operator

/*Codigo original
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
*/

//Codigo bueno
function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val >= 25 && val <= 50) {
        return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(0);
  testLogicalAnd(24);
  testLogicalAnd(25);
  testLogicalAnd(30);
  testLogicalAnd(50);
  testLogicalAnd(51);
  testLogicalAnd(75);
  testLogicalAnd(80);