# JavaScript String Methods

## Basic Methods

- `charAt(index)`: Get character at a specific position.
- `charCodeAt(index)`: Get Unicode of character at a position.
- `at(index)`: Get character at a position (supports negative index).
- `concat(str1, str2, ...)`: Join strings together.
- `includes(search, start)`: Check if string contains a substring.
- `endsWith(search, length)`: Check if string ends with a substring.
- `startsWith(search, start)`: Check if string starts with a substring.
- `indexOf(search, start)`: Find first position of a substring.
- `lastIndexOf(search, start)`: Find last position of a substring.
- `slice(start, end)`: Extract part of the string.
- `substring(start, end)`: Extract part of the string (no negative indexes).
- `substr(start, length)`: Extract part of the string (deprecated).
- `padStart(targetLength, padString)`: Pad at the start.
- `padEnd(targetLength, padString)`: Pad at the end.
- `repeat(count)`: Repeat the string.
- `replace(search, replacement)`: Replace part of the string.
- `replaceAll(search, replacement)`: Replace all occurrences.
- `split(separator, limit)`: Split into an array.
- `toLowerCase()`: Convert to lowercase.
- `toUpperCase()`: Convert to uppercase.
- `trim()`: Remove whitespace from both ends.
- `trimStart()`, `trimLeft()`: Remove whitespace from start.
- `trimEnd()`, `trimRight()`: Remove whitespace from end.
- `match(regexp)`: Get matches for a pattern.
- `matchAll(regexp)`: Get all matches for a pattern.
- `search(regexp)`: Search for a pattern.
- `localeCompare(compareString)`: Compare strings in the current locale.
- `normalize(form)`: Unicode normalization.

## Other Properties and Methods

- `length`: Number of characters in the string.
- `valueOf()`: Get the primitive value.
- `toString()`: Return the string itself.
- `codePointAt(index)`: Unicode code point at a position.
- `fromCharCode(num1, num2, ...)`: Make a string from Unicode values.
- `fromCodePoint(num1, num2, ...)`: Make a string from code points.
- `raw()`: Get raw string from template literals.

> **Note:** Some methods like `fromCharCode`, `fromCodePoint`, and `raw` are used as `String.fromCharCode()`, not on string variables.

