// Write a JavaScript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array.

const lastArrElement = (arr, n) => {
  if (arr == null) {
    // The void keyword in JavaScript, is used to evaluate an expression which does not return any value.
    return void 0;
  }
  if (n == null) {
    return arr[arr.length - 1];
  }
  // console.log(arr[arr.length-1]);
  // The slice() method returns selected elements in an array, as a new array.
  // The slice() method selects from a given start, up to a (not inclusive) given end.
  // Syntax :array.slice(start, end)
  return arr.slice(Math.max(arr.length - n, 0));
};

console.log(lastArrElement([7, 9, 0, -2]));
console.log(lastArrElement([7, 9, 0, -2], 3));
console.log(lastArrElement([7, 9, 0, -2], 6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]
