# ⭐ Square Pattern Program (JavaScript)

Prints a **square pattern** of stars (`*`) in the console.

**Example output for `n = 4`:**
```
* * * * 
* * * * 
* * * * 
* * * * 
```

## 🔧 How it works

- Set the **size** of the square with variable `n`.
- Use two `for` loops:
  - **Outer loop:** runs `n` times (for each row).
  - **Inner loop:** adds `n` stars to each row.
- Print each row with `console.log()`.

## 📜 JavaScript Code

```js
console.log("Print a square of size n\n");

let n = 4;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += "* ";
  }
  console.log(row);
}
```

**How to run:**
1. Save as `squarePattern.js`.
2. Open your terminal.
3. Run: `node squarePattern.js`


# 🔺 Right-Angled Triangle Pattern (JavaScript)

Prints a **right-angled triangle** of stars (`*`) in the console.

**Example output for `n = 5`:**
```
* 
* * 
* * * 
* * * * 
* * * * * 
```

## 🧠 How it works

- `n` sets the **height** of the triangle.
- Two `for` loops:
  - **Outer loop:** rows from 1 to `n`.
  - **Inner loop:** prints as many stars as the row number.
- Print each row with `console.log()`.

## 💻 JavaScript Code

```js
console.log("\nPrint a right-angled triangle\n");

let n = 5;

for (let a = 1; a <= n; a++) {
  let row1 = "";
  for (let b = 1; b <= a; b++) {
    row1 += "* ";
  }
  console.log(row1);
}
```

**How to run:**
1. Save as `rightAnglePattern.js`.
2. Open your terminal.
3. Run: `node rightAnglePattern.js`


# 🔻 Reverse (Inverted) Triangle Pattern (JavaScript)

Prints a **reverse right-angled triangle** of stars (`*`) in the console.

**Example output for `n = 4`:**
```
* * * * 
* * * 
* * 
* 
```

## 🧠 How it works

- `n` sets the **height** of the triangle.
- Two `for` loops:
  - **Outer loop:** rows from `n` down to 1.
  - **Inner loop:** prints as many stars as the current row number.
- Print each row with `console.log()`.

## 💻 JavaScript Code

```js
console.log("\nPrint reverse triangle\n");

let n = 4;
for (let a = n; a >= 1; a--) {
  let row2 = "";
  for (let b = 1; b <= a; b++) {
    row2 += "* ";
  }
  console.log(row2);
}
```

**How to run:**
1. Save as `reverseTrianglePattern.js`.
2. Open your terminal.
3. Run: `node reverseTrianglePattern.js`
