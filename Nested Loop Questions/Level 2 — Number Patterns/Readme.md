## 🔢 Level 2 — Increasing Number Triangle

This program prints a **number pattern** where each row starts at `1` and increases up to the current row number — forming a right-angled numeric triangle.

**Example Output (`n = 5`):**


### 🧠 How it works

- `n` controls how many rows the pattern has.
- Outer loop → from `1` to `n` (each loop prints **one row**)
- Inner loop → prints numbers starting from `1` up to the current row number `i`
- The numbers are collected in a string (`row`) and printed using `console.log()`

### 💻 JavaScript Code

```js
console.log("Level 2 — Number Patterns \n");

let n = 5;
for(let i = 1; i <= n; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += j;
    }
    console.log(row);
}
```

1. Save as numberPattern.js
2. Open your terminal / command prompt
3. Run: node numberPattern.js

