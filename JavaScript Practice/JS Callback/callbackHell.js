console.log(
  "a situation where multiple nested callbacks make code difficult to read and maintain."
);

// Example of Callback Hell
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback("Fetched Data");
  }, 1000);
}