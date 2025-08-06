let age = 17;
let hasLicence = true;

if (age < 0){
    console.log("Invalid Age!!!");
}
else if (age < 10){
    console.log("You are not a kid & you are not allowed to drive the car");
}
else {
    console.log("Allowed To Drive >>>>>>>")
}


let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" : "Fail";
console.log(grade); // Output: B
