/*
Topic: How JavaScript Works

Definition:

What happens when JavaScript code runs?

What is a JavaScript Engine?

What is parsing?

What is compilation?

What is execution?

What is the Call Stack?

My Understanding:

Questions and Answers:

Practice:
*/

/* Q1. What happens when JavaScript code runs?
Answer: When JavaScript code runs, it goes through a process that involves parsing,
compiling, and executing the code. The JavaScript engine reads the code, converts 
it into machine-readable instructions, and then executes those instructions to perform 
the desired actions. 

Lets Suppose:
*/

const my_name = "Meraj";
const age = 20;

console.log(my_name);

/*
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
*/

/*

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

*/

