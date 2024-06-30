#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;

let mypin = 3455;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin",
  type: "number",
});
if (pinAnswer.pin === mypin) {
  console.log("Your pin Correct");

  let operationAns = await inquirer.prompt([
    {
      name: "operations",
      massege: "please select option",
      type: "list",
      choices: ["withdraw", "Fast cash", "check balance"],
    },
  ]);

  // if user select withdraw
  if (operationAns.opertion === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter Your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= myBalance) {
      let balance = myBalance - amountAns.amount;
      console.log("The remaining balance is ${balance}");
    } else {
      console.log("You have Insufficient balance");
    }
  }
  //if user select fast cash
  else if (operationAns.operations === "Fast cash") {
    let FastcashAns = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        choices: ["1000", "3000", "50000", "15000"],
      },
    ]);
    if (FastcashAns.amount <= myBalance) {
      let balance2 = myBalance - FastcashAns.amount;
      console.log("the remaining balance is ${balance2}");
    } else {
      console.log("You have isufficient amount");
    }
  } else if (operationAns.operation === "check balance") {
    console.log(myBalance);
  }
} else {
  console.log("your pin is wrong");
}
