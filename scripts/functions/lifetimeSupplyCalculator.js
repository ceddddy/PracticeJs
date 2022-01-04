// calculate supply function

function calculateSupply(age, amntPerDay) {
  const maximumAge = 100;
  const amntConsumed = (maximumAge - age) * (amntPerDay * 365);
  console.log("You will need R" + amntConsumed + " to last you until the ripe old age of " + age + ".")
}

calculateSupply(20, 10);
calculateSupply(25, 15);
calculateSupply(30, 12);