//Split a String into an Array Using the split Method

/*Codigo original
function splitify(str) {
  // Only change code below this line

  // Only change code above this line
}

splitify("Hello World,I-am code");
*/

//Codigo bueno
function splitify(str) {
    // Only change code below this line
    let newStr;
    return newStr = str.split(/\W/);
    // Only change code above this line
  }
  
  console.log(splitify("Hello World,I-am code"));
  console.log(splitify("Earth-is-our home"));
  console.log(splitify("This.is.a-sentence"));