console.log(`Primitive data types in JavaScript are basic types that are not objects and have no methods. They include:
- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt 
These types are immutable, meaning their values cannot be changed after creation. Here are some examples of primitive data types in JavaScript: \n`);

console.log(
  "Objects in JavaScript are collections of key-value pairs and can store multiple values and complex data. Objects can also have methods (functions as properties) They are mutable, meaning you can change their properties and values after creation. Here are some examples of objects in JavaScript:"
);

console.log("Practice Questions on JavaScript Data Types \n");
// 1. What will be the output of the following code?
// let x = "5" + 2 + 3;
// Hint: Think about how JavaScript handles string concatenation and type coercion.
let x = "5" + 2 + 3;
console.log(x); // Output: "523"

// 2. How can you check the type of a variable in JavaScript?
// Hint: There is a built-in operator for this.
let y = 42;
console.log(typeof y); // Output: "number"

// 3. What is the difference between null and undefined in JavaScript?
// Hint: One is an assigned value, the other means a variable has been declared but not assigned a value.
let z = null; // explicitly assigned null
let w; // declared but not assigned
console.log(z); // Output: null

// 4. How do you create a BigInt value?
// Hint: Try adding 'n' at the end of a number.
let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt
console.log(bigIntValue); // Output: 1234567890123456789012345678901234567890n

// 5. What will be the output of:
// console.log(typeof NaN);
// Hint: NaN stands for "Not a Number", but what does typeof return?
console.log(typeof NaN); // Output: "number"

// 6. How do you create a Symbol in JavaScript?
// Hint: Use the Symbol() function.
let mySymbol = Symbol("description");
console.log(mySymbol); // Output: Symbol(description)

// 7. What is the result of:
// let obj = {};
// console.log(typeof obj);
// Hint: Objects are a non-primitive data type.
let obj = {};
console.log(typeof obj); // Output: "object"

// 8. How can you check if a variable is an array?
// Hint: There is a built-in method in Array.
let arr = [1, 2, 3];
console.log(Array.isArray(arr)); // Output: true

// 9. What is the output of:
// let a;
// console.log(a === undefined);
// Hint: What is the default value of an uninitialized variable?
let a;
console.log(a === undefined); // Output: true

// 10. How do you convert a string to a number in JavaScript?
// Hint: Try using Number(), parseInt(), or the unary plus (+) operator.
let strNumber = "123";
let convertedNumber = parseInt(strNumber); // or Number(strNumber) or +strNumber
console.log(convertedNumber); // Output: 123

let convertedNumber1 = Number(strNumber); // or parseInt(strNumber) or +strNumber
console.log(convertedNumber1); // Output: 123
