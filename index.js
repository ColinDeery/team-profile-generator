const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createHTML = require('./src/createHTML');

const managerQuestions = [
    {
        type: `input`,
        message: `What is the name of the team manager?`,
        name: `managerName`
    },
    {
        type: `input`,
        message: `What is the manager's ID?`,
        name: `ID`
    },
    {
        type: `input`,
        message: `What is the manager's email address?`,
        name: `email`
    },
    {
        type: `input`,
        message: `What is the manager's office number?`,
        name: `officeNumber`,
    }
];

const menuPromtps = [
    {
        type: `list`,
        message: `Would you like to add another employee?`,
        choices: [`Add an engineer`, `Add an intern`, `Team Completed`],
        name: `next`
    }
];

const engineerQuestions = [
    {
        type: `input`,
        message: `What is the engineer's name?`,
        name: `engineerName`
    },
    {
        type: `input`,
        message: `What is the engineer's ID?`,
        name: `ID`
    },
    {
        type: `input`,
        message: `What is the engineer's email address?`,
        name: `email`
    },
    {
        type: `input`,
        message: `What is the engineer's GitHub username?`,
        name: `github`
    }
];

const internQuestions = [
    {
        type: `input`,
        message: `What is the intern's name?`,
        name: `internName`
    },
    {
        type: `input`,
        message: `What is the intern's ID?`,
        name: `ID`
    },
    {
        type: `input`,
        message: `What is the intern's email address?`,
        name: `email`
    },
    {
        type: `input`,
        message: `What is the intern's school?`,
        name: `school`
    }
];

let teamMembers = [];
const engineers = [];
const interns = [];

function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then(engineerData => {
            engineers.push(new Engineer(engineerData.engineerName, engineerData.ID, engineerData.email, engineerData.github));
            displayMenu();
        });
}

function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then(internData => {
            interns.push(new Intern(internData.internName, internData.ID, internData.email, internData.school));
            displayMenu();
        });
}

function displayMenu() {
    inquirer
        .prompt(menuPromtps)
        .then(menuResponses => {
            if (menuResponses.next === `Add an engineer`) {
                addEngineer();
            } else if (menuResponses.next === `Add an intern`) {
                addIntern()
            } else {
                teamMembers = teamMembers.concat(engineers).concat(interns);
                fs.writeFile('./dist/index.html', createHTML(teamMembers),
                    console.log(`Team Profile has been created.`)
                );
            }
            return;
        });
}

function init() {
    console.log(`Begin generating team profile by entering manager's data.`);

    inquirer
        .prompt(managerQuestions)
        .then(managerData => {
            teamMembers.push(new Manager(managerData.managerName, managerData.ID, managerData.email, managerData.officeNumber));
            displayMenu();
        });
}

init();