const readline = require("readline");

// Setup input system
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the question
rl.question("Guess a number (1-100): ", (answer) => {
  
  const guess = Number(answer);               // convert input
  const random = Math.floor(Math.random() * 100) + 1;  // random number

  if (guess === random) {
    console.log("🎉 Correct guess!");
  } else {
    console.log(`❌ Wrong! The number was ${random}`);
  }

  rl.close();
});
