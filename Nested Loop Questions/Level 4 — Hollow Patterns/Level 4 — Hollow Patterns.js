// #8

console.log("Hollow square of stars: \n");

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     if (i == 1 || i == n || j == 1 || j == n) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }

console.log("Hollow Pyramid Pattern\n");

let n = 5; // number of rows

for (let i = 1; i <= n; i++) {
  let row = "";

  // print spaces before the stars
  for (let s = 1; s <= n - i; s++) {
    row += " ";
  }

  // print stars or spaces inside
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (i == 1 || i == n || j == 1 || j == 2 * i - 1) {
      row += "*"; // border stars
    } else {
      row += " "; // inside hollow space
    }
  }

  console.log(row);
}
