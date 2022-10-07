//Apply Functional Programming to Convert Strings to URL Slugs

/*Codigo original
// Only change code below this line
function urlSlug(title) {

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
*/

//Codigo bueno
// Only change code below this line
function urlSlug(title) {
    return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-")
  }
  // Only change code above this line
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
  console.log(urlSlug(" Winter Is  Coming"));
  console.log(urlSlug("Hold The Door"));