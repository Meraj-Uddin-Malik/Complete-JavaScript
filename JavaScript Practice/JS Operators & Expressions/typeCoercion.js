//* JS is dynamically typed, so it sometimes converts values automatically.

console.log(1 + "1"); // "11" (number 1 is coerced to string "1")
console.log("5" - 2); // 3 (string "5" is coerced to number 5)
console.log(true + 1); // 2 (true is coerced to number 1)
console.log(false + 5); // 5 (false is coerced to number 0)
console.log(10 == "10"); // true (string "10" is coerced to number 10)
console.log("10" === 10); // false (no coercion, different types)


//* Problem 1 — Output Prediction
//* Predict the output and explain:
console.log(5 + "5"); //* "55" (number 5 is coerced to string "5")
console.log("10" - "2"); //* 8 (both strings are coerced to numbers)
console.log(10 + true); //* 11 (true is coerced to number 1)
console.log(10 == "10"); //* true (string "10" is coerced to number 10)
console.log(10 === "10"); //* false (no coercion, different types)

//* Problem 2 — DSA Logic
//* Write a program that checks whether a given year is a leap year.
let year = 2023;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year")
}