//Check For The Presence of an Element With indexOf()

/*Codigo original
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
*/

//Codigo bueno
function quickCheck(arr, elem) {
    // Only change code below this line
    var position;
    position = arr.indexOf(elem);
    if (position >= 0) {
      return true;
    } else {
      return false;
    }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
  console.log(quickCheck(['onions', 'squash', 'shallots'], 'onions'));
  console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));
  console.log(quickCheck([true, false, false], undefined));