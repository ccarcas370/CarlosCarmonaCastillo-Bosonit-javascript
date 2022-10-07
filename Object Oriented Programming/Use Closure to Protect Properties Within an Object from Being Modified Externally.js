//Use Closure to Protect Properties Within an Object from Being Modified Externally

/*Codigo original
function Bird() {
  this.weight = 15;
}
*/

//Codigo bueno
function Bird() {
    let weight = 15;
    this.getWeight = function() {
      return weight;
    }
  }