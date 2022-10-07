//Write Concise Object Literal Declarations Using Object Property Shorthand

/*Codigo original
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
*/

//Codigo bueno
const createPerson = (name, age, gender) => ({
    // Only change code below this line
     name, age, gender
    // Only change code above this line
  });