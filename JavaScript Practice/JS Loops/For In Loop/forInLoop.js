console.log(
  `A for...in loop in JavaScript is used to iterate over the enumerable properties (keys) of an object. \n`
);

// Syntax Example:
const person = {
  name: "Alice",
  age: 25,
  city: "Delhi",
};
for (let key in person) {
  console.log(key + ": " + person[key]); // Outputs each key-value pair
}

console.log(`The loop iterates over each property in the person object, 
  allowing you to access both the keys and their corresponding values.`);

// A1

let newObj = {
  firstName: "Meraj",
  lastName: "Uddin",
  age: 26,
  isStudent: true,
  semester: 8,
  university: "Indus University",
};

for (let a in newObj) {
  console.log(a + ":" + newObj[a]);
}

//  A2

let studentScores = {
  Meraj: "90%",
  Inam: "80%",
  Moeez: "85%",
  Arsalan: "58%",
};

for (let student in studentScores) {
  let score = parseInt(studentScores[student]); // remove "%" and convert to number
  if (score > 80) {
    console.log(`${student} : ${studentScores[student]}`);
  }
}

// A3
count = 0;
for (let key in newObj) {
  count++;
}
console.log("Total properties in newObj:", count);

// A4
let shoppingCart = {
  Laptop: 3,
  Tablets: 7,
  Smartphones: 5,
  Headphones: 2,
  Adapter: 1,
};

for (let items in shoppingCart) {
  console.log(`${items} : ${shoppingCart[items]}`);
}

//  A5

let target = {};

for (let key in shoppingCart) {
  target[key] = shoppingCart[key];
  // console.log(`${key} : ${target[key]}`);
}

console.log("Target :", target);

//  A6
let countries = {
  USA: "Washington, D.C.",
  Canada: "Ottawa",
  UK: "London",
  Australia: "Canberra",
};

for (let country in countries) {
  console.log(`${country} : ${countries[country]}`);
}

// A7

let longestKey = "";
for (let key in countries) {
  if (key.length > longestKey.length) {
    longestKey = key;
  }
}
console.log("Longest key:", longestKey);

// A8

let employeeInfo = {
  emp1: {
    name: "John Doe",
    age: 30,
  },
  emp2: {
    name: "Jane Smith",
    age: 25,
  },
  emp3: {
    name: "Alice Johnson",
    age: 28,
  },
};

for (let emp in employeeInfo) {
  if (employeeInfo[emp].age > 26) {
    console.log(
      `${emp} : ${employeeInfo[emp].name}, Age: ${employeeInfo[emp].age}`
    );
  }
}

// A9
let nullValue = {
  fruits: null,
  vegetables: null,
  sweets: "kheer",
};

for (let key in nullValue) {
  if (nullValue[key] === null) {
    delete nullValue[key];
  }
}
console.log(nullValue);

// A10

let books ={
  HarryPotter: "J.K. Rowling",
  TheHobbit: "J.R.R. Tolkien",
  ToKillAMockingbird: "Harper Lee",
  PrideAndPrejudice: "Jane Austen"
}

for(let title in books) {
  console.log(`${title} : ${books[title]}`);
}

