// Operators

let a = 10;
let b = 5;

// Arithmetic Operators
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

console.log("Sum:", sum); // 15
console.log("Difference:", difference); // 5
console.log("Product:", product); // 50
console.log("Quotient:", quotient); // 2
console.log("Remainder:", remainder); // 0

// Comparison Operators
let isEqual = a == b; // false
let isNotEqual = a != b; // true
let isGreaterThan = a > b; // true
let isLessThan = a < b; // false

console.log("Is Equal:", isEqual);
console.log("Is Not Equal:", isNotEqual);
console.log("Is Greater Than:", isGreaterThan);
console.log("Is Less Than:", isLessThan);

// Logical Operators
let andOperator = (a > 5) && (b < 10); // true
let orOperator = (a < 5) || (b < 10); // true
let notOperator = !(a > 5); // false

console.log("AND Operator:", andOperator);
console.log("OR Operator:", orOperator);
console.log("NOT Operator:", notOperator);

// Assignment Operators
let c = 20;
c += 5; // c = c + 5
console.log("After += operation, c:", c); // 25

c -= 10; // c = c - 10
console.log("After -= operation, c:", c); // 15

c *= 2; // c = c * 2
console.log("After *= operation, c:", c); // 30

c /= 3; // c = c / 3
console.log("After /= operation, c:", c); // 10

c %= 4; // c = c % 4
console.log("After %= operation, c:", c); // 2 

// Increment and Decrement Operators
let d = 5;
d++; // Increment by 1
console.log("After increment, d:", d); // 6

d--; // Decrement by 1
console.log("After decrement, d:", d); // 5 

