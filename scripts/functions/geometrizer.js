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