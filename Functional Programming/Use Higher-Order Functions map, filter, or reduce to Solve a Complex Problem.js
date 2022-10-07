//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

/*Codigo original
const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

*/

//Codigo bueno
const squareList = arr => {
    // Only change code below this line
    return arr
    .filter (num => num > 0 && num % parseInt(num) === 0)
    .map (num => Math.pow(num, 2));
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  
  const squaredIntegers2 = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  console.log(squaredIntegers2);
  
  const squaredIntegers3 = squareList([-3.7, -5.3, 10, 12.5, 7, -4.5, -17, 0.3]);
  console.log(squaredIntegers3);