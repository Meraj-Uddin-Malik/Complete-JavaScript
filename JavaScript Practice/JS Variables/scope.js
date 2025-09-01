/**
 * Scope in JavaScript
 *
 * Scope determines the accessibility of variables, objects, and functions.
 * There are three main types of scope:
 * 1. Global Scope
 * 2. Function (Local) Scope
 * 3. Block Scope (ES6: let, const)
 */

// Global Scope
var globalVar = "I am global"; // global Scope

function globalScope() {
  console.log(globalVar); // Accessible
}

globalScope();
console.log(globalVar); // Accessible

// Function Scope
function functionScope() {
  var functionVar = "I am local to functionScope"; // function Scope
  console.log(functionVar); // Accessible
}
functionScope();
// console.log(functionVar); // Not Accessible, Uncaught ReferenceError: functionVar is not defined

// Block Scope
if (true){
    let blockVar = "I am local to block";
    console.log(blockVar); // Accessible
}
// console.log(blockVar); // Not Accessible, Uncaught ReferenceError: blockVar is not defined