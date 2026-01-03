console.log(
  `A callback is a function passed as an argument to another function, which is called later.`
);

function greet(name, callback) { // greet function takes a name and a callback function as parameters
  console.log("Hello " + name); // greeting message is logged
  callback(); // callback function is invoked here
}

function callMe() {
  console.log("I am callback function, BYE"); // callback function logs a message
}
greet("Peter", callMe); // greet function is called with "Peter" and callMe as arguments


// Example of using an anonymous function as a callback
function processUserInput(callback) {
  const name = "Alice"; // Simulating user input
  callback(name); // Invoking the callback with the user input
}
processUserInput(function(name) {
  console.log("Hello " + name); // Anonymous callback function logs a greeting message
}
);

// Example of using arrow function as a callback
function fetchData(callback) {
  const data = { id: 1, name: "Sample Data" }; // Simulated fetched data
  callback(data); // Invoking the callback with the fetched data
}
fetchData((data) => {
  console.log("Fetched Data:", data); // Arrow function logs the fetched data
}
);

function document(callback) {
  const title = "JavaScript Callbacks"; // Simulated document title
  callback(title); // Invoking the callback with the document title
}
document(function(title) {
  console.log("Document Title:", title); // Callback function logs the document title
} );