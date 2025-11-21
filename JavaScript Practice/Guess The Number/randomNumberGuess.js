const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Guess a number between 1 and 100: ", (input) => {
  const userGuess = parseInt(input);
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100

  if (userGuess === randomNumber) {     
    console.log("Congratulations! You guessed the correct number!");
  } else {
    console.log(`Sorry, the correct number was ${randomNumber}. Better luck next time!`);
  }
    rl.close();
});
