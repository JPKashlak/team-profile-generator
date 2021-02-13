const inquirer = require("inquirer")

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
            {
            type: 'list',
            name: 'newEmployee',
            message: "Would you like to add another employee to the team profile?",
            choices: ['Engineer', 'Intern', 'Finished']
            }
        ]
    )
    .then(data => {
        if (data.newEmployee === 'Engineer' || data.newEmployee === 'Intern') {
            console.log("Did it")
        }
        else {
            console.log("Nope")
        }
    })       
}

promptManager();

