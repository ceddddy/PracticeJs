//let pin = 0704;
// Example output:
// Please make your guess: 
// 4544 
// Sorry that was wrong.
// Please make your guess: 
// 4444
// Sorry that was wrong.
// Please make your guess: 
// 0704
// That was correct!

function guessPin (num) {
  let pin = 0704;

  for (let i = 0; i < 4; i++) {
    if (num === null) {
console.log("Please make your guess:");
    } if (num !== pin) {
console.log(`Sorry that was wrong.
Please make your guess:`);
    }
  }
}
guessPin(1234);