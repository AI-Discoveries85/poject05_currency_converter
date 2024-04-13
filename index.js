#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t ---<<<< Welcome To my Currency Converter >>>>---\n"));
let exchange_rate = {
    "USD": 1,
    "EUR": 0.94,
    "GBP": 0.81,
    "CAD": 1.38,
    "JPY": 153.28,
    "PKR": 277.95, // Pakistani Currency
};
// Prompt the user to select currencies convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from_currncy",
        type: "list",
        message: "Select the currency to convert from",
        choices: ["USD", "EUR", "GBP", "CAD", "JPY", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert inbox",
        choices: ["USD", "EUR", "GBP", "CAD", "JPY", "PKR"],
    },
    { name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
// Perform currency conversion by using Formula 
let from_amount = exchange_rate[user_answer.from_currncy];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of Conversion 
let base_amont = amount / from_amount;
let converted_amout = base_amont * to_amount;
// Disply the currency amount 
console.log(chalk.yellow(`Converted Amount = ${converted_amout.toFixed(2)}`));
