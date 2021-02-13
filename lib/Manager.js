const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name = '') {
        super(name)

       this.office = ''
    }

    getRole() {
        this.role = 'Manager'
        return `${this.role}`
    }
}

module.exports = Manager