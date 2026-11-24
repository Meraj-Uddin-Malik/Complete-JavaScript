// Data Types in JavaScript
// In JavaScript, data types are used to represent different kinds of values. There are two main categories of data types: primitive and non-primitive (or reference) data types.

// 1. Primitive Data Types:
// Primitive data types are immutable and are stored directly in the location that the variable accesses. The primitive data types in JavaScript include:

// - String: Represents textual data enclosed in single or double quotes.
let name = "Alice"; // String

// - Number: Represents numeric values, both integers and floating-point numbers.
let age = 25; // Number

// - Boolean: Represents a logical entity that can have two values: true or false.
let isStudent = true; // Boolean

// - Undefined: Represents a variable that has been declared but has not yet been assigned a value.
let undefinedVar; // Undefined

// - Null: Represents the intentional absence of any object value.
let nullVar = null; // Null

// - Symbol: Represents a unique and immutable primitive value, often used as an identifier for object properties.
let sym = Symbol("unique"); // Symbol

// - BigInt: Represents whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.
let bigIntVar = 1234567890123456789012345678901234567890n; // BigInt

// 2. Non-Primitive (Reference) Data Types:
// Non-primitive data types are mutable and are stored as references to the location in memory where the data is held. The main non-primitive data type in JavaScript is:

// - Object: Represents a collection of key-value pairs and can include arrays, functions, and other objects.
let person = {
    name: "Bob",
    age: 30,
    isStudent: false
}; // Object

// Arrays are a special type of object used to store ordered collections of values.
let numbers = [1, 2, 3, 4, 5]; // Array

// Functions are also objects in JavaScript and can be assigned to variables, passed as arguments, and returned from other functions.
function greet() {
    return "Hello!";
} // Function

// Inshort, JavaScript has a variety of data types that allow developers to work with different kinds of values, from simple primitives to complex objects. Understanding these data types is essential for effective programming in JavaScript.:
// - Primitive data types: String, Number, Boolean, Undefined, Null, Symbol, BigInt
// - Non-primitive data types: Object (including Arrays and Functions)