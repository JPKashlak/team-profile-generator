class Employee {
    constructor(name = '', id = '') {
        this.name = name;
        this.id = id;
        this.role = 'Employee'
        this.email = ''
    }

    getName() {
        return `${this.name}`
    }

    getId() {
        return `${this.id}`
    }

    getEmail() {
        return `${this.email}`
    }

    getRole() {
        return `${this.role}`
    }
}

module.exports = Employee