//Loops are used to repeat a block of code multiple times. There are different types of loops in JavaScript, including for loops, while loops, and do...while loops.

// For Loop: (initialization; condition; increment/decrement)
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// In this example, the for loop initializes the variable i to 1, checks if i is less than or equal to 5, and increments i by 1 after each iteration. It prints the numbers 1 to 5 to the console.

// While Loop:
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}
// In this example, the while loop checks if j is less than or equal to 5. If it is true, it executes the code block and prints the value of j to the console, then increments j by 1. It continues this process until the condition is false.

// Do...While Loop:
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);
// In this example, the do...while loop executes the code block first and then checks the condition. It prints the value of k to the console and increments k by 1. It continues this process until the condition is false.

// Nested Loops:
for (let m = 1; m <= 3; m++) {
  for (let n = 1; n <= 3; n++) {
    console.log(`m: ${m}, n: ${n}`);
  }
}
// In this example, we have a nested loop where the outer loop runs 3 times and for each iteration of the outer loop, the inner loop also runs 3 times. It prints the values of m and n to the console, resulting in a total of 9 iterations.

// For-In Loop:
const person = { name: 'John', age: 30, city: 'New York' };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// In this example, the for-in loop iterates over the properties of the person object. It prints each key and its corresponding value to the console.

// For-Of Loop:
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}
// In this example, the for-of loop iterates over the elements of the numbers array. It prints each number to the console.


