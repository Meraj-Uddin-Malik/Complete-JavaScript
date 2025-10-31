console.log(`
    A ternary operator is a short form of an if-else statement.
    It’s called ternary because it takes three operands:`);

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(`Can the person vote? ${canVote}`);

//* DSA Challenge
// Write a program that finds the largest of 3 numbers using only ternary operators.
let a = 10,
  b = 25,
  c = 5;
let largest = a >= b ? (a >= c ? a : c) : b >= c ? b : c;
console.log(`The Largest Num Is: ${largest}`);


//* Interview Concept Check
//* What is the difference between switch and if-else?
//* Why do we use break in a switch statement?
//* Can a switch check ranges (like case x > 5:)? Why or why not?