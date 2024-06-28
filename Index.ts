#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter Your First Number", type: "number", name: "firstNumber" },
  { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select One Of the Operator to Perform Action",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.Operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.Operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.Operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.Operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please Enter Valid Operator");
}

// First Project to make calculator is done
