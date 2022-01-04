// TEMPERATURE CONVERTER FUNCTIONS

//celsius to fahrenheit function

function celsiusToFahrenheit$(celsius) {

  const celciusToFahrenheit$$ = (celsius * 9/5) + 32;
  console.log( celsius + " °C is " + celciusToFahrenheit$$ + "°F");
  }
  
  celsiusToFahrenheit$(25);
  
  
  //fahrenheit to celcius function
  
  function fahrenheitToCelsius$$(fahrenheit) {
    const fahrenheitToCelsius$ = 5/9 * (fahrenheit - 32);
    console.log(fahrenheit + "°F is " + fahrenheitToCelsius$ + "°C");
  }
  
  fahrenheitToCelsius$$(90);
  