/*
Topic: How JavaScript Works

Definition:


Q1. What happens when JavaScript code runs?
Answer: When JavaScript code runs, it goes through a process that involves parsing,
compiling, and executing the code. The JavaScript engine reads the code, converts 
it into machine-readable instructions, and then executes those instructions to perform 
the desired actions. 

Lets Suppose:

const my_name = "Meraj";
const age = 20;

console.log(my_name);

Now Computer wont process the code directly, it will first parse the code, then compile it and finally execute it.
The process goes like this:

JavaScript Code
      ↓
JavaScript Engine
      ↓
Parsing
      ↓
Compilation
      ↓
Execution
      ↓
Output

2. What is a JavaScript Engine?
Definition:
A JavaScript engine is a program that reads and executes JavaScript code.

Urdu Defination: JavaScript engine wo software hai jo tumhara JavaScript code 
samajhne/process karne aur execute karne ka kaam karta hai.

For Example: V8 engine (used in Google Chrome and Node.js), SpiderMonkey (used in Firefox),
JavaScriptCore (used in Safari), Chakra (used in Microsoft Edge).

3. What is parsing?
Definition:
Parsing is the process of analyzing the JavaScript code to understand its structure and meaning.

Urdu Defination: Parsing wo process hai jisme JavaScript engine tumhara code ko analyze karta hai 
aur uske structure aur meaning ko samajhta hai.

For Example:
const age = 29;  Engin Analzes code and understand that age is a variable and 29 is its value.`

if you write a code like this:
const = age 19; Then during parsing, the engine will throw an error because the syntax is incorrect.

4. What is compilation?
Definition:
Compilation is the process of converting the parsed JavaScript code into machine-readable instructions.

Urdu Defination: Compilation wo process hai jisme parsed JavaScript code ko machine-readable instructions me convert kiya jata hai.

JavaScript is interpreted.

Just Understand This:

JavaScript Source Code
        ↓
Engine processes/compiles it
        ↓
Executable instructions

5. What is execution?
Definition:
Execution is the process of running the compiled JavaScript code to perform the desired actions.

Urdu Defination: Execution wo process hai jisme compiled JavaScript code ko run kiya jata hai taki desired actions perform ho sake.

For Example:

const x = 10;
const y = 20;

console.log(x + y);


6. What is the Call Stack?
Definition:
The call stack is a data structure that keeps track of function calls in a program. 
It helps manage the execution context and ensures that functions are executed in the correct order.

Urdu Defination: Call Stack ek data structure hai jo program me function calls ko track karta hai. 
Ye execution context ko manage karne me madad karta hai aur ensure karta hai ke functions sahi 
order me execute ho.  

My Understanding:
My understanding of JavaScript is that it is a versatile programming language that allows 
developers to create interactive and dynamic web experiences. It enables manipulation of 
web page elements, handling user interactions, and communicating with servers. JavaScript 
can run in various environments, making it a powerful tool for both front-end and back-end 
development.

*/
