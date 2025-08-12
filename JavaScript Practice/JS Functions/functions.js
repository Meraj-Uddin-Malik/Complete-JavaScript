

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

// Example usage:
console.log(add(5, 3));        // 8
console.log(subtract(5, 3));   // 2
console.log(multiply(5, 3));   // 15
console.log(divide(5, 3));     // 1.666...