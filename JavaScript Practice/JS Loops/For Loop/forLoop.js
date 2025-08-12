console.log(
  `A for loop is a control structure used to repeat a block of code a specific number of times. In JavaScript, it has three main parts: initialization, condition, and increment/decrement. The loop runs as long as the condition is true.`
);

// Syntax Example:
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs numbers from 0 to 4
}
// The initialization (`let i = 0`) sets the starting point, the condition (`i < 5`) checks if the loop should continue, and the increment (`i++`) updates the loop variable after each iteration.
// This loop will print the numbers 0 through 4 to the console.


console.log("Practice Questions for For Loops");

// 1. Print numbers from 1 to 10.
// Hint: Start from 1, end at 10, increment by 1.

for (let i = 1; i <= 10; i++) {
  console.log(i); 
}

// 2. Print all even numbers between 1 and 20.
// Hint: Use an if statement inside the loop to check if a number is even (number % 2 === 0).

for (let num = 1; num <= 20; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// 3. Print the multiplication table of 5 (from 5 x 1 to 5 x 10).
// Hint: Multiply 5 by the loop variable in each iteration.

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}


// 4. Calculate the sum of numbers from 1 to 100.
// Hint: Use a variable to keep track of the sum and add the loop variable in each iteration.

let total = 0;
for (let sum = 1; sum <= 100; sum++) {
  total += sum;
}
console.log("The sum is:", total);


// 5. Print all numbers from 10 down to 1 (reverse order).
// Hint: Start from 10, decrement the loop variable.

let rev = 10;
for (; rev >= 1; rev--) { 
  console.log(rev);
}


// 6. Print the squares of numbers from 1 to 10.
// Hint: Use Math.pow(i, 2) or i * i inside the loop.

for (let i = 1; i <= 10; i++) {
  // console.log(`Square of ${i} is ${i * i}`);
  console.log(`Square of ${i} is ${Math.pow(i, 2)}`);
}


// 7. Print all odd numbers between 1 and 20.
// Hint: Check if the number is odd (number % 2 !== 0).

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


// 8. Print each character of a string (e.g., "JavaScript") on a new line.
// Hint: Use string.length as the loop condition and access each character with string[i].

const str = "JavaScript";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
} 


// 9. Print the factorial of a given number n (e.g., n = 5).
// Hint: Multiply a result variable by the loop variable in each iteration.

const n = 5; // Change this value for different factorials
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`Factorial of ${n} is ${factorial}`);


// 10. Print the elements of an array.
// Hint: Use array.length as the loop condition and access each element with array[i].

const fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 11. Create a nested loop to print a multiplication table (1 to 10).
// Hint: Use two loops, one for the rows and one for the columns.
