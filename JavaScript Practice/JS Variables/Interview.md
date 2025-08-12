# JavaScript Variables: Interview Questions & Answers

## 1. What is a variable in JavaScript?
A variable is a named storage for data that can be used and manipulated in a program.

---

## 2. How do you declare a variable in JavaScript?
You can declare variables using `var`, `let`, or `const`:
```js
var city = "London";
let year = 2024;
const GRAVITY = 9.8;
```

---

## 3. What is the difference between `var`, `let`, and `const`?
- `var`: Function-scoped, can be redeclared and updated.
- `let`: Block-scoped, can be updated but not redeclared in the same scope.
- `const`: Block-scoped, cannot be updated or redeclared. Must be initialized at declaration.

---

## 4. What is variable hoisting?
Hoisting is JavaScript's behavior of moving declarations to the top of the scope. `var` is hoisted and initialized with `undefined`, while `let` and `const` are hoisted but not initialized.

---

## 5. Can you reassign a `const` variable?
No, a `const` variable cannot be reassigned. However, if it holds an object or array, the contents can be modified.

---

## 6. What is the scope of a variable?
Scope determines where a variable is accessible. `var` is function-scoped, while `let` and `const` are block-scoped.

---

## 7. What is the difference between global and local variables?
- **Global variables** are declared outside any function and accessible anywhere.
- **Local variables** are declared inside a function or block and accessible only within that scope.

---

## 8. What happens if you use a variable without declaring it?
If you assign a value to an undeclared variable, it becomes a global variable (in non-strict mode). In strict mode, it throws a ReferenceError.

---

## 9. What is variable shadowing?
Variable shadowing occurs when a variable declared within a certain scope has the same name as a variable in an outer scope. The inner variable "shadows" the outer one within its scope.

---

## 10. What is the temporal dead zone?
The temporal dead zone is the period between entering a block and the point where a variable declared with `let` or `const` is initialized. Accessing the variable in this zone throws a ReferenceError.

---

## 11. What are primitive and reference variables?
Primitive variables store simple data types (string, number, boolean, null, undefined, symbol, bigint). Reference variables store objects, arrays, and functions.

---

## 12. How do you check if a variable is defined?
You can use `typeof`:
```js
if (typeof myVar !== "undefined") {
    // myVar is defined
}
```

---

## 13. What is variable initialization?
Initialization is assigning an initial value to a variable at the time of declaration.

---

## 14. What is variable declaration?
Declaration is creating a variable using `var`, `let`, or `const` without necessarily assigning a value.

---

## 15. What is variable assignment?
Assignment is giving a value to a variable, either at declaration or later.

---

## 16. Can you declare multiple variables in one statement?
Yes:
```js
let a = 1, b = 2, c = 3;
```

---

## 17. What is the default value of an uninitialized variable?
`undefined`.

---

## 18. What is the difference between `undefined` and `null`?
`undefined` means a variable has been declared but not assigned a value. `null` is an assignment value that represents no value.

---

## 19. Can you change the type of a variable after declaration?
Yes, JavaScript is dynamically typed:
```js
let x = 5;
x = "hello";
```

---

## 20. What is a constant variable?
A variable declared with `const` whose value cannot be reassigned.

---

## 21. What happens if you redeclare a variable with `var`?
It is allowed and overwrites the previous declaration.

---

## 22. What happens if you redeclare a variable with `let` or `const`?
It throws a SyntaxError in the same scope.

---

## 23. What is block scope?
Variables declared with `let` or `const` are only accessible within the block they are defined in.

---

## 24. What is function scope?
Variables declared with `var` are accessible within the function they are defined in.

---

## 25. What is global scope?
Variables declared outside any function or block are accessible everywhere.

---

## 26. What is a variable's lifetime?
The period during which the variable exists in memory. For local variables, it's during function/block execution; for global, it's as long as the program runs.

---

## 27. What is variable leakage?
When a variable unintentionally becomes global due to missing declaration keywords.

---

## 28. What is the use of the `window` object with variables?
Global variables become properties of the `window` object in browsers.

---

## 29. What is a temporary variable?
A variable used to hold data temporarily during computation.

---

## 30. What is destructuring assignment?
A syntax for extracting values from arrays or objects into variables:
```js
const [a, b] = [1, 2];
const {x, y} = {x: 10, y: 20};
```

---

## 31. What is a variable's identifier?
The name given to a variable.

---

## 32. What are the rules for naming variables?
- Must start with a letter, `_`, or `$`
- Cannot start with a number
- Cannot use reserved keywords

---

## 33. Are variable names case-sensitive?
Yes, `myVar` and `myvar` are different.

---

## 34. What is variable mutation?
Changing the value stored in a variable.

---

## 35. What is a static variable?
A variable that retains its value between function calls (not natively supported in JS, but can be simulated).

---

## 36. What is a dynamic variable?
A variable whose value or type can change during execution.

---

## 37. What is variable scope chain?
The hierarchy of scopes used to resolve variable names.

---

## 38. What is a closure in relation to variables?
A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.

---

## 39. What is variable masking?
When a variable in a local scope has the same name as one in an outer scope, hiding the outer variable.

---

## 40. What is the difference between `let` and `var` in loops?
`let` creates a new binding for each iteration, while `var` does not.

---

## 41. What is a global object?
An object that is accessible everywhere in the code (e.g., `window` in browsers, `global` in Node.js).

---

## 42. What is variable declaration hoisting?
Only the declaration (not initialization) is hoisted to the top of the scope.

---

## 43. What is the effect of strict mode on variables?
Strict mode prevents the use of undeclared variables and throws errors for unsafe actions.

---

## 44. What is a read-only variable?
A variable declared with `const` that cannot be reassigned.

---

## 45. What is the difference between mutable and immutable variables?
Mutable variables can be changed after creation; immutable variables cannot.

---

## 46. What is a variable's value?
The data stored in the variable.

---

## 47. What is a variable's reference?
For objects and arrays, variables store a reference (address) to the data, not the data itself.

---

## 48. What is variable garbage collection?
Automatic memory management that frees variables no longer in use.

---

## 49. What is variable declaration best practice?
Use `let` and `const` instead of `var` for better scoping and predictability.

---

## 50. What is variable destructuring default value?
You can assign default values during destructuring:
```js
const [a = 1, b = 2] = [];
```
