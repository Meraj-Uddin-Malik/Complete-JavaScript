// Control Structure In JavaScript, control structures are used to control the flow of execution of the code based on certain conditions. The most common control structures are conditional statements and loops.

// 1. Conditional Statements:
// Conditional statements allow you to execute different blocks of code based on certain conditions. The most common conditional statements are if, else if, and else.

let number = 10;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// 2. Switch Statement:
// The switch statement is used to perform different actions based on different conditions. It is an alternative to using multiple if-else statements.

let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("This is a banana.");
        break;
    case "apple":
        console.log("This is an apple.");
        break;
    case "orange":
        console.log("This is an orange.");
        break;
    default:
        console.log("Unknown fruit.");
}

// 3. Loops:
// Loops are used to execute a block of code repeatedly as long as a specified condition is true. The most common loops in JavaScript are for, while, and do-while loops.

// For Loop:
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}

// While Loop:
let j = 0;
while (j < 5) {
    console.log("While Loop iteration: " + j);
    j++;
}

// Do-While Loop:
let k = 0;
do {
    console.log("Do-While Loop iteration: " + k);
    k++;
} while (k < 5);