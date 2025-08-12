# JavaScript Conditional Operator and Statements: 50 Interview Questions & Answers

## 1. What is a conditional operator in JavaScript?
The conditional (ternary) operator is `condition ? expr1 : expr2`. It evaluates `condition` and returns `expr1` if true, otherwise `expr2`.

## 2. How do you write an if statement in JavaScript?
```js
if (condition) {
    // code to execute if condition is true
}
```

## 3. What is the difference between `==` and `===`?
`==` checks for value equality with type coercion, while `===` checks for both value and type equality.

## 4. How do you write an if-else statement?
```js
if (condition) {
    // true block
} else {
    // false block
}
```

## 5. What is an else-if ladder?
A chain of `if...else if...else` statements to check multiple conditions.

## 6. What is a switch statement?
A control statement to execute different code blocks based on a variable's value.

## 7. Syntax of a switch statement?
```js
switch(expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}
```

## 8. When should you use a switch over if-else?
When checking a variable against multiple constant values.

## 9. Can you nest if statements?
Yes, you can place an if statement inside another if statement.

## 10. What does the `break` statement do in a switch?
It exits the switch block, preventing fall-through.

## 11. What is fall-through in switch statements?
When `break` is omitted, execution continues to the next case.

## 12. How do you use the ternary operator for assignment?
```js
let result = condition ? value1 : value2;
```

## 13. Can you nest ternary operators?
Yes, but it can reduce code readability.

## 14. What is the output of `console.log(5 > 3 ? 'Yes' : 'No')`?
`Yes`

## 15. How do you check for multiple conditions in an if statement?
Using logical operators (`&&`, `||`):
```js
if (a > 0 && b > 0) { ... }
```

## 16. What is the difference between `if` and `switch`?
`if` can evaluate any expression; `switch` compares a single value to multiple constants.

## 17. Can you use expressions in switch cases?
Yes, but only constant expressions.

## 18. What happens if no case matches in a switch?
The `default` block executes if present.

## 19. How do you write a simple ternary operator?
```js
let msg = isValid ? 'Valid' : 'Invalid';
```

## 20. What is short-circuit evaluation?
Logical operators (`&&`, `||`) stop evaluating as soon as the result is determined.

## 21. How do you use logical NOT?
With `!`:
```js
if (!isActive) { ... }
```

## 22. Can you use switch with string values?
Yes, since ES5.

## 23. What is the output of `if (0) { ... }`?
The block does not execute, as `0` is falsy.

## 24. What values are falsy in JavaScript?
`false`, `0`, `''`, `null`, `undefined`, `NaN`

## 25. What is the output of `if ('0') { ... }`?
The block executes, as `'0'` is truthy.

## 26. How do you check if a variable is undefined?
```js
if (typeof x === 'undefined') { ... }
```

## 27. How do you use multiple conditions in a ternary operator?
```js
let res = a > b ? 'A' : b > c ? 'B' : 'C';
```

## 28. What is the output of `true ? false ? 'A' : 'B' : 'C'`?
`B`

## 29. How do you use conditional statements in functions?
By placing `if`, `else`, or `switch` inside function bodies.

## 30. Can you use return statements inside if blocks?
Yes.

## 31. How do you check if a number is even using a ternary operator?
```js
let even = num % 2 === 0 ? 'Even' : 'Odd';
```

## 32. What is the output of `switch(1) { case true: ... }`?
No match; `default` executes if present.

## 33. How do you use default parameters with conditionals?
```js
function foo(x = 10) {
    if (x > 5) { ... }
}
```

## 34. How do you check for null or undefined?
```js
if (x == null) { ... } // true for null or undefined
```

## 35. What is the output of `if ([]) { ... }`?
Block executes; arrays are truthy.

## 36. How do you use switch with boolean values?
```js
switch (boolVar) {
    case true: ...
    case false: ...
}
```

## 37. What is the output of `if (NaN) { ... }`?
Block does not execute; `NaN` is falsy.

## 38. How do you use conditional statements in arrow functions?
```js
const check = x => x > 0 ? 'Positive' : 'Non-positive';
```

## 39. How do you use multiple if statements?
By writing them sequentially:
```js
if (a) { ... }
if (b) { ... }
```

## 40. What is the output of `if ('false') { ... }`?
Block executes; `'false'` is a non-empty string (truthy).

## 41. How do you use switch with objects?
Not directly; objects are compared by reference, not value.

## 42. How do you check if a string is empty?
```js
if (str === '') { ... }
```

## 43. What is the output of `if (null) { ... }`?
Block does not execute; `null` is falsy.

## 44. How do you use conditional statements in loops?
By placing `if`, `else`, or `switch` inside loop bodies.

## 45. How do you use conditional operator for function calls?
```js
isValid ? doA() : doB();
```

## 46. What is the output of `if (undefined) { ... }`?
Block does not execute; `undefined` is falsy.

## 47. How do you check if a variable is not null and not undefined?
```js
if (x != null) { ... }
```

## 48. How do you use switch with numbers?
```js
switch (num) {
    case 1: ...
    case 2: ...
}
```

## 49. What is the output of `if ('') { ... }`?
Block does not execute; `''` is falsy.

## 50. How do you use conditional operator for object properties?
```js
let color = obj.isActive ? 'green' : 'red';
```