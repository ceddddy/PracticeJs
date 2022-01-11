function helloWorld(str) {
  if (str == "en") {
    return "Hello World" ;
  } 
  
  if (str == "es") {
    return  "Hola Mundo" ;
  } 
  
  if (str == "de") {
    return "Hallo Welt"
  }

  return "Hello World"; 
}

console.log(helloWorld("es"));
console.log(helloWorld("en"));
console.log(helloWorld("de"));
console.log(helloWorld("nd"));