// Conditional Expressions are expressions that evaluate to a value based on a condition. 
// In JavaScript, the most common conditional expression is the ternary operator, which has the following syntax:
// condition ? expressionIfTrue : expressionIfFalse;

// Ternary Operators are a concise way to write simple conditional statements.
const age = 18;
const canVote = age >= 18 ? 'Yes, you can vote.' : 'No, you cannot vote.';
console.log(canVote); // Output: Yes, you can vote.

// In this example, the condition checks if the age is greater than or equal to 18. If it is true, it returns 'Yes, you can vote.', otherwise it returns 'No, you cannot vote.'.
// You can also use nested ternary operators, but be cautious as it can make the code harder to read:

const score = 85;
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';
console.log(grade); // Output: B

// In this example, the condition checks the score and assigns a grade based on the value of the score.

// If Condition:
const number = 10;
if (number > 0){
    console.log('The number is positive.');
}

// In this example, the if statement checks if the number is greater than 0. If it is true, it executes the code block and prints 'The number is positive.' to the console.

// If-Else Condition:
const temp = 34;
if (temp > 30) {
    console.log('It is hot outside.');
}
else{
    console.log('The weather is pleasant.');
}

// In this example, the if statement checks if the temperature is greater than 30. If it is true, it prints 'It is hot outside.', otherwise it prints 'The weather is pleasant.'.

// If-Else If Condition:
const marks = 90;
if (marks >=90){
    console.log('You got an A grade.');
}
else if (marks >= 80){
    console.log('You got a B grade.');
}
else if (marks >= 70){
    console.log('You got a C grade.');
}
else{
    console.log('You failed the exam.');
}

// In this example, the if-else if statement checks the marks and assigns a grade based on the value of the marks. If none of the conditions are met, it executes the else block and prints 'You failed the exam.' to the console.

// Switch Statement:
const day = 3;

switch (day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day.');
}

// In this example, the switch statement checks the value of the day variable and executes the corresponding case block. If none of the cases match, it executes the default block and prints 'Invalid day.' to the console.

// Another example of using switch statement:
const fruit = 'apple';

switch (fruit){
    case 'banana':
        console.log('Bananas are yellow.');
        break;
    case 'apple':
        console.log('Apples are red or green.');
        break;
    case 'orange':
        console.log('Oranges are orange.');
        break;
    default:
        console.log('Unknown fruit.');
}

// In this example, the switch statement checks the value of the fruit variable and executes the corresponding case block. If none of the cases match, it executes the default block and prints 'Unknown fruit.' to the console.

// Conclusion:
// Conditional expressions are a fundamental part of programming that allow you to make decisions based on certain conditions. 
// They can be implemented using ternary operators, if statements, if-else statements, if-else if statements, and switch statements. 
// Understanding how to use these conditional expressions effectively will help you write more efficient and readable code.
