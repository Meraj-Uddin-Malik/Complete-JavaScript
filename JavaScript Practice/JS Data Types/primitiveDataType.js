// Improved display of primitives vs objects with examples and output

console.log("=== Primitive Data Types ===\n");

// Primitive examples
const num = 42;
const str = "Hello";
const bool = true;
let undef; // undefined
const nul = null; // typeof null is "object" (historical JS quirk)
const sym = Symbol("id");
const big = 9007199254740991n; // BigInt

console.log(`Number : ${num} (typeof: ${typeof num})`);
console.log(`String : "${str}" (typeof: ${typeof str})`);
console.log(`Boolean: ${bool} (typeof: ${typeof bool})`);
console.log(`Undefined: ${undef} (typeof: ${typeof undef})`);
console.log(`Null: ${nul} (typeof: ${typeof nul})`);
console.log(`Symbol: ${String(sym)} (typeof: ${typeof sym})`);
console.log(`BigInt: ${big} (typeof: ${typeof big})\n`);

console.log(
  "Note: Primitive values are immutable — you cannot change the internal value of a primitive (you can only reassign variables).\n"
);

// Demonstrate immutability (strings are immutable)
const s = "abc";
const changed = s.replace("a", "z"); // returns a new string
console.log(`Original string: "${s}", After replace(): "${changed}"\n`);

console.log("=== Objects (mutable) ===\n");

// Object example
const person = {
  name: "Ada",
  age: 36,
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};

console.log("Person object:", person);
console.log("typeof person:", typeof person);
console.log("Method call:", person.greet());

// Mutating object
person.age = 37;
person.title = "Engineer";
console.log("After mutation:", person, "\n");

// Arrays and functions are also objects (or callable objects)
const arr = [1, 2, 3];
function fn() {
  return "I'm a function";
}

console.log("Array:", arr, "typeof:", typeof arr);
console.log("Function:", fn, "typeof:", typeof fn);

// Summary
console.log(
  "\nSummary:\n- Primitives: Number, String, Boolean, Undefined, Null, Symbol, BigInt (immutable)\n- Objects: collections, mutable, can contain methods (functions as properties)"
);
