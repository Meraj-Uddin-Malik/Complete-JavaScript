// ============================================================================
// JAVASCRIPT VARIABLES & SCOPE: COMPLETE MASTER GUIDE
// ============================================================================
// DEFINITION: A variable is a named container for storing data values in memory.
// In modern JavaScript, we declare variables using 'const', 'let', or 'var'.


// ============================================================================
// 1. THE 3 WAYS TO DECLARE A VARIABLE (const, let, var)
// ============================================================================

// A. const (Default choice in modern JS)
// DEFINITION: Declares a block-scoped constant. It MUST be given a value when 
// created and CANNOT be reassigned later.
const birthYear = 1997;
// birthYear = 2000; // ERROR: TypeError: Assignment to constant variable.
console.log("const:", birthYear); // Output: 1997

// IMPORTANT NUANCE: 'const' prevents REASSIGNMENT, not MUTATION.
// If a 'const' holds an object or array, you can still change its contents!
const user = { name: "Ali", role: "Developer" };
user.role = "Senior Developer"; // Allowed! Modifying property inside the object
// user = { name: "Sara" };     // ERROR! Cannot replace the entire object
console.log("Mutated const object:", user);


// B. let (Use when the value will change)
// DEFINITION: Declares a block-scoped variable that CAN be reassigned later, 
// but CANNOT be redeclared in the same scope.
let score = 10;
score = 20; // Allowed: Reassigning a new value
// let score = 30; // ERROR: SyntaxError: Identifier 'score' has already been declared
console.log("let:", score); // Output: 20


// C. var (Legacy / Avoid in modern JS)
// DEFINITION: Declares a function-scoped (or globally-scoped) variable. 
// Can be both redeclared and reassigned, which often causes accidental bugs.
var city = "Karachi";
var city = "Islamabad"; // Allowed (dangerous!), silently overwrites previous variable
console.log("var:", city); // Output: Islamabad


// QUICK COMPARISON CHEAT SHEET:
// Keyword | Scope          | Can Reassign? | Can Redeclare? | Hoisted?
// --------|----------------|---------------|----------------|-------------------------
// const   | Block { }      | No            | No             | Yes (in Temporal Dead Zone)
// let     | Block { }      | Yes           | No             | Yes (in Temporal Dead Zone)
// var     | Function ( )   | Yes           | Yes            | Yes (initialized as undefined)


// ============================================================================
// 2. VARIABLE NAMING RULES & CONVENTIONS
// ============================================================================
// RULES (Breaking these causes a SyntaxError):
// 1. Can contain letters, digits, underscores (_), and dollar signs ($).
// 2. MUST begin with a letter, $, or _ (NEVER a number).
// 3. Case-sensitive ('myVar' and 'myvar' are two completely different variables).
// 4. Cannot use reserved JavaScript keywords (e.g., let, const, return, if).

let validName1 = "OK";
let $price = 50;
let _privateId = 101;
// let 1stPlace = "Error"; // SyntaxError: Invalid or unexpected token

// CONVENTIONS (Best practices for clean code):
// - camelCase for variables and functions: userFirstName, totalAmount
// - UPPER_SNAKE_CASE for hardcoded constants: MAX_LOGIN_ATTEMPTS, API_URL


// ============================================================================
// 3. SCOPE IN JAVASCRIPT (WHERE VARIABLES ARE ACCESSIBLE)
// ============================================================================
// DEFINITION: Scope determines where in your code a variable can be seen and used.
// JavaScript has 4 layers of scope: Global, Function, Block, and Lexical.


// A. Global Scope
// DEFINITION: Variables declared outside any function or curly-brace block { }.
// Accessible from ANYWHERE in your program.
const globalApp = "MyApp v1.0";

function printApp() {
  console.log("Inside function:", globalApp); // Accessible
}
printApp();
console.log("Outside function:", globalApp);  // Accessible


// B. Function Scope (Local Scope)
// DEFINITION: Variables declared inside a function (with var, let, or const) 
// belong strictly to that function and cannot be accessed outside it.
function calculateBonus() {
  var bonus = 500;
  let tax = 50;
  console.log("Inside function:", bonus - tax); // Output: 450
}

calculateBonus();
// console.log(bonus); // ReferenceError: bonus is not defined


// C. Block Scope (Local Scope)
// DEFINITION: Any code inside curly braces { } (such as 'if', 'for', 'while') 
// creates a block. 'let' and 'const' stay trapped inside; 'var' leaks out!
if (true) {
  let blockLet = "Trapped in block";
  const blockConst = "Also trapped in block";
  var leakedVar = "I escaped the block!";
}

console.log(leakedVar);      // Output: I escaped the block! ('var' ignores block scope)
// console.log(blockLet);    // ReferenceError: blockLet is not defined
// console.log(blockConst);  // ReferenceError: blockConst is not defined


// D. Lexical Scope (Scope Chain)
// DEFINITION: Inner functions can access variables from their outer parent 
// functions, searching outward layer-by-layer until reaching Global Scope.
function outer() {
  const outerSecret = "Parent Data";

  function inner() {
    console.log("Lexical Access:", outerSecret); // Finds 'outerSecret' in parent
  }

  inner();
}
outer(); // Output: Lexical Access: Parent Data


// ============================================================================
// 4. HOISTING & THE TEMPORAL DEAD ZONE (TDZ)
// ============================================================================
// DEFINITION: Hoisting is JavaScript's default behavior of moving variable 
// declarations to the top of their scope before code execution begins.

// A. Hoisting with 'var'
// 'var' is hoisted AND automatically given a value of 'undefined'.
console.log("Hoisted var:", hoistedVar); // Output: undefined (does NOT throw error!)
var hoistedVar = "Now I have a value";

// B. Hoisting with 'let' and 'const' (Temporal Dead Zone)
// 'let' and 'const' are hoisted, but remain uninitialized in the "Temporal Dead 
// Zone" (TDZ) until the exact line where they are declared.
// console.log(tdzLet); // ERROR: ReferenceError: Cannot access 'tdzLet' before initialization
let tdzLet = "Safe to use after this line";
console.log("After TDZ:", tdzLet); // Output: Safe to use after this line


// ============================================================================
// 5. UNDECLARED VARIABLES (STRICT MODE WARNING)
// ============================================================================
// DEFINITION: Assigning a value to a name without let/const/var accidentally 
// creates a global variable in sloppy mode, or crashes in Strict Mode.
function accidentalGlobal() {
  // badVariable = "Oops"; // Avoid! Always use const or let.
}