//Return a Sorted Array Without Changing the Original Array

/*Codigo original
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

  // Only change code above this line
}

nonMutatingSort(globalArray);
*/

//Codigo bueno
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  arr = [...arr];
  return arr.sort(function (a, b) {
    return a - b;
  });
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));

console.log(nonMutatingSort([1, 30, 4, 21, 100000]));
console.log(nonMutatingSort([140000, 104, 99]));