const Products = {
  Apples: 5.00,
  Grapes: 25.00,
  Vegetables: 15.00

}

//console.log(Object.values(Products));
//console.log(Object.keys(Products));
//const calculateTotal = (cart) => {
//  const total = cart 
//}


/*const cashRegister = (cart) => {
for (i = 0; i < Products.length; i ++){
  let totalPrice = i + Products.keys;
  console.log(totalPrice);
}
}

cashRegister(Products);*///

//const values = Object.values(Products).reduce


function cashRegister() {
let sum = 0;
for (let price of Object.values(Products)) {
  sum += price;
}
console.log(sum);
}
cashRegister(Products);