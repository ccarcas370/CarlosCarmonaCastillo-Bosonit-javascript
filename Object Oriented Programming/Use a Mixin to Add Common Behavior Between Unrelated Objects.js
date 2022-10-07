//Use a Mixin to Add Common Behavior Between Unrelated Objects

/*Codigo original
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
*/

//Codigo bueno
let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Flying, wooosh!");
    }
  }
  
  let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  glideMixin(bird);
  glideMixin(boat);
  // Only change code below this line