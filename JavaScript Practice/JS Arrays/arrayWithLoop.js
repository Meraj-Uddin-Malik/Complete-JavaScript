let num = [3,4,5];

// For Loop
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}


// ForEach Method
num.forEach((Element) => {
    console.log(Element*Element)
})

// Array.From Method
let name = "Emaan"
let newName = Array.from(name)
console.log(newName)

// For...of Loop
for (let i of num) {
    console.log(i+1)
}

// For...in Loop
for (let index in num) {
    console.log(`Index: ${index}, Value: ${num[index]}`)
}
