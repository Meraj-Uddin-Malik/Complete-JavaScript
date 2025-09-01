console.log(
  `A for loop is a control structure used to repeat a block of code a specific number of times. 
  In JavaScript, it has three main parts: initialization, condition, and increment/decrement. 
  The loop runs as long as the condition is true.`
);

// Syntax Example:
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs numbers from 0 to 4
}

// A1
for (let i = 0; i < 11; i++) {
  console.log(i);
}

console.log("\n");

//  A2
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// A3
for (let t = 1; t <= 10; t++) {
  console.log(`5 x ${t} = ${5 * t}`);
}

// for (let u=1; u<=10; u++){
//   console.log(`9 x ${u} = ${9*u}`);
// }

// A4
let sum = 0;
for (let sumNum = 1; sumNum <= 100; sumNum++) {
  sum += sumNum;
  console.log(`The Sum of 1 - 100 is ${sum}`);
}

// A5
for (let revNum = 10; revNum >= 1; revNum--) {
  console.log(revNum);
}

// A6
for (let sqrtNum = 1; sqrtNum <= 10; sqrtNum++) {
  let squareRoot = Math.sqrt(sqrtNum);
  console.log(`The square root of ${sqrtNum} is ${squareRoot}`);
}

// A7

for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// A8
let charStrings = "JavaScript";
for (let i = 0; i < charStrings.length; i++) {
  console.log(charStrings[i]);
}

// A9
let n = 5;   // you can change this value
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;   // factorial = factorial * i
}

console.log(`Factorial of ${n} is: ${factorial}`);

// A10
let arrEle = ["apple", "banana", "cherry"];
for (let i = 0; i < arrEle.length; i++) {
    console.log(arrEle[i]);
}