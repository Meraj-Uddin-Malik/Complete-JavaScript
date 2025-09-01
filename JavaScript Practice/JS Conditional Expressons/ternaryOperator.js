console.log(`
    A ternary operator is a short form of an if-else statement.
    It’s called ternary because it takes three operands:`);

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(`Can the person vote? ${canVote}`);

/*
Practice Questions (No Solutions)

1. Check if a number is even or odd using a ternary operator.
2. Determine if the temperature is hot or cold using a ternary operator.
3. Check if a string is empty or not using a ternary operator.
4. Determine if a user is an adult using a ternary operator.
5. Check if a number is positive, negative, or zero using nested ternary operators.
*/

// A1
let number = 9;
let isEven = (number % 2 === 0) ? "Even" : "Odd";
console.log(`The number is ${isEven}.`);

// A2
let temperature = 30;
let isHot = (temperature > 25) ? "Hot" : "Cold";
console.log(`The temperature is ${isHot}.`);

// A3
let str = "Meraj";
let isEmpty = (str === "") ? "Empty" : "Not Empty";
console.log(`The string is ${isEmpty}.`);

// A4

let userAge = 30;
let isAdult = (userAge >= 18) ? "Adult" : "Not an Adult";
console.log(`This User is ${isAdult}.`);

// A5
let num = -1;
let isPositive = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log(`The number is ${isPositive}.`);