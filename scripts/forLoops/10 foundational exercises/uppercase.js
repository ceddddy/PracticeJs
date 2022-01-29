let orgString = "javascript";

let newString = orgString.split("")
  .map((individualLetter, indexOfLetter) => (indexOfLetter % 2 != 0) ? individualLetter.toUpperCase() : individualLetter)
  .join("");


 console.log(newString);


