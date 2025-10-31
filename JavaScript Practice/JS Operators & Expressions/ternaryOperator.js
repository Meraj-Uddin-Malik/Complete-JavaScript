console.log(`
    A ternary operator is a short form of an if-else statement.
    It’s called ternary because it takes three operands:`);

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(`Can the person vote? ${canVote}`);


//* DSA Challenge
// Write a program that finds the largest of 3 numbers using only ternary operators.
let a = 10, b = 25, c = 5;
console.log(Math.max(a) + "The Largest number is " + Math.max(b) + " " + Math.max(c));