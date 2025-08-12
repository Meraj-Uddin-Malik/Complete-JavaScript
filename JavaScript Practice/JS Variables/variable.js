console.log("Variable Questions in JavaScript \n ");
// 1. Declare a variable named `age` and assign your age to it.
//   Hint: Use the `let` or `const` keyword.

let age = 25; // Example age
console.log(age); // Output: 25

// 2. Change the value of the `age` variable to a new number.
//   Hint: Use the assignment operator `=`.

age = 30; // Changing age
console.log(age); // Output: 30

// 3. Declare a variable called `firstName` and assign your first name as a string.
//   Hint: Strings are written inside quotes.

let firstName = "Meraj Uddin Malik";
console.log(firstName); // Output: Meraj Uddin Malik

// 4. Combine `firstName` and `age` into a new variable called `userInfo`.
//   Hint: Use the `+` operator or template literals.

let userInfo = firstName + " is " + age + " years old.";
console.log(userInfo); // Output: Meraj Uddin Malik is 30 years old

// 5. What is the difference between `let`, `const`, and `var`?
//   Hint: Think about scope and reassignability.

let variableLet = "I can be changed"; // Can be reassigned
const variableConst = "I cannot be changed"; // Cannot be reassigned
var variableVar = "I can also be changed"; // Can be reassigned, but has function scope
console.log(variableLet, variableConst, variableVar); // Output: I can be changed I cannot be changed I can also be changed

// 6. Declare a constant variable called `PI` and assign it the value 3.14.
//   Hint: Use `const` for values that shouldn't change.

const PI = 3.14;
console.log(PI); // Output: 3.14

// 7. Try to reassign the value of `PI`. What happens?
//   Hint: Constants cannot be reassigned.

try {
    PI = 3.14159; // This will throw an error
} catch (error) {
    console.error("Error:", error.message); // Output: Error: Assignment to constant variable.
}

// 8. What will be the output of:
//   ```
//   var x = 5;
//   let y = 10;
//   const z = 15;
//   x = x + y;
//   y = y + z;
//   z = z + x; // Will this work?
//   ```
//   Hint: Think about which variables can be reassigned.

console.log(" \n Variable Reassignment Example:");
var x = 5;
let y = 10; 
const z = 15;
x = x + y; // x becomes 15  
y = y + z; // y becomes 25
try {
    z = z + x; // This will throw an error because z is a constant
} catch (error) {
    console.error("Error:", error.message); // Output: Error: Assignment to constant variable.
}

// 9. Declare a variable without assigning a value. What is its value?
//   Hint: Use `let` and check with `console.log`.

let unassignedVariable;
console.log(unassignedVariable); // Output: undefined

// 10. What is hoisting? Which variables are hoisted?
//    Hint: Try declaring and using variables before their declaration.

console.log(" \n Hoisting Example:");
console.log(hoistedVar); // Output: undefined (hoisted)
var hoistedVar = "I am hoisted"; // This variable is hoisted
console.log(hoistedVar); // Output: I am hoisted  
