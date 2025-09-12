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
