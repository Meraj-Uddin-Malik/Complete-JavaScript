# JS `for...of` Loop: 20 Interview Questions with Answers

## 1. What is the `for...of` loop in JavaScript?

**Answer:**  
The `for...of` loop is a modern JavaScript construct introduced in ES6 that allows iteration over iterable objects such as arrays, strings, maps, sets, and more. It provides a concise syntax for accessing the values of these objects directly.

---

## 2. How does `for...of` differ from `for...in`?

**Answer:**  
- `for...of` iterates over the values of an iterable object.
- `for...in` iterates over the enumerable property keys of an object.
- Use `for...of` for arrays and other iterables; use `for...in` for objects.

---

## 3. Can you use `for...of` with objects?

**Answer:**  
No, plain objects are not iterable by default. `for...of` works with iterable objects like arrays, strings, maps, and sets.

---

## 4. Give an example of using `for...of` with an array.

**Answer:**
```js
const numbers = [1, 2, 3];
for (const num of numbers) {
    console.log(num);
}
// Output: 1 2 3
```

---

## 5. Can you use `break`, `continue`, and `return` inside a `for...of` loop?

**Answer:**  
Yes, you can use `break`, `continue`, and `return` statements inside a `for...of` loop, just like in other loops.

---

## 6. How do you iterate over a string using `for...of`?

**Answer:**
```js
const word = "hello";
for (const char of word) {
    console.log(char);
}
// Output: h e l l o
```

---

## 7. How can you iterate over a Map or Set using `for...of`?

**Answer:**
```js
const mySet = new Set([1, 2, 3]);
for (const value of mySet) {
    console.log(value);
}

const myMap = new Map([["a", 1], ["b", 2]]);
for (const [key, value] of myMap) {
    console.log(key, value);
}
```

---

## 8. What happens if you use `for...of` on a non-iterable object?

**Answer:**  
A `TypeError` is thrown because non-iterable objects do not implement the iterable protocol.

---

## 9. Can you use `for...of` with generator functions?

**Answer:**  
Yes, generator functions return iterators, which are iterable. You can use `for...of` to iterate over their yielded values.

---

## 10. How do you access both index and value in a `for...of` loop?

**Answer:**  
Use `entries()` with destructuring:
```js
const arr = ['a', 'b', 'c'];
for (const [index, value] of arr.entries()) {
    console.log(index, value);
}
```

---

## 11. Is it possible to modify the array elements inside a `for...of` loop?

**Answer:**  
You can modify the elements if you access them by index, but modifying the loop variable itself does not change the original array.

---

## 12. Can you use `for...of` with NodeLists or HTMLCollections?

**Answer:**  
Yes, NodeLists are iterable in modern browsers, so you can use `for...of` with them.

---

## 13. How do you iterate over function arguments using `for...of`?

**Answer:**
```js
function demo() {
    for (const arg of arguments) {
        console.log(arg);
    }
}
demo(1, 2, 3);
```
Note: `arguments` is not iterable in strict mode; use rest parameters instead.

---

## 14. What is the difference between `forEach` and `for...of`?

**Answer:**  
- `forEach` is an array method and cannot be broken with `break` or `continue`.
- `for...of` is a loop statement and supports `break`, `continue`, and `return`.

---

## 15. Can you use `await` inside a `for...of` loop?

**Answer:**  
Yes, in an async function, you can use `await` inside a `for...of` loop for sequential asynchronous operations.

---

## 16. How do you iterate over a string containing Unicode characters using `for...of`?

**Answer:**  
`for...of` correctly iterates over Unicode code points, including surrogate pairs.

---

## 17. Can you use `for...of` with custom iterable objects?

**Answer:**  
Yes, if an object implements the iterable protocol (`[Symbol.iterator]`), you can use `for...of` with it.

---

## 18. What is the output of iterating over an empty array with `for...of`?

**Answer:**  
No iterations occur; the loop body does not execute.

---

## 19. How do you stop a `for...of` loop early?

**Answer:**  
Use the `break` statement to exit the loop before it completes all iterations.

---

## 20. Can you nest `for...of` loops?

**Answer:**  
Yes, you can nest `for...of` loops to iterate over multidimensional arrays or nested iterables.