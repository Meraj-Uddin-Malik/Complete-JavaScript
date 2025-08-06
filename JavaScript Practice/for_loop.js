// // ✅ Challenge 1: Count from 1 to 10
// // Print numbers from 1 to 10 using a for loop.
// for (let counting = 1; counting <= 10; counting++) {
//   console.log(counting);
// }

// // ✅ Challenge 1: Count from 1 to 10
// // Print numbers from 1 to 10 using a for loop.
// for (let num = 2; num <= 20; num++) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

// //💡 Alternative (more efficient):
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
//   }
  

// // ✅ Challenge 3: Countdown
// // Print numbers from 10 to 1 (in reverse order).
// let rev = 10;
// for (; rev >= 1; rev--) {
//   console.log(rev);
// }

// // ✅ Challenge 4: Sum of Numbers (1 to 100)
// // Use a for loop to calculate the sum of numbers from 1 to 100.
// // Print the final result as:
// // "The sum is: 5050"
// let total = 0;
// for (let sum = 1; sum <= 100; sum++) {
//   total += sum;
// }
// console.log("The sum is:", total);

// // ✅ Challenge 5: Loop Through an Array
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
  