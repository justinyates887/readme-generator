const inquirer = require('inquirer');
const prompts = require('./utils/prompts')

const start = () => {
  console.log('\
  ======================================================================\
  Hello!\n\
  \n\
  This program is a readme generator.\n\
  The purpose is to generate a quality readme.md for you projects.\n\
  There will be a few sections for you to fill out as follows:\n\
  \n\
  -Title\n\
  -Description\n\
  -Installation Instructions\n\
  -Usage\n\
  -Contributors\n\
  -Tests\n\
  -License\n\
  \n\
  You will have the option to select a license, and the appropriate badge will be selected for your readme');

  inquirer
  .prompt([
    {
      type: 'input',
      name: 'begin',
      message: 'Are you ready to begin?',
      validate: function (answer) {
          if(answer.length === 0){
              return console.log("No valid title recieved");
          } else {
              return true;
          }
      }
  }
  ]).then((answers) => {
    if (answers.begin === 'yes' || answers.begin === 'y'){
      prompts.prompts();
    } else if(answers.begin === 'no' || answers.begin === 'n'){
      return;
    } else {
      return;
    }
  })
}

start();
