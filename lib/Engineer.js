const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id, email = "", githubUser = '') {
        super(name, id, email);
        this.githubUser = githubUser;
    }

    getGitHub() {
        return this.githubUser;
    }

    getRole() {
        this.role = "Engineer";
        return this.role;
    };
}


module.exports = Engineer;
    