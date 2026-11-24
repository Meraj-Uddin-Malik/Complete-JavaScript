// Operators in JavaScript
// Operators are special symbols that perform operations on operands (values or variables). JavaScript provides a variety of operators, which can be categorized into several types:

// 1. Arithmetic Operators:
// These operators are used to perform mathematical calculations.
let a = 10;
let b = 5;

console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus (Remainder): 0
console.log(a ** b); // Exponentiation: 100000

// 2. Assignment Operators:
// These operators are used to assign values to variables.
let x = 10;
x += 5; // Equivalent to x = x + 5
console.log(x); // Output: 15

x -= 3; // Equivalent to x = x - 3
console.log(x); // Output: 12

x *= 2; // Equivalent to x = x * 2
console.log(x); // Output: 24

x /= 4; // Equivalent to x = x / 4
console.log(x); // Output: 6

x %= 4; // Equivalent to x = x % 4
console.log(x); // Output: 2

// 3. Comparison Operators:
// These operators are used to compare two values and return a boolean result (true or false).
let num1 = 10;
let num2 = 20;

console.log(num1 == num2); // Equal to: false
console.log(num1 != num2); // Not equal to: true
console.log(num1 > num2); // Greater than: false
console.log(num1 < num2); // Less than: true
console.log(num1 >= num2); // Greater than or equal to
console.log(num1 <= num2); // Less than or equal to: true

// 4. Logical Operators:
// These operators are used to combine multiple boolean expressions.
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // Logical AND: false
console.log(isTrue || isFalse); // Logical OR: true
console.log(!isTrue); // Logical NOT: false

// 5. String Operators:
// The + operator can also be used to concatenate (combine) strings.
let str1 = "Hello, ";
let str2 = "World!";
console.log(str1 + str2); // Output: Hello, World!

// 6. Ternary Operator:
// The ternary operator is a shorthand for an if-else statement.
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes