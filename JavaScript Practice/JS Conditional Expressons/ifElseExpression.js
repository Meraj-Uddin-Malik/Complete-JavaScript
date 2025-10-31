//* In JavaScript, conditional statements help your program make decisions.
//* The "if...else" statement is one of the most common conditional statements.
//* It allows you to execute different blocks of code based on whether a specified condition is true or false.

//* Truthy and Falsy Values
//* JavaScript treats some values as false when used in a condition — these are called falsy values.
//* The falsy values in JavaScript are: false, 0, "", null, undefined, and NaN.
//* All other values are considered truthy.

let value = 0;
if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

//* Quick Practice (Predict Output)
//* Q1:

if ("0") {
  console.log("Yes");
} else {
  console.log("No");
}

//* Q2:
if (null) {
  console.log("Run 1");
} else if (undefined) {
  console.log("Run 2");
} else {
  console.log("Run 3");
}

//* Q3:
let a = "";
let b = " ";
if (a) console.log("a truthy");
if (b) console.log("b truthy");

//* Coding Problem
/*
Write a program that takes one input number and checks:
If it’s positive, print: "Positive Number"
If it’s negative, print: "Negative Number"
Otherwise, print: "Zero"
*/

let inputNumber = 85;

if(inputNumber > 0) {
    console.log("Positive Number");
}
else if(inputNumber < 0) {
    console.log("Negative Number");
}