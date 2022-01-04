function squareNumber(num) {
  const squaredResult = num ** 2;//num * num
  console.log("The result of squaring the number " + num + " is " + squaredResult);
  return squaredResult;
  
}

squareNumber(5);

// function diving a number by half

function halfNumber(num) {
  const halfNum = num / 2;
  console.log("Half of " + num + " is " + halfNum);
  return halfNum;
}

halfNumber(10);

// function that checks the percentage of the first number

function percentOf(num1,num2) {
  const percent$ = (num1 / num2) * 100;
  console.log({num1, num2, percent$});
  console.log(num1 + " is " + percent$ + "% of " + num2) 
  return percent$;
}
percentOf(20 , 100);

//function that calculates the area of a circle

function areaOfCircle(radius) {
  const area$ = Math.PI * (radius * radius);//Math.PI * squareNumber(radius);
  console.log("The area of circle with radius " + radius + " is " + area$.toFixed(2));
  return area$;
}
areaOfCircle(50).toFixed(2);

function allInOne(num) {
  const half$$ = halfNumber(num);
  const squaredNum$ = squareNumber(half$$);
  const area$$ = areaOfCircle(squaredNum$);
  percentOf(squaredNum$,area$$);
}

allInOne(10);