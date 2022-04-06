const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Luis', 123, 'luis@gmail.com', 15152);

    expect(manager.name).toEqual(expect.stringContaining(manager.name.toString()));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining(manager.email.toString()));
});

test('Manager methods', () => {
    const manager = new Manager('Luis', 123, 'luis@gmail.com', 15152);

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role.toString()));
    expect(manager.getOfficeNo()).toEqual(expect.any(Number));
});