console.log("\n Print reverse triangle \n");

let n = 4;
for (let a = n; a >= 1; a--) {
  let row2 = "";
  for (let b = 1; b <= a; b++) {
    row2 += "* ";
  }
  console.log(row2);
}
