const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id, email = "", officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNo() {
        return this.officeNumber;
    }

    getRole() {
        this.role = "Manager";
        return this.role;
    };
}


module.exports = Manager;
    