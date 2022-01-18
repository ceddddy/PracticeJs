let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627
//const joinedArr = [...arr_1, ...arr_2];
//console.log(joinedArr);

const sumOfArrays = (a, b) => {
  let sum = 0;
  for (i = 0; i < a.length && i < b.length; i++) {
    sum += a[i] + b[i];
    console.log(sum, i, a[i], b[i]);
    
  }
return sum;

}

console.log(sumOfArrays(arr_1, arr_2));