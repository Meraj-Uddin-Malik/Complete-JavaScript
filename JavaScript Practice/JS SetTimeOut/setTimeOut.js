console.log(`SetTimeOut is used to delay code for some time period.`);

console.log("first");

setTimeout(() => {
  console.log("second");
}, 4000);
console.log("third");

function getData(dataId) {
  setTimeout(() => {
    console.log("data", dataId);
  }, 2000);
}

getData(5);
console.log("fetching data...");