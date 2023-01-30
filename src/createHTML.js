const Employee = require("../lib/Employee");

function createTeamMembers(teamMembers) {
    const teamCards = teamMembers.map(employee => {
        const employeePosition = employee.constructor.name;
        const { name, id, email, _ } = employee;
        let employeeTrait;
        let traitValue;

        if (employeePosition === `Manager`) {
            employeeTrait = `Office Number`;
            traitValue = employee.getOfficeNumber();
        } else if (employeePosition === `Engineer`) {
            employeeTrait = `GitHub`;
            traitValue = employee.getGithub();
        } else if (employeePosition === `Intern`) {
            employeeTrait = `School`;
            traitValue = employee.getSchool();
        }

        return `
<div class="col d-flex justify-content-center mt-4">
    <div class="card shadow "style='width 20rem;">
        <div class="card-header bg-primary text-white">
            <h3 class=fs-2">${name}</h3>
            <h4>${employeePosition}<
        </div>
        <div class = "card-body bg-light">
            <ul class = "list-group py-3">
                <li class= "list-group-item">ID: ${id}</li>
                <li class= "list-group-item">Email: ${email}</li>
                <li class= "list-group-item">${employeeTrait}: ${traitValue}</li>
            </ul>
        </div>
    </div>
</div>`
    });

    return teamCards.join("\n");

}

function createHTML(teamMembers) {
    return `<!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        <title>My Team Profile</title>
    </head>
    
    <body>
        <header class="bg-danger text-white text-center p-4">
            <h1 class="fw-bolder" style="font-size: 3rem;">My Team</h1>
        </header>
    
        <main class="d-flex justify-content-center align-items-center">
            
            <section class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-flex flex-wrap justify-content-center align-items-center w-75">
                ${createTeamMembers(teamMembers)}
            </section>
        
        </main>
        <script src="https://kit.fontawesome.com/9f96f948a1.js" crossorigin="anonymous"></script>
    </body>
</html>`;
}

module.exports = createHTML;