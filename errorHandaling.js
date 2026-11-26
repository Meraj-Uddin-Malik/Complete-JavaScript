// ============================================================================
// JAVASCRIPT ERROR HANDLING: COMPLETE MASTER GUIDE (BEGINNER TO ADVANCED)
// ============================================================================
// DEFINITION: Error handling allows your program to intercept runtime mistakes,
// respond gracefully (e.g., show a user-friendly message), and keep running
// instead of crashing the entire application.


// ============================================================================
// 1. THE CORE STRUCTURE: try / catch / finally
// ============================================================================
// - try:     Wrap the risky code that might fail here.
// - catch:   Runs ONLY if an error is thrown inside 'try'. Receives the Error object.
// - finally: Runs ALWAYS at the end—whether an error happened or not (great for cleanup).

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      // 'throw' manually triggers an error and jumps straight to 'catch'
      throw new Error("Cannot divide by zero!");
    }
    const result = a / b;
    console.log("Result:", result);
    return result;
  } catch (error) {
    // Every built-in Error object has 3 standard properties:
    console.error("Error Name:", error.name);       // e.g., "Error"
    console.error("Error Message:", error.message); // e.g., "Cannot divide by zero!"
    // console.error("Stack Trace:", error.stack);  // Shows exact file & line numbers
  } finally {
    console.log("Calculation attempt finished (finally always runs).");
  }
}

divideNumbers(10, 2); // Output: Result: 5 -> Calculation attempt finished
divideNumbers(10, 0); // Output: Error Name: Error -> Cannot divide by zero! -> finished


// ============================================================================
// 2. YOUR EXAMPLE: CLOSURE + ERROR HANDLING (WITH RETRY INSIGHT)
// ============================================================================
// Note: Placing 'hasRun = true' AFTER 'fn(...args)' lets the user retry if it fails.
// Placing it BEFORE 'fn(...args)' permanently locks it even after a crash.

function runOnce(fn) {
  let hasRun = false;

  return function(...args) {
    if (hasRun) {
      console.log("Blocked: This function can only be run once!");
      return;
    }

    try {
      const result = fn(...args);
      hasRun = true; // Only marks as complete if fn() succeeded without throwing!
      return result;
    } catch (error) {
      console.error("Initialization Error:", error.message);
    }
  };
}

let attempt = 0;
const initializeApp = runOnce(() => {
  attempt++;
  if (attempt === 1) throw new Error("Network timeout on first try!");
  console.log("App initialized successfully on retry!");
});

initializeApp(); // Output: Initialization Error: Network timeout on first try!
initializeApp(); // Output: App initialized successfully on retry!
initializeApp(); // Output: Blocked: This function can only be run once!


// ============================================================================
// 3. COMMON BUILT-IN JAVASCRIPT ERROR TYPES
// ============================================================================
// JavaScript automatically throws specific error classes depending on the mistake:
//
// - SyntaxError:    Invalid JS grammar (caught before code even runs).
// - ReferenceError: Accessing a variable that does not exist.
// - TypeError:      Performing an operation on the wrong type (e.g., null.toUpperCase()).
// - RangeError:     A number is outside allowed limits (e.g., new Array(-1)).
// - URIError:       Invalid characters passed to decodeURI().

try {
  const user = null;
  console.log(user.name); // Throws TypeError
} catch (err) {
  if (err instanceof TypeError) {
    console.log("Handled a TypeError specifically:", err.message);
  } else {
    throw err; // Re-throw unexpected errors so they aren't hidden!
  }
}


// ============================================================================
// 4. CUSTOM ERROR CLASSES (PRODUCTION PATTERN)
// ============================================================================
// DEFINITION: Extending the built-in 'Error' class lets you attach extra details
// like HTTP status codes or error categories.

class ValidationError extends Error {
  constructor(message, field) {
    super(message);              // Calls parent Error constructor
    this.name = "ValidationError";
    this.field = field;          // Custom property
  }
}

function registerUser(email) {
  try {
    if (!email.includes("@")) {
      throw new ValidationError("Invalid email format", "email");
    }
    console.log("User registered:", email);
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log(`[${err.name}] Field '${err.field}': ${err.message}`);
    }
  }
}

registerUser("invalid-email.com"); // Output: [ValidationError] Field 'email': Invalid email format


// ============================================================================
// 5. ASYNCHRONOUS ERROR HANDLING (IMPORTANT GOTCHA!)
// ============================================================================
// CRITICAL RULE: Standard try/catch CANNOT catch errors inside async callbacks 
// like setTimeout unless the try/catch is INSIDE the callback, OR you use async/await.

// A. Using try/catch with async/await (Modern standard)
async function fetchData() {
  try {
    const failedRequest = Promise.reject(new Error("404 Server Not Found"));
    const data = await failedRequest; // 'await' unwraps the rejection so catch() grabs it!
    console.log(data);
  } catch (error) {
    console.log("Async Error Caught:", error.message); // Output: 404 Server Not Found
  }
}

fetchData();

// B. Using .catch() with Promises
Promise.reject(new Error("Promise failed"))
  .catch((err) => console.log("Promise .catch():", err.message));


// ============================================================================
// QUICK ERROR HANDLING CHEAT SHEET
// ============================================================================
// - Basic handling:      try { ... } catch (err) { ... } finally { ... }
// - Manual error:        throw new Error("Something went wrong")
// - Inspect error:       err.name, err.message, err.stack
// - Check error type:    if (err instanceof TypeError) { ... }
// - Async functions:     Always wrap 'await' calls inside try / catch
// - Golden rule:         Never leave catch (err) {} completely empty—always log or handle!