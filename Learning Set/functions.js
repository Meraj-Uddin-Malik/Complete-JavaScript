// ============================================================================
// JAVASCRIPT FUNCTIONS: THE COMPLETE MASTER GUIDE (BEGINNER TO ADVANCED)
// ============================================================================
// DEFINITION: A function is a reusable block of code designed to perform a 
// specific task. It only executes when something calls ("invokes") it.


// ============================================================================
// 1. CORE WAYS TO DEFINE A FUNCTION
// ============================================================================

// A. Function Declaration (Standard)
// DEFINITION: Defined with the 'function' keyword followed by a name.
// KEY BEHAVIOR: "Hoisted" — JavaScript moves it to the top of the file during
// compilation, meaning you can call it *before* the line where it is written.
console.log(greet("Ali")); // Output: Hello, Ali!

function greet(name) {
  return `Hello, ${name}!`;
}


// B. Function Expression
// DEFINITION: A function created inside an expression and stored in a variable.
// KEY BEHAVIOR: NOT hoisted — you must define it before calling it.
const subtract = function(a, b) {
  return a - b;
};

console.log(subtract(10, 4)); // Output: 6


// C. Arrow Function (ES6+)
// DEFINITION: A shorter, modern syntax using '=>' instead of the 'function' keyword.
// KEY BEHAVIOR: Not hoisted, and does not create its own 'this' context.
const sayHello = () => {
  console.log("Hello from an Arrow Function!");
};
sayHello(); // Output: Hello from an Arrow Function!

// Implicit Return Shortcut: If there is only 1 line of logic, omit {} and 'return'.
const square = (num) => num * num;
console.log(square(5)); // Output: 25


// D. Anonymous Function
// DEFINITION: A function without a name. Usually passed directly into another 
// function when you only need it once.
setTimeout(function() {
  console.log("Anonymous Function: Ran after 1 second.");
}, 1000);


// E. Named Function Expression
// DEFINITION: A function expression that includes an internal name.
// WHY USE IT: Helpful for debugging (the name appears in error logs) and self-recursion.
const greetUser = function showGreeting() {
  console.log("Named Function Expression executed.");
};
greetUser(); // Output: Named Function Expression executed.


// F. IIFE (Immediately Invoked Function Expression)
// DEFINITION: A function that executes the exact moment it is defined.
// WHY USE IT: Creates a private scope so temporary variables don't pollute global code.
(function() {
  const secret = "Hidden inside IIFE";
  console.log("IIFE:", secret); // Output: IIFE: Hidden inside IIFE
})();


// ============================================================================
// 2. PARAMETERS, ARGUMENTS, RETURN & SCOPE
// ============================================================================

// A. Parameters vs. Arguments & Default Parameters
// DEFINITION: 
// - Parameters: Placeholder variable names listed when defining the function.
// - Arguments: The actual values passed in when calling the function.
// - Default Parameter: A fallback value used if no argument is provided.
function calculateTotal(price, tax = 0.05) {
  return price + (price * tax);
}

console.log(calculateTotal(100, 0.10)); // Output: 110 (uses passed argument)
console.log(calculateTotal(100));       // Output: 105 (uses default 0.05 tax)


// B. Rest Parameters (...)
// DEFINITION: Uses three dots (...) to gather any number of passed arguments 
// into a single real JavaScript array.
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(10, 20, 30, 40)); // Output: 100


// C. The 'return' Statement & Local Scope
// DEFINITION:
// - return: Stops the function immediately and outputs a value back to the caller.
//   (Without 'return', a function outputs 'undefined').
// - Local Scope: Variables declared inside a function exist ONLY inside it.
function checkAge(age) {
  const status = age >= 18 ? "Adult" : "Minor"; // Local variable
  return status;

  console.log("Unreachable code — never runs after 'return'.");
}

console.log(checkAge(20)); // Output: Adult
// console.log(status);    // ReferenceError: status is not defined


// ============================================================================
// 3. OBJECT & CLASS FUNCTIONS (OOP)
// ============================================================================

// A. Object Method
// DEFINITION: A function stored as a property inside an object.
const user = {
  username: "Sara",
  login() { // Shorthand method syntax
    console.log(`${this.username} has logged in.`);
  }
};

user.login(); // Output: Sara has logged in.


