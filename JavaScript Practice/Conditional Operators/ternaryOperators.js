console.log("The ternary operator is a concise way to perform conditional logic in JavaScript.");
console.log("Syntax: condition ? expressionIfTrue : expressionIfFalse \n");

const age = 18;
const canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.

// Nested ternary operator example
const score = 75;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log(`Grade: ${grade}`); // Output: Grade: C

// Ternary operator for assigning values
const isMember = true;
const price = isMember ? 10 : 15;
console.log(`Ticket price: $${price}`); // Output: Ticket price: $10

// Practice Questions (with hints):

// 1. Check if a number is even or odd.
// Hint: Use the modulus operator (%).

const number = 4;
const result = number % 2 === 0 ? "Even" : "Odd";   
console.log(`The number is: ${result}`); // Output: The number is: Even

// 2. Determine if a string is empty or not.
// Hint: Check string length.

const str = "Hello";
const isEmpty = str.length === 0 ? "String is empty" : "String is not empty";
console.log(isEmpty); // Output: String is not empty

// 3. Assign "Adult" or "Minor" based on age.
// Hint: Age >= 18 is adult.

const userAge = 16;
const ageGroup = userAge >= 18 ? "Minor" : "Adult";
console.log(`User is : ${ageGroup}`); // Output: User is : Adult

// 4. Return the larger of two numbers.
// Hint: Compare two variables.

const num1 = 10;
const num2 = 20;
const maxNumber = num1 > num2 ? "Larger nember us: " + num1 : "Larger number is: " + num2;
console.log(maxNumber); // Output: Larger number is: 20

// 5. Check if a year is a leap year (divisible by 4).
// Hint: Use % operator.

const year = 2020;
const isLeapYear = year % 4 === 0 ? "Leap Year" : "Not a Leap Year";
console.log(isLeapYear); // Output: Leap Year

// 6. Assign "Pass" or "Fail" based on marks (pass if >= 40).
// Hint: Compare marks.

const marks = 45;
const resultMarks = marks >= 40 ? "Pass" : "Fail";  
console.log(`Result: ${resultMarks}`); // Output: Result: Pass

// 7. Check if a number is positive, negative, or zero (nested ternary).
// Hint: Use nested ternary.

const num = -5;
const numStatus = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(`Number is: ${numStatus}`); // Output: Number is: Negative

// 8. Assign discount based on customer type ("member" gets 20%, others 10%).
// Hint: Compare string values.

const customerType = "member";
const discount = customerType === "member" ? "20%" : "10%"; 
console.log(`Discount: ${discount}`); // Output: Discount: 20%

// 9. Check if a character is a vowel or consonant.
// Hint: Use includes() method.

const char = 'a';
const isVowel = "aeiou".includes(char.toLowerCase()) ? "Vowel" : "Consonant";
console.log(`Character is: ${isVowel}`); // Output: Character is: Vowel

// 10. Assign "Morning", "Afternoon", or "Evening" based on hour (nested ternary).
// Hint: Use hour ranges.

const hour = 14;
const timeOfDay = hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening";
console.log(`Time of day: ${timeOfDay}`); // Output: Time of day: Afternoon 

