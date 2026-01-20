console.log("Promises In JS is a way to handle asynchronous operations.");

// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Change this to false to test rejection case
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 2000);
});


