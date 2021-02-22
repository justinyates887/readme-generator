const inquirer = require('inquirer');
const content = require('./content');
const fs = require('fs');
const util = require("util");
const fileAsync = util.promisify(fs.writeFile);

const prompts = () => { 
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repo?',
        validate: function (answer) {
            if(answer.length === 0){
                return console.log("No valid title recieved");
            } else {
                return true;
            }
        }
        },
        {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
        validate: function (answer) {
            if(answer.length === 0){
                return console.log("No valid description recieved");
            } else {
                return true;
            }
        }
        },
        {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?',
        validate: function (answer) {
            if(answer.length === 0){
                return console.log("No valid description recieved");
            } else {
                return true;
            }
        }
        },
        {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?',
        validate: function (answer) {
            if(answer.length === 0){
                return console.log("No valid description recieved");
            } else {
                return true;
            }
        }
        },
        {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?',
        validate: function (answer) {
            if(answer.length === 0){
                return console.log("No valid people recieved");
            } else {
                return true;
            }
        }
        },
        {
        type: 'input',
        name: 'tests',
        message: 'What were/are the tests for this project?',
        validate: function (answer) {
            if(answer.length === 0){
                return console.log("No valid description recieved");
            } else {
                return true;
            }
        }
        },
        {
        type: 'input',
        name: 'license',
        message: 'What is the license for this project?\n\
        (a) Apache License 2.0\n\
        (g) GNU Public License\n\
        (m) MIT License\n\
        (no) No license',
        validate: function (answer) {
            if(answer.length === 0){
                return console.log("No valid description recieved");
            } else {
                return true;
            }
        }
        },
    ])
    .then(async (answers) => {
        await fileAsync('README.md', content.content(answers), err => {
        err ? console.log(err) : console.log('Successfully created README.md!')
    });
  });
}

exports.prompts = prompts;