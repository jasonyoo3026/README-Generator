// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  } else if(license === "BSD3") {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]` 
  } else if(license === "LGPL") {
    return `[![License](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]`
  } else if(license === "MIT") {
    return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if(license === "MPL") {
    return `[![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Apache") {
    return `[![License](https://opensource.org/licenses/Apache-2.0)]`
  } else if(license === "BSD3") {
    return `[![License](https://opensource.org/licenses/BSD-3-Clause)]`
  } else if(license === "LGPL") {
    return `[![License](https://www.gnu.org/licenses/lgpl-3.0)]`
  } else if(license === "MIT") {
    return `[![License](https://opensource.org/licenses/MIT)]`
  } else if(license === "MPL") {
    return `[![License](https://opensource.org/licenses/MPL-2.0)]`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License 📝
    This application is covered by the ${license} license.`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Table of contents
  - [Project description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  ${renderLicenseLink(data.license)}
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.usage)}

  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Feel free to contact me if you have any questions, you can contact me through ${data.email}.
  You can check my github at [${data.github}](https://www.github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
