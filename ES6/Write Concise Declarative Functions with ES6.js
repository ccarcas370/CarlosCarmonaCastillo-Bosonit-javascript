//Write Concise Declarative Functions with ES6

/*Codigo original
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
*/

//Codigo bueno
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
      return this.gear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);