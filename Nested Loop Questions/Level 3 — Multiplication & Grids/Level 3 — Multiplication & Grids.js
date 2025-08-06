// 6
console.log("Level 3 — Multiplication & Grids \n");

let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    // Print "*" when i == j (main diagonal)
    // OR when i + j == n + 1 (secondary diagonal)
    if (i == j || i + j == n + 1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

// #7

console.log("\n Checkerboard pattern\n");

let rows = 4;
let cols = 4;

for (let i = 1; i <= rows; i++) {
  let row = "";
  for (let j = 1; j <= cols; j++) {
    // If row is even → start with a space before '#'
    if (i % 2 == 0) {
      row += " #";
    } else {
      row += "# ";
    }
  }
  console.log(row);
}
