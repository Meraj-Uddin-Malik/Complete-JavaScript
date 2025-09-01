console.log(
  `A for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, maps, and sets. It gives you the values directly, not the keys or indices`
);

// Syntax Example:
const fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit); // Outputs each fruit in the array
}
// The loop iterates over each element in the `fruits` array, allowing you to access the values directly.


// A1
let arrNum = [1, 2, 3, 4, 5];
for (let num of arrNum) {
  console.log(num); // Outputs each number in the array
}


// A2
let sum = 0;
for (let arrSum of arrNum) {
  sum += arrSum;
}
console.log(sum);


// A3
let str = "Hello";
for (let char of str) {
  console.log(char);
}


// A4
function toUpperCaseArray(strings) {
  let result = []; // new array

  for (let str of strings) {
    result.push(str.toUpperCase()); // convert and store
  }

  return result;
}

// Example usage:
let newFruits = ["apple", "banana", "mango"];
console.log(toUpperCaseArray(newFruits));


// A5
let books = [
  { title: "Harry Potter", author: "J.K. Rowling" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

for (let book of books) {
  console.log(`${book.title} by ${book.author}`);
}


// A6
let longestString = "";
for (let strng of newFruits) {
  if (strng.length > longestString.length) {
    longestString = strng;
  }
}
console.log(longestString);


// A7
let mixedArray = [42, "hello", true, 3.14, "Meraj", false];

for (let item of mixedArray) {
  console.log(`${item} → ${typeof item}`);
}


// A8
function iterableToArray(iterable) {
  let result = [];

  for (let value of iterable) {
    result.push(value);
  }

  return result;
}

let mySet = new Set([10, 20, 30, 40]);

console.log(iterableToArray(mySet));


// A9
let numbers = [12, 45, 7, 89, 34, 67];
let maxNum = [0];


for (let num of numbers) {
  if (num > maxNum) {
    maxNum = num;
  }
}
console.log(maxNum);

// A10

let evenNumbers = [12, 7, 45, 22, 36, 51, 80];

let evens = [];

for (let num of evenNumbers) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}

console.log("Even numbers:", evens);
