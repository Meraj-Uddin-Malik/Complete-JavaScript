console.log("Assignment Operators");

// Assignment operator (=) assigns the value of b to a
console.log("a = b ", (a = b)); // a = b = 5

// Addition assignment (+=) adds b to a and assigns the result to a
console.log("a += b ", (a += b)); // a += b = 10 (5 + 5)

// Subtraction assignment (-=) subtracts b from a and assigns the result to a
console.log("a -= b ", (a -= b)); // a -= b = 5 (10 - 5)

// Addition assignment again
console.log("a += b ", (a += b)); // a += b = 10 (5 + 5)

// Division assignment (/=) divides a by b and assigns the result to a
console.log("a /= b ", (a /= b)); // a /= b = 2 (10 / 5)

// Multiplication assignment (*=) multiplies a by b and assigns the result to a
console.log("a *= b ", (a *= b)); // a *= b = 10 (2 * 5)

// Modulus assignment (%=) assigns the remainder of a divided by b to a
console.log("a %= b ", (a %= b)); // a %= b = 0 (10 % 5)

// Exponentiation assignment (**=) raises a to the power of b and assigns the result to a
console.log("a ** b", (a **= b)); // a **= b = 0 ** 5 = 0