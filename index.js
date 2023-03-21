const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "Test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Lisense",
    choices: [
      "Apache License 2.0",
      "ISC License",
      "MIT License",
      "GNU General Public License v3.0",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "Github username:",
  },
  {
    type: "input",
    name: "email",
    message: "Email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const targetPath = path.resolve(__dirname, `./${fileName}`);

  fs.writeFile(targetPath, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("README-TEST.md", markdown);
    })
    .catch((error) => {
      if (error.isTyError) {
        // prompt couldn't be rendered in the current environment.
      } else {
        console.log(error);
      }
    });
}

// Function call to initialize app
init();
