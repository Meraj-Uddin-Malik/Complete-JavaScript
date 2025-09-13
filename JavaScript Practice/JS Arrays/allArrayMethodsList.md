# JavaScript Array Methods

## Mutator Methods
Change the original array.

- `push()`: Add items to the end.
- `pop()`: Remove the last item.
- `shift()`: Remove the first item.
- `unshift()`: Add items to the start.
- `splice()`: Add or remove items anywhere.
- `sort()`: Arrange items in order.
- `reverse()`: Flip the order of items.
- `fill()`: Replace items with a value.
- `copyWithin()`: Copy items to another spot in the same array.

## Accessor Methods
Do not change the original array.

- `concat()`: Join arrays together.
- `join()`: Turn items into a string.
- `slice()`: Copy part of the array.
- `includes()`: Check if an item exists.
- `indexOf()`: Find the first position of an item.
- `lastIndexOf()`: Find the last position of an item.
- `toString()`: Make the array a string.
- `toLocaleString()`: Make a localized string.
- `at()`: Get an item by position (can use negative numbers).

## Iteration Methods
Work with each item in the array.

- `forEach()`: Do something for each item.
- `map()`: Make a new array by changing each item.
- `filter()`: Make a new array with only certain items.
- `reduce()`: Turn the array into a single value.
- `reduceRight()`: Like `reduce()`, but right to left.
- `some()`: Check if any item passes a test.
- `every()`: Check if all items pass a test.
- `find()`: Get the first item that passes a test.
- `findIndex()`: Get the position of the first item that passes a test.
- `findLast()`: Get the last item that passes a test.
- `findLastIndex()`: Get the position of the last item that passes a test.
- `flat()`: Flatten nested arrays.
- `flatMap()`: Map and flatten in one step.
- `entries()`: Get pairs of [index, value].
- `keys()`: Get all indexes.
- `values()`: Get all values.

## Other Methods

- `from()`: Make an array from something like an array.
- `isArray()`: Check if something is an array.
- `of()`: Make an array from given items.

> **Note:** `Array.from()`, `Array.isArray()`, and `Array.of()` are used with `Array`, not with an array variable.
