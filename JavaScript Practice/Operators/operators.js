console.log("Operators in JS");
// Arthimatic Operators

// let a = 6
// let b = 4

// console.log("a + b = ", a + b);   // Addition
// console.log("a - b = ", a - b);   // Subtraction
// console.log("a * b = ", a * b);   // Multiplication
// console.log("a / b = ", a / b);   // Division
// console.log("a % b = ", a % b);   // Modulus (Remainder)
// console.log("a ** b = ", a ** b); // Exponentiation (a to the power of b)

// console.log("--a = ", --a); // Pre-decrement: decrement first (a = 4), then print → 4
// console.log("++a = ", ++a); // Pre-increment: increment first (a = 5), then print → 5
// console.log("a-- = ", a--); // Post-decrement: print first (5), then decrement (a = 4)
// console.log("a++ = ", a++); // Post-increment: print first (4), then increment (a = 5)
// console.log("a = ", a );

// Comparison Operators

let comp1 = 5;
let comp2 = "5";

console.log("comp1 == comp2 is :", comp1 == comp2); // Loose equality: compares values after converting types (number == string → true)
console.log("comp1 != comp2 is :", comp1 != comp2); // Loose inequality: false because 5 == "5" after coercion → false
console.log("comp1 === comp2 is :", comp1 === comp2); // Strict equality: compares value AND type (number !== string → false)
console.log("comp1 !== comp2 is :", comp1 !== comp2); // Strict inequality: true because 5 (number) !== "5" (string)
console.log("comp1 > comp2 is :", comp1 > comp2); // Greater than: false because 5 is not greater than "5" (converted to number 5)
console.log("comp1 >= comp2 is :", comp1 >= comp2); // Greater than or equal to: true because 5 is equal to "5" (converted to number 5)
console.log("comp1 < comp2 is :", comp1 < comp2); // Less than: false because 5 is not less than "5"
console.log("comp1 <= comp2 is :", comp1 <= comp2); // Less than or equal to: true because 5 is equal to "5"


// Logical Operators

let logi1 = 5;
let logi2 = 6;

console.log(logi1 < logi2 && logi1 === 5);
console.log(logi1 > logi2 || logi1 === 5);
console.log(logi1 < logi2 && logi1 !== 5);