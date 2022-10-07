//Testing Objects for Properties

/*Codigo original
function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}
*/

//Codigo bueno
function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
  }