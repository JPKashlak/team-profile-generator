const fs = require('fs');
const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHTML');

const roster = [];

const promptManager = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?",
                validate: manaNameInput => {
                    if (manaNameInput) {
                        return true
                    }
                    else {
                        console.log ("Please enter the manager's name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the team manager's ID Number?",
                validate: manaIdInput => {
                    if (manaIdInput && manaIdInput > 0) {
                        return true
                    }
                    else {
                        console.log ("Please enter a valid ID number!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email address?",
                validate: manaEmailInput => {
                    if (manaEmailInput) {
                        return true
                    }
                    else {
                        console.log ("Please enter the manager's email address!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "What is the team manager's office number?",
                validate: manaOfficeInput => {
                    if (manaOfficeInput && manaOfficeInput > 0) {
                        return true
                    }
                    else {
                        console.log ("Please enter a valid office number!")
                        return false;
                    }
                }
            },
        ]
    )
        .then(managerData => {
            const newManager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.managerOffice)
            roster.push(newManager)
        }

    )
    .then(managerData => {
        promptEmployee(managerData)
    })
}


const promptEmployee = () => {
    return inquirer.prompt(         
            {
            type: 'list',
            name: 'newEmployee',
            message: "Would you like to add another employee to the team profile?",
            choices: ['Engineer', 'Intern', 'Finished']
            })
    .then(promptData => {
        if (promptData.newEmployee === 'Engineer') {
            promptEngi();
        }
        else if (promptData.newEmployee === 'Intern') {
            promptIntern();
        }
        else {
            console.log("Writing index.html")
            compile()
            
        }
    })
}

const promptEngi = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'engiName',
                message: "What is the engineer's name?",
                validate: engiNameInput => {
                    if (engiNameInput) {
                        return true
                    }
                    else {
                        console.log ("Please enter the engineer's name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engiId',
                message: "What is the engineer's ID Number?",
                validate: engiIdInput => {
                    if (engiIdInput && engiIdInput > 0) {
                        return true
                    }
                    else {
                        console.log ("Please enter a valid ID number!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engiEmail',
                message: "What is the engineer's email address?",
                validate: engiEmailInput => {
                    if (engiEmailInput) {
                        return true
                    }
                    else {
                        console.log ("Please enter the engineer's email address!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engiGithub',
                message: "What is the engineer's GitHub username?",
                validate: empGithubInput => {
                    if (empGithubInput) {
                        return true
                    }
                    else {
                        console.log ("Please enter the engineer's GitHub username!")
                        return false;
                    }
                }
            }
        ]
    )
    .then(engiData => {
        const newEngineer = new Engineer(engiData.engiName, engiData.engiId, engiData.engiEmail, engiData.engiGithub)
        roster.push(newEngineer)
        promptEmployee()
    })
}

const promptIntern = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'intName',
                message: "What is the intern's name?",
                validate: intNameInput => {
                    if (intNameInput) {
                        return true
                    }
                    else {
                        console.log ("Please enter the intern's name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'intId',
                message: "What is the intern's ID Number?",
                validate: intIdInput => {
                    if (intIdInput && intIdInput > 0) {
                        return true
                    }
                    else {
                        console.log ("Please enter a valid ID number!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'intEmail',
                message: "What is the intern's email address?",
                validate: intEmailInput => {
                    if (intEmailInput) {
                        return true
                    }
                    else {
                        console.log ("Please enter the intern's email address!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'intSchool',
                message: "What school does the intern attend?",
                validate: intSchoolInput => {
                    if (intSchoolInput) {
                        return true
                    }
                    else {
                        console.log ("Please enter the intern's school!")
                        return false;
                    }
                }
            }
        ]
    )
    .then(intData => {
        const newIntern = new Intern(intData.intName, intData.intId, intData.intEmail, intData.intSchool)
        roster.push(newIntern)
        promptEmployee()
    })
}

function compile() {
    // console.log(roster);
    
    const rosterData = {...roster}
    // console.log(rosterData)
    

    const pageHTML = generateHtml(rosterData)                
    
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) throw new Error(err);
        console.log('Team Profile created! Check it out in your dist folder!')
    })
}

promptManager()
    







