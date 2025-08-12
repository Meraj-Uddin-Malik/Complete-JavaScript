console.log(
  `A JavaScript function is a reusable block of code designed to perform a specific task. Functions help organize code, avoid repetition, and make programs easier to maintain.`
);

const lineBreak = "\n";
console.log(lineBreak);

console.log(`arrow functions, also known as arrow functions, are a concise way to write function expressions in JavaScript. They use the arrow syntax (=>) and do not have their own 'this' context, making them particularly useful for callbacks and functional programming.`);
console.log(lineBreak);
console.log(`Here is an example of an arrow function:`);
console.log(
  `const add = (a, b) => a + b; // This function takes two parameters and returns their sum`
);


// Basic syntax
function functionName(parameters) {
  // code to execute
  return result; // optional
}

// Example of a simple function
function add(a, b) {
  return a + b;
}
let sum = add(2, 3); // sum is 5
console.log(`\nFunction Example: The sum of 2 and 3 is ${sum}`);

// Practice Questions

// 1. Write a function to find the maximum of two numbers.
// Hint: Use if-else or Math.max()

// 2. Write a function that returns the factorial of a number.
// Hint: Use a loop or recursion

// 3. Write a function to check if a string is a palindrome.
// Hint: Compare the string with its reverse

// 4. Write a function to count the number of vowels in a string.
// Hint: Use a loop and check for 'a', 'e', 'i', 'o', 'u'

// 5. Write a function that takes an array and returns its average.
// Hint: Sum all elements and divide by array length

// 6. Write a function to reverse an array.
// Hint: Use a loop or the built-in reverse() method

// 7. Write a function to check if a number is prime.
// Hint: Check divisibility from 2 to sqrt(n)

// 8. Write a function to generate the Fibonacci sequence up to n terms.
// Hint: Use a loop and store results in an array

// 9. Write a function to merge two arrays and remove duplicates.
// Hint: Use concat() and Set

// 10. Write a function to capitalize the first letter of each word in a string.
// Hint: Split the string, capitalize, and join back