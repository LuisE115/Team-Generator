const Employee = require('./Employee');

// Intern class that extends from employee
class Intern extends Employee {
    constructor(name = '', id, email = "", school = '') {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        this.role = "Intern";
        return this.role;
    };
}


module.exports = Intern;
    