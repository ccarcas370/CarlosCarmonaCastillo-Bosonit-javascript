//Use Recursion to Create a Countdown

// Only change code below this line
function countdown(n){
    if (n > 0) {
      const countArray = countdown (n - 1);
      countArray.unshift(n);
      return countArray;
    } else {
        return [];
    }
  }
  // Only change code above this line
  console.log(countdown(-1));
  console.log(countdown(10));
  console.log(countdown(5));