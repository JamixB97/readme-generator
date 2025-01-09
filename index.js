// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { renderLicenseBadge, renderLicenseSection } from './utils/generateMarkdown.js';

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
        name: 'contribute'
     },
];



// // TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => err ? console.error(err) : console.log('README Successfully created!')) 
};

// // TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const readmeContent =
`# ${data.name}

${renderLicenseBadge()}

## Description
        
${data.discription}
        
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
        
## Installation
        
${data.install}
        
## Usage
        
${data.usage}
        
## Contributing
        
${data.contribute}

## Tests

${data.test}

## Questions

[My GitHUb profile](https://github.com/${data.username})

For additional questions email me at ${data.email}
   
${renderLicenseSection()}`;

    writeToFile('Readme-sample.md', readmeContent);

    });
};

// // Function call to initialize app
init();


