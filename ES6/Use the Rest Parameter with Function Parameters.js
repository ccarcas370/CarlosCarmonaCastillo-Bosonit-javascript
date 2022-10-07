//Use the Rest Parameter with Function Parameters

/*Codigo original
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
*/

//Codigo bueno
const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(0, 1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(5));
console.log(sum());