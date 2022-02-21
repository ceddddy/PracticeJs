// check if input is array
const isArray = (input) => {
  if (toString.call(input) == "[object Array]") {
    return true;
  }
  return false;
};

console.log(isArray("my string"));
console.log(isArray(90));
console.log(isArray(["m", "y", "s", "t", "r", "i", "n", "g"]));
console.log(isArray([1, 2, 3, 4, 5]));
console.log(isArray([]));
console.log(isArray(new Array));
