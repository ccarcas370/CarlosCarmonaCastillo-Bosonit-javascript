//Comparison with the Greater Than Or Equal To Operator

/*Codigo original
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
*/

//Codigo bueno
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(0);
  testGreaterOrEqual(10);
  testGreaterOrEqual(11);
  testGreaterOrEqual(19);
  testGreaterOrEqual(100);
  testGreaterOrEqual(21);