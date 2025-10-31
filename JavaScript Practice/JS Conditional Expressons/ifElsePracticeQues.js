
// Pracice Questions
/*
Practice Questions (No solutions):

1. Write an if-else statement to check if a number is positive, negative, or zero.
2. Write an if-else statement to check if a person is eligible to vote (age >= 18).
3. Write an if-else statement to check if a string is empty or not.
4. Write an if-else statement to check if a number is divisible by 5.
5. Write an if-else statement to check if a year is a leap year.
6. Write an if-else statement to check if a character is a vowel or consonant.
7. Write an if-else statement to check if a number is a multiple of 3 and 7.
8. Write an if-else statement to check if a password length is at least 8 characters.
9. Write an if-else statement to check if a temperature is above, below, or at freezing point (0°C).
10. Write an if-else statement to check if two numbers are equal or not.
*/

// A1

let number = 0;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// A2

let voterAge = 19;

if (voterAge >= 18) {
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible to vote.");   
}

// A3

let emptyString = "no";
if (emptyString === ""){
    console.log("The string is empty.");
} else {
    console.log("The string is not empty.");    
}

// A4
let divisibleNum = 5;

if (divisibleNum % 5 === 0) {
    console.log("The number is divisible by 5.");
} else {
    console.log("The number is not divisible by 5.");
}

// A5


let leapYear = 2025;

if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 400 === 0)) {
    console.log("The year is a leap year.");
} else {
    console.log("The year is not a leap year.");
}


// A6
let character = 'd';
if ('aeiouAEIOU'.includes(character)) {
    console.log(`${character} is a vowel.`);
} else {
    console.log(`${character} is a consonant.`);
}


// A7
let num = 20;  // you can change this number

if (num % 3 === 0 && num % 7 === 0) {
    console.log(num + " is a multiple of both 3 and 7.");
} else if (num % 3 === 0) {
    console.log(num + " is a multiple of 3 only.");
} else if (num % 7 === 0) {
    console.log(num + " is a multiple of 7 only.");
} else {
    console.log(num + " is not a multiple of 3 or 7.");
}


// A8

let password = "12345678";
if(password.length >= 8) {
    console.log("Valid password.");
} else {
    console.log("Invalid password.");
}

// A9

let temperature = 0;

if (temperature > 0) {
    console.log("Above freezing point.");
} else if (temperature < 0) {
    console.log("Below freezing point.");
} else {
    console.log("At freezing point.");
}

// A10

let num1 = 5;
let num2 = 5;

if (num1 === num2) {
    console.log("Numbers are equal.");
} else {
    console.log("Numbers are not equal.");
}
