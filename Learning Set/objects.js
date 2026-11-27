// ============================================================================
// JAVASCRIPT OBJECTS: COMPLETE MASTER GUIDE (BEGINNER TO ADVANCED)
// ============================================================================
// DEFINITION: An Object is a non-primitive data structure used to store 
// collections of related data and functionality as unordered "key: value" pairs.
// - Keys (also called "properties") are strings or Symbols.
// - Values can be ANY data type (strings, numbers, arrays, functions, or other objects).


// ============================================================================
// 1. CREATING & ACCESSING OBJECTS
// ============================================================================

// A. Object Literal (Standard way)
const user = {
  userName: "John Doe",
  userAge: 30,
  userEmail: "john@hotmail.com",
  "home-city": "Karachi" // Keys with spaces or hyphens MUST be wrapped in quotes
};

// B. Dot Notation vs. Bracket Notation
// - Dot Notation (.): Cleanest and most common when you know the exact key name.
console.log("Dot Notation:", user.userName);      // Output: John Doe

// - Bracket Notation ([]): Required when:
//   1) Key has spaces/hyphens, OR 
//   2) Key name is stored dynamically inside a variable.
console.log("Bracket (hyphen):", user["home-city"]); // Output: Karachi

const dynamicKey = "userEmail";
console.log("Bracket (dynamic):", user[dynamicKey]); // Output: john@hotmail.com


// ============================================================================
// 2. ADDING, UPDATING & DELETING PROPERTIES
// ============================================================================
// Note: Even though 'user' is declared with 'const', you CAN modify its properties!

user.userAge = 31;              // Update existing property
user.isVerified = true;         // Add brand-new property
delete user["home-city"];       // Remove a property completely

console.log("Modified Object:", user);


// ============================================================================
// 3. OBJECT METHODS & THE 'this' KEYWORD
// ============================================================================
// DEFINITION: When a function is stored inside an object, it is called a "method".
// 'this' refers to the object that is currently calling the method.

const account = {
  owner: "Sara",
  balance: 5000,

  // Modern shorthand method syntax (no ': function' needed)
  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner}'s new balance: $${this.balance}`);
  },

  // WARNING: Avoid Arrow Functions for object methods that use 'this'!
  // Arrow functions do not have their own 'this' and will fail to read 'this.owner'.
  brokenArrow: () => {
    console.log("Arrow 'this.owner':", this.owner); // Output: undefined
  }
};

account.deposit(1500);  // Output: Sara's new balance: $6500
account.brokenArrow();  // Output: Arrow 'this.owner': undefined


// ============================================================================
// 4. NESTED OBJECTS & OPTIONAL CHAINING (?.)
// ============================================================================

const employee = {
  id: 101,
  name: "Ali",
  address: {
    city: "Karachi",
    zip: "75760"
  }
};

console.log("Nested City:", employee.address.city); // Output: Karachi

// Optional Chaining (?.): Safely checks nested properties without crashing
// if an intermediate object is missing (returns undefined instead of TypeError).
console.log("Missing Dept:", employee.department?.managerName); // Output: undefined


// ============================================================================
// 5. BUILT-IN OBJECT STATIC METHODS (LOOPING & INSPECTING)
// ============================================================================
// Because objects are not directly iterable like arrays, JS gives us built-in
// Object.* helpers to convert their keys or values into arrays.

const car = { brand: "Toyota", model: "Corolla", year: 2025 };

// A. Object.keys() — Returns an array of all property names (keys)
console.log("Keys:", Object.keys(car));       // ["brand", "model", "year"]

// B. Object.values() — Returns an array of all property values
console.log("Values:", Object.values(car));   // ["Toyota", "Corolla", 2025]

// C. Object.entries() — Returns an array of [key, value] pairs (great for looping!)
console.log("Entries:", Object.entries(car)); // [["brand", "Toyota"], ["model", "Corolla"], ["year", 2025]]

for (const [key, value] of Object.entries(car)) {
  console.log(`Loop -> ${key}: ${value}`);
}

// D. Checking if a property exists
console.log("Has 'brand'?", Object.hasOwn(car, "brand")); // true (modern & safe)


// ============================================================================
// 6. MODERN ES6+ OBJECT FEATURES (DESTRUCTURING, SHORTHAND, SPREAD)
// ============================================================================

// A. Property Shorthand & Computed Property Names
const username = "Bilal";
const role = "Admin";
const dynamicField = "status";

const adminUser = {
  username,                 // Shorthand for: username: username
  role,                     // Shorthand for: role: role
  [dynamicField]: "Active"  // Computed key -> creates property status: "Active"
};
console.log("Shorthand & Computed:", adminUser);


// B. Object Destructuring (Unpack properties directly into variables)
const book = { title: "Clean Code", author: "Robert Martin", pages: 464 };

// Extract 'title', rename 'author' to 'writer', and set a default for 'rating'
const { title, author: writer, rating = 5 } = book;
console.log(`Book: "${title}" by ${writer} (Rating: ${rating}/5)`);


// C. Cloning & Merging Objects with Spread (...)
const defaultSettings = { theme: "light", notifications: true };
const userPreferences = { theme: "dark" };

// Later properties overwrite earlier ones!
const finalSettings = { ...defaultSettings, ...userPreferences };
console.log("Merged Settings:", finalSettings); // { theme: 'dark', notifications: true }


// ============================================================================
// 7. PROTECTING OBJECTS (freeze vs. seal)
// ============================================================================

// A. Object.freeze() — Complete lockdown: CANNOT add, delete, or edit properties.
const config = Object.freeze({ apiUrl: "https://api.example.com" });
config.apiUrl = "https://hacked.com"; // Silently ignored (or TypeError in strict mode)
console.log("Frozen URL:", config.apiUrl); // Still "https://api.example.com"

// B. Object.seal() — Structure locked: CANNOT add/delete keys, CAN edit existing values.
const profile = Object.seal({ status: "Online" });
profile.status = "Busy"; // Allowed
profile.newKey = 123;    // Blocked
console.log("Sealed Profile:", profile); // { status: 'Busy' }


// ============================================================================
// QUICK OBJECTS CHEAT SHEET
// ============================================================================
// - Read property:         obj.key  OR  obj["key"] (for dynamic/hyphenated keys)
// - Safe nested read:      obj.nested?.prop
// - Delete property:       delete obj.key
// - Convert to Arrays:     Object.keys(obj), Object.values(obj), Object.entries(obj)
// - Unpack variables:      const { key1, key2 } = obj
// - Clone / Merge:         const copy = { ...obj1, ...obj2 }
// - Lock object:           Object.freeze(obj) [read-only] vs Object.seal(obj) [edit-only]