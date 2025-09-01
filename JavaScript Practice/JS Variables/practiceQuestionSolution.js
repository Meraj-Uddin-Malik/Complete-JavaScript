// A1

let age = 30;
console.log(age);

// A2
age = 20;
console.log(age);

// A3
let firstName = "Meraj";
console.log(firstName);

// A4
let userInfo = `My name is ${firstName} and I am ${age} years old.`;
let userInfo1 =
  "My name is " + firstName + " and My age is " + age + "years old";
console.log(userInfo);
console.log(userInfo1);

// A5

console.log("Var is function-scoped and mutable"); // can be redeclared and updated
console.log("Let is block-scoped and mutable"); // can be updated but not redeclared
console.log("Const is block-scoped and immutable"); // cannot be updated or redeclared

var myName = "John";
myName = "Doe"; // Updated
var myName = "Smith"; // Redeclared

console.log(`This Is Var Example: ${myName}`); // Output: Smith

let myAge = 25;
myAge = 30;

// let myAge = 35; // Redeclared Not Allowed
console.log(`My Age Is: ${myAge}`);

const myBirthYear = 1995;
try {
  myBirthYear = 1996; // This will throw an error
  console.log(`My Birth Year Is: ${myBirthYear}`);
} catch {
  console.log("Error: Assignment to constant variable.");
}
console.log(`My Birth Year Is: ${myBirthYear}`);

// A6

const PI = 3.14;
console.log(PI);

// A7
try {
  PI = 3.14159; // This will throw an error
} catch {
  console.log("Error: Assignment to constant variable.");
}

// A8
var x = 5;
let y = 10;
const z = 15;

x = x + y; // 5 + 10 = 15
y = y + z; // 10 + 15 = 25

console.log(x); // Output: 15
console.log(y); // Output: 25

try {
  z = z + x;
} catch (error) {
  console.log("Error: Assignment to constant variable.");
}

// A9

let undefinedVariable;
console.log(undefinedVariable); // Output: undefined

// A10
// console.log("Hoisting means to lift variables to the top of their scope.");

// A11
var a = 10;
let b = 20;
const c = 30;
console.log(a + b + c);

// A12

a1 = 20;
b1 = 10;

console.log("Before Swap: a =", a1, ", b =", b1);

a1 = a1 + b1; // a1 = 20 + 10 = 30
b1 = a1 - b1; // b1 = 30 - 10 = 20
a1 = a1 - b1; // a1 = 30 - 20 = 10

console.log("After Swap: a =", a1, ", b =", b1);
