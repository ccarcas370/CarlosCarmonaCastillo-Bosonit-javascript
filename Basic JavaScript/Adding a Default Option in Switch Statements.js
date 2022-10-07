//Adding a Default Option in Switch Statements

/*Codigo original
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
*/

//Codigo bueno
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case "a":
        answer = "apple";
        break;
  
      case "b":
        answer = "bird";
        break;
  
      case "c":
        answer = "cat";
        break;
  
      default:
        answer = "stuff";
        break;
    }
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff("a");
  switchOfStuff("b");
  switchOfStuff("c");
  switchOfStuff("d");
  switchOfStuff(4);