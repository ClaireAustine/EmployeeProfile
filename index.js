const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const render =  require('./src/html')
const team = [];


function Start() {
  managerQuestions();
}

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your full name?",
      },
      {
        type: "input",
        name: "id",
        //am i supposed to return a random id number?
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager();
      team.push(manager);
      mainMenu();
    });
}

function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your full name?",
      },
      {
        type: "input",
        name: "id",
        //am i supposed to return a random id number?
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school do you attend?",
      },
    ])
    .then((answers) => {
      const intern = new Intern();
      team.push(intern);
      mainMenu();
    });
}

function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your full name?",
      },
      {
        type: "input",
        name: "id",
        //am i supposed to return a random id number?
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer();
      team.push(engineer);
      mainMenu();
    });
}

function html() {

fs.writeFileSync(path.join(path.resolve(__dirname, 'dist'),'employees.html'),render(team) )
}

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "w",
        choices: ["add Engineer", "add Intern", "Im done"],
      },
    ])
    .then((answer) => {
      switch (answer.employee) {
        case "add Engineer":
          engineerQuestions();
          break;

        case "add Intern":
          internQuestions();
          break;
        default:
          html();
      }
    });
}
