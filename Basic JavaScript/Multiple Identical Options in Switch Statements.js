//Multiple Identical Options in Switch Statements

/*Codigo original
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
*/

//Codigo bueno
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);
  sequentialSizes(2);
  sequentialSizes(3);
  sequentialSizes(4);
  sequentialSizes(5);
  sequentialSizes(6);
  sequentialSizes(7);
  sequentialSizes(8);
  sequentialSizes(9);