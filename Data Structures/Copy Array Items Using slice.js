//Copy Array Items Using slice()

/*Codigo original

*/

//Codigo bueno
function forecast(arr) {
    // Only change code below this line
    let arr2 = arr.slice(2, 4);
    return arr2;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));