// Chapter 1

// Q1: Create a Varibale of type string and try to add a number to it. Observe the output and explain it.
let myString = "Add a Number"
let myNumber = 5;
let result = myString + myNumber;
console.log(result);

// Explanation: In JavaScript, when you use the '+' operator with a string and a number, the number is automatically converted to a string and concatenated to the original string. Therefore, the output will be "Add a Number5". This is due to JavaScript's type coercion feature, which allows for implicit type conversion.

// Q2: Use the typeof operator to check the type of the variable created in Q1. What is the output and why?
let typeOfResult = typeof result;
console.log(typeOfResult)
// Output: "string"
// Explanation: The output is "string" because the result of concatenating a string and a number is a string. The typeof operator returns the data type of the variable, which in this case is a string due to the concatenation operation. 

// Q3: Create a const object in javascript and try to change one of its properties. What happens? Explain the behavior.
const myObject = {
    personName : "John",
    section : "A",
    isPrincipal : false,
}

myObject.personName = "Doe"; // Changing the property value
myObject["friendName"] = "Smith"; // Adding a new property
console.log(myObject);

// Explanation: In JavaScript, when you declare an object with const, you cannot reassign the entire object to a new value. However, you can still modify the properties of the object. In this case, we changed the value of the existing property 'personName' and added a new property 'friendName'. The const declaration only prevents reassignment of the variable itself, not the modification of its contents.

// Q4: Write a program of dictionary in javascript. The program should take a word from the user and look it up in the dictionary. If the word is found, it should return the definition; if not, it should return a message saying that the word is not found.
const dictionary = {
    "apple": "A fruit that is typically red, green, or yellow.",
    "banana": "A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.",
    "cat": "A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws.",
    "dog": "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice."
};

console.log(dictionary["apple"]); // Output: A fruit that is typically red, green, or yellow.
console.log(dictionary["banana"]); // Output: A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.
console.log(dictionary["cat"]); // Output: A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws.
console.log(dictionary["dog"]); // Output: A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice.