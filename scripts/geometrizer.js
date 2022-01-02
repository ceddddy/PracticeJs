//My variables

const radius = 25;
const area = Math.PI * (radius*radius) ;
const circumference = (radius*2) * Math.PI;
const circleCircumference = "The circumference is " + circumference + ".";

//Logging to the console
console.log(circleCircumference);
console.log("The area is " + area);
//THE GEOMETRIZER FUNCTIONS

//circumference function

function calcCircumference(radius) {
  const circumferenz = (radius*2) * Math.PI;
  console.log("The circumference is " + circumferenz + ".");
}

calcCircumference(50);


//area function

function calcArea(radius) {
  const area$ = Math.PI * (radius*radius) ;
  console.log("The area is " + area$)
}

calcArea(50);