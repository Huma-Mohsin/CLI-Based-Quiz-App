import inquirer from "inquirer";
console.log("TypeScript's Quiz");
console.log("*****************");
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "1. What is the purpose of the any type in TypeScript?",
        choices: [" A) To specify a type for a variable",
            "B) To indicate a variable can hold any type",
            "C) To define a new type",
            " D) To specify a type for a function parameter"
        ],
    },
    {
        name: "question_2",
        type: "list",
        message: "2. Which of the following is a feature of TypeScript?",
        choices: ["A) Optional static typing", "B) Mandatory dynamic typing", "C) Optional dynamic typing", "D) Mandatory static typing"
        ],
    },
    {
        name: "question_3",
        type: "list",
        message: "3. What is the difference between null and undefined in TypeScript?",
        choices: ["A) null means a variable has no value, while undefined means a variable has not been declared", "B) null means a variable has not been declared, while undefined means a variable has no value", "C) null and undefined are interchangeable", "D) There is no difference between null and undefined"
        ],
    },
    {
        name: "question_4",
        type: "list",
        message: "4. How do you declare a variable in TypeScript?",
        choices: ["A) let x", "B) var x", "C) const x", "D) x"
        ],
    },
    {
        name: "question_5",
        type: "list",
        message: "5. What is the purpose of the interface keyword in TypeScript?",
        choices: ["A) To define a new type", "B) To specify a type for a variable", "C) To define a contract for a class", "D) To define a function signature"
        ],
    },
    {
        name: "question_6",
        type: "list",
        message: "6. Which of the following is a type of function parameter in TypeScript?",
        choices: ["A) Required parameter", "B) Optional parameter", "C) Default parameter", "D) Rest parameter"
        ],
    },
    {
        name: "question_7",
        type: "list",
        message: "7. What is the purpose of the enum keyword in TypeScript?",
        choices: ["A) To define a new type", "B) To specify a type for a variable", "C) To define a set of named values", "D) To define a function signature"
        ],
    },
    {
        name: "question_8",
        type: "list",
        message: "8. How do you specify a type for a function return value in TypeScript?",
        choices: ["A) Using the returns keyword", "B) Using the return keyword", "C) Using the => operator", "D) Using the : operator"
        ],
    },
    {
        name: "question_9",
        type: "list",
        message: "9. What is the purpose of the type keyword in TypeScript?",
        choices: ["A) To define a new type", "B) To specify a type for a variable", "C) To define a alias for an existing type", "D) To define a function signature"
        ],
    },
    {
        name: "question_10",
        type: "list",
        message: "10. Which of the following is a feature of TypeScript modules?",
        choices: ["A) Exporting variables", "B) Importing variables", "C) Exporting functions", "D) All of the above"
        ],
    },
    {
        name: "question_11",
        type: "list",
        message: "11. How do you import a module in TypeScript?",
        choices: ["A) Using the import keyword", "B) Using the require keyword", "C) Using the include keyword", "D) Using the module keyword"
        ],
    },
    {
        name: "question_12",
        type: "list",
        message: "12. What is the purpose of the namespace keyword in TypeScript?",
        choices: ["A) To define a new type", "B) To specify a type for a variable", "C) To define a scope for variables and functions", "D) To define a function signature"
        ],
    },
    {
        name: "question_13",
        type: "list",
        message: "13. Which of the following is a type of TypeScript comment?",
        choices: ["A) Single-line comment", "B) Multi-line comment", "C) JSDoc comment", "D) All of the above"
        ],
    },
    {
        name: "question_14",
        type: "list",
        message: "14. How do you specify a type for a variable in TypeScript?",
        choices: ["A) Using the : operator", "B) Using the = operator", "C) Using the == operator", "D) Using the === operator"
        ],
    },
    {
        name: "question_15",
        type: "list",
        message: "15. What is the purpose of the never type in TypeScript?",
        choices: ["A) To specify a type for a variable that can never be reached", "B) To specify a type for a variable that can always be reached", "C) To define a new type", "D) To specify a type for a function parameter"
        ],
    },
]);
let student_score = 0; //initially score is 0 before atteempting QUiz
//to check student's answer is correct or not
switch (quiz.question_1) {
    case "B) To indicate a variable can hold any type":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_2) {
    case "A) Optional static typing":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_3) {
    case "A) null means a variable has no value, while undefined means a variable has not been declared":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_4) {
    case "A) let x":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_5) {
    case "C) To define a contract for a class":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_6) {
    case "D) Rest parameter":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_7) {
    case "C) To define a set of named values":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_8) {
    case "D) Using the : operator":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_9) {
    case "C) To define a alias for an existing type":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_10) {
    case "D) All of the above":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_11) {
    case "A) Using the import keyword":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_12) {
    case "C) To define a scope for variables and functions":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_13) {
    case "D) All of the above":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_14) {
    case "A) Using the : operator":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
switch (quiz.question_15) {
    case "A) To specify a type for a variable that can never be reached":
        console.log("Correct Answer !");
        ++student_score;
        break;
    default:
        console.log("InCorrect!");
}
console.log(`Your Score Is ${student_score}`);
