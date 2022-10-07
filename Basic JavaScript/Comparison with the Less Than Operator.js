//Comparison with the Less Than Operator

/*Codigo original
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
*/

//Codigo bueno
function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(0)
  testLessThan(24);
  testLessThan(25);
  testLessThan(54);
  testLessThan(55);
  testLessThan(99);