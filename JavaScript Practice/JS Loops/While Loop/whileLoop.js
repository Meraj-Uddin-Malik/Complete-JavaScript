console.log(
  `A while loop in JavaScript repeatedly executes a block of code as long as a specified condition is true.`
);

//* Syntax of a while loop
// let count = 1;
// while (count <= 5) {
//   console.log("Count is:", count);
//   count++;
// }
// console.log("The loop has ended.");

//* A1
let count = 1; // Initialize count

while (count <= 10) {
  console.log("Count is:", count);
  count++;
}
console.log("The loop has ended."); //* Optional

//* A2
let number = 2; // Initialize number
while (number <= 20) {
  console.log("Number is:", number);
  if (number % 2 === 0) {
    number += 2;
  }
}

//* A3
let table = 1;
while (table <= 10) {
  console.log(`5 x ${table} = ${table * 5}`);
  table++;
}

//* A4
let revNumber = 100;
while(revNumber >= 1) {
  console.log(revNumber);
  revNumber--;
}

//* A5
let i = 1;
let sumNum = 0;
while(i <= 50) {
  sumNum += i;
  i++;
} 
console.log("Sum is:", sumNum);

//* A6
let oddNum = 1;
while(oddNum <= 30) {
  if(oddNum % 2 !== 0) {
    console.log("Odd Number is:", oddNum);
  }
  oddNum++;
}

//* A7
let sqrNum = 1;
while(sqrNum <= 10) {
  let square = Math.pow(sqrNum, 2);
  console.log(`Square of ${sqrNum} is:`, square);
  sqrNum++;
}

//* A8
let divisibleNum = 1;
while(divisibleNum <= 30) {
  if(divisibleNum % 3 === 0) {
    console.log("Divisible by 3:", divisibleNum);
  }
  divisibleNum++;
}

//* A9
let factorial = 1;
let num = 5; // Change this to compute a different factorial
let u = 1;
while (u <= num) {
  factorial *= u;
  u++;
}
console.log("Factorial is:", factorial);

//* A10
let numberRev = 12345; // The number to reverse
let reversed = 0;
let temp = numberRev; // copy of the number to manipulate

while (temp > 0) {
  let digit = temp % 10;        // get the last digit
  reversed = reversed * 10 + digit; // add it to reversed number
  temp = Math.floor(temp / 10); // remove the last digit
}

console.log(`Reverse of ${numberRev} is:`, reversed);
