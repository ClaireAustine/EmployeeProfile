const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const render = require("./src/html");
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
        message: "What is the managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the managers ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the managers email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the managers office number?",
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
        message: "What is the interns name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the interns ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the interns email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
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
        message: "What is the engineers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineers ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineers email address?",
      },
      {
        type: "input",
        name: "github",
        messgae:"What is the engineers github?",
      }
    ])
    .then((answers) => {
      const engineer = new Engineer();
      team.push(engineer);
      mainMenu();
    });
}

function html() {
  fs.writeFileSync(
    path.join(path.resolve(__dirname, "dist"), "employees.html"),
    render(team)
  );
}

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "New Employee ",
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
Start();
