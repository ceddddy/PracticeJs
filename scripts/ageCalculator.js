//EXERCISE 2 ,THE AGE CALCULATOR
// My variables

let birthYear = 1995;
let futureYear = 2025;
let firstPossibleAge = futureYear  - birthYear;
let secondPossibleAge = futureYear - birthYear-1;

//logging to the console

console.log("I will be either  " + firstPossibleAge + " or " +secondPossibleAge + " in 2025.");

//____________________END___________________________________

function calculateDogAge(age){
  const dogYear =age * 7;
  console.log("Your doggie is " + dogYear + " years old in dog years!")

}
  
calculateDogAge(4);


