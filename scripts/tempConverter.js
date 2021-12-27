const tempInCelcius = 25;
const celciusToFahrenheit = (tempInCelcius * 9/5) + 32;
const tempInFahrenheit = 90;
const fahrenheitToCelsius = 5/9 * (tempInFahrenheit - 32);

console.log("25°C is "+ celciusToFahrenheit + "°F");
console.log("90°F is "+ fahrenheitToCelsius + "°C");