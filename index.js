const inquirer = require('inquirer');
const chalk = require("chalk");
const { title } = require('process');
const fs  = require("fs")
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

inquirer
  .prompt([
    {name: "title", message: "Name of Repo: ",},
    {name: "descr", message: "Description: ",},
    {name: "install", message: "Install Instructions: "},
    {name: "usage", message:"Usage Instructions: "},
    {name: "contr", message: "Contribution Guidlines: "},
    {name: "test", message: "Test Instructions"},
    {name: "git", message: "Enter GitHub UserName: "},
    {name: "email", message: "Enter Email Address: "},
  ])
  .then(answers => {
    console.log(answers.title);


    const readMeTemplate = `
# ${answers.title}

### Description
${answers.descr}


## Table of contents
* [Description](#description)
* [Questions](#questions)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contributing)
* [Testing(#testing) 


## Installation


## Questions

# Github
${answers.git}
# Email
${answers.email}


## Usage
${answers.usage}


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
${answers.contr}

## Testing

${answers.test}

## License
[MIT](https://choosealicense.com/licenses/mit/)
    
    
`//end of readME
fs.writeFile("readMe.md", readMeTemplate, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      // Get the file contents after the append operation
      
    }
  });

  });