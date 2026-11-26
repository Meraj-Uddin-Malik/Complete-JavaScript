// Closure In Javascript
// A closure is a function that has access to its own scope, the outer function's scope, and the global scope. 
// It allows a function to remember and access its lexical scope even when it is executed outside of that scope.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');

// In this example, innerFunction is a closure that has access to the outerFunction's variable outerVariable even after outerFunction has finished executing.
