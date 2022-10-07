//Introduction to Currying and Partial Application

/*Codigo original
function add(x) {
  // Only change code below this line

  // Only change code above this line
}

add(10)(20)(30);
*/

//Codigo bueno
function add(x) {
    // Only change code below this line
    return y => z => x + y + z;
    // Only change code above this line
  }
  
  console.log(add(1)(2)(3));
  console.log(add(10)(20)(30));
  console.log(add(11)(22)(33));