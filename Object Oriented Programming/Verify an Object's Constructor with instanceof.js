//Verify an Object's Constructor with instanceof

/*Codigo original
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
*/

//Codigo bueno
let House = function (numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(3);
  
  myHouse instanceof House;