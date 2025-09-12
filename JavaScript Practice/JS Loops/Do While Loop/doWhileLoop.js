console.log(
  `A do...while loop in JavaScript executes a block of code at least once, and then repeats the loop as long as a specified condition is true.`
);

// Syntax Example:
// let count = 1;
// do {
//   console.log(`Count is: ${count}`);
//   count++;
// }
// while (count <= 5);
// console.log("The loop has ended.");

//* A1

let count = 1; // Initialize count
do {
  console.log(`Count is: ${count}`);
  count++;
} while (count <= 10);

//* A2

let number = 0; // Initialize number
do {
  console.log(`The number is: ${number}`);
  number += 2; // Increment by 2
} while (number <= 20);

//* A3
let i = 1; // Initialize i
do {
  console.log(`5 x ${i} = ${5 * i}`);
  i++;
} while (i <= 10);

//* A4
let downWardCounting = 100; // Initialize downWard
do {
  console.log(`Current value of downWard: ${downWardCounting}`);
  downWardCounting--;
} while (downWardCounting >= 1); // Continue until downWard is less than 1

//* A5
let allNumbers = 1;
sum = 0; // Initialize sum
do {
  sum += allNumbers;
  allNumbers++;
} while (allNumbers <= 50);
console.log(`The sum of all numbers is: ${sum}`);

//* A6
let oddNumber = 1; // Initialize oddNumber
do {
  console.log(`The odd number is: ${oddNumber}`);
  oddNumber += 2; // Increment by 2 to get the next odd number
} while (oddNumber <= 30);

//* A7
let squareNum = 1; // Initialize squareNum
do {
  console.log(`The square of ${squareNum} is: ${Math.pow(squareNum, 2)}`);
  squareNum++;
} while (squareNum <= 10);

//* A8
let divisibleByThree = 3; // Initialize divisibleByThree
do {
  if (divisibleByThree % 3 === 0) {
    console.log(`The number divisible by 3 is: ${divisibleByThree}`);
  }
  divisibleByThree++;
} while (divisibleByThree <= 30);

//* A9
let factorialNum = 1;
let num = 5;
let u = 1;
do {
  console.log(`The Factorial Num Is ${factorialNum}`);
  u *= num;
  num++;
} while (u <= num);
