// Given two variables a and b, swap them without using a third variable.

// let a = 5;
// let b = 10;

// a = a + b;
// b = a - b;
// a = a - b

// console.log(a); // 10
// console.log(b); // 5

// Given a number, find the sum of its digits.
// Example: 123 => 1 + 2 + 3 = 6

// let num = 124;
// let sum = 0;

// while (num > 0) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(sum); // 6


// Count how many times the letter 'a' appears in a string (case-insensitive).
let str = "JavaScript is Amazing!";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === 'a') {
    count++;
  }
}

console.log(count); // Output: 4

