// ============================================================================
// JAVASCRIPT CONTROL STRUCTURES: COMPLETE MASTER GUIDE
// ============================================================================
// DEFINITION: Control structures dictate the order ("flow") in which JavaScript
// executes lines of code—allowing your program to make decisions, repeat tasks,
// and handle errors gracefully.


// ============================================================================
// 1. CONDITIONAL STATEMENTS (MAKING DECISIONS)
// ============================================================================

// A. if / else if / else
// DEFINITION: Executes different code blocks depending on whether a condition
// evaluates to true or false.
let number = 10;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}


// B. Switch Statement
// DEFINITION: Compares one value against multiple exact 'case' options using 
// strict equality (===).
// IMPORTANT: Always include 'break' at the end of each case, otherwise JS will
// "fall through" and run the next cases too!
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
    console.log("Unknown fruit."); // Runs if no case matches
}


// C. Ternary Operator (? :) — Shorthand if/else
// DEFINITION: A compact one-line conditional operator.
// SYNTAX: condition ? valueIfTrue : valueIfFalse
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Ternary Result:", status); // Output: Adult


// D. Truthy / Falsy & Short-Circuit Fallbacks (|| and ??)
// DEFINITION: In JS, values like 0, "", null, undefined, and NaN count as "falsy".
// - Logical OR (||): Returns the right side if the left side is ANY falsy value.
// - Nullish Coalescing (??): Returns the right side ONLY if left is null or undefined.
let userScore = 0;
console.log("Using ||:", userScore || 100); // Output: 100 (treats 0 as missing!)
console.log("Using ??:", userScore ?? 100); // Output: 0   (keeps valid 0!)


// ============================================================================
// 2. CLASSIC LOOPS (REPEATING CODE)
// ============================================================================

// A. For Loop
// DEFINITION: Repeats code a specific number of times. Best when you know the 
// exact start, end, and step count.
// SYNTAX: for (initialization; condition; increment)
for (let i = 0; i < 5; i++) {
  console.log("For Loop iteration:", i); // Runs for 0, 1, 2, 3, 4
}


// B. While Loop
// DEFINITION: Repeats code as long as the condition is true. Checks the 
// condition BEFORE running. Best when you don't know how many loops it will take.
let j = 0;
while (j < 5) {
  console.log("While Loop iteration:", j);
  j++;
}


// C. Do-While Loop
// DEFINITION: Runs the code block ONCE first, then checks the condition. 
// Guaranteed to execute at least one time even if the condition is initially false.
let k = 10;
do {
  console.log("Do-While ran even though k is 10:", k);
  k++;
} while (k < 5);


// ============================================================================
// 3. MODERN ITERATION LOOPS (ARRAYS & OBJECTS)
// ============================================================================

// A. for...of Loop (For Arrays, Strings, Sets, Maps)
// DEFINITION: Directly loops over the VALUES of an iterable collection without 
// needing index numbers.
const colors = ["Red", "Green", "Blue"];
for (const color of colors) {
  console.log("for...of value:", color); // Outputs: Red, Green, Blue
}


// B. for...in Loop (For Object Keys/Properties)
// DEFINITION: Loops over the enumerable property KEYS of an object.
// (Avoid using this on arrays—use for...of for arrays instead).
const car = { brand: "Toyota", model: "Corolla", year: 2024 };
for (const key in car) {
  console.log(`for...in -> ${key}: ${car[key]}`);
}


// ============================================================================
// 4. LOOP CONTROL KEYWORDS (break & continue)
// ============================================================================

// - break: Immediately exits the entire loop.
// - continue: Skips ONLY the current iteration and jumps to the next one.
for (let n = 1; n <= 5; n++) {
  if (n === 3) continue; // Skips printing 3
  if (n === 5) break;    // Stops the loop completely when n hits 5
  console.log("Loop control n:", n); // Output: 1, 2, 4
}


// ============================================================================
// 5. ERROR HANDLING FLOW (try / catch / finally)
// ============================================================================
// DEFINITION: Prevents runtime errors from crashing your entire script.
// - try: Code to attempt running.
// - catch: Runs ONLY if an error occurs inside 'try'.
// - finally: Always runs at the end, whether an error happened or not.
try {
  console.log("Trying risky operation...");
  // Simulate an error by calling a function that doesn't exist:
  nonExistentFunction(); 
} catch (error) {
  console.log("Caught an error safely:", error.message);
} finally {
  console.log("Cleanup complete (finally block always runs).");
}


// ============================================================================
// QUICK SUMMARY CHEAT SHEET
// ============================================================================
// - Choose 1 path:         if / else if / else, ternary (? :)
// - Match exact values:    switch (don't forget 'break'!)
// - Counted repetition:    for loop
// - Condition repetition:  while (checks first), do...while (runs at least once)
// - Loop Array values:     for...of
// - Loop Object keys:      for...in
// - Control loops:         break (exit), continue (skip)
// - Handle crashes:        try / catch / finally