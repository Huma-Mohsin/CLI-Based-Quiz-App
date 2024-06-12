#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgGreenBright.bold.white("TypeScript's Quiz"));
console.log(chalk.bgRedBright.bold.white("*****************"));

const questions = [
    {
        name: "question_1",
        type: "list",
        message: chalk.yellowBright("1. What is the purpose of the any type in TypeScript?"),
        choices: [
            "A) To specify a type for a variable",
            "B) To indicate a variable can hold any type",
            "C) To define a new type",
            "D) To specify a type for a function parameter"
        ],
        correctAnswer: "B) To indicate a variable can hold any type"
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.magentaBright("2. Which of the following is a feature of TypeScript?"),
        choices: [
            "A) Optional static typing",
            "B) Mandatory dynamic typing",
            "C) Optional dynamic typing",
            "D) Mandatory static typing"
        ],
        correctAnswer: "A) Optional static typing"
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.blueBright("3. What is the difference between null and undefined in TypeScript?"),
        choices: [
            "A) null means a variable has no value, while undefined means a variable has not been declared",
            "B) null means a variable has not been declared, while undefined means a variable has no value",
            "C) null and undefined are interchangeable",
            "D) There is no difference between null and undefined"
        ],
        correctAnswer: "A) null means a variable has no value, while undefined means a variable has not been declared"
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.redBright("4. How do you declare a variable in TypeScript?"),
        choices: [
            "A) let x",
            "B) var x",
            "C) const x",
            "D) x"
        ],
        correctAnswer: "A) let x"
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.greenBright("5. What is the purpose of the interface keyword in TypeScript?"),
        choices: [
            "A) To define a new type",
            "B) To specify a type for a variable",
            "C) To define a contract for a class",
            "D) To define a function signature"
        ],
        correctAnswer: "C) To define a contract for a class"
    },
    {
        name: "question_6",
        type: "list",
        message: chalk.yellowBright("6. Which of the following is a type of function parameter in TypeScript?"),
        choices: [
            "A) Required parameter",
            "B) Optional parameter",
            "C) Default parameter",
            "D) Rest parameter"
        ],
        correctAnswer: "D) Rest parameter"
    },
    {
        name: "question_7",
        type: "list",
        message: chalk.magentaBright("7. What is the purpose of the enum keyword in TypeScript?"),
        choices: [
            "A) To define a new type",
            "B) To specify a type for a variable",
            "C) To define a set of named values",
            "D) To define a function signature"
        ],
        correctAnswer: "C) To define a set of named values"
    },
    {
        name: "question_8",
        type: "list",
        message: chalk.blueBright("8. How do you specify a type for a function return value in TypeScript?"),
        choices: [
            "A) Using the returns keyword",
            "B) Using the return keyword",
            "C) Using the => operator",
            "D) Using the : operator"
        ],
        correctAnswer: "D) Using the : operator"
    },
    {
        name: "question_9",
        type: "list",
        message: chalk.redBright("9. What is the purpose of the type keyword in TypeScript?"),
        choices: [
            "A) To define a new type",
            "B) To specify a type for a variable",
            "C) To define a alias for an existing type",
            "D) To define a function signature"
        ],
        correctAnswer: "C) To define a alias for an existing type"
    },
    {
        name: "question_10",
        type: "list",
        message: chalk.greenBright("10. Which of the following is a feature of TypeScript modules?"),
        choices: [
            "A) Exporting variables",
            "B) Importing variables",
            "C) Exporting functions",
            "D) All of the above"
        ],
        correctAnswer: "D) All of the above"
    },
    {
        name: "question_11",
        type: "list",
        message: chalk.yellowBright("11. How do you import a module in TypeScript?"),
        choices: [
            "A) Using the import keyword",
            "B) Using the require keyword",
            "C) Using the include keyword",
            "D) Using the module keyword"
        ],
        correctAnswer: "A) Using the import keyword"
    },
    {
        name: "question_12",
        type: "list",
        message: chalk.magentaBright("12. What is the purpose of the namespace keyword in TypeScript?"),
        choices: [
            "A) To define a new type",
            "B) To specify a type for a variable",
            "C) To define a scope for variables and functions",
            "D) To define a function signature"
        ],
        correctAnswer: "C) To define a scope for variables and functions"
    },
    {
        name: "question_13",
        type: "list",
        message: chalk.blueBright("13. Which of the following is a type of TypeScript comment?"),
        choices: [
            "A) Single-line comment",
            "B) Multi-line comment",
            "C) JSDoc comment",
            "D) All of the above"
        ],
        correctAnswer: "D) All of the above"
    },
    {
        name: "question_14",
        type: "list",
        message: chalk.redBright("14. How do you specify a type for a variable in TypeScript?"),
        choices: [
            "A) Using the : operator",
            "B) Using the = operator",
            "C) Using the == operator",
            "D) Using the === operator"
        ],
        correctAnswer: "A) Using the : operator"
    },
    {
        name: "question_15",
        type: "list",
        message: chalk.greenBright("15. What is the purpose of the never type in TypeScript?"),
        choices: [
            "A) To specify a type for a variable that can never be reached",
            "B) To specify a type for a variable that can always be reached",
            "C) To define a new type",
            "D) To specify a type for a function parameter"
        ],
        correctAnswer: "A) To specify a type for a variable that can never be reached"
    }
];

let student_score = 0; // Initially, score is 0 before attempting the quiz

// Function to check the student's answer
const checkAnswer = (answer:string, correctAnswer:string) => {
    if (answer === correctAnswer) {
        console.log(chalk.green("Correct Answer!"));
        student_score++;
    } else {
        console.log(chalk.red("Incorrect!"));
    }
};

// Loop through each question, ask the question and provide feedback immediately
for (const question of questions) {
    const answer = await inquirer.prompt([{
        name: question.name,
        type: question.type,
        message: question.message,
        choices: question.choices
    }]);
    checkAnswer(answer[question.name], question.correctAnswer);
}

console.log(chalk.bgBlue.bold.white(`Your Score Is ${student_score}`));
