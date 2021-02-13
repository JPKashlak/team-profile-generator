const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name = '') {
        super(name)

        this.github = ''
    }

    getRole() {
        this.role = 'Engineer'
        return `${this.role}`
    }

    getGitHub() {
        return `${this.github}`
    }
}

module.exports = Engineer