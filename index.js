// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
     },
     {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
     },
     {
        type: 'input',
        message: "What is your project's name?",
        name: 'name'
     },
     {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'discription'
     },
     {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
     },
     {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'install'
     },
     {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test'
     },
     {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage'
     },
     {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'repo'
     },
];



// // TODO: Create a function to write README file
function writeToFile(data) {
    const readmeContent =  `# ${data.name}

## Description

${data.discription}

## Table of Contents

## Installation

${data.install}

## Usage

* ${data.usage}

* ${data.repo}

## Credits

N/A

## License

${data.license}`;

    fs.writeFile('README-Sample.md', readmeContent, (err) => err ? console.errror(err) : console.log('Success!'))


};

// // TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(writeToFile());
    };

// // Function call to initialize app
init();