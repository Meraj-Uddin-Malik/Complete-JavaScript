const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}