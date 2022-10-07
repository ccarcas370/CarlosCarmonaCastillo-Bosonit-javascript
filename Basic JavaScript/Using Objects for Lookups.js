//Using Objects for Lookups

/*Codigo original
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
*/

//Codigo bueno
// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const world = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank"
    };
  
    return world[val];
  
    // Only change code above this line
  }
  
  phoneticLookup("charlie");