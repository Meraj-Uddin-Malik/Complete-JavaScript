# Data Types: 50 Interview Questions & Answers

## 1. What are data types?
**Answer:** Data types specify the kind of data a variable can hold, such as numbers, strings, or booleans.

## 2. Name the primitive data types in JavaScript.
**Answer:** String, Number, BigInt, Boolean, Undefined, Null, Symbol.

## 3. What is the difference between primitive and reference data types?
**Answer:** Primitive types store actual values; reference types store references to objects.

## 4. What is `typeof` operator used for?
**Answer:** It returns the data type of a variable.

## 5. What does `typeof null` return?
**Answer:** It returns `"object"` (this is a known JavaScript quirk).

## 6. How do you check if a variable is an array?
**Answer:** Use `Array.isArray(variable)`.

## 7. What is the difference between `undefined` and `null`?
**Answer:** `undefined` means a variable has been declared but not assigned; `null` is an assignment value representing no value.

## 8. What is a Symbol in JavaScript?
**Answer:** A unique and immutable primitive value used as object property keys.

## 9. What is NaN?
**Answer:** "Not-a-Number", a special value indicating an invalid number result.

## 10. How do you check if a value is NaN?
**Answer:** Use `Number.isNaN(value)`.

## 11. What is the result of `typeof NaN`?
**Answer:** `"number"`.

## 12. What is a BigInt?
**Answer:** A numeric data type for arbitrarily large integers, created with `n` suffix (e.g., `123n`).

## 13. Can objects be compared directly in JavaScript?
**Answer:** No, objects are compared by reference, not by value.

## 14. What is the output of `typeof []`?
**Answer:** `"object"`.

## 15. What is the output of `typeof function() {}`?
**Answer:** `"function"`.

## 16. What is the difference between `==` and `===`?
**Answer:** `==` compares values with type coercion; `===` compares both value and type.

## 17. What is a template literal?
**Answer:** A string literal allowing embedded expressions, enclosed by backticks (\`).

## 18. How do you convert a string to a number?
**Answer:** Use `Number(string)`, `parseInt(string)`, or `parseFloat(string)`.

## 19. How do you convert a number to a string?
**Answer:** Use `String(number)` or `number.toString()`.

## 20. What is the default value of an uninitialized variable?
**Answer:** `undefined`.

## 21. What is an object in JavaScript?
**Answer:** A collection of key-value pairs.

## 22. How do you check the type of a variable?
**Answer:** Use the `typeof` operator.

## 23. What is the output of `typeof undefined`?
**Answer:** `"undefined"`.

## 24. What is the output of `typeof null`?
**Answer:** `"object"`.

## 25. What is the output of `typeof Symbol()`?
**Answer:** `"symbol"`.

## 26. What is the output of `typeof 123n`?
**Answer:** `"bigint"`.

## 27. What is the output of `typeof true`?
**Answer:** `"boolean"`.

## 28. What is the output of `typeof 'hello'`?
**Answer:** `"string"`.

## 29. What is the output of `typeof {}`?
**Answer:** `"object"`.

## 30. What is the output of `typeof null`?
**Answer:** `"object"`.

## 31. How do you check if a variable is `null`?
**Answer:** Use `variable === null`.

## 32. How do you check if a variable is `undefined`?
**Answer:** Use `typeof variable === 'undefined'`.

## 33. What is the difference between `parseInt` and `parseFloat`?
**Answer:** `parseInt` parses integers; `parseFloat` parses floating-point numbers.

## 34. What is type coercion?
**Answer:** Automatic or implicit conversion of values from one data type to another.

## 35. What is the result of `true + false`?
**Answer:** `1` (`true` is 1, `false` is 0).

## 36. What is the result of `'5' + 2`?
**Answer:** `'52'` (string concatenation).

## 37. What is the result of `'5' - 2`?
**Answer:** `3` (string is coerced to number).

## 38. What is the result of `null == undefined`?
**Answer:** `true`.

## 39. What is the result of `null === undefined`?
**Answer:** `false`.

## 40. What is the result of `typeof NaN`?
**Answer:** `"number"`.

## 41. What is the result of `typeof Infinity`?
**Answer:** `"number"`.

## 42. What is the result of `typeof /regex/`?
**Answer:** `"object"`.

## 43. What is the result of `typeof new Date()`?
**Answer:** `"object"`.

## 44. What is the result of `typeof Math`?
**Answer:** `"object"`.

## 45. What is the result of `typeof null`?
**Answer:** `"object"`.

## 46. What is the result of `typeof undefined`?
**Answer:** `"undefined"`.

## 47. What is the result of `typeof function() {}`?
**Answer:** `"function"`.

## 48. What is the result of `typeof []`?
**Answer:** `"object"`.

## 49. What is the result of `typeof 0`?
**Answer:** `"number"`.

## 50. What is the result of `typeof ''`?
**Answer:** `"string"`.
