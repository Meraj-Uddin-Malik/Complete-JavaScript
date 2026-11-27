// 1. Basic Declaration & Reassignment
// Create a variable for a user's country (which will never change) set to "Pakistan", 
// and another variable for their currentCity (which can change) set to "Karachi". 
// Then update currentCity to "Lahore" and log both.

const country = "Pakistan";
let currentCity = "Karachi";
currentCity = "Lahore";

console.log(country);
console.log(currentCity);


// 2. Spot the Naming Errors
// Which of the following variable names are invalid in JavaScript, and why?
 
let $price = 500; // Reason: $ is allowed in JavaScript variable names.
let 2ndUser = "Ali"; // Not Allowed Reason: A variable name cannot start with a number.
let user_age = 25; // Reason: Underscores (_) are allowed in variable names.
let const = "value"; // Reason: const is a reserved keyword in JavaScript. Therefore, you cannot use it as a variable name.
let my-score = 100; // Reason: Hyphens (-) are not allowed in variable names.


// 3. Predict the Output (Redeclarations)
// What happens when you run this snippet? Explain why.

var language = "JavaScript";
var language = "Python"; // Var Allows updation and re-initialization

let framework = "React"; // Let Allows updation but not re-initialization
let framework = "Next.js"; // This will cause a TypeError


// 4. const with Objects (Mutation vs. Reassignment)
// Fix the bug in the snippet below so that user.role becomes "Admin" without causing a TypeError:

const user = { name: "Sara", role: "Editor" };
user = { name: "Sara", role: "Admin" };
user.role = "Admin";

// 5. Block Scope Leak (var vs. let)
// Predict the exact output (or error) of both console.log lines:

if (true) {
  var a = 10;
  let b = 20; // its block scope can not be access outsite the scope
}
console.log(a);
console.log(b);


// Write a function calculateDiscount() that declares a local variable discount = 15. 
// Call the function to log discount, and then prove outside the function that discount 
// is not accessible globally (write the line commented out and explain what error it throws).

const calculateDiscount = () => {
    const discount = 15;
    console.log(discount);
}

calculateDiscount();
// console.log(discount); // This will cause a ReferenceError because discount is not defined in the global scope.