// B. Getter and Setter Functions (get / set)
// DEFINITION: Special object/class functions that disguise themselves as normal 
// properties when accessed or updated, allowing validation or formatting.
const product = {
  price: 100,
  get formattedPrice() { // Runs when reading product.formattedPrice
    return `$${this.price.toFixed(2)}`;
  },
  set updatePrice(newPrice) { // Runs when setting product.updatePrice = ...
    if (newPrice > 0) this.price = newPrice;
  }
};

console.log(product.formattedPrice); // Output: $100.00
product.updatePrice = 150;
console.log(product.formattedPrice); // Output: $150.00


// C. Constructor Function
// DEFINITION: A blueprint function used with the 'new' keyword to create 
// multiple similar objects. (Capitalized by convention).
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("David", 30);
console.log(`Constructor Output: ${person1.name}, ${person1.age}`); // David, 30


// ============================================================================
// 4. FUNCTIONAL PROGRAMMING & ADVANCED LOGIC
// ============================================================================

// A. Callback Function & Higher-Order Function
// DEFINITION:
// - Callback Function: A function passed as an argument into another function.
// - Higher-Order Function: A function that accepts another function as input 
//   OR returns a new function.
function processUserInput(callback) { // Higher-Order Function
  const name = "Charlie";
  callback(name);
}

processUserInput(function(userName) { // Callback Function
  console.log(`Callback Output: Hello, ${userName}!`);
});


// B. Closure
// DEFINITION: A function that remembers and accesses variables from its outer 
// function's scope, even after the outer function has finished executing.
function createCounter() {
  let count = 0; // Private state preserved by closure
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log("Closure Count:", counter()); // Output: 1
console.log("Closure Count:", counter()); // Output: 2


// C. Recursion
// DEFINITION: A function that calls itself repeatedly until it hits a stopping 
// condition (called the "Base Case").
function factorial(n) {
  if (n === 0) return 1; // Base Case (prevents infinite crash)
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)


// D. Pure Function vs. Impure Function (Conceptual Pattern)
// DEFINITION:
// - Pure Function: Always returns the exact same output for the same inputs, 
//   and modifies nothing outside itself (zero side effects).
const calculateTax = (amount) => amount * 0.10; // Pure
console.log("Pure Function:", calculateTax(200)); // Output: 20

// - Impure Function: Relies on or changes external variables outside its scope.
let externalTotal = 0;
const addToTotal = (amount) => { externalTotal += amount; }; // Impure
addToTotal(50);


// ============================================================================
// 5. ASYNCHRONOUS & GENERATOR FUNCTIONS
// ============================================================================

// A. Async / Await Function
// DEFINITION: Designed for tasks that take time (API calls, file loading) without 
// freezing the app. 'async' makes a function return a Promise; 'await' pauses 
// the function until that Promise finishes.
async function fetchUserData() {
  try {
    const fakeApiCall = new Promise((resolve) => 
      setTimeout(() => resolve({ name: "Ali", role: "Developer" }), 500)
    );
    const data = await fakeApiCall;
    console.log("Async/Await Result:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchUserData(); // Output (after 0.5s): Async/Await Result: { name: 'Ali', role: 'Developer' }


// B. Generator Function (function*)
// DEFINITION: A function that can pause execution mid-way using 'yield' and 
// resume from that exact spot later using '.next()'.
function* numberGenerator() {
  yield 1; // Pauses here on 1st .next()
  yield 2; // Pauses here on 2nd .next()
  yield 3; // Pauses here on 3rd .next()
}

const gen = numberGenerator();
console.log("Generator 1:", gen.next().value); // Output: 1
console.log("Generator 2:", gen.next().value); // Output: 2
console.log("Generator 3:", gen.next().value); // Output: 3
console.log("Generator Done:", gen.next().done); // Output: true


// C. Async Generator Function (async function*)
// DEFINITION: Combines 'async' and 'function*' to yield asynchronous values 
// over time (ideal for streaming chunks of data).
async function* streamNumbers() {
  yield await Promise.resolve("Chunk 1");
  yield await Promise.resolve("Chunk 2");
}

(async () => {
  for await (const chunk of streamNumbers()) {
    console.log("Async Generator:", chunk); // Outputs Chunk 1, then Chunk 2
  }
})();