// A1

a = 10;
b = 12;

console.log("The sum of a and b is:", a + b);

// A2

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEvenOdd(5)); // Odd
console.log(checkEvenOdd(8)); // Even

// A3
function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(findLargest(10, 25, 15)); // 25

// A4

let reverseString = "Meraj";
function reverseStringFunc(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseStringFunc(reverseString)); // Output: "jaraM"

//  A5

sumArray = [1, 2, 3, 4, 5];
function sumArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArrayElements(sumArray)); // Output: 15

// A6

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU"; // small aur capital vowels dono

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}
 console.log(countVowels("Hello World")); // Output: 3
 console.log(countVowels("Meraj Uddin Malik")); // Output: 6

//  A7

function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i; 
  }

  return result;
}

// Usage
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1


// A8

function findSmallest(a, b, c) {
  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  } else {
    return c;
  }
}

console.log(findSmallest(10, 25, 15)); // 

// A9

function isPrime(num) {
  if (num <= 1) return false;  // 1 aur negative numbers prime nahi
  if (num === 2) return true;  // 2 ek prime hai

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // agar divide ho gaya to prime nahi
    }
  }

  return true; // warna prime hai
}


// A10

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Usage
console.log(celsiusToFahrenheit(0));   // 32°F
console.log(celsiusToFahrenheit(25));  // 77°F
console.log(celsiusToFahrenheit(100)); // 212°F


// A11

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Usage
console.log(fahrenheitToCelsius(32));   // 0°C
console.log(fahrenheitToCelsius(77));   // 25°C
console.log(fahrenheitToCelsius(212));  // 100°C
