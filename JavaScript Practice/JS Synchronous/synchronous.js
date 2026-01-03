console.log(
  `in Synchronous Programming, the code waits for the previous task to complete`
);

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