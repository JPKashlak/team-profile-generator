const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('checks for office number', () => {
    const manager = new Manager('Jack', "12345");

    expect(manager.office).toBe(manager.office)
});

test('checks if role has changed to manager', () => {
    const manager = new Manager('Jack', "12345");

    expect(manager.getRole()).toBe('Manager')
});