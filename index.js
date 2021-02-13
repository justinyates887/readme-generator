const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

const fileAsync = util.promisify(fs.writeFile);

const content = answers => {
  return `
  #${answers.repotitle}

  By : ${answers.username};



  ##${answers.reponame}

  *${answers.description}
  
  `;
}

/* Prompts for messages*/
inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your user-name?',
      /*All inputs will require validation*/
      validate: function (answer) {
          if(answer.length === 0){
              return console.log("No valid username recieved");
          } else {
              return true;
          }
      }
    },
    {
      type: 'input',
      name: 'reponame',
      message: 'What is the name of your repo?',
      validate: function (answer) {
        if(answer.length === 0){
            return console.log("No valid repo name recieved");
        } else {
            return true;
        }
    }
    },
    {
      type: 'input',
      name: 'repotitle',
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
  ])
  .then(async (answers) => {
    let data = [];
    data.push(answers);
    console.log(data)
    await fileAsync('README.md', content(answers), err => {
      err ? console.log(err) : console.log('Successfully created README.md!')
  });
  });
