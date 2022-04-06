const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Luis', 123, 'luis@gmail.com', 'LuisE115');

    expect(engineer.name).toEqual(expect.stringContaining(engineer.name.toString()));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('Engineer methods', () => {
    const engineer = new Engineer('Luis', 123, 'luis@gmail.com', 'LuisE115');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role.toString()));
    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.githubUser.toString()));
});