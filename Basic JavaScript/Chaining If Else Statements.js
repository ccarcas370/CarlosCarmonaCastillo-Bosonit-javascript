//Chaining If Else Statements

/*Codigo original
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);
*/

//Codigo bueno
function testSize(num) {
    // Only change code below this line
    if (num < 5) {
      return "Tiny";
    } else if (num < 10) {
      return "Small";
    } else if (num < 15) {
      return "Medium";
    } else if (num < 20) {
      return "Large";
    } else {
      return "Huge";
    }
    // Only change code above this line
  }
  
  testSize(0);
  testSize(4);
  testSize(5);
  testSize(8);
  testSize(10);
  testSize(14);
  testSize(15);
  testSize(17);
  testSize(20);
  testSize(25);