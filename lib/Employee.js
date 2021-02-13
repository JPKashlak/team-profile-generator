class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = '';
        this.role = '';
        this.email = '';
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
        this.role = 'Employee'
        return `${this.role}`
    }
}

module.exports = Employee