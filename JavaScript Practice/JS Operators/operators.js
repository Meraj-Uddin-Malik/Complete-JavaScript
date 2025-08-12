// JavaScript operators are special symbols or keywords used to perform operations on values and variables. They allow you to manipulate data, compare values, assign values, and perform logical operations. Common types include:

// - Arithmetic operators (e.g., +, -, *, /)
// - Comparison operators (e.g., ==, ===, >, <)
// - Logical operators (e.g., &&, ||, !)
// - Assignment operators (e.g., =, +=, -=)
// - Other operators like typeof, instanceof

// They are fundamental to writing expressions and controlling program logic.


console.log("Practice Questions on JavaScript Operators \n");

// 1. Add two numbers: 5 and 10. (Hint: Use + operator)
 console.log(5+10); // This will output 15, as it adds the two numbers together.

// 2. Subtract 7 from 20. (Hint: Use - operator)
console.log(20-7); // This will output 13, as it subtracts 7 from 20.

// 3. Multiply 4 by 6. (Hint: Use * operator)
console.log(4*6); // This will output 24, as it multiplies 4 by 6.

// 4. Divide 25 by 5. (Hint: Use / operator)
console.log(25/5); // This will output 5, as it divides 25 by 5.

// 5. Find the remainder when 17 is divided by 3. (Hint: Use % operator)
console.log(17 % 3); // This will output 2, as it finds the remainder of 17 divided by 3.
// Note: The % operator is known as the modulus operator and returns the remainder of a division operation.

// 6. Increment a variable x by 1. (Hint: Use ++ operator)
let x = 5;
x++;
console.log(x); // This will output 6, as x is incremented by 1.

// 7. Decrement a variable y by 1. (Hint: Use -- operator)
let y = 10;
y--;
console.log(y); // This will output 9, as y is decremented by 1.

// 8. Check if 8 is equal to '8'. (Hint: Use == operator)
console.log(8 == '8'); // This will return true because == checks for value equality, not type.

// 9. Check if 8 is strictly equal to '8'. (Hint: Use === operator)
console.log(8 === '8'); // This will return false because === checks for both value and type equality.

// 10. Check if 15 is greater than 10. (Hint: Use > operator)
console.log(15 > 10); // This will return true, as 15 is indeed greater than 10.


// 11. Check if 7 is less than or equal to 7. (Hint: Use <= operator)
console.log(7 <= 7); // This will return true, as 7 is equal to 7.

// 12. Assign the value 20 to variable z. (Hint: Use = operator)
let z = 20;
console.log(z); // This will output 20, as it assigns the value 20 to z.

// 13. Add 5 to variable z using an assignment operator. (Hint: Use += operator)
z += 5;
console.log(z); // This will output 25, as it adds 5 to the current value of z (20 + 5).

// 14. Subtract 3 from variable z using an assignment operator. (Hint: Use -= operator)
z -= 3;
console.log(z); // This will output 22, as it subtracts 3 from the current value of z (25 - 3).

// 15. Check if both conditions are true: 5 > 3 and 10 < 20. (Hint: Use && operator)
console.log(5 > 3 && 10 < 20); // This will return true, as both conditions are true.

// 16. Check if at least one condition is true: 5 > 10 or 10 < 20. (Hint: Use || operator)
console.log(5 > 10 || 10 < 20); // This will return true, as the second condition (10 < 20) is true.

// 17. Reverse the boolean value of true. (Hint: Use ! operator)
console.log(!true); // This will return false, as it negates the boolean value true.

// 18. Find the type of 42. (Hint: Use typeof operator)
console.log(typeof(42)); // This will output "number", as 42 is a number.

// 19. Check if an array is an instance of Array. (Hint: Use instanceof operator)
let arr = [1, 2, 3];
console.log(arr instanceof Array); // This will return true, as arr is indeed an instance of Array.

// 20. Concatenate two strings: "Hello" and "World". (Hint: Use + operator)
console.log("Hello" + " " + "World");// This will output "Hello World", as it concatenates the two strings with a space in between.   

// 21. Use the ternary operator to check if a number is even or odd. (Hint: Use ? : operator)
let number = 4;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // This will output "Even", as 4 is an even number.