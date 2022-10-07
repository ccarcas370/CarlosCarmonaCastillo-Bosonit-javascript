//Create a Method on an Object

/*Codigo original
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
*/

//Codigo bueno
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs." ;}
  };
  dog.sayLegs();