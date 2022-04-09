const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const fs = require('fs');
const generatePage = require('../src/page-template.js');

// Menu function to ask user and create new objects to export into page template
function Menu () {
    this.employees = [];
    this.currentEmployee = {};
    this.githubUser;
    this.schoolName;

    // First user prompt to ask user information
    Menu.prototype.initMenu = function() {
        // Prompt user about general info
        console.log("Welcome to Team Profile Generator!");
        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is your name(manager name)?'
            },
            {
                type: 'number',
                name: 'id',
                message: 'Enter Manager ID: #'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is your e-mail?'
            },
            {
                type: 'number',
                name: 'officeNo',
                message: 'Enter your Manager office number: #'
            },

        ])
        .then(answers => {
            // creates a new manager object and get the role 
            this.currentEmployee = new Manager(answers.name, answers.id, answers.email, answers.officeNo);
            console.log('Displaying saved information...');
            console.table(this.currentEmployee);
            console.log('Saving', answers.name, 'as', this.currentEmployee.getRole());
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'confirmation',
                    message: 'Is the data correct?'
                },
            ])
            .then(({ confirmation }) => {
                if (confirmation === true) {
                    this.employees.push(this.currentEmployee);
                    // call main menu function
                    return this.mainMenu();
                } else {
                    // repeat initmenu function
                    return this.initMenu();
                }
            })
        });
    };

    // Main menu prompt 
    Menu.prototype.mainMenu = function() {
        console.log('---MAIN MENU---');
        inquirer.prompt([
            {
                type: 'list',
                name: 'menuSelec',
                message: 'Which profile you want to create next?',
                choices: [
                    'Engineer',
                    'Intern',
                    'EXIT PROGRAM'
                ]
            },

        ])
        // Prompt user to select next employee creation
        .then(answers => {
            if(answers.menuSelec === 'Engineer') {
                // Call engineer form
                this.engineerForm();
            } else if (answers.menuSelec === 'Intern') {
                // Call intern form
                this.internForm();
            } else {
                // Call function to close the program
                this.closeMenu();
            }
        })
    };

    // New engineer prompt function
    Menu.prototype.engineerForm = function () {
        console.log('You are about to create a new instance for Engineer.');
        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Enter employee name:'
            },
            {
                type: 'number',
                name: 'id',
                message: 'Enter employee ID: #'
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter employee e-mail:'
            },                    {
                type: 'text',
                name: 'github',
                message: 'Enter employee GitHub username:'
            },
        ])
        .then(answers => {
            // Creates a new engineer object
            this.currentEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github);
            this.employees.push(this.currentEmployee);
            console.table(this.currentEmployee);
            console.log('Saving', answers.name, 'as', this.currentEmployee.getRole());
            // Go back to main menu
            this.mainMenu();
        })
    };

    // New intern prompt function
    Menu.prototype.internForm = function () {
        console.log('You are about to create a new instance for Engineer.');
        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Enter employee name:'
            },
            {
                type: 'number',
                name: 'id',
                message: 'Enter employee ID: #'
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter employee e-mail:'
            },                    {
                type: 'text',
                name: 'school',
                message: 'Enter employee School name:'
            },
        ])
        .then(answers => {
            // Creates a new intern object
            this.currentEmployee = new Intern(answers.name, answers.id, answers.email, answers.school);
            this.employees.push(this.currentEmployee);
            console.table(this.currentEmployee);
            console.log('Saving', answers.name, 'as', this.currentEmployee.getRole());
            // Go back to main menu
            this.mainMenu();
        })
    };

    // Function to close program
    Menu.prototype.closeMenu = function () {
        console.log('Closing Program.');
        // call generatePage with array of employees objects to create html file
        fs.writeFile('./dist/index.html', generatePage(this.employees), err => {
            if (err) throw err;
            console.log('Team Generated in index.html!');
        })
    }
}

module.exports = Menu;
