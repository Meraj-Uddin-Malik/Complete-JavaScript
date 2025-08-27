console.log(
  `A for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, maps, and sets. It gives you the values directly, not the keys or indices`
);

// Syntax Example:
const fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit); // Outputs each fruit in the array
}
// The loop iterates over each element in the `fruits` array, allowing you to access the values directly.

console.log("Practice Questions for For...Of Loops");

// 1. Create an array of numbers and use a for...of loop to print each number.
// Hint: Define an array with at least five numbers and iterate through it.

const numbers = [10, 20, 30, 40, 50];
for (let num of numbers) {
  console.log(num);
}

// 2. Write a for...of loop to calculate the sum of all elements in an array.
// Hint: Initialize a sum variable and add each element to it during the loop.

let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log("Sum of all numbers:", sum);

// 3. Create a string and use a for...of loop to print each character.
// Hint: Define a string and iterate through it to access each character.

const str = "Hello";
for (let char of str) {
  console.log(char);
}

// 4. Write a function that takes an array of strings and returns a new array with all strings converted to uppercase using a for...of loop.
// Hint: Initialize an empty array and push each uppercase string into it during the loop.

function convertToUppercase(arr) {
  let uppercased = [];
  for (let str of arr) {
    uppercased.push(str.toUpperCase());
  }
  return uppercased;
}

// 5. Create an array of objects (e.g., books with title and author). Use a for...of loop to print each book's title and author.
// Hint: Define an array of objects and iterate through it to access properties.

const books = [
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

for (let book of books) {
  console.log(`Title: ${book.title}, Author: ${book.author}`);
}

// 6. Write a for...of loop to find the longest string in an array of strings.
// Hint: Initialize a variable to keep track of the longest string and compare lengths during the loop.

const strings = ["apple", "banana", "cherry", "date"];
let longestString = "";
for (let str of strings) {
  if (str.length > longestString.length) {
    longestString = str;
  }
}
console.log("Longest string:", longestString);

// 7. Create an array of mixed data types (e.g., numbers, strings, booleans). Use a for...of loop to print the type of each element.
// Hint: Use the typeof operator inside the loop to determine the type of each element.

const mixedArray = [42, "hello", true, null, { key: "value" }];
for (let element of mixedArray) {
  console.log(`Type of ${element}: ${typeof element}`);
}

// 8. Write a function that takes an iterable (like a Set) and returns an array of its values using a for...of loop.
// Hint: Initialize an empty array and push each value into it during the loop.

function iterableToArray(iterable) {
  let result = [];
  for (let value of iterable) {
    result.push(value);
  }
  return result;
}

// 9. Create an array of numbers and use a for...of loop to find the maximum number.
// Hint: Initialize a max variable with the first element and compare it with each element during the loop.

const newnumbers = [10, 20, 30, 40, 50];
let max = newnumbers[0];
for (let num of newnumbers) {
  if (num > max) {
    max = num;
  }
}
console.log("Maximum number:", max);

// 10. Write a for...of loop to create a new array that only includes even numbers from an existing array of numbers.
// Hint: Initialize an empty array and check if each number is even before adding it to the new array.

const evenNumbers = [];
for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
console.log("Even numbers:", evenNumbers);