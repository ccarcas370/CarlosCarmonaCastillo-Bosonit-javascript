//Use * to Import Everything from a File

/*Codigo original
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
*/

//Codigo bueno
import * as stringFunctions from './string_functions.js'
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");