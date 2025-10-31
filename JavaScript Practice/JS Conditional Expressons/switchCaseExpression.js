// * When you have many possible cases for a single variable, switch is cleaner than multiple if-else.

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
