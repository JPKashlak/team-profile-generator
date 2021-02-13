const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name = '') {
        super(name)

        this.school = ""
    }

    getRole() {
        this.role = 'Intern'
        return `${this.role}`
    }

    getSchool() {
        return `${this.school}`
    }
}
module.exports = Intern