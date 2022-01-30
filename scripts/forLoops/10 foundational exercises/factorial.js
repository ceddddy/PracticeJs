//Given a number n Calculate the factorial of the number
const factorial = (n) => {
  if (n < 0) {
    throw 'factorial error on a negative number!';
  }
  let r = 1;
  while (n) {
    r = r * n--;
  }
  console.log(r);
  return r;
}

factorial(7);
factorial(100);
factorial(170);