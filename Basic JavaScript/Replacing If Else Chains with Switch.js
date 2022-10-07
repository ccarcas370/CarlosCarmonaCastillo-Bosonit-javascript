//Replacing If Else Chains with Switch

/*Codigo original
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
*/

//Codigo bueno
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val){
      case 1:
        answer = "There is no #1";
        break;
      case 7:
        answer = "Ate Nine";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case "bob":
        answer = "Marley";
        break;
      default:
        answer;
    }
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch("bob");
  chainToSwitch(42);
  chainToSwitch(1);
  chainToSwitch(99);
  chainToSwitch(7);
  chainToSwitch("John");
  chainToSwitch(156);