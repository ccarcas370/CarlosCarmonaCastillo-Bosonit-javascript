//Understand Where an Object’s Prototype Comes From

/*Codigo original
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
*/

//Codigo bueno
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  Dog.prototype.isPrototypeOf(beagle);