const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('checks if role has changed to intern', () => {
    const intern = new Intern('Jack', 12345, 'test@gmail.com', 'UT Austin')

    expect(intern.getRole()).toBe('Intern')
});

test('checks if school is received', () => {
    const intern = new Intern('Jack', 12345, 'test@gmail.com', 'UT Austin')

    expect(intern.getSchool()).toStrictEqual(expect.any(String))
})