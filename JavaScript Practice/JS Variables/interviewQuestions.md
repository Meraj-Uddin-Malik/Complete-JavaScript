# JavaScript Variable Interview Questions

1. What are the different ways to declare variables in JavaScript?  
   Variables in JavaScript can be declared using three keywords: `var`, `let`, and `const`.

- `var` is function-scoped and was traditionally used before ES6.
- `let` is block-scoped and allows you to reassign values.
- `const` is also block-scoped but creates a constant whose value cannot be reassigned.

2. Explain the difference between `var`, `let`, and `const`.

- **`var`**:  
    - Function-scoped  
    - Can be redeclared and updated  
    - Prone to hoisting issues

- **`let`**:  
    - Block-scoped  
    - Can be updated, but not redeclared in the same scope

- **`const`**:  
    - Block-scoped  
    - Must be assigned a value when declared  
    - Cannot be reassigned, but objects/arrays can be changed

**Tip:**  
Think:  
- `var` = old, flexible, function  
- `let` = new, flexible, block  
- `const` = new, fixed, block

3. What is variable hoisting in JavaScript?  
Hoisting in JavaScript means moving variable and function declarations to the top of their scope before the code is executed.
For variables declared with `var`, the variable is hoisted and initialized with `undefined`. Variables declared with `let` and `const` are hoisted but not initialized, leading to a "temporal dead zone" until their declaration is encountered.

4. Can you reassign a value to a `const` variable?  
No, you cannot reassign a new value to a `const` variable. Once a variable is declared with `const`, its value cannot be changed through reassignment. However, if the `const` variable holds an object or array, the contents of the object or array can still be modified.

5. What is the scope of a variable declared with `var`?  
A variable declared with `var` is function-scoped, meaning it is accessible within the function where it is declared. If declared outside any function, it has global scope and is accessible throughout the entire script.

6. How does block scope differ from function scope?
Block scope means a variable is only accessible within the block (e.g., inside `{}`) where it is declared, such as within loops or conditionals. Variables declared with `let` and `const` are block-scoped.  
Function scope means a variable is only accessible within the function where it is declared. Variables declared with `var` are function-scoped.

7. What happens if you use a variable before declaring it?  
If you use a variable declared with `var` before its declaration, it will be hoisted and initialized with `undefined`, so you won't get an error but the value will be `undefined`.  
If you use a variable declared with `let` or `const` before its declaration, you will get a ReferenceError due to the temporal dead zone.

8. What are global and local variables?  
A **global variable** is accessible from anywhere in the code, meaning it is defined outside any function or block and can be used throughout the script.  
A **local variable** is accessible only within the function or block where it is declared, and cannot be accessed from outside that scope.

9. How can you avoid polluting the global namespace?  
To avoid polluting the global namespace, you can use techniques such as:

- Declaring variables inside functions or blocks to limit their scope.
- Using Immediately Invoked Function Expressions (IIFE) to create local scopes.
- Using ES6 modules, which have their own scope and do not expose variables globally.
- Avoiding the use of global variables unless absolutely necessary.

10. What is the temporal dead zone?  
The temporal dead zone (TDZ) refers to the period between entering a scope and the actual declaration of a variable with `let` or `const`. During this time, the variable exists but cannot be accessed, and any attempt to use it results in a ReferenceError. The TDZ helps prevent accidental usage of variables before they are properly initialized.


