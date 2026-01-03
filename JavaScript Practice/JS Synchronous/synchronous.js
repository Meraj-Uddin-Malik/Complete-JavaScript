console.log(
  `in Synchronous Programming, the code waits for the previous task to complete`
);

function task1() {
  console.log("Task 1: Starting");
    // Simulating a time-consuming task with a loop
    for (let i = 0; i < 1e8; i++) {} // Busy-wait loop to simulate delay
    console.log("Task 1: Completed");
}
function task2() {
    console.log("Task 2: Starting");
    // Simulating a time-consuming task with a loop
    for (let i = 0; i < 1e8; i++) {}
    console.log("Task 2: Completed");
}
function task3() {
    console.log("Task 3: Starting");
    // Simulating a time-consuming task with a loop
    for (let i = 0; i < 1e8; i++) {}
    console.log("Task 3: Completed");
}
task1(); // Calling task1
task2();
task3();

console.log("All tasks completed in sequence.");