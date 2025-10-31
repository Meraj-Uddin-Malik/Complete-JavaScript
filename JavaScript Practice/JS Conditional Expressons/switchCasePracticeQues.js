
/*
    Switch Case Practice Questions (No Solutions):

    1. Write a switch statement to print the name of a month based on a number (1-12).
    2. Use switch to determine the grade (A, B, C, D, F) based on a score variable.
    3. Create a switch to print the type of fruit based on a string variable (e.g., "apple", "banana", "orange").
    4. Use switch to display the season ("Spring", "Summer", "Autumn", "Winter") based on a month number.
    5. Write a switch statement to print the type of vehicle ("Car", "Bike", "Bus", "Truck") based on a variable.
    */

// A1

let month = 5;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;

  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;

  case 11:
    console.log("November");
    break;

  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid month");
}

// A2

let score = 90;

switch (true) {
  case score >= 90:
    console.log("Grade A");
    break;
  case score >= 80:
    console.log("Grade B");
    break;
  case score >= 70:
    console.log("Grade C");
    break;
  case score >= 60:
    console.log("Grade D");
    break;
  default:
    console.log("Grade F");
}

// A3

let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("This is an apple.");
    break;
  case "banana":
    console.log("This is a banana.");
    break;
  case "orange":
    console.log("This is an orange.");
    break;
  default:
    console.log("Unknown fruit.");
}

// A4
let monthNum = 8;

switch (monthNum) {
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  default:
    console.log("Invalid month number");
}

// A5
let vehicle = "Car";

switch (vehicle) {
  case "Car":
    console.log("This is a Self Driving car .");
    break;
  case "Truck":
    console.log("This is a Truck.");
    break;
  case "Bike":
    console.log("This is a Bike.");
    break;
  case "Bus":
    console.log("This is a Bus.");
    break;
  default:
    console.log("Unknown vehicle.");
}
