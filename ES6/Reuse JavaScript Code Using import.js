//Reuse JavaScript Code Using import

/*Codigo original
  
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
*/

//Codigo bueno
import { uppercaseString, lowercaseString } from './string_functions.js' ;
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");