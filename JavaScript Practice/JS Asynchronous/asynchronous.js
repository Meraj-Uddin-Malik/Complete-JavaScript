console.log(`2. Asynchronous (Async)
Meaning: Code can run without waiting for other code to finish.
Behavior: Some operations, like fetching data from a server, can happen in the background while the rest of your code continues running.`);
// Exampleconsole.log("Step 1");

setTimeout(() => {
  console.log("Step 2 (after 2 seconds)");
}, 2000);

console.log("Step 3");
