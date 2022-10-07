//Combine Two Arrays Using the concat Method

/*Codigo original
function nonMutatingConcat(original, attach) {
  // Only change code below this line
  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
*/

//Codigo bueno
function nonMutatingConcat(original, attach) {
    // Only change code below this line
    return original.concat(attach);
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  
  console.log(nonMutatingConcat(first, second));