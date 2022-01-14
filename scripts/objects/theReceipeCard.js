const myReceipe = {

  title: "fish receipe",
  servings: 4,
  ingredients: ["fish spice","tomatoes", "onions","fish"]
}


console.log(`. ${myReceipe.title}`);
console.log(`. serves ${myReceipe.servings}`);
console.log(`. Ingredients:`);




for (var i = 0; i < myReceipe.ingredients.length; i++) {
  console.log(`. ${myReceipe.ingredients[i]}`);
}


//console.log(myReceipe.ingredients[2]);