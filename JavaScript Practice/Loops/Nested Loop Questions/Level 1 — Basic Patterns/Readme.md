# ⭐ Square Pattern Program (JavaScript)

This program prints a simple **square pattern** made of stars (`*`) to the console.
Example output for `n = 4`:

## 🔧 How it works

- We choose the **size** of the square using the variable `n`.
- We use two `for` loops:
  - The **outer loop** runs `n` times to print each row.
  - The **inner loop** adds `n` stars (`*`) into each row.
- Each completed row is printed using `console.log()`.

## 📜 JavaScript Code

```js
console.log("Print a square of size n \n");

let n = 4;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += "* ";
  }
  console.log(row);
}
```
1. Save the file as squarePattern.js.
2. Open your terminal.
3. Run the command: node squarePattern.js



# 🔺 Right-Angled Triangle Pattern (JavaScript)

This program prints a **right-angled triangle** made of stars (`*`) in the console.
Example output for `n = 4`:

## 🧠 How it works

- The variable `n` decides how **tall** the triangle will be.
- We use two `for` loops:
  - The **outer loop** counts the rows (from 1 to `n`).
  - The **inner loop** prints stars:  
    the number of stars in each row = the row number.
- Each row gets printed using `console.log()`.


## 💻 JavaScript Code

```js
console.log("\n Print a right-angled triangle \n");

let n = 5;

for(let a = 1; a <= n; a++){
    let row1 = "";
    for(let b = 1; b <= a; b++){
        row1 += "* ";
    }
    console.log(row1);
}
```

1. Save the file as rightAnglePattern.js.
2. Open your terminal.
3. Run the command: node rightAnglePattern.js


# 🔻 Reverse (Inverted) Triangle Pattern — JavaScript

This program prints a **reverse right-angled triangle** made of stars (`*`) in the console.
Example output for `n = 4`:

## 🧠 How it works

- The variable `n` controls the **height** of the triangle.
- We start from `n` stars and go *down to 1*.
- Two `for` loops are used:
  - The **outer loop** counts rows from `n` down to `1`.
  - The **inner loop** adds stars (`*`) to the current row.
- Each finished row is printed with `console.log()`.

## 💻 JavaScript Code

```js
console.log("\n Print reverse triangle \n");

for (let a = n; a >= 1; a--) {
  let row2 = "";
  for (let b = 1; b <= a; b++) {
    row2 += "* ";
  }
  console.log(row2);
}
```
1. Save the file as reverseTrianglePattern.js.
2. Open your terminal.
3. Run the command: node reverseTrianglePattern.js

