// ============================================================================
// JAVASCRIPT ARRAYS: COMPLETE MASTER GUIDE (BEGINNER TO ADVANCED)
// ============================================================================
// DEFINITION: An Array is a special type of object used to store an ordered,
// zero-indexed list of multiple values inside a single variable.
// - Zero-indexed means the 1st item is at index 0, the 2nd is at index 1, etc.
// - JavaScript arrays can hold mixed data types (strings, numbers, objects).


// ============================================================================
// 1. CREATING & ACCESSING ARRAYS
// ============================================================================

// A. Creating an Array (Array Literal — standard way)
const fruits = ["Apple", "Banana", "Mango", "Orange"];
const mixed = [42, "Hello", true, { id: 1 }, [10, 20]]; // Mixed types allowed

// B. Accessing & Updating Elements
console.log("First item:", fruits[0]);                 // Output: Apple
console.log("Last item:", fruits[fruits.length - 1]);  // Output: Orange
console.log("Total length:", fruits.length);           // Output: 4

fruits[1] = "Strawberry"; // Replaces "Banana" (Allowed even with 'const'!)
console.log("Updated fruits:", fruits);


// ============================================================================
// 2. ADDING & REMOVING ELEMENTS (MUTATING METHODS)
// ============================================================================
// DEFINITION: These methods modify ("mutate") the original array directly.

const colors = ["Red", "Green", "Blue"];

// End of array (Fastest)
colors.push("Yellow");     // Adds to the END -> ["Red", "Green", "Blue", "Yellow"]
const removedLast = colors.pop(); // Removes & returns LAST item ("Yellow")

// Start of array
colors.unshift("Purple");  // Adds to the START -> ["Purple", "Red", "Green", "Blue"]
const removedFirst = colors.shift(); // Removes & returns FIRST item ("Purple")

console.log("After push/pop/shift/unshift:", colors); // ["Red", "Green", "Blue"]


// ============================================================================
// 3. SLICE VS. SPLICE (CUTTING & EDITING ARRAYS)
// ============================================================================
// IMPORTANT INTERVIEW & REAL-WORLD DISTINCTION:
// - slice(start, end): Copies a portion into a NEW array (does NOT change original).
// - splice(start, deleteCount, ...newItems): Removes/inserts items IN PLACE (MUTATES original).

const letters = ["a", "b", "c", "d", "e"];

// A. slice() — Non-mutating copy (end index is NOT included)
const sliced = letters.slice(1, 4); // Copies index 1, 2, 3
console.log("Sliced copy:", sliced);     // Output: ["b", "c", "d"]
console.log("Original intact:", letters); // Output: ["a", "b", "c", "d", "e"]

// B. splice() — Mutating edit
// At index 2, delete 1 item ("c"), and insert "X" and "Y"
letters.splice(2, 1, "X", "Y");
console.log("After splice:", letters);   // Output: ["a", "b", "X", "Y", "d", "e"]


// ============================================================================
// 4. SEARCHING & CHECKING ARRAYS
// ============================================================================

const numbers = [10, 25, 30, 45, 30];

// A. Simple Value Searches
console.log("includes(25):", numbers.includes(25)); // true (checks if value exists)
console.log("indexOf(30):", numbers.indexOf(30));   // 2 (first matching index, or -1 if missing)

// B. Condition-Based Searches (For Arrays of Objects or Complex Rules)
const users = [
  { id: 1, name: "Ali", active: true },
  { id: 2, name: "Sara", active: false },
  { id: 3, name: "Bilal", active: true }
];

// find(): Returns the FIRST element that matches the condition (or undefined)
const foundUser = users.find((user) => user.id === 2);
console.log("find():", foundUser); // Output: { id: 2, name: 'Sara', active: false }

// findIndex(): Returns the INDEX of the first match (or -1)
const foundIndex = users.findIndex((user) => user.name === "Bilal");
console.log("findIndex():", foundIndex); // Output: 2

// some(): Returns true if AT LEAST ONE item passes the test
console.log("some() inactive?", users.some((u) => !u.active)); // true

// every(): Returns true ONLY if ALL items pass the test
console.log("every() active?", users.every((u) => u.active));  // false


// ============================================================================
// 5. THE "BIG THREE" TRANSFORMATION METHODS (map, filter, reduce)
// ============================================================================
// DEFINITION: These never mutate the original array—they return a brand new result.
// Used constantly in modern JS, APIs, and React!

const prices = [100, 200, 300, 400];

// A. map() — Transform EVERY item into something new (always same array length)
const discountedPrices = prices.map((price) => price * 0.9); // 10% off each
console.log("map() 10% off:", discountedPrices); // Output: [90, 180, 270, 360]

// B. filter() — Keep ONLY items that pass a true/false condition
const expensiveItems = prices.filter((price) => price > 200);
console.log("filter() > 200:", expensiveItems);  // Output: [300, 400]

// C. reduce() — Boil the entire array down into ONE single value (sum, object, etc.)
// SYNTAX: array.reduce((accumulator, currentItem) => ..., initialValue)
const totalSum = prices.reduce((total, price) => total + price, 0);
console.log("reduce() total:", totalSum);        // Output: 1000


// ============================================================================
// 6. LOOPING, SORTING & COMBINING ARRAYS
// ============================================================================

// A. forEach() — Runs a function for each item (returns undefined; use for side effects)
["Task 1", "Task 2"].forEach((task, index) => {
  console.log(`forEach [${index}]: ${task}`);
});

// B. Sorting Arrays (sort() & toSorted())
// WARNING: Default .sort() converts items to strings! Always pass a compare function for numbers.
const scores = [40, 5, 100, 25];
const ascending = [...scores].sort((a, b) => a - b); // Spread [...] avoids mutating original!
console.log("Sorted Numbers:", ascending); // Output: [5, 25, 40, 100]

// C. Joining & Splitting (Array <-> String)
const words = ["JavaScript", "is", "awesome"];
const sentence = words.join(" "); // Joins array into a string -> "JavaScript is awesome"
console.log("join():", sentence);
console.log("split():", sentence.split(" ")); // Turns string back into an array

// D. Flattening Nested Arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("flat(2):", nested.flat(2)); // Output: [1, 2, 3, 4, 5, 6]


// ============================================================================
// 7. MODERN ES6+ ARRAY FEATURES (DESTRUCTURING & SPREAD)
// ============================================================================

// A. Array Destructuring (Unpack values into variables cleanly)
const coordinates = [24.8607, 67.0011];
const [latitude, longitude] = coordinates;
console.log(`Destructured -> Lat: ${latitude}, Lng: ${longitude}`);

// Skipping items & using Rest (...)
const [first, , ...restOfItems] = [10, 20, 30, 40, 50];
console.log("First:", first, "| Rest:", restOfItems); // First: 10 | Rest: [30, 40, 50]

// B. Merging & Cloning Arrays with Spread (...)
const frontend = ["HTML", "CSS", "JS"];
const backend = ["Node", "Express"];
const fullStack = [...frontend, ...backend, "MongoDB"];
console.log("Full Stack:", fullStack);


// ============================================================================
// QUICK ARRAY METHODS CHEAT SHEET
// ============================================================================
// - Add / Remove End:      push(), pop()
// - Add / Remove Start:    unshift(), shift()
// - Copy vs Edit Middle:   slice() [safe copy]  vs  splice() [mutates]
// - Find 1 Item:           find(), findIndex(), includes(), indexOf()
// - Transform / Filter:    map(), filter(), reduce()
// - Combine / Unpack:      spread [...a, ...b], destructuring [x, y] = arr
// - Check if Array:        Array.isArray(arr) -> true