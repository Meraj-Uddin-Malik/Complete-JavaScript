## 🔢 Level 2 — Increasing Number Triangle

This exercise prints a **number pattern** where each row starts at `1` and increases up to the current row number, forming a right-angled numeric triangle.

**Example Output (`n = 5`):**
```
1
12
123
1234
12345
```

---

### 🧠 How it works

- `n` determines the number of rows in the pattern.
- **Outer loop:** Iterates from `1` to `n` (each iteration prints one row).
- **Inner loop:** Prints numbers from `1` up to the current row number (`i`).
- Each row is built as a string and printed using `console.log()`.

---

### 💻 JavaScript Code

```js
console.log("Level 2 — Number Patterns\n");

const n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}
```

**How to run:**
1. Save the code as `numberPattern.js`
2. Open your terminal or command prompt
3. Run: `node numberPattern.js`

