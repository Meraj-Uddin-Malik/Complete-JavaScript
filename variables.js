// Variable is a container for storing data values. In JavaScript, we use the var, let, and const keywords to declare variables.

let myName = "John"; // Using let to declare a variable
const age = 30; // Using const to declare a constant variable
var city = "New York"; // Using var to declare a variable (not recommended in modern JavaScript)

console.log(myName); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York

// const is block-scoped and cannot be reassigned, while let is also block-scoped but can be reassigned. var is function-scoped and can be redeclared and reassigned, which can lead to unexpected behavior.
// let is preferred over var in modern JavaScript due to its block-scoping and better handling of variable declarations.
// var is generally avoided in modern JavaScript due to its function-scoping and potential for variable hoisting issues.


// What is Scope in JavaScript?
// Scope determines the accessibility of variables, functions, and objects in some particular part of your code during runtime. JavaScript has two types of scope: global scope and local scope.

// Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.
var globalVar = "I am a global variable";

function showGlobalVar() {
    console.log(globalVar); // Accessible here
}

showGlobalVar(); // Output: I am a global variable
console.log(globalVar); // Accessible here as well

// Local Scope: Variables declared within a function or block have local scope. They can only be accessed within that function or block.
function showLocalVar() {
    let localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}

showLocalVar(); // Output: I am a local variable
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined   


// how many types of scope in JavaScript?
// There are mainly two types of scope in JavaScript: Global Scope and Local Scope. However, within Local Scope, we can further categorize it into Function Scope and Block Scope.

// 1. Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.

// 2. Local Scope: Variables declared within a function or block have local scope. They can only be accessed within that function or block.
//    - Function Scope: Variables declared with var inside a function are function-scoped.
//    - Block Scope: Variables declared with let or const inside a block (e.g., inside an if statement or loop) are block-scoped.
