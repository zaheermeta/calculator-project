#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep =()=>{
    return new Promise((resolve) => {
        setTimeout(resolve,2000);
    })
}
async function welcome() {
    let text = chalkAnimation.rainbow('Lets Start Calculation!');
    await sleep();
    text.stop();
    console.log(chalk.cyanBright(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
    
}
 await welcome();
 async function askQuestion() {
    await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "list",
        name: "Operators",
        message: "Which Operator do you want to Use ?",
        choices: ["Addition","Subtraction","Multiplication","Division","Modulus"],
    },
    {
        type: "number",
        name: "num1",
        message: "Enter your First Number : ",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your Second Number : ",

    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if(answers.Operators == "Addition"){
        console.log(chalk.cyanBright(`${answers.num1} + ${answers.num2} = ${answers.num1  + answers.num2}`));
        
    }
    if(answers.Operators == "Subtraction"){
        console.log(chalk.red(`${answers.num1} - ${answers.num2} = ${answers.num1  - answers.num2}`));
        
    }
    if(answers.Operators == "Multiplication"){
        console.log(chalk.yellowBright(`${answers.num1} * ${answers.num2} = ${answers.num1  * answers.num2}`));
        
    }
    if(answers.Operators == "Division"){
        console.log(chalk.blueBright(`${answers.num1} / ${answers.num2} = ${answers.num1  / answers.num2}`));
        
    }
    if(answers.Operators == "Modulus"){
        console.log(chalk.greenBright(`${answers.num1} % ${answers.num2} = ${answers.num1  % answers.num2}`));
        
    }
  })

 };

async function startAgain() {
    do {
        await askQuestion();
        var again =  await inquirer.prompt({
            type:"input",
            name:"Restart",
            message:"do you want to continue ? press y or n",
        })
    } while ( again.Restart == "y" || again.Restart == "Y" || again.Restart == "YES" || again.Restart == "yes" )
};
startAgain();
