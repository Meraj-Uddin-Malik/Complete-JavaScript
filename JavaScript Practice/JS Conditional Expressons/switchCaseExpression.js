console.log(`
    A switch case in programming is a control statement that lets you 
    execute one block of code out of many options, based on the value 
    of a variable or expression.
    It works like an alternative to multiple if-else statements, making code cleaner. \n`);

let days = 8;

switch (days) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day");
}

console.log(`
    - switch checks the expression against each case.
    - break is used to stop execution after a match (otherwise it will “fall through” to the next case).
    - default runs if none of the cases match.`);
