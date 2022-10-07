//Combine Arrays with the Spread Operator

/*Codigo original
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());
*/

//Codigo bueno
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());