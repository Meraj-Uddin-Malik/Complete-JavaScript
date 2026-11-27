// ============================================================================
// JAVASCRIPT DATA TYPES: COMPLETE MASTER GUIDE (BEGINNER TO ADVANCED)
// ============================================================================
// DEFINITION: Data types classify the different kinds of values you can store 
// and manipulate in JavaScript.
//
// KEY TRAIT (Dynamic Typing): JavaScript is "dynamically typed" — you don't 
// declare a variable's type ahead of time, and a variable can change types later.
let dynamicVar = 42;       // Currently a Number
dynamicVar = "Now text";   // Now a String (completely valid in JS)


// ============================================================================
// 1. THE 7 PRIMITIVE DATA TYPES
// ============================================================================
// DEFINITION: Simple, single values that are IMMUTABLE (cannot be altered once 
// created) and stored directly in the variable's memory slot.

// A. String
// DEFINITION: Textual data wrapped in single (' '), double (" "), or 
// backtick (` `) quotes (template literals allow embedding variables).
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `${singleQuote}, ${doubleQuote}!`; // Output: Hello, World!
console.log("String:", templateLiteral);


// B. Number
// DEFINITION: Represents BOTH integers and decimals (floating-point numbers).
// Also includes special numeric values: Infinity, -Infinity, and NaN (Not a Number).
let integerNum = 25;
let decimalNum = 99.95;
let notANumber = "abc" / 2; // Result: NaN (occurs when math fails)
console.log("Number:", integerNum, decimalNum, notANumber);


// C. Boolean
// DEFINITION: A logical type with only two possible values: true or false.
let isLoggedIn = true;
let hasAccess = false;
console.log("Boolean:", isLoggedIn, hasAccess);


// D. Undefined
// DEFINITION: Automatically assigned by JavaScript to a variable that has been 
// declared, but has not been given a value yet.
let uninitializedVar;
console.log("Undefined:", uninitializedVar); // Output: undefined


// E. Null
// DEFINITION: Represents the *intentional* absence of any value. Developers 
// assign 'null' manually to say "this variable is intentionally empty."
let selectedUser = null;
console.log("Null:", selectedUser); // Output: null


// F. Symbol (ES6+)
// DEFINITION: Creates a guaranteed unique, hidden identifier—even if two Symbols 
// have the exact same description text. Used to prevent object key collisions.
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Are Symbols equal?", sym1 === sym2); // Output: false (always unique!)


// G. BigInt (ES2020+)
// DEFINITION: Used for whole integers larger than Number.MAX_SAFE_INTEGER 
// (9,007,199,254,740,991). Created by adding 'n' to the end of an integer.
let hugeNumber = 900719925474099199999n;
console.log("BigInt:", hugeNumber + 1n);


// ============================================================================
// 2. NON-PRIMITIVE (REFERENCE) DATA TYPES
// ============================================================================
// DEFINITION: Complex data structures that are MUTABLE (can be modified in place).
// Instead of storing the data directly, the variable stores a memory address 
// ("reference") pointing to where the data lives.

// A. Object
// DEFINITION: A collection of unordered key-value pairs (properties).
const person = {
  name: "Bob",
  age: 30,
  isStudent: false
};
person.age = 31; // Mutating property inside the object
console.log("Object:", person);


// B. Array (Special type of Object)
// DEFINITION: An ordered, zero-indexed list of values.
const numbers = [10, 20, 30, 40];
numbers.push(50); // Mutating array by adding an item
console.log("Array:", numbers, "First item:", numbers[0]); // Output: 10


// C. Function (Callable Object)
// DEFINITION: Reusable blocks of executable code. Under the hood, functions 
// are objects that can be stored in variables and passed around.
function greet() {
  return "Hello!";
}
console.log("Function:", greet());


// D. Other Built-in Reference Objects (Good to know)
const today = new Date();             // Date object
const uniqueSet = new Set([1, 2, 2]); // Set (stores unique values only -> {1, 2})
const keyMap = new Map();             // Map (key-value pairs where keys can be any type)


// ============================================================================
// 3. CRUCIAL CONCEPT: COPY BY VALUE VS. COPY BY REFERENCE
// ============================================================================

// A. Primitives are Copied by VALUE (Independent copies)
let a = 10;
let b = a; // Copies the actual value 10 into 'b'
b = 99;    // Changing 'b' does NOT affect 'a'
console.log("Primitive Copy -> a:", a, "| b:", b); // Output: a: 10 | b: 99


// B. Objects/Arrays are Copied by REFERENCE (Shared memory link)
let obj1 = { city: "Karachi" };
let obj2 = obj1;       // Copies the memory pointer, NOT a new object!
obj2.city = "Lahore";  // Changing 'obj2' ALSO changes 'obj1'!
console.log("Reference Copy -> obj1:", obj1.city, "| obj2:", obj2.city); // Both: Lahore


// ============================================================================
// 4. CHECKING DATA TYPES ('typeof' & QUIRKS)
// ============================================================================
// DEFINITION: The 'typeof' operator returns a string naming the value's type.

console.log(typeof "Alice");     // "string"
console.log(typeof 25);          // "number"
console.log(typeof NaN);         // "number"  <-- Quirk: NaN is technically a Number type
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof Symbol());    // "symbol"
console.log(typeof 10n);         // "bigint"
console.log(typeof greet);       // "function"

// FAMOUS JAVASCRIPT QUIRKS TO REMEMBER:
// 1. 'typeof null' returns "object" (a historical bug from JS v1 that was never 
//    removed so old websites wouldn't break). Always check null with: val === null
console.log("Quirk (typeof null):", typeof null); // "object"

// 2. 'typeof []' returns "object" because arrays are objects under the hood.
//    To check if something is truly an array, use Array.isArray():
console.log("Quirk (typeof array):", typeof [1, 2, 3]);         // "object"
console.log("Proper Array Check:", Array.isArray([1, 2, 3]));   // true


// ============================================================================
// QUICK SUMMARY CHEAT SHEET
// ============================================================================
// PRIMITIVES (7): String, Number, Boolean, Undefined, Null, Symbol, BigInt
//   -> Immutable, stored & copied by VALUE.
//
// REFERENCE (1 main category): Object (includes Objects, Arrays, Functions, Dates, Maps, Sets)
//   -> Mutable, stored & copied by REFERENCE.