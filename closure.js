// ============================================================================
// JAVASCRIPT CLOSURES: COMPLETE MASTER GUIDE (BEGINNER TO ADVANCED)
// ============================================================================
// DEFINITION: A closure is created when an inner function "remembers" and 
// continues to access variables from its outer (lexical) scope—even after 
// the outer function has finished executing and exited the call stack.
//
// EVERY closure has access to 3 scopes:
// 1. Its own local scope (variables defined inside itself)
// 2. Its outer parent function's scope (parameters & variables)
// 3. The global scope


// ============================================================================
// 1. BASIC CLOSURE EXAMPLE (HOW IT WORKS)
// ============================================================================

function outerFunction(outerVariable) {
  // 'outerVariable' lives inside outerFunction's lexical environment.
  return function innerFunction(innerVariable) {
    console.log("Outer Variable:", outerVariable); // Remembered from outer scope!
    console.log("Inner Variable:", innerVariable); // From its own local scope
  };
}

// outerFunction runs and finishes here, yet 'outside' is NOT garbage-collected
// because innerFunction still holds a live reference to it.
const newFunction = outerFunction("outside");
newFunction("inside");
// Output:
// Outer Variable: outside
// Inner Variable: inside


// ============================================================================
// 2. REAL-WORLD USE CASE #1: DATA PRIVACY & ENCAPSULATION
// ============================================================================
// DEFINITION: JavaScript does not have a 'private' keyword for standalone 
// functions. Closures let you hide sensitive state so outside code can ONLY
// interact with it through approved methods.

function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable — inaccessible directly!

  return {
    deposit(amount) {
      if (amount > 0) balance += amount;
      console.log(`Deposited $${amount} | Balance: $${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds!");
        return;
      }
      balance -= amount;
      console.log(`Withdrew $${amount} | Balance: $${balance}`);
    },
    getBalance() {
      return balance;
    }
  };
}

const myAccount = createBankAccount(1000);
myAccount.deposit(500);              // Output: Deposited $500 | Balance: $1500
myAccount.withdraw(200);             // Output: Withdrew $200 | Balance: $1300
console.log(myAccount.balance);      // Output: undefined (completely private!)
console.log(myAccount.getBalance()); // Output: 1300


// ============================================================================
// 3. REAL-WORLD USE CASE #2: FUNCTION FACTORIES (CUSTOMIZED FUNCTIONS)
// ============================================================================
// DEFINITION: Using an outer function to configure and return specialized
// inner functions with pre-set settings.

function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier; // Remembers 'multiplier'
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 5:", double(5)); // Output: 10
console.log("Triple 5:", triple(5)); // Output: 15


// ============================================================================
// 4. REAL-WORLD USE CASE #3: STATEFUL UTILITY FUNCTIONS (RUN ONCE)
// ============================================================================
// DEFINITION: Remembering whether an action has already happened across 
// multiple calls without using global variables.

function runOnce(fn) {
  let hasRun = false; // Flag preserved inside closure

  return function(...args) {
    if (hasRun) {
      console.log("Blocked: Already executed once!");
      return;
    }
    hasRun = true;
    return fn(...args);
  };
}

const initializeApp = runOnce(() => console.log("App Initialized!"));
initializeApp(); // Output: App Initialized!
initializeApp(); // Output: Blocked: Already executed once!


// ============================================================================
// 5. CLASSIC INTERVIEW TRAP: CLOSURES INSIDE LOOPS ('var' vs 'let')
// ============================================================================
// PROBLEM WITH 'var': 'var' is function-scoped, so all 3 timers share the 
// SAME 'i' variable, which finishes at 3 before any timer runs.

for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log("Loop with var:", i); // Prints: 3, 3, 3
  }, 100);
}

// SOLUTION WITH 'let': 'let' is block-scoped, creating a brand-new 'j' binding
// for every single loop iteration so each closure remembers its own number.

for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log("Loop with let:", j); // Prints: 0, 1, 2
  }, 200);
}


// ============================================================================
// 6. PERFORMANCE & MEMORY NOTE (GARBAGE COLLECTION)
// ============================================================================
// - Because closures keep outer variables alive in memory, creating thousands 
//   of unnecessary closures holding huge arrays/DOM nodes can cause memory leaks.
// - To release a closure's memory when finished, set its reference to null:
//   myAccount = null;


// ============================================================================
// QUICK CLOSURES CHEAT SHEET
// ============================================================================
// - What is it?     Inner function + its remembered outer lexical scope.
// - Does it copy?   NO — it keeps a LIVE reference (changes update the variable).
// - Why use it?     Private variables, function factories, memoization/run-once,
//                   event handlers, and React hooks (useState uses closures!).
// - Loop rule:      Always use 'let' (not 'var') inside loops with async callbacks.