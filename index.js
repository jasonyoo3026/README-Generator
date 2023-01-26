// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project here:'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your software installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your software used?'
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license does your project have?",
        choices: [
            { value: 'Apache' },   
            { value: 'BSD3' },  
            { value: 'LGPL' },  
            { value: 'MIT' },  
            { value: 'MPL' }, 
            { value: 'None' }]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can people contribute to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can a user test your software?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`README.md`, data, 
    (err) => err ? console.error(err) : console.log(`README.md has been generated.`))
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        writeToFile((answers.fileName), (generateMarkdown(answers)));

    })
}

// Function call to initialize app
init();
