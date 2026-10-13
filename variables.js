// JavaScript is a popular language used for interactive web development.
// It manipulates the DOM, handles events, and supports client-side and server-side code.
// Created by Brendan Eich in 1995, it was first named Mocha, then LiveScript.
// Renamed JavaScript, it is unrelated to Java and was created in just 10 days.

// Variables are containers that are used for storing data values. In JavaScript, we use the var, let, and const keywords to declare variables.
var MyName = "Medy"; // var is function-scoped and can be re-declared and updated
let age = 25; // let is block-scoped and can be updated but not re-declared
const country = "USA"; // const is block-scoped and cannot be updated or re-declared

// Example of variable usage
console.log("Name: " + MyName); // Output: Name: Medy
console.log("Age: " + age); // Output: Age: 25
console.log("Country: " + country); // Output: Country: USA

// Updating variables
age = 26; // Updating the value of age
console.log("Updated Age: " + age); // Output: Updated Age: 26

// Attempting to update a const variable will result in an error
// country = "Canada"; // Uncommenting this line will throw an error

//Javascript is a dynamically typed language, which means you don't have to declare the data type of a variable. The data type is determined automatically based on the value assigned to the variable.