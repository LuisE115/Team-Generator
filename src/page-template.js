// Generate html card for manager
const managerCard = managerData => {
        return `
        <div class="card">
            <h2>${managerData.name}</h2>
            <p>Id #${managerData.id}</p>
            <p>E-mail: <a href="mailto: ${managerData.email}">${managerData.email}</a></p>
            <p>Office Number: ${managerData.officeNumber}</p>
            <p>Role: ${managerData.role}</p>
        </div>
        `; 
};

// Generate html cards for Engineers and Interns
// Use filter to know if object is engineer or intern
 const employeeCard = employeeData => {
        return `
        ${employeeData.filter(({ githubUser }) => githubUser)
        .map(({ name, id, email, githubUser, role}) => {
            return `
            <div class="card">
                <h2>${name}</h2>
                <p>Id #${id}</p>
                <p>E-mail: <a href="mailto: ${email}">${email}</a></p>
                <p>GitHub: <a href="https://github.com/${githubUser}">${githubUser}</a></p>
                <p>Role: ${role}</p>
            </div>
         `;
     })
     .join('')}
        ${employeeData.filter(({ school }) => school)
        .map(({ name, id, email, school, role}) => {
            return `
            <div class="card">
                <h2>${name}</h2>
                <p>Id #${id}</p>
                <p>E-mail: <a href="mailto: ${email}">${email}</a></p>
                <p>school: ${school}</p>
                <p>Role: ${role}</p>
            </div>
         `;
     })
     .join('')}
     `;
};

// Export to get template data from Menu.js
module.exports = templateData => {
    // Basi layout for head and header and defines div to call managerCard and employeeCard
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
    </head>

    <body>
        <header>
            <h1>Team Profile</h1>
        </header>

        <div class="content">
            ${managerCard(templateData[0])}

            ${employeeCard(templateData)}
          
        </div>
    </body>
    `;
};

