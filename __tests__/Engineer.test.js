const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('checks if role has changed to engineerr', () => {
    const engineer = new Engineer('Jack', 12345, 'test@gmail.com', 'GitJack');

    expect(engineer.getRole()).toBe('Engineer')
});

test('checks for github username', () => {
    const engineer = new Engineer('Jack', 12345, 'test@gmail.com', 'GitJack');

    expect(engineer.getGitHub()).toStrictEqual(expect.any(String))
})