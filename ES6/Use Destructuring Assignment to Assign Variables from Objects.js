//Use Destructuring Assignment to Assign Variables from Objects

/*Codigo original
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line
*/

//Codigo bueno
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const {today: highToday} = HIGH_TEMPERATURES;
  const {tomorrow: highTomorrow}  = HIGH_TEMPERATURES; 
  
  // Only change code above this line