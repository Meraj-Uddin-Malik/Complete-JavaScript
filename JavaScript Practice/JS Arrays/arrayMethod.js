
console.log("Array Methods Practice Questions");

// 1. Create an array of numbers. Use `.push()` to add a new number at the end.
//     Hint: arr.push(value)
let number = [1,4,3,5,6,8];
number.push(10);
console.log(`New Array After .push Method Is : ${number}`);

// 2. Remove the last element from an array using `.pop()`.
//     Hint: arr.pop()
number.pop();
console.log(`New Array After .pop Method Is : ${number}`);

// 3. Add an element at the beginning of an array using `.unshift()`.
//     Hint: arr.unshift(value)
number.unshift(0);
console.log(`New Array After .unshift Method Is : ${number}`);

// 4. Remove the first element from an array using `.shift()`.
//     Hint: arr.shift()
number.shift();
console.log(`New Array After .shift Method Is : ${number}`);

// 5. Find the index of a specific value in an array using `.indexOf()`.
//     Hint: arr.indexOf(value)

console.log(`Index of 4 in the array is : ${number.indexOf(4)}`);

// 6. Check if an array includes a certain value using `.includes()`.
//     Hint: arr.includes(value)

console.log(`Does the array include 8? : ${number.includes(8)}`);

// 7. Join all elements of an array into a string separated by commas using `.join()`.
//     Hint: arr.join(',')

console.log(`Joined Array Is : ${number.join(',')}`);

// 8. Reverse the order of elements in an array using `.reverse()`.
//     Hint: arr.reverse()

console.log(`Reversed Array Is : ${number.reverse()}`);

// 9. Sort an array of numbers in ascending order using `.sort()`.
//     Hint: arr.sort((a, b) => a - b)

number.sort((a, b) => a - b);
console.log(`Sorted Array Is : ${number}`);

// 10. Create a new array with each element doubled using `.map()`.
//      Hint: arr.map(x => x * 2)

let doubled = number.map(x => x * 2);
console.log(`Doubled Array Is : ${doubled}`);

// 11. Filter out all odd numbers from an array using `.filter()`.
//      Hint: arr.filter(x => x % 2 === 0)

let evens = number.filter(x => x % 2 === 0);
console.log(`Even Numbers Array Is : ${evens}`);

// 12. Find the sum of all numbers in an array using `.reduce()`.
//      Hint: arr.reduce((sum, x) => sum + x, 0)

let sum = number.reduce((sum, x) => sum + x, 0);
console.log(`Sum of Array Elements Is : ${sum}`);

// 13. Find the first element greater than 10 using `.find()`.
//      Hint: arr.find(x => x > 10)

let firstGreaterThan10 = number.find(x => x > 10);
console.log(`First Element Greater Than 10 Is : ${firstGreaterThan10}`);

// 14. Find the index of the first element less than 5 using `.findIndex()`.
//      Hint: arr.findIndex(x => x < 5)

let firstLessThan5Index = number.findIndex(x => x < 5);
console.log(`Index of First Element Less Than 5 Is : ${firstLessThan5Index}`);

// 15. Check if every element in an array is positive using `.every()`.
//      Hint: arr.every(x => x > 0)

console.log(`Does every element in the array is positive? : ${number.every(x => x > 0)}`);

// 16. Check if at least one element is negative using `.some()`.
//      Hint: arr.some(x => x < 0)

console.log(`Does at least one element in the array is negative? : ${number.some(x => x < 0)}`);

// 17. Remove elements from index 2 to 4 using `.splice()`.
//      Hint: arr.splice(2, 3)

number.splice(2, 3);
console.log(`Array After .splice Method Is : ${number}`);

// 18. Copy a portion of an array using `.slice()`.
//      Hint: arr.slice(start, end)

let sliced = number.slice(1, 3);
console.log(`Sliced Array Is : ${sliced}`);

// 19. Flatten a nested array using `.flat()`.
//      Hint: arr.flat()

let nestedArray = [1, 2, [3, 4, [5, 6]]];
let flattened = nestedArray.flat(2);
console.log(`Flattened Array Is : ${flattened}`);

// 20. Convert a string to an array using `.split()`.
//      Hint: str.split(',')

let str = "Hello,World,JavaScript";
let splitArray = str.split(',');
console.log(`Split Array Is : ${splitArray}`);
