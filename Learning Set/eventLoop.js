// ============================================================================
// JAVASCRIPT EVENT LOOP: COMPLETE MASTER GUIDE (TOPIC #14)
// ============================================================================
// DEFINITION: JavaScript is "single-threaded" (it has ONE Call Stack and can
// only execute one line of synchronous code at a time). The Event Loop is the
// browser/Node.js mechanism that lets JavaScript perform non-blocking async
// operations (timers, API calls, UI events) without freezing the main thread.
//
// THE 4 CORE PIECES OF JAVASCRIPT CONCURRENCY:
// 1. Call Stack:      Where synchronous functions are pushed and executed (LIFO).
// 2. Web/Node APIs:   Browser/runtime background threads (setTimeout, fetch, DOM).
// 3. Microtask Queue: High-priority async queue (Promises, queueMicrotask, MutationObserver).
// 4. Macrotask Queue: Lower-priority async queue (setTimeout, setInterval, I/O, UI events).


// ============================================================================
// 1. SYNCHRONOUS CALL STACK (LIFO: LAST-IN, FIRST-OUT)
// ============================================================================
// DEFINITION: Functions stack on top of each other as they are called, and pop
// off from the top as they return.

function third() {
  console.log("3. Inside third()");
}

function second() {
  third();
  console.log("2. Back inside second()");
}

function first() {
  second();
  console.log("1. Back inside first()");
}

first();
// Execution Order:
// -> 3. Inside third()
// -> 2. Back inside second()
// -> 1. Back inside first()


// ============================================================================
// 2. THE GOLDEN RULE OF EVENT LOOP PRIORITY
// ============================================================================
// Whenever the Call Stack becomes completely empty, the Event Loop follows this
// exact priority order on every single "tick":
//
//   STEP 1: Run ALL synchronous code on the Call Stack first.
//   STEP 2: Drain the ENTIRE Microtask Queue (every single Promise .then / await).
//           (Even if a microtask adds another microtask, run it right away!)
//   STEP 3: Pick ONE task from the Macrotask Queue (e.g., setTimeout), run it,
//           and then immediately check the Microtask Queue again!


// ============================================================================
// 3. CLASSIC EXECUTION ORDER DEMO (SYNC vs. MICROTASK vs. MACROTASK)
// ============================================================================

console.log("A. Sync Start");

// Macrotask (goes to Web API -> Macrotask Queue)
setTimeout(() => {
  console.log("D. Macrotask: setTimeout (0ms)");
}, 0);

// Microtask (goes straight to Microtask Queue)
Promise.resolve().then(() => {
  console.log("C. Microtask: Promise.then()");
});

console.log("B. Sync End");

// EXACT OUTPUT ORDER:
// A. Sync Start
// B. Sync End
// C. Microtask: Promise.then()  <-- Beats setTimeout(0) because Microtasks have priority!
// D. Macrotask: setTimeout (0ms)


// ============================================================================
// 4. ASYNC / AWAIT UNDER THE HOOD (IT'S JUST PROMISES + MICROTASKS!)
// ============================================================================
// DEFINITION: Everything BEFORE 'await' runs synchronously. Everything AFTER
// 'await' is paused and placed into the Microtask Queue once the Promise settles.

async function demoAsync() {
  console.log("2. Inside async function (before await - SYNC)");

  await Promise.resolve(); // Pauses here; remaining lines go to Microtask Queue

  console.log("4. Inside async function (after await - MICROTASK)");
}

console.log("1. Before calling demoAsync");
demoAsync();
console.log("3. After calling demoAsync (SYNC continues immediately)");

// EXACT OUTPUT ORDER:
// 1. Before calling demoAsync
// 2. Inside async function (before await - SYNC)
// 3. After calling demoAsync (SYNC continues immediately)
// 4. Inside async function (after await - MICROTASK)


// ============================================================================
// 5. NESTED MICROTASKS VS. MACROTASKS (MAANG INTERVIEW CLASSIC)
// ============================================================================

setTimeout(() => {
  console.log("Timer 1");
  Promise.resolve().then(() => {
    console.log("Promise inside Timer 1"); // Runs BEFORE Timer 2!
  });
}, 0);

setTimeout(() => {
  console.log("Timer 2");
}, 0);

// OUTPUT ORDER:
// -> Timer 1
// -> Promise inside Timer 1  (Microtasks always drain between Macrotasks!)
// -> Timer 2


// ============================================================================
// 6. queueMicrotask() & BLOCKING THE EVENT LOOP WARNING
// ============================================================================

// A. queueMicrotask(): Explicitly schedule a high-priority microtask
queueMicrotask(() => {
  console.log("Explicit Microtask executed!");
});

// B. Blocking Warning (Never write heavy infinite/long loops on the main thread)
// Because JS has only ONE Call Stack, a synchronous loop taking 5 seconds
// freezes button clicks, animations, and timers until the Call Stack clears.
function heavyTask() {
  const start = Date.now();
  while (Date.now() - start < 50) {
    // Blocks the Call Stack for 50ms
  }
  console.log("Heavy synchronous task finished.");
}
heavyTask();


// ============================================================================
// QUICK EVENT LOOP CHEAT SHEET
// ============================================================================
// - Priority 1 (Immediate):   Synchronous code (Call Stack)
// - Priority 2 (Next):        Microtasks -> Promise.then/catch/finally, await, queueMicrotask
// - Priority 3 (After):       Macrotasks -> setTimeout, setInterval, DOM events, I/O
// - Key Rule:                 setTimeout(fn, 0) means "minimum 0ms AFTER Call Stack
//                             and ALL Microtasks are empty"—never truly instant!