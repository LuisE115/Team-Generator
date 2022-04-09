const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Luis', 123, 'luis@gmail.com');

    expect(employee.name).toEqual(expect.stringContaining(employee.name.toString()));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));
});

test('methods getting name id and email', () => {
    const employee = new Employee('Luis', 123, 'luis@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});