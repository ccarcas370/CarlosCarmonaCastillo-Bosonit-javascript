//Refactor Global Variables Out of Functions

/*Codigo original
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}
*/

//Codigo bueno
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;

}

// Change code below this line
function remove(arr, bookName) {
  let newArr = [...arr];
  const newArr_index = newArr.indexOf(bookName);
  if (newArr_index >= 0) {

    newArr.splice(newArr_index, 1);
    return newArr;
    // Change code above this line
    }
}
