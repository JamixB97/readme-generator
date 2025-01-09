// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export const renderLicenseBadge = (license) => {
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
        return '[License](https://opensource.org/licenses/MIT)';
    case 'APACHE 2.0':
        return '[License](https://opensource.org/licenses/Apache-2.0)';
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
export const renderLicenseSection = (license) => {
    switch (data.license) {
      case 'MIT':
          return `
    ## License
    
    This project is licensed under the MIT License - see the ${renderLicenseLink(license)} file for details.`;
      case 'APACHE 2.0':
          return `
    ## License
    
    This project is licensed under the Apache License 2.0 - see the ${renderLicenseLink(license)} file for details.`;
      case 'GPL 3.0':
          return `
    ## License
    
    This project is licensed under the GPL-3.0 License - see the ${renderLicenseLink(license)} file for details.`;
      case 'BSD 3':
          return `
    ## License
    
    This project is licensed under the BSD 3-Clause License - see the ${renderLicenseLink(license)} file for details.`;
      case 'None':
          return '';
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
