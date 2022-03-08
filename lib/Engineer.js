const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github= github
    }
    gitGithub(){
        return this.github
    }

    gitRole(){
        return 'Engineer'
    }
}

module.exports = Engineer