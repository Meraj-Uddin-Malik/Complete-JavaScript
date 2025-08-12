console.log("Print a square of size n\n");

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "*";
    if (j < n - 1) row += " ";
  }
  console.log(row);
}