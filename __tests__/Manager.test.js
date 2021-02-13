const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('checks for office number', () => {
    const manager = new Manager('Jack', 12345);

    expect(manager.office).toEqual(expect.any(Number))
});