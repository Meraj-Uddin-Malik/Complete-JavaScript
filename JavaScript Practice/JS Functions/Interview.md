# JavaScript Functions: 50 Interview Questions & Answers

## 1. What is a function in JavaScript?
A function is a reusable block of code designed to perform a particular task.

## 2. How do you declare a function in JavaScript?
```js
function myFunction() {
    // code
}
```

## 3. What is a function expression?
A function assigned to a variable:
```js
const add = function(a, b) { return a + b; };
```

## 4. What is an arrow function?
A concise syntax for writing functions:
```js
const add = (a, b) => a + b;
```

## 5. What is the difference between function declaration and function expression?
Function declarations are hoisted; expressions are not.

## 6. What is a higher-order function?
A function that takes another function as an argument or returns a function.

## 7. What is a callback function?
A function passed as an argument to another function.

## 8. What is the purpose of the `return` statement?
It specifies the value a function returns.

## 9. What happens if a function does not have a return statement?
It returns `undefined` by default.

## 10. What is the arguments object?
An array-like object accessible inside functions that contains the arguments passed.

## 11. How do you create a function with default parameters?
```js
function greet(name = 'Guest') { ... }
```

## 12. What is a rest parameter?
It allows a function to accept an indefinite number of arguments:
```js
function sum(...numbers) { ... }
```

## 13. What is the spread operator in function calls?
It expands an array into individual arguments:
```js
myFunc(...arr);
```

## 14. What is function hoisting?
Function declarations are moved to the top of their scope before code execution.

## 15. What is an IIFE (Immediately Invoked Function Expression)?
A function that runs as soon as it is defined:
```js
(function() { ... })();
```

## 16. What is recursion?
A function calling itself.

## 17. What is the difference between parameters and arguments?
Parameters are variables in the function definition; arguments are values passed to the function.

## 18. What is the `this` keyword in a function?
It refers to the object that called the function.

## 19. How does `this` behave in arrow functions?
Arrow functions do not have their own `this`; they inherit it from the parent scope.

## 20. What is function binding?
Using `bind()`, `call()`, or `apply()` to set the value of `this`.

## 21. What is the difference between `call()` and `apply()`?
Both invoke functions with a given `this`, but `call()` takes arguments separately, `apply()` takes them as an array.

## 22. What is function currying?
Transforming a function with multiple arguments into a sequence of functions each with a single argument.

## 23. What is memoization?
An optimization technique to cache function results.

## 24. What is a pure function?
A function with no side effects and consistent output for the same input.

## 25. What is a closure?
A function that remembers its lexical scope even when executed outside that scope.

## 26. How do you create a closure?
By returning a function from another function:
```js
function outer() {
    let x = 10;
    return function inner() { return x; };
}
```

## 27. What is the difference between synchronous and asynchronous functions?
Synchronous functions block execution; asynchronous functions do not.

## 28. What is a generator function?
A function that can pause and resume its execution using `function*` and `yield`.

## 29. How do you define a generator function?
```js
function* gen() { yield 1; yield 2; }
```

## 30. What is the purpose of the `yield` keyword?
It pauses and resumes a generator function.

## 31. What is the difference between `async` and `sync` functions?
`async` functions return a promise and can use `await`; `sync` functions do not.

## 32. How do you declare an async function?
```js
async function fetchData() { ... }
```

## 33. What does the `await` keyword do?
It pauses an async function until a promise is resolved.

## 34. What is function composition?
Combining two or more functions to produce a new function.

## 35. What is the difference between `map`, `filter`, and `reduce`?
- `map`: transforms each element.
- `filter`: selects elements based on a condition.
- `reduce`: accumulates values into a single result.

## 36. What is the purpose of the `constructor` function?
To create and initialize objects.

## 37. How do you create a function constructor?
```js
function Person(name) { this.name = name; }
```

## 38. What is the difference between a method and a function?
A method is a function associated with an object.

## 39. What is the `prototype` property?
It allows you to add properties and methods to all instances of a constructor.

## 40. How do you add a method to all instances of an object?
```js
Person.prototype.sayHello = function() { ... }
```

## 41. What is the difference between `call`, `apply`, and `bind`?
- `call`: calls a function with a given `this` and arguments.
- `apply`: same as `call`, but arguments are in an array.
- `bind`: returns a new function with bound `this`.

## 42. What is tail call optimization?
A feature where the last function call in a function is optimized to avoid growing the call stack.

## 43. What is the difference between named and anonymous functions?
Named functions have a name; anonymous functions do not.

## 44. What is function overloading?
JavaScript does not support function overloading natively; later definitions overwrite earlier ones.

## 45. What is the purpose of the `setTimeout` function?
To execute a function after a specified delay.

## 46. What is the purpose of the `setInterval` function?
To execute a function repeatedly at specified intervals.

## 47. How do you cancel a `setTimeout` or `setInterval`?
Using `clearTimeout()` or `clearInterval()`.

## 48. What is the difference between `forEach` and `map`?
`forEach` executes a function for each array element; `map` returns a new array.

## 49. What is the use of the `Function` constructor?
It creates a new function from a string of code, but is rarely used.

## 50. How do you check if a variable is a function?
```js
typeof variable === 'function'
```