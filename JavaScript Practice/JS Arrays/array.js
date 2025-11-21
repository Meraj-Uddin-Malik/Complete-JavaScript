console.log(
  `An array in JavaScript is a data structure that stores a collection of elements in a single variable, accessible by index. \n`
);

// Example Syntax
// Creating an array
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0]); // Output: 'apple'
// console.log(fruits.length); // Output: 3

//* A1

let fruits1 = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits1.length; i++) {
  console.log(fruits1[i]);
}

//* A2
let fruits2 = ["apple", "banana", "cherry"];
let count = 0;
for (let fruit of fruits2) {
  count++;
}
console.log("Length of the array is: " + count);

//* A3
fruits2[3] = "mango";
console.log(fruits2);

//* A4
fruits2.length = fruits2.length - 1;
console.log(fruits2);

//* A5
let exists = false;
for (let fruit of fruits2) {
  if (fruit === "banana") {
    exists = true;
    break;
  }
}
console.log("Does banana exist in the array? " + exists);

//* A6
let fruits3 = ["apple", "banana", "cherry", "apple", "apple"];
let appleCount = 0;
for (let fruit of fruits3) {
  if (fruit === "apple") {
    appleCount++;
  }
}
console.log("Apple appears " + appleCount + " times in the array.");

//* A7
let fruits4 = ["apple", "banana", "cherry"];
let temp = fruits4[0];
fruits4[0] = fruits4[fruits4.length - 1];
fruits4[fruits4.length - 1] = temp;
console.log(fruits4);

//* A8
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}

console.log(reverseArray(fruits));

//* A9
let largestFruit = "";
for (let fruit of fruits) {
  if (fruit.length > largestFruit.length) {
    largestFruit = fruit;
  }
}
console.log("The largest fruit is: " + largestFruit);

//* A10
let newFruits = [];
for (let fruit of fruits) {
  newFruits.push(fruit);
}
console.log(newFruits);


//* A11
let numbers = [1, 2, 3, 4, 5];
let b = numbers.toString();
console.log(b, typeof b)

let c = numbers.join("-");
console.log(c, typeof c);
numbers.pop(); // removes last element
console.log(numbers)
numbers.push(6); // adds 6 at the end
console.log(numbers);
numbers.shift(); // removes first element
console.log(numbers);