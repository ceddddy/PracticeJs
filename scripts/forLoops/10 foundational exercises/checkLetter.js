//Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

// function containsLetter(str) {
//   if (str.includes("y")) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }



// function containsLetter(str) {
//   (str.includes("y")) ? console.log("Yes") : console.log("No");
// }

// containsLetter("don’t know why");
// containsLetter("do it all");
// containsLetter("DON'T KNOW WHY");




// function containsLetter (str) {
//   const myString = str.split("");
//   for (el of myString) {
//     if (el === "y") {
//       console.log("Yes");
//       break;
//     } else {
//       console.log("No");
//       continue;
//     }
//   } 

// }

// containsLetter("don’t know why");
// containsLetter("do it all");

function withLetter(str) {
  let arrOfStr = str.split("");  //change string to array
  
  let hasY = "No";// default value return to no
  for (i = 0; i < arrOfStr.length; i++) {  //looping through the array
    if (arrOfStr[i] === "y") { //checking every index [i] of the array if it sustains the given condition 
      hasY = "Yes";  // updates y to yes
      break; //breaking the loop once the condition returns true/trminates the loop
    } 
  }
  return hasY; // return the value of hasY
}

console.log(withLetter("don’t know why"));  //logging some test cases
console.log(withLetter("the letter isnt here"));

// const withLetter = (str) => {
//   const arrOfStr = str.split('');

//   let hasY = 'No'; //defaults return to No

//   for(let i = 0; i < str.length; i++){
//       if(arrOfStr[i] === 'y'){
//           hasY = 'Yes'; // updates y to yes
//           break; // terminates the loop 
//       }
//   }

//   return hasY; // return the value of hasY
// }

// console.log(withLetter('I dont know why'));
// console.log(withLetter('the letter isnt here'));