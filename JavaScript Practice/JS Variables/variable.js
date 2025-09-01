console.log(
  `A variable in JavaScript is a container for storing data values. 
It allows you to store, modify, and retrieve information in your program.

Variables are fundamental building blocks in JavaScript. 
They allow you to store information that can be used and manipulated throughout your program. 
Variables can hold different types of data, such as numbers, strings, booleans, objects, and more.

JavaScript provides three ways to declare variables:
1. var - function-scoped, can be redeclared and reassigned.
2. let - block-scoped, can be reassigned but not redeclared in the same scope.
3. const - block-scoped, cannot be reassigned or redeclared.

Choosing the right type of variable declaration is important for maintaining code clarity and preventing bugs.
Variables make your code dynamic and flexible, enabling you to perform calculations, 
store user input, and manage application state.
`
);

var name = "John";
let age = 23;
const isStudent = true;

console.log(
  `My name is ${name} and I am ${age} years old and I am ${
    isStudent ? "a student" : "not a student"
  }.`
);


