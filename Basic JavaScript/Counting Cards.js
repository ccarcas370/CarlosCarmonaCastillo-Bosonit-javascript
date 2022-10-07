//Counting Cards

/*Codigo original
let count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
*/

//Codigo bueno
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count = count + 1;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count = count - 1;
      break;
  }

  if (count <= 0) {
    return count + " Hold";
  } else if (count > 0) {
    return count + " Bet";
  }
  
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
cc(7); cc(8); cc(9);
cc(10); cc('J'); cc('Q'); cc('K'), cc('A');
cc(3); cc(7); cc('Q'); cc(8); cc('A');
cc(2); cc('J'); cc(9); cc(2); cc(7);
cc(2); cc(2); cc(10);
cc(3); cc(2); cc('A'); cc(10); cc('K');