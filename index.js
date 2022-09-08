let fs = require('fs')

const inquirer = require('inquirer');
output=""

response=[]

console.log('Hi, please answer the following questions to create your READ ME');

const questions = [

  {
    type: 'input',
    name: 'Title',
    message: 'What is your project title?',
  },{
    type: 'input',
    name: 'About The Project',
    message: 'Provide a description of this project.',
  },{
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use',
  },{
    type: 'input',
    name: 'Install',
    message: 'Enter the command to install necessary dependencies',
  },{
    type: 'input',
    name: 'Prerequisites',
    message: 'Please list things you need to use the software and how to install them.',
},{
    type: 'input',
    name: 'Tests',
    message: 'Please provide any information about running tests',
  },{
    type: 'input',
    name: 'Name',
    message: 'Please provide your name',
  },{
    type: 'input',
    name: 'Email',
    message: 'Please provide your email',
  },{
    type: 'input',
    name: 'Link',
    message: 'Project Link:',
  },
  {
    type: 'input',
    name: 'Credits',
    message: 'Your collaborators, if any, with links to their GitHub profiles.',
  }
  ,{
    type: 'list',
    name: 'License',
    choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense']
  }
];




function template(a,b,c,d,e,f,g,h,i,j,k){output=`
  <h4 align="center">`+a+`</h4>
  <p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#Usage">Usage</a> •
  <a href="#Download">Download</a> •
  <a href="#Contribution-Guidelines">Contribution Guidelines</a> •
  <a href="#Testing">Testing</a> •
  <a href="#Email">Email</a> •
  <a href="#Project-Link">Project Link</a> •
  <a href="#Credits">Credits</a>•
  <a href="#License">License</a> •
  </p>

  ## Key Features
  `+b+`
 
  ## Usage
  `+c+`  
 
  ## Download
  `+d+`
 
  ## Contribution-Guidelines
  `+e+`
 
  ## Testing
  - `+f+`
 
  ## Contact
  - Name:`+g+`
  - Email:`+h+`
  
  ## Project Link
  `+i+`
  
  ## Credits
  `+j+`
  
  ## License
  `+k+`
`
}


inquirer.prompt(questions).then((p) => {
  
  template(...Object.values(p))
  fs.writeFileSync("./ReadMe.md", output)
});

