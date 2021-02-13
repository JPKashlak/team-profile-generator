const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('checks if role has changed to intern', () => {
    const intern = new Intern('Jack')

    expect(intern.getRole()).toBe('Intern')
});

test('checks if school is received', () => {
    const intern = new Intern('Jack')

    expect(intern.getSchool()).toStrictEqual(expect.any(String))
})