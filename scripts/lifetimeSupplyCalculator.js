//my variables

const currentAge = 26;
const maxAge = 100;
const amntPerDay = 10000;

const totalAmntNeeded = (maxAge - currentAge) * 365 * amntPerDay;
const finalVerdict = `You will need ${totalAmntNeeded} to last you until the ripe old age of ${maxAge}.`;
//logging to the console
console.log(finalVerdict);

// calculate supply function

function calculateSupply(age, amntPerDay) {
  const maximumAge = 100;
  const amntConsumed = (maximumAge - age) * (amntPerDay * 365);
  console.log("You will need R" + amntConsumed + " to last you until the ripe old age of " + age + ".")
}

calculateSupply(20, 10);
calculateSupply(25, 15);
calculateSupply(30, 12);