// Chapter 1 Question 1.
// Q1: Create a Varibale of type string and try to add a number to it. Observe the output and explain it.
let myString = "Add a Number"
let myNumber = 5;
let result = myString + myNumber;
console.log(result);

// Explanation: In JavaScript, when you use the '+' operator with a string and a number, the number is automatically converted to a string and concatenated to the original string. Therefore, the output will be "Add a Number5". This is due to JavaScript's type coercion feature, which allows for implicit type conversion.

// Q2: Use the typeof operator to check the type of the variable created in Q1. What is the output and why?
let typeOfResult = typeof result;
console.log(typeOfResult);

// Output: "string"
// Explanation: The output is "string" because the result of concatenating a string and a number is a string. The typeof operator returns the data type of the variable, which in this case is a string due to the concatenation operation. 

// Q3: Create a const object in javascript and try to change one of its properties. What happens? Explain the behavior.