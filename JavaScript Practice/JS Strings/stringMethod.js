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

console.log("Practice Questions on JavaScript String Methods \n");

// 1. Find the length of the string "JavaScript Practice".
// Hint: Use the .length property.
let stringLength = "JavaScript Practice";
console.log(`The Length of string Is: ${stringLength.length}`);

// 2. Get the character at index 5 in the string "JavaScript".
// Hint: Use the .charAt() method.

let stringJs = "JavaScript";
console.log(`The Character at Index 5 in JavaScrit Is: ${stringJs.charAt(5)}`)

// 3. Find the index of the substring "Script" in "JavaScript Practice".
// Hint: Use the .indexOf() method.

let subStringIndex = "JavaScript Practice";
console.log(`the index of the substring "Script" in "JavaScript Practice" is : ${subStringIndex.indexOf("Script")}`)

// 4. Extract the word "Practice" from "JavaScript Practice".
// Hint: Use the .slice() or .substring() method.
console.log(`The Extract Result Is : ${subStringIndex.slice(11)}`)
console.log(`The Extract Result Is : ${subStringIndex.substring(11)}`)

// 5. Replace "JavaScript" with "JS" in the string "JavaScript Practice".
// Hint: Use the .replace() method.

let replaceString = subStringIndex.replace("JavaScript", "JS");
console.log(`The Replace Result Is : ${replaceString}`)

// 6. Convert the string "hello world" to uppercase.
// Hint: Use the .toUpperCase() method.

let loweCaseString = "hellwo world";
console.log(`The Uppercase Result Is : ${loweCaseString.toUpperCase()}`);

// 7. Convert the string "HELLO WORLD" to lowercase.
// Hint: Use the .toLowerCase() method.

let upperCaseString = "HELLO WORLD";
console.log(`The Uppercase Result Is : ${loweCaseString.toLowerCase()}`);

// 8. Remove whitespace from both ends of the string "   Hello World!   ".
// Hint: Use the .trim() method.

let whitespaceString = "    World with Hello  ";
console.log(`The Trim Result Is : ${whitespaceString.trim()}`);

// 9. Split the string "apple,banana,cherry" into an array.
// Hint: Use the .split() method.

let splitString = "apple,banana,cherry";
console.log(`The Split Result Is : ${splitString.split(",")}`);
console.log(typeof splitString.split(","));

// 10. Check if the string "JavaScript" includes the substring "Script".
// Hint: Use the .includes() method.

let checkString = "JavaScript";
console.log(`The Check Result Is : ${checkString.includes("Script")}`);

// 11. Repeat the string "JS" 3 times.
// Hint: Use the .repeat() method.

let repeatString = "JS";
console.log(`The Repeat Result Is : ${repeatString.repeat(13)}`);

// 12. Pad the string "5" to length 3 with "0" at the start.
// Hint: Use the .padStart() method.

let padStartString = "M";
console.log(`The padStart Result Is : ${padStartString.padStart(3, "0")}`);

// 13. Pad the string "5" to length 3 with "0" at the end.
// Hint: Use the .padEnd() method.

let padEndString = "M";
console.log(`The padEnd Result Is : ${padEndString.padEnd(3, "0")}`);

// 14. Check if the string "Hello World" starts with "Hello".
// Hint: Use the .startsWith() method.
let startString = "Hello World";
console.log(`The startsWith Result Is : ${startString.startsWith("Hello")}`);

// 15. Check if the string "Hello World" ends with "World".
// Hint: Use the .endsWith() method.
let endString = "Hello World";
console.log(`The endsWith Result is: ${endString.endsWith("World")}`)