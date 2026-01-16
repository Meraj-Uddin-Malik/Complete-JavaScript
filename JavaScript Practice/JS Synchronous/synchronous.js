console.log(
  `in Synchronous Programming, the code waits for the previous task to complete`
);


console.log(`1. Synchronous (Sync)
Meaning: Code runs line by line, one after the other.
Behavior: Each step waits for the previous step to finish before executing.`);
// Example
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");


function task1() {
  console.log("Task 1: Starting");
    // Simulating a time-consuming task with a loop
    for (let i = 0; i < 1e8; i++) {}
  console.log("Task 1: Completed");
}

function task2() {
  console.log("Task 2: Starting");
    // Simulating a time-consuming task with a loop
    for (let i = 0; i < 1e8; i++) {}
  console.log("Task 2: Completed");
}

task1(); // Calling task1
task2(); // Calling task2 after task1 is completed
console.log("All tasks completed in sequence.");
