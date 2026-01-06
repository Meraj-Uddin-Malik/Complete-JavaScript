// Q1
let age = 20;
if (age > 18 && age < 20) {
  console.log("you are eligible for voting");
} else {
  console.log("Your age is not valid for voting");
}


// Q2
let age1 = 25;;
switch (age1) {
    case 12:
        console.log("You are 12 years old");
        break;
    case 13:
        console.log("You are 18 years old");
        break;
    case 20:
        console.log("You are 20 years old");
        break;
    default:
        console.log("Your age is not listed");
}

// Q3

let num = 18;
if (num % 2 == 0 && num % 3 == 0) {
    console.log("The number is divisible by both 2 and 3");
} else {
    console.log("The number is not divisible by both 2 and 3");
}

// Q4

let toDriveAge = 18
let driveStatus = toDriveAge < 18 ? "You are not eligible to drive" : "You are eligible to drive";
console.log(driveStatus)