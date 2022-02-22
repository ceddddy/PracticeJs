//clonning an array

const cloneArray = (array) => {
return array.slice(0);
}

console.log(cloneArray([1, 2, 3, 4]));
console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1 ,2, [4, 0]]));