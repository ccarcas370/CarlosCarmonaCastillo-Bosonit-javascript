//Iterate Over All Properties

/*Codigo original
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
*/

//Codigo bueno
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  for (let prototype in beagle) {
    if(beagle.hasOwnProperty(prototype)) {
      ownProps.push(prototype);
    } else {
      prototypeProps.push(prototype);
    }
  }