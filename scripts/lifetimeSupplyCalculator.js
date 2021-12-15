//my variables

const currentAge = 26;
const maxAge = 100;
const amntPerDay = 10000;

const totalAmntNeeded = (maxAge - currentAge) * 365 * amntPerDay; 
const finalVerdict = `You will need ${totalAmntNeeded} to last you until the ripe old age of ${maxAge}.`;
//logging to the console
console.log(finalVerdict);