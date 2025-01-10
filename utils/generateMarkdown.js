// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
        return '![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)';
    case 'APACHE 2.0':
        return '![Apache License 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
        return '![GPL License 3.0](https://img.shields.io/badge/license-GPL%203.0-blue.svg)';
    case 'BSD 3':
        return '![BSD 3-Clause License](https://img.shields.io/badge/license-BSD%203--Clause-blue.svg)';
    case 'None':
        return ''; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
        return '[License](https://mit-license.org/)';
    case 'APACHE 2.0':
        return '[License](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'GPL 3.0':
        return '[License](https://www.gnu.org/licenses/gpl-3.0.html)';
    case 'BSD 3':
        return '[License](https://opensource.org/licenses/BSD-3-Clause)';
    case 'None':
        return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    switch (license) {
      case 'MIT':
          return `
## License
    
This project is licensed under the MIT License - see the ${renderLicenseLink(license)} file for details.`;
      case 'APACHE 2.0':
          return `
## License
    
This project is licensed under the Apache 2.0 License - see the ${renderLicenseLink(license)} file for details.`;
      case 'GPL 3.0':
          return `
## License
    
This project is licensed under the GPL 3.0 License - see the ${renderLicenseLink(license)} file for details.`;
      case 'BSD 3':
          return `
## License
    
This project is licensed under the BSD 3 License - see the ${renderLicenseLink(license)} file for details.`;
      case 'None':
          return '';
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

${renderLicenseBadge(data.license)}

## Description
        
${data.discription}
        
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
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
   
${renderLicenseSection(data.license)}`;

}

export default generateMarkdown;
