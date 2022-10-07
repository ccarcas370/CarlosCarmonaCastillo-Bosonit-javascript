//Iterate Through All an Array's Items Using For Loops

/*Codigo original
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
*/

//Codigo bueno
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1){
        newArr.push(arr[i]);
      } 
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
  console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
  console.log(filteredArray([["amy", "bet", "sam"], ["dave", "sean", "peter"]], "peter"));
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));