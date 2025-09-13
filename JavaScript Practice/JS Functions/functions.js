console.log(
  `A JavaScript function is a reusable block of code designed to perform a specific task. Functions help organize code, avoid repetition, and make programs easier to maintain.`
);

const lineBreak = "\n";
console.log(lineBreak);

console.log(`arrow functions, also known as arrow functions, are a concise way to write function expressions in JavaScript. They use the arrow syntax (=>) and do not have their own 'this' context, making them particularly useful for callbacks and functional programming.`);
console.log(lineBreak);
console.log(`Here is an example of an arrow function:`);
console.log(
  `const add = (a, b) => a + b; // This function takes two parameters and returns their sum \n`
);

// Syntax Example:
function add(a, b) {
  return a + b;
}
console.log(`Function Declaration Example: ${add(2, 3)}`); // Outputs: 5


//* A1
function addTwoNumbers (a , b) {
  return a + b;
}
let result = addTwoNumbers(5, 4); 
console.log(`The Sum Off Two Numbers Are: ${result}`);

//* A2
function isPalindrome(str) {
    // convert to lowercase and remove spaces/punctuation
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // reverse the string
    let reversed = str.split("").reverse().join("");
    
    // check if original equals reversed
    return str === reversed;
}

// Example usage:
console.log(isPalindrome("madam"));       // true
console.log(isPalindrome("racecar"));     // true
console.log(isPalindrome("hello"));       // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

//* A3
let maximum = [3, 5, 1, 8, 2];

function findMax(arr) {
  let max = arr[0]; // Assume the first element is the largest
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if current element is larger
    }
  }
  return max;
}
console.log(`The Maximum Number Is: ${findMax(maximum)}`); // Outputs: 8

//* A4
let reverseArray = [1, 2, 3, 4, 5];
function reverseArr(arr) {
  let reversed = []; // Create a new array to hold reversed elements
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]); // Add elements from the end to the new array
  } 
  return reversed;
}
console.log(`The Reverse Array Is: ${reverseArr(reverseArray)}`); // Outputs: [5, 4, 3, 2, 1]

//* A5
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  } else {
    return n * factorial(n - 1); // Recursive case
  } 
}
console.log(`The Factorial Is: ${factorial(5)}`); // Outputs: 120

//* A6  
let tempCelsius = 25;
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32; // Convert Celsius to Fahrenheit
}
console.log(`The Temperature In Fahrenheit Is: ${celsiusToFahrenheit(tempCelsius)} C`); // Outputs: 77

//* A7
let vowelString = "Hello World";
function countVowels(str) {
  let count = 0;  
  const vowels = "aeiouAEIOU"; // Define vowels (both lowercase and uppercase)
  for (let char of str) {
    if (vowels.includes(char)) {
      count++; // Increment count if character is a vowel
    }
  } 
  return count;
}
console.log(`The Number Of Vowels In The String Is: ${countVowels(vowelString)}`); // Outputs: 3

//* A8
let primeNumber = 80;
function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Found a divisor, not prime
    } 
  }
  return true; // No divisors found, it's prime
} 
console.log(`Is The Number Prime? : ${isPrime(primeNumber)}`); // Outputs: true

//* A9
let fibCount = 10;
function fibonacci(n) {
  let fibSeq = [0, 1]; // Starting values for Fibonacci sequence]
  for (let i = 2; i < n; i++) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2]; // Each number is the sum of the two preceding ones
  }
  return fibSeq.slice(0, n); // Return the sequence up to n elements
}
console.log(`The First ${fibCount} Fibonacci Numbers Are: ${fibonacci(fibCount)}`); // Outputs: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]