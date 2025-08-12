# JavaScript Strings: 50 Interview Questions & Answers

---

### 1. What is a string in JavaScript?
A string is a sequence of characters used to represent text.

### 2. How do you create a string in JavaScript?
By enclosing text in single (`'...'`), double (`"..."`), or backticks (`` `...` ``).

### 3. What is the difference between single, double, and template literals?
Single and double quotes are similar; template literals (backticks) allow interpolation and multiline strings.

### 4. How do you find the length of a string?
Using the `.length` property:  
```js
"hello".length // 5
```

### 5. How do you access a character at a specific index?
Using bracket notation:  
```js
"hello"[1] // 'e'
```

### 6. How do you concatenate strings?
Using `+` operator or `.concat()` method.

### 7. What is string interpolation?
Embedding expressions inside template literals:  
```js
`Hello, ${name}!`
```

### 8. How do you convert a string to uppercase?
Using `.toUpperCase()`.

### 9. How do you convert a string to lowercase?
Using `.toLowerCase()`.

### 10. How do you trim whitespace from a string?
Using `.trim()`.

### 11. How do you check if a string contains a substring?
Using `.includes()`.

### 12. How do you check if a string starts with a substring?
Using `.startsWith()`.

### 13. How do you check if a string ends with a substring?
Using `.endsWith()`.

### 14. How do you extract a substring?
Using `.substring()`, `.substr()`, or `.slice()`.

### 15. What is the difference between `.substring()` and `.slice()`?
Both extract parts of a string, but `.slice()` accepts negative indices.

### 16. How do you split a string into an array?
Using `.split()`.

### 17. How do you replace part of a string?
Using `.replace()`.

### 18. How do you repeat a string?
Using `.repeat()`.

### 19. How do you pad a string?
Using `.padStart()` and `.padEnd()`.

### 20. How do you get the character code of a character?
Using `.charCodeAt()`.

### 21. How do you convert a character code to a character?
Using `String.fromCharCode()`.

### 22. How do you compare two strings?
Using comparison operators (`===`, `==`, `<`, `>`).

### 23. Are strings mutable in JavaScript?
No, strings are immutable.

### 24. How do you escape special characters in a string?
Using a backslash (`\`), e.g., `'It\'s OK'`.

### 25. How do you check if a string matches a regular expression?
Using `.match()` or `.test()` with RegExp.

### 26. How do you find the index of a substring?
Using `.indexOf()`.

### 27. How do you find the last index of a substring?
Using `.lastIndexOf()`.

### 28. How do you remove the last character from a string?
Using `.slice(0, -1)`.

### 29. How do you reverse a string?
```js
str.split('').reverse().join('')
```

### 30. How do you count occurrences of a character in a string?
Using `.split(char).length - 1`.

### 31. How do you check if a string is empty?
`str.length === 0`

### 32. How do you convert a number to a string?
Using `.toString()` or `String(num)`.

### 33. How do you convert a string to a number?
Using `Number(str)`, `parseInt()`, or `parseFloat()`.

### 34. How do you capitalize the first letter of a string?
```js
str.charAt(0).toUpperCase() + str.slice(1)
```

### 35. How do you check if a string is a palindrome?
Compare the string to its reverse.

### 36. How do you remove all whitespace from a string?
Using `.replace(/\s+/g, '')`.

### 37. How do you check if a string is numeric?
Using `!isNaN(str)` or regex.

### 38. How do you extract numbers from a string?
Using `.match(/\d+/g)`.

### 39. How do you check if two strings are anagrams?
Sort and compare their characters.

### 40. How do you convert a string to an array of characters?
Using `.split('')`.

### 41. How do you join an array into a string?
Using `.join('')` or `.join(separator)`.

### 42. How do you remove a specific character from a string?
Using `.replace(char, '')` or regex.

### 43. How do you check if a string is all uppercase?
`str === str.toUpperCase()`

### 44. How do you check if a string is all lowercase?
`str === str.toLowerCase()`

### 45. How do you repeat a string N times?
Using `.repeat(N)`.

### 46. How do you get a substring after a specific character?
Using `.split(char)[1]` or `.slice()`.

### 47. How do you get a substring before a specific character?
Using `.split(char)[0]` or `.slice()`.

### 48. How do you remove the first character from a string?
Using `.slice(1)`.

### 49. How do you remove the last N characters from a string?
Using `.slice(0, -N)`.

### 50. How do you check if a string contains only letters?
Using `/^[A-Za-z]+$/.test(str)`.

---
