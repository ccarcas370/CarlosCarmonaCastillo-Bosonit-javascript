//Use export to Share a Code Block

/*Codigo original
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
*/

//Codigo bueno
const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
  export {uppercaseString, lowercaseString};