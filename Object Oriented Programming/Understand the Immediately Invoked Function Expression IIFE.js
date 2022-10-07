//Understand the Immediately Invoked Function Expression (IIFE)

/*Codigo original
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
*/

//Codigo bueno
(function () {
    console.log("A cozy nest is ready");
  }) ();