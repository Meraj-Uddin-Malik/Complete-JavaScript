
// Basic ternary operator syntax:
// condition ? expressionIfTrue : expressionIfFalse

const age = 18;
const canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.

// Nested ternary operator example
const score = 75;
const grade = score >= 90
    ? "A"
    : score >= 80
        ? "B"
        : score >= 70
            ? "C"
            : "D";
console.log(`Grade: ${grade}`); // Output: Grade: C

// Ternary operator for assigning values
const isMember = true;
const price = isMember ? 10 : 15;
console.log(`Ticket price: $${price}`); // Output: Ticket price: $10

// Practice Questions (with hints):

// 1. Check if a number is even or odd.
// Hint: Use the modulus operator (%).
// const num = 7;
// const result = num % 2 === 0 ? "Even" : "Odd";
// console.log(result);

// 2. Determine if a string is empty or not.
// Hint: Check string length.
// const str = "";
// const isEmpty = str.length === 0 ? "Empty" : "Not Empty";
// console.log(isEmpty);

// 3. Assign "Adult" or "Minor" based on age.
// Hint: Age >= 18 is adult.
// const age = 16;
// const status = age >= 18 ? "Adult" : "Minor";
// console.log(status);

// 4. Return the larger of two numbers.
// Hint: Compare two variables.
// const a = 5, b = 8;
// const max = a > b ? a : b;
// console.log(max);

// 5. Check if a year is a leap year (divisible by 4).
// Hint: Use % operator.
// const year = 2024;
// const leap = year % 4 === 0 ? "Leap Year" : "Not Leap Year";
// console.log(leap);

// 6. Assign "Pass" or "Fail" based on marks (pass if >= 40).
// Hint: Compare marks.
// const marks = 35;
// const result = marks >= 40 ? "Pass" : "Fail";
// console.log(result);

// 7. Check if a number is positive, negative, or zero (nested ternary).
// Hint: Use nested ternary.
// const n = -3;
// const type = n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
// console.log(type);

// 8. Assign discount based on customer type ("member" gets 20%, others 10%).
// Hint: Compare string values.
// const customerType = "guest";
// const discount = customerType === "member" ? 20 : 10;
// console.log(`Discount: ${discount}%`);

// 9. Check if a character is a vowel or consonant.
// Hint: Use includes() method.
// const char = "e";
// const isVowel = "aeiou".includes(char.toLowerCase()) ? "Vowel" : "Consonant";
// console.log(isVowel);

// 10. Assign "Morning", "Afternoon", or "Evening" based on hour (nested ternary).
// Hint: Use hour ranges.
// const hour = 15;
// const timeOfDay = hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening";
// console.log(timeOfDay);