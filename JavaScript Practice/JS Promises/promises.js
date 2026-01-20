console.log("Promises In JS is a way to handle asynchronous operations.");

// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
  const success = false; // Change this to false to test rejection case
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  }, 2000);
});


// Handling the Promise
myPromise
  .then((message) => { // .then handles the resolved case
    console.log(message);
    })
    .catch((error) => {
    console.error(error);
    })
    .finally(() => { // .finally runs regardless of the outcome
    console.log("Promise has been settled (either resolved or rejected).");
    });
