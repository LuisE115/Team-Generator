const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Luis', 123, 'luis@gmail.com', 'MDC');

    expect(intern.name).toEqual(expect.stringContaining(intern.name.toString()));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining(intern.email.toString()));
});

test('Intern methods', () => {
    const intern = new Intern('Luis', 123, 'luis@gmail.com', 'MDC');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role.toString()));
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});