// Functions In JavaScript
// Functions are blocks of code designed to perform a particular task. They are executed when "something" invokes or calls them.

// Function Declaration
function myFunction() {
  console.log("Hello World!");
}

// Function Expression
const myFunctionExpression = function() {
  console.log("Hello from Function Expression!");
};

// Arrow Function
const myArrowFunction = () => {
  console.log("Hello from Arrow Function!");
};

// Calling the functions
myFunction();
myFunctionExpression();
myArrowFunction();

// Function with Parameters
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");

// Function with Return Value
function add(a, b) {
  return a + b;
}

let sum = add(5, 10);
console.log("Sum: " + sum);

// Function with Default Parameters
function multiply(a, b = 1) {
  return a * b;
}

console.log("Multiply: " + multiply(5)); // Uses default value for b
console.log("Multiply: " + multiply(5, 2)); // Overrides default value for b

// Function with Rest Parameters
function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("Sum of all: " + sumAll(1, 2, 3, 4, 5));

// Function with Callback
function processUserInput(callback) {
  const name = "Charlie";
  callback(name);
}

processUserInput(function(name) {
  console.log("Hello, " + name + "!");
});

// Function with Closure
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  }
}

const newFunction = outerFunction("outside");
newFunction("inside");

// Function with IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("This is an IIFE!");
})();

// Function with Recursion
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log("Factorial of 5: " + factorial(5));

// Function with Higher-Order Functions
function higherOrderFunction(callback) {
  console.log("Before calling the callback function.");
  callback();
  console.log("After calling the callback function.");
}

higherOrderFunction(function() {
  console.log("This is the callback function.");
});

// Function with Anonymous Function
setTimeout(function() {
  console.log("This is an anonymous function executed after 2 seconds.");
}, 2000);

// Function with Named Function Expression
const namedFunctionExpression = function namedFunc() {
  console.log("This is a named function expression.");
};

namedFunctionExpression();

// Function with Method
const obj = {
  myMethod: function() {
    console.log("This is a method inside an object.");
  }
};

obj.myMethod();

// Function with Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("David", 30);
console.log("Person Name: " + person1.name + ", Age: " + person1.age);

 // Function with Generator
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
