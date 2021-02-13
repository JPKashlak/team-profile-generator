const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('create an Employee', () => {
    const employee = new Employee('Jack');

    expect(employee.name).toBe('Jack');
});