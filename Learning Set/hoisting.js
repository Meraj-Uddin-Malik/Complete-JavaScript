// ============================================================================
// JAVASCRIPT HOISTING: COMPLETE MASTER GUIDE (BEGINNER TO ADVANCED)
// ============================================================================
// DEFINITION: Hoisting is JavaScript's default behavior of registering variable,
// function, and class declarations in memory during the "Creation Phase" 
// (before a single line of code runs).
//
// IMPORTANT MENTAL MODEL: JavaScript does NOT physically move your code around.
// Instead, the JS engine scans your scope in two passes:
//   Pass 1 (Creation Phase): Allocates memory for declarations.
//   Pass 2 (Execution Phase): Runs code line-by-line and assigns values.


// ============================================================================
// 1. VARIABLE HOISTING (var vs. let & const)
// ============================================================================

// A. 'var' Hoisting (Initialized as 'undefined')
// During Pass 1, 'myVar' is hoisted AND given a default value of 'undefined'.
console.log("var before declaration:", myVar); // Output: undefined (No crash!)
var myVar = 10;                                // Assignment happens here in Pass 2
console.log("var after assignment:", myVar);   // Output: 10


// B. 'let' and 'const' Hoisting & The Temporal Dead Zone (TDZ)
// DEFINITION: 'let' and 'const' ARE hoisted in Pass 1, but JavaScript leaves them
// completely uninitialized. The gap between the start of the scope and the line 
// where the variable is declared is called the "Temporal Dead Zone" (TDZ).

// console.log(myLet);   // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;

// console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 30;


// ============================================================================
// 2. FUNCTION HOISTING (DECLARATIONS VS. EXPRESSIONS VS. ARROWS)
// ============================================================================

// A. Function Declarations (Fully Hoisted)
// The ENTIRE function body is stored in memory during Pass 1. You can safely 
// call it anywhere in the same scope—even on line 1.
sayHello(); // Output: Hello, World!

function sayHello() {
  console.log("Hello, World!");
}


// B. Function Expressions & Arrow Functions (NOT Callable Before Definition)
// They follow the hoisting rules of the variable keyword they are assigned to!

// Case 1: Stored in 'var' -> Hoisted as 'undefined'. Calling undefined throws TypeError!
// greetVar(); // TypeError: greetVar is not a function
var greetVar = function() {
  console.log("Function expression with var");
};

// Case 2: Stored in 'const' or 'let' -> Stuck in TDZ. Calling throws ReferenceError!
// greetArrow(); // ReferenceError: Cannot access 'greetArrow' before initialization
const greetArrow = () => {
  console.log("Arrow function with const");
};


// ============================================================================
// 3. CLASS HOISTING (ES6+)
// ============================================================================
// DEFINITION: Just like 'let' and 'const', JavaScript classes are hoisted into
// the Temporal Dead Zone. You MUST declare a class before using 'new'.

// const p = new Person("Ali"); // ReferenceError: Cannot access 'Person' before initialization

class Person {
  constructor(name) {
    this.name = name;
  }
}

const p = new Person("Ali");
console.log("Class instance:", p.name); // Output: Ali


// ============================================================================
// 4. HOISTING PRECEDENCE & SCOPE ISOLATION
// ============================================================================

// A. Function Declarations Beat 'var' Declarations in Pass 1
console.log("Type of duplicateName before assignment:", typeof duplicateName); // Output: "function"

var duplicateName = "I am a string now";
function duplicateName() {
  return "I am a function";
}

console.log("Type of duplicateName after assignment:", typeof duplicateName);  // Output: "string"


// B. Hoisting Happens Per-Scope (Not Always Global!)
// Variables inside a function are hoisted ONLY to the top of THAT function.
let score = 100;

function checkScore() {
  // Local 'var score' shadows outer 'score' and is hoisted to the top of checkScore()!
  console.log("Inside function:", score); // Output: undefined (NOT 100!)
  var score = 50;
}

checkScore();


// ============================================================================
// QUICK HOISTING CHEAT SHEET
// ============================================================================
// Declaration Type         | Hoisted? | Initial Value in Pass 1 | Early Access Result
// -------------------------|----------|-------------------------|--------------------
// function declaration     | Yes      | Full function body      | Works normally
// var                      | Yes      | undefined               | undefined
// let / const              | Yes      | <uninitialized> (TDZ)   | ReferenceError
// class                    | Yes      | <uninitialized> (TDZ)   | ReferenceError
// var fn = () => {}        | Yes      | undefined               | TypeError (not a fn)
// const fn = () => {}      | Yes      | <uninitialized> (TDZ)   | ReferenceError