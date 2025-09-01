# JS Operators and Expressions Interview Questions

## 1. What are the different types of operators in JavaScript?
- **Arithmetic operators**: Perform mathematical operations (e.g., `+`, `-`, `*`, `/`, `%`).
- **Comparison operators**: Compare values (e.g., `==`, `===`, `!=`, `>`, `<`, `>=`, `<=`).
- **Logical operators**: Combine or invert boolean values (e.g., `&&`, `||`, `!`).
- **Assignment operators**: Assign values to variables (e.g., `=`, `+=`, `-=`, `*=`, `/=`).
- **Other operators**: Include bitwise, ternary (`? :`), and typeof operators.

## 2. Explain the difference between `==` and `===` operators.
The `==` operator checks for equality after performing type coercion, meaning it converts the operands to the same type before comparing. 
The `===` operator checks for strict equality, meaning both the value and the type must be the same for the comparison to return true.
## 3. What is the purpose of the `typeof` operator?
The `typeof` operator is used to determine the type of a variable or value in JavaScript. It returns a string indicating the type, such as `"number"`, `"string"`, `"boolean"`, `"object"`, `"undefined"`, or `"function"`.

## 4. How does the logical OR (`||`) operator work?
The logical OR (`||`) operator returns `true` if at least one of its operands is `true`. If both operands are `false`, it returns `false`. It is commonly used to check multiple conditions, and it also returns the first truthy value it encounters when used with non-boolean values.

## 5. What is the result of `2 + '2'` in JavaScript?
The result is `'22'` (a string). When a number is added to a string using the `+` operator, JavaScript converts the number to a string and concatenates them.

## 6. How do you use the ternary operator?
The ternary operator is a shorthand for an `if-else` statement. Its syntax is: `condition ? expressionIfTrue : expressionIfFalse`. For example:
```js
const result = age > 18 ? "allowed" : "not allowed";
```
This returns `"allowed"` if `age` is greater than 18, otherwise it returns `"not allowed"`.
## 7. What is the difference between `++i` and `i++`?
- `++i` is the pre-increment operator: it increases the value of `i` by 1, then returns the incremented value.
- `i++` is the post-increment operator: it returns the current value of `i`, then increases it by 1.

**Example:**
```js
let i = 5;
console.log(++i); // Outputs: 6
console.log(i++); // Outputs: 6 (then i becomes 7)
```
## 8. What does the `&&` operator do?
The logical AND (`&&`) operator returns `true` only if both operands are `true`. If either operand is `false`, it returns `false`. When used with non-boolean values, it returns the first falsy value it encounters or the last value if all are truthy.

## 9. How can you check if a variable is not a number?
You can use the `isNaN()` function to check if a value is NaN (Not-a-Number). Additionally, you can use the `typeof` operator to verify the type:

```js
const value = "abc";
const isNotNumber = typeof value !== "number" || isNaN(value);
```

This checks if the variable is not of type `"number"` or if it is NaN.

## 10. What is operator precedence?
Operator precedence determines the order in which operators are evaluated in an expression. Operators with higher precedence are executed before those with lower precedence. For example, multiplication (`*`) and division (`/`) have higher precedence than addition (`+`) and subtraction (`-`). Parentheses `()` can be used to override the default precedence and control the evaluation order.