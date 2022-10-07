//Combine an Array into a String Using the join Method

/*Codigo original
function sentensify(str) {
  // Only change code below this line

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
*/

//Codigo bueno
function sentensify(str) {
    // Only change code below this line
    return str.split(/\W/).join(" ");
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));
  console.log(sentensify("The.force.is.strong.with.this.one"));
  console.log(sentensify("The.force.is.strong.with.this.one"));