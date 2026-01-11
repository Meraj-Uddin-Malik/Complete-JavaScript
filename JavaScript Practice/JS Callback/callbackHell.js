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
function processData(data, callback) {
  setTimeout(() => {
    console.log("Data processed");
    callback("Processed " + data);
  }, 1000);
}