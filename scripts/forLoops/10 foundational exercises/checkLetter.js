//Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

// function containsLetter(str) {
//   if (str.includes("y")) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
function containsLetter(str) {
  (str.includes("y")) ? console.log("Yes") : console.log("No");
}

containsLetter("don’t know why");
containsLetter("do it all");
containsLetter("DON'T KNOW WHY");
