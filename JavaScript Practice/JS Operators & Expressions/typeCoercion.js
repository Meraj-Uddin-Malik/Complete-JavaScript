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
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year");
}

//* Other Way to Write Leap Year Check.
console.log(
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "Leap year"
    : "Not leap year"
);

//* 💡 MAANG tip: They love asking coercion trick questions like:
console.log([] + []); // ? // ""
console.log([] + {}); // ? // "[object Object]"
console.log({} + []); // ? // 0


//* Challenge Problem:
//* Predict the output and explain why:

console.log(1 + "2" + "2"); // "122"
console.log(1 + + "2" + "2") ; // "32"
console.log(1 + - "1" + "2"); // "02"
console.log("A" - "B" + "2"); // "NaN2"
console.log("A" + "B" + 2); // "AB2"