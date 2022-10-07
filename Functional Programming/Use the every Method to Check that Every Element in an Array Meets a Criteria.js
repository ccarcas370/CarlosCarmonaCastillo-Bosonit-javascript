//Use the every Method to Check that Every Element in an Array Meets a Criteria

/*Codigo original
function checkPositive(arr) {
  // Only change code below this line

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
*/

//Codigo bueno
function checkPositive(arr) {
    // Only change code below this line
    return arr.every(function(checked) {
      return checked >= 0;
    });
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));
  console.log(checkPositive([1, 2, 3, 4, 5]));
  console.log(checkPositive([1, -2, 3, -4, 5]));