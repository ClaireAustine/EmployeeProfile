
function createTeam(team){

        function createManager(manager){
            return ``
        }

    const html = [];

        html.push(team.filter(employee =>employee.getRole() ==='Manager' ).map(manager => createManager(manager)))
        html.push(team.filter(employee =>employee.getRole() ==='Engineer' ).map(engineer => createEngineer(engineer)))
        html.push(team.filter(employee =>employee.getRole() ==='Intern' ).map(intern => createIntern(intern)))

    return html.join('')
}

module.exports = (team) =>{
    return `
    
    ${createTeam(team)}
    `
}