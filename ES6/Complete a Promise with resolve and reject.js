//Complete a Promise with resolve and reject

/*Codigo original
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});
*/

//Codigo bueno
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");// Change this line
    } else {  
      reject("Data not received");// Change this line
    }
  });