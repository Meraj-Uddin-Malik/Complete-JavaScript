// #9

console.log("Pascal's Triangle\n");

// let n = 5; // number of rows
// let triangle = [[1]]; // start with first row = [1]

// // Build the triangle row-by-row
// for (let i = 1; i < n; i++) {
//   let prevRow = triangle[i - 1];
//   let newRow = [1]; // every row starts with 1

//   for (let j = 1; j < prevRow.length; j++) {
//     // sum of two numbers above
//     newRow[j] = prevRow[j - 1] + prevRow[j];
//   }

//   newRow.push(1); // every row ends with 1
//   triangle.push(newRow);
// }

// // Printing with spacing
// for (let i = 0; i < triangle.length; i++) {
//   let spaces = " ".repeat(n - i); // add spaces to center align
//   console.log(spaces + triangle[i].join(" "));
// }

// #10

console.log("Diamond Pattern\n");

// let n = 4; // height of the top half

// // Top pyramid
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   // spaces
//   for (let s = 1; s <= n - i; s++) {
//     row += " ";
//   }
//   // stars
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// // Bottom inverted pyramid
// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   // spaces
//   for (let s = 1; s <= n - i; s++) {
//     row += " ";
//   }
//   // stars
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// #11

console.log("Butterfly Pattern\n");

// let n = 4;

// // Upper wings
// for (let i = 1; i <= n; i++) {
//   let row = "";

//   // Left stars
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   // Middle spaces
//   for (let k = 1; k <= 2 * (n - i); k++) {
//     row += " ";
//   }

//   // Right stars
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// // Lower wings
// for (let i = n; i >= 1; i--) {
//   let row = "";

//   // Left stars
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   // Middle spaces
//   for (let k = 1; k <= 2 * (n - i); k++) {
//     row += " ";
//   }

//   // Right stars
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }


console.log("Numbered Square Pattern\n");

let n = 4;   // number of rows & columns
let num = 1; // starting value

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += num.toString().padEnd(3, " "); // convert number to string & add spacing
    num++;
  }
  console.log(row);
}
