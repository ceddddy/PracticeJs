function even(num) {

  let evenNums = [];
  for (i = 0; i < num; i++) {
    if (i % 2 === 0) {
      evenNums.push(i);
    }
  }
  return evenNums;
}
console.log(even(65));