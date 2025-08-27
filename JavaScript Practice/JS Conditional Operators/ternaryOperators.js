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

// 2. Determine if a string is empty or not.
// Hint: Check string length.

// 3. Assign "Adult" or "Minor" based on age.
// Hint: Age >= 18 is adult.

// 4. Return the larger of two numbers.
// Hint: Compare two variables.

// 5. Check if a year is a leap year (divisible by 4).
// Hint: Use % operator.

// 6. Assign "Pass" or "Fail" based on marks (pass if >= 40).
// Hint: Compare marks.

// 7. Check if a number is positive, negative, or zero (nested ternary).
// Hint: Use nested ternary.

// 8. Assign discount based on customer type ("member" gets 20%, others 10%).
// Hint: Compare string values.

// 9. Check if a character is a vowel or consonant.
// Hint: Use includes() method.

// 10. Assign "Morning", "Afternoon", or "Evening" based on hour (nested ternary).
// Hint: Use hour ranges.
