console.log(
  `An array in JavaScript is a data structure that stores a collection of elements in a single variable, accessible by index. \n`
);

// Example Syntax
// Creating an array
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: 'apple'

console.log(" \n Practice Questions");

// 1. Print all elements of the array 'fruits' using a for loop.
//     Hint: Use a loop and access elements by their index.

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2. Find the length of the array 'fruits' without using the length property.
//     Hint: Keep counting until you reach undefined.

let count = 0;
while (fruits[count] !== undefined) {
  count++;
}
console.log(count);

// 3. Add a new fruit "orange" to the end of the array without using push().
//     Hint: Assign it to the next available index.

fruits[count] = "orange";
console.log(fruits);

// 4. Remove the last element from the array without using pop().
//     Hint: Set the last index to undefined or decrease the array size manually.

fruits[count - 1] = undefined;
console.log(fruits);

// 5. Find if "banana" exists in the array without using includes() or indexOf().
//     Hint: Loop through and compare each element.

let exists = false;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "banana") {
    exists = true;
    break;
  }
}
console.log("Does banana exist in the array?", exists);

// 6. Count how many times "apple" appears in the array.
//     Hint: Use a counter variable and loop.

let appleCount = 0;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "apple") {
    appleCount++;
  }
}
console.log("Count of apple in the array:", appleCount);

// 7. Swap the first and last elements of the array.
//     Hint: Use a temporary variable.

let temp = fruits[0];
fruits[0] = fruits[fruits.length - 1];
fruits[fruits.length - 1] = temp;
console.log("Array after swapping first and last elements:", fruits);

// 8. Reverse the array without using reverse().
//     Hint: Swap elements from both ends moving towards the center.

for (let i = 0; i < Math.floor(fruits.length / 2); i++) {
  let temp = fruits[i];
  fruits[i] = fruits[fruits.length - 1 - i];
  fruits[fruits.length - 1 - i] = temp;
}
console.log("Array after reversing:", fruits);

// 9. Find the largest string (by length) in the array. 
//     Hint: Compare lengths in a loop. 
let largestString = "";
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].length > largestString.length) {
    largestString = fruits[i];
  }
}
console.log("Largest string in the array:", largestString);

// 10. Copy all elements from 'fruits' to a new array without using slice() or spread syntax.
//      Hint: Use a loop to assign each element.

const copiedFruits = [];
for (let i = 0; i < fruits.length; i++) {
  copiedFruits[i] = fruits[i];
}
console.log("Copied fruits array:", copiedFruits);
