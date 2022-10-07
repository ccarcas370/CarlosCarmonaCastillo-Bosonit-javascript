//Handle a Fulfilled Promise with then

/*Codigo original
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
*/

//Codigo bueno
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
      makeServerRequest.then(result => {
        console.log(result);
      });
    } else {  
      reject("Data not received");
    }
  });