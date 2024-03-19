#! /usr/bin/env node
import inquirer from "inquirer";

let userInput = await inquirer.prompt([
    {
        message: "Enter first number", //message
        type: "number", // type kia lai gy user sy
        name: "firstNumber" //ks name sy save jr ga message inquirer apny pas
    }, // first message
    {
        message: "Enter second number", //message
        type: "number", // type kia lai gy user sy
        name: "secondNumber" //
    }, // second message
    {
        message: "Select  one of the operator to perform operation", //message
        type: "list", // type list dikhay ga
        name: "operator", //,
        choices: ["addition", "subtraction", "multiplication", "division"] //,
    }, // Third message

])
if (userInput.operator === "addition") {
    console.log(`Your answer is ${userInput.firstNumber + userInput.secondNumber}`);

}
else if (userInput.operator === "subtraction") {
    console.log(`Your answer is ${userInput.firstNumber - userInput.secondNumber}`);

}
else if (userInput.operator === "multiplication") {
    console.log(`Your answer is ${userInput.firstNumber * userInput.secondNumber}`);

}
else if (userInput.operator === "division") {
    console.log(`Your answer is ${userInput.firstNumber / userInput.secondNumber}`);

}
else {
    console.log("Please select valid operator");

}

