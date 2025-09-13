console.log(`
    JavaScript Strings Definition:
 - In JavaScript, a string is a sequence of characters used to represent text.
 - Strings are immutable, meaning their contents cannot be changed after creation.
 - Strings can be created using single quotes (' '), double quotes (" "), or backticks (\`\`) for template literals.
 - Template literals allow for multi-line strings and string interpolation.
 - Strings can be manipulated using various built-in methods such as length, charAt, indexOf, slice, and more.
 - Common string operations include concatenation, searching, and replacing substrings.`);

const singleQuoteString = 'Hello, World!';
const doubleQuoteString = "JavaScript Strings";
const templateLiteral = `This is a template literal`;

const lineBreak = "\n";
console.log(lineBreak);

console.log(singleQuoteString); // Output: Hello, World!
console.log(doubleQuoteString); // Output: JavaScript Strings
console.log(templateLiteral); // Output: This is a template literal


// Questions:
// 1. Find the length of the string "JavaScript Practice".
// 2. Get the character at index 5 in the string "JavaScript".
// 3. Find the index of the substring "Script" in "JavaScript Practice".
// 4. Extract the word "Practice" from "JavaScript Practice".
// 5. Replace "JavaScript" with "JS" in the string "JavaScript Practice".
// 6. Convert the string "hello world" to uppercase.
// 7. Convert the string "HELLO WORLD" to lowercase.
// 8. Remove whitespace from both ends of the string "   Hello World!   ".
// 9. Split the string "apple,banana,cherry" into an array.
// 10. Check if the string "JavaScript" includes the substring "Script".
// 11. Repeat the string "JS" 3 times.
// 12. Pad the string "5" to length 3 with "0" at the start.
// 13. Pad the string "5" to length 3 with "0" at the end.
// 14. Check if the string "Hello World" starts with "Hello".
// 15. Check if the string "Hello World" ends with "World".


//* A1
let stringLength = "JavaScript Practice";
console.log(`The Length of string Is: ${stringLength.length}`);

//* A2
let stringJs = "JavaScript";
console.log(`The Character at Index 5 in JavaScript Is: ${stringJs.charAt(5)}`);

//* A3
let subStringIndex = "JavaScript Practice";
console.log(`The index of the substring "Script" in "JavaScript Practice" is: ${subStringIndex.indexOf("Script")}`);

//* A4
console.log(`The Extract Result Is: ${subStringIndex.slice(11)}`);
console.log(`The Extract Result Is: ${subStringIndex.substring(11)}`);

//* A5
let replaceString = subStringIndex.replace("JavaScript", "JS");
console.log(`The Replace Result Is: ${replaceString}`);

//* A6
let lowerCaseString = "hello world";
console.log(`The Uppercase Result Is: ${lowerCaseString.toUpperCase()}`);

//* A7
let upperCaseString = "HELLO WORLD";
console.log(`The Lowercase Result Is: ${upperCaseString.toLowerCase()}`);

//* A8
let whitespaceString = "   Hello World!   ";
console.log(`The Trim Result Is: ${whitespaceString.trim()}`);

//* A9
let splitString = "apple,banana,cherry";
console.log(`The Split Result Is: ${splitString.split(",")}`);
console.log(typeof splitString.split(","));

//* A10
let checkString = "JavaScript";
console.log(`The Check Result Is: ${checkString.includes("Script")}`);

//* A11
let repeatString = "JS";
console.log(`The Repeat Result Is: ${repeatString.repeat(3)}`);

//* A12
let padStartString = "5";
console.log(`The padStart Result Is: ${padStartString.padStart(3, "0")}`);

//* A13
let padEndString = "5";
console.log(`The padEnd Result Is: ${padEndString.padEnd(3, "0")}`);

//* A14
let startString = "Hello World";
console.log(`The startsWith Result Is: ${startString.startsWith("Hello")}`);

//* A15
let endString = "Hello World";
console.log(`The endsWith Result is: ${endString.endsWith("World")}`);
