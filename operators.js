// ============================================================================
// JAVASCRIPT OPERATORS: COMPLETE MASTER GUIDE (BEGINNER TO ADVANCED)
// ============================================================================
// DEFINITION: Operators are special symbols or keywords that perform operations 
// on one or more values ("operands") and produce a new result.


// ============================================================================
// 1. ARITHMETIC OPERATORS (MATH)
// ============================================================================
// DEFINITION: Perform standard mathematical calculations on numbers.
let a = 10;
let b = 5;

console.log("Addition:", a + b);        // 15
console.log("Subtraction:", a - b);     // 5
console.log("Multiplication:", a * b);  // 50
console.log("Division:", a / b);        // 2
console.log("Modulus (Remainder):", a % b); // 0 (great for checking even/odd: n % 2 === 0)
console.log("Exponentiation:", a ** b); // 100000 (10 to the power of 5)

// Increment (++) and Decrement (--)
// - Postfix (count++): Returns the current value FIRST, then adds 1.
// - Prefix (++count): Adds 1 FIRST, then returns the new value.
let count = 5;
console.log("Postfix (count++):", count++); // Output: 5 (count is now 6 in memory)
console.log("Prefix (++count):", ++count);  // Output: 7 (added 1 first, then printed)


// ============================================================================
// 2. ASSIGNMENT OPERATORS (STORING & UPDATING VALUES)
// ============================================================================
// DEFINITION: Assign values to variables, often combining math + assignment.
let x = 10;

x += 5;  // Same as: x = x + 5  -> 15
x -= 3;  // Same as: x = x - 3  -> 12
x *= 2;  // Same as: x = x * 2  -> 24
x /= 4;  // Same as: x = x / 4  -> 6
x %= 4;  // Same as: x = x % 4  -> 2
x **= 3; // Same as: x = x ** 3 -> 8
console.log("Final Assignment x:", x); // Output: 8


// ============================================================================
// 3. COMPARISON OPERATORS (ALWAYS RETURN TRUE OR FALSE)
// ============================================================================
// DEFINITION: Compare two values and evaluate to a Boolean (true or false).

// CRITICAL RULE: Loose Equality (==) vs. Strict Equality (===)
// - ==  (Loose): Converts types behind the scenes before comparing (AVOID!).
// - === (Strict): Checks BOTH value AND data type (ALWAYS USE THIS!).
console.log("Loose (5 == '5'):", 5 == "5");     // true  (unsafe type conversion)
console.log("Strict (5 === '5'):", 5 === "5");  // false (different types: number vs string)
console.log("Strict Not Equal:", 5 !== "5");    // true

// Relational Comparisons:
let num1 = 10;
let num2 = 20;
console.log("Greater than:", num1 > num2);          // false
console.log("Less than:", num1 < num2);             // true
console.log("Greater or equal:", num1 >= 10);       // true
console.log("Less or equal:", num1 <= num2);        // true


// ============================================================================
// 4. LOGICAL OPERATORS (COMBINING CONDITIONS)
// ============================================================================
// DEFINITION: Combine or invert Boolean expressions.
let isLoggedIn = true;
let isAdmin = false;

// && (Logical AND): True ONLY if BOTH sides are true.
console.log("AND (&&):", isLoggedIn && isAdmin); // false

// || (Logical OR): True if AT LEAST ONE side is true.
console.log("OR (||):", isLoggedIn || isAdmin);  // true

// ! (Logical NOT): Flips true to false, and false to true.
console.log("NOT (!):", !isLoggedIn);            // false


// ============================================================================
// 5. STRING OPERATORS & TYPE COERCION QUIRK
// ============================================================================
// DEFINITION: The '+' operator joins ("concatenates") strings together.
let str1 = "Hello, ";
let str2 = "World!";
console.log(str1 + str2); // Output: Hello, World!

// FAMOUS JS QUIRK (+ vs - with Strings):
// '+' favors strings (joins them), while '-', '*', '/' force numbers!
console.log("'5' + 3 =", "5" + 3); // Output: "53" (string concatenation)
console.log("'5' - 3 =", "5" - 3); // Output: 2    (numeric subtraction)


// ============================================================================
// 6. TERNARY & MODERN SAFETY OPERATORS (? :, ??, ?.)
// ============================================================================

// A. Ternary Operator (? :)
// DEFINITION: One-line shorthand for an if/else statement.
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can Vote:", canVote); // Output: Yes

// B. Nullish Coalescing Operator (??)
// DEFINITION: Provides a default fallback ONLY if the left value is null or undefined
// (unlike ||, it does NOT override 0 or "").
let score = 0;
console.log("Nullish Coalescing:", score ?? 50); // Output: 0

// C. Optional Chaining Operator (?.)
// DEFINITION: Safely reads nested object properties without crashing if an 
// intermediate property is null or undefined (returns undefined instead).
const userProfile = { name: "Ali" };
console.log("Safe Access:", userProfile.address?.city); // Output: undefined (no crash!)


// ============================================================================
// 7. SPREAD & REST OPERATOR (...)
// ============================================================================
// DEFINITION: Three dots (...) either expand elements out (Spread) or gather 
// remaining elements together (Rest).

// Spread: Copy or merge arrays/objects cleanly
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // Expands arr1 into [1, 2, 3, 4]
console.log("Spread Array:", arr2);


// ============================================================================
// 8. TYPE & PROPERTY INSPECTION OPERATORS
// ============================================================================
const car = { brand: "Honda", year: 2025 };

console.log("typeof:", typeof "Hello");           // "string"
console.log("instanceof:", [1, 2] instanceof Array); // true
console.log("'in' operator:", "brand" in car);    // true (checks if key exists in object)

delete car.year; // 'delete' removes a property from an object
console.log("After delete:", car); // Output: { brand: 'Honda' }


// ============================================================================
// QUICK OPERATOR PRECEDENCE CHEAT SHEET (ORDER OF EXECUTION)
// ============================================================================
// 1. Parentheses:        ( )        -> Highest priority (always runs first)
// 2. Unary / Postfix:    ++, --, !, typeof
// 3. Exponentiation:     **
// 4. Multiply / Divide:  *, /, %
// 5. Add / Subtract:     +, -
// 6. Comparisons:        <, <=, >, >=, ===, !==
// 7. Logical AND / OR:   && runs BEFORE ||
// 8. Assignment:         =, +=, -=  -> Lowest priority (runs last)