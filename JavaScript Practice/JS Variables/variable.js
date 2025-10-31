const readline = require("readline");

// ! A variable is like a container that stores data (like numbers, text, or arrays).
// ! In JavaScript, we use 3 keywords to declare variables:

var x = 10;
let j = 20;
const l = 30;
console.log(x, j, l);

// ?Note: Always prefer let and const — var is outdated and risky due to hoisting issues.

// * DSA Problem:
// *Stores your name, country, and favorite programming language in variables.

let name = "Meraj Uddin";
let country = "Pakistan";
let favProgrammingLanguage = "JavaScript";

console.log(
  `Hi I am ${name} from ${country}, and I love coding in ${favProgrammingLanguage}.`
);

//* Step 4: DSA Logic Warmup
//* Problem:
//* Write a program that takes 3 numbers and prints the largest one.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter First Number: ", (num1) => {
  rl.question("Enter Second Number: ", (num2) => {
    rl.question("Enter Third Number: ", (num3) => {
      //* Convert String Input To Num
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      num3 = parseFloat(num3);

      //* Find Largest One
      // const largest = Math.max(num1, num2, num3); //! Try This Way (Option 1)
      const numbers = [num1, num2, num3]; //! Try This Way (Option 2)
      const largest = Math.max(...numbers);

      // let largest   // ! Try This Way (Option 3)
      //   if (num1 >= num2 && num1 >= num3) { 
      //     largest = num1;
      //   } else if (num2 >= num1 && num2 >= num3) {
      //     largest = num2;
      //   } else if (num3 >= num1 && num3 >= num2) {
      //     largest = num3;
      //   }

      console.log(`The largest number is: ${largest}`);

      rl.close(); // Close the input interface
    });
  });
});
