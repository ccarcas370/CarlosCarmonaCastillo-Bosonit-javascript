//Use Prototype Properties to Reduce Duplicate Code

/*Codigo original
function Dog(name) {
  this.name = name;
}

// Only change code above this line
let beagle = new Dog("Snoopy");
*/

//Codigo bueno
function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");
  console.log(beagle.name);
  console.log(beagle.numLegs);