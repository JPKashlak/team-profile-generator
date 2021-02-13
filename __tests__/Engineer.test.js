const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('checks if role has changed to engineerr', () => {
    const engineer = new Engineer('Jack');

    expect(engineer.getRole()).toBe('Engineer')
});

test('checks for github username', () => {
    const engineer = new Engineer('Jack');

    expect(engineer.getGitHub()).toStrictEqual(expect.any(String))
})