//Use an IIFE to Create a Module

/*Codigo original
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
*/

//Codigo bueno
let funModule = (function () {
    return {
      isCuteMixin: function(obj) {
        obj.isCute  = function() {
         return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    }
  }) ();