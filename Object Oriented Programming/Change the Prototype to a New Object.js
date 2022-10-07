//Change the Prototype to a New Object

/*Codigo original
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
*/

//Codigo bueno
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function() {
      console.log("I am eating");
    },
    describe: function() {
      console.log("I am a dog and I am eating my food");
    }
  };