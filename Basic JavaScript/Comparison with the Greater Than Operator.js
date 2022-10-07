//Comparison with the Greater Than Operator

/*Codigo original
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
*/

//Codigo bueno
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(0);
  testGreaterThan(10);
  testGreaterThan(11);
  testGreaterThan(99);
  testGreaterThan(100);
  testGreaterThan(101);
  testGreaterThan(150);