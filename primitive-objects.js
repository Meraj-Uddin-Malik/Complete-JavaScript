// NNSSBBU = Null , Number, String, Symbol, Boolean, BigInt, Undefined

let a = null; // Null
let b = 42; // Number
let c = "Hello, World!"; // String
let d = Symbol("unique"); // Symbol
let e = true; // Boolean
let f = 9007199254740991n; // BigInt
let g; // Undefined

// Example of variable usage
console.log("Null: " + a); // Output: Null: null
console.log("Number: " + b); // Output: Number: 42
console.log("String: " + c); // Output: String: Hello, World!
console.log("Symbol: " + d.toString()); // Output: Symbol: Symbol(unique)
console.log("Boolean: " + e); // Output: Boolean: true
console.log("BigInt: " + typeof f + " " + f); // Output: BigInt: 9007199254740991
console.log("Undefined: " + g); // Output: Undefined: undefined 



//Objects
const Item = {
    "name": "Laptop",
    "brand": "Dell",
    "price": 1200,
    "isAvailable": true
}

console.log("Item Name: " + Item.name); // Output: Item Name: Laptop
// console.log(Item["name"]); // Output: Item Name: Laptop

console.log("Item Brand: " + Item.brand); // Output: Item Brand: Dell
console.log("Item Price: " + Item.price); // Output: Item Price: 1200
console.log("Item Availability: " + Item.isAvailable); // Output: Item Availability: true

// Updating object properties
Item.price = 1000; // Updating the price property
console.log("Updated Item Price: " + Item.price); // Output: Updated Item Price: 1000

// Adding new properties to the object
Item.color = "Black"; // Adding a new property color
console.log("Item Color: " + Item.color); // Output: Item Color: Black

// Deleting a property from the object
delete Item.isAvailable; // Deleting the isAvailable property
console.log("Item Availability after deletion: " + Item.isAvailable); // Output: Item Availability after deletion: undefined

