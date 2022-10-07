//Remove Elements from an Array Using slice Instead of splice

/*Codigo original
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
*/

//Codigo bueno
function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0, 3);
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  
  console.log(nonMutatingSplice(inputCities));