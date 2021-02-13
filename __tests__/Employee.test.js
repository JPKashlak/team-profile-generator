const { expect, test } = require('@jest/globals');
const { any } = require('expect');
const Employee = require('../lib/Employee');

test('create an Employee', () => {
    const employee = new Employee('Jack');

    expect(employee.name).toBe('Jack');
});

test('check for Employee id', () => {
    const employee = new Employee('Jack');

    expect(employee.id).toBe(employee.id);
})

test('check if name is received', () => {
    const employee = new Employee('Jack')

    expect(employee.getName()).toStrictEqual(expect.stringContaining(employee.name))
})

test('check if id is received', () => {
    const employee = new Employee('Jack')

    expect(employee.getId()).toBe(employee.id)
})

test('check if email is received', () => {
    const employee = new Employee('Jack')

    expect(employee.getEmail()).toStrictEqual(expect.any(String))
})

test('check if role is received', () => {
    const employee = new Employee('Jack')

    expect(employee.getRole()).toBe('Employee')
})
