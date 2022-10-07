//Understand the Constructor Property

/*Codigo original
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}
*/

//Codigo bueno
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }