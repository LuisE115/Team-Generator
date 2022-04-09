const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const fs = require('fs');
const generatePage = require('../src/page-template.js');


function Menu () {
    this.employees = [];
    this.currentEmployee = {};
    this.githubUser;
    this.schoolName;
    this.manager = {};
    this.engineers = [];
    this.interns = [];

    Menu.prototype.initMenu = function() {
    
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
                    this.manager = this.currentEmployee;
                    return this.mainMenu();
                } else {
                    return this.initMenu();
                }
            })
        });
    };

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
        .then(answers => {
            if(answers.menuSelec === 'Engineer') {
                this.engineerForm();
            } else if (answers.menuSelec === 'Intern') {
                this.internForm();
            } else {
                this.closeMenu();
            }
        })
    };

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
            this.currentEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github);
            this.employees.push(this.currentEmployee);
            console.table(this.currentEmployee);
            this.engineers += this.currentEmployee;
            console.log('Saving', answers.name, 'as', this.currentEmployee.getRole());
            this.mainMenu();
        })
    };

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
            this.currentEmployee = new Intern(answers.name, answers.id, answers.email, answers.school);
            this.employees.push(this.currentEmployee);
            console.table(this.currentEmployee);
            this.interns += this.currentEmployee;
            console.log('Saving', answers.name, 'as', this.currentEmployee.getRole());
            this.mainMenu();
        })
    };

    Menu.prototype.closeMenu = function () {
        console.log('Closing Program.');
        fs.writeFile('./dist/index.html', generatePage(this.employees), err => {
            if (err) throw err;
            console.log('Team Generated in index.html!');
        })
    }
}

module.exports = Menu;
