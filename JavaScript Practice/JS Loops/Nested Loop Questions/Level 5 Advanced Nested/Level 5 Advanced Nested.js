function pascalsTriangle(n = 5) {
  console.log("Pascal's Triangle\n");
  let triangle = [[1]];
  for (let i = 1; i < n; i++) {
    let prevRow = triangle[i - 1];
    let newRow = [1];
    for (let j = 1; j < prevRow.length; j++) {
      newRow[j] = prevRow[j - 1] + prevRow[j];
    }
    newRow.push(1);
    triangle.push(newRow);
  }
  for (let i = 0; i < triangle.length; i++) {
    let spaces = " ".repeat(n - i);
    console.log(spaces + triangle[i].join(" "));
  }
}

function diamondPattern(n = 4) {
  console.log("Diamond Pattern\n");
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let j = 1; j <= 2 * i - 1; j++) row += "*";
    console.log(row);
  }
  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let j = 1; j <= 2 * i - 1; j++) row += "*";
    console.log(row);
  }
}

function butterflyPattern(n = 4) {
  console.log("Butterfly Pattern\n");
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) row += "*";
    for (let k = 1; k <= 2 * (n - i); k++) row += " ";
    for (let j = 1; j <= i; j++) row += "*";
    console.log(row);
  }
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) row += "*";
    for (let k = 1; k <= 2 * (n - i); k++) row += " ";
    for (let j = 1; j <= i; j++) row += "*";
    console.log(row);
  }
}

function numberedSquarePattern(n = 4) {
  console.log("Numbered Square Pattern\n");
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += num.toString().padEnd(3, " ");
      num++;
    }
    console.log(row);
  }
}

// Call any pattern you want:
pascalsTriangle();
diamondPattern();
butterflyPattern();
numberedSquarePattern();
