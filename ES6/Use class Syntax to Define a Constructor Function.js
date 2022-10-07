//Use class Syntax to Define a Constructor Function

/*Codigo original
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
*/

//Codigo bueno
// Only change code below this line
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'