const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name = '', office = '') {
        super(name)

       this.office = office
    }
}

module.exports = Manager