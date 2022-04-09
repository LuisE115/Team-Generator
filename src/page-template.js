const Menu = require('../lib/Menu');


const managerCard = managerData => {
        return `
        <div class="card">
            <h2>${managerData.name}</h2>
            <p>Id #${managerData.id}</p>
            <p>E-mail: ${managerData.email}</p>
            <p>Office Number: ${managerData.extra}</p>
            <p>Role: ${managerData.role}</p>
        </div>
        `; 
};

 const employeeCard = employeeData => {
     const employeeArr = employeeData.map(({ name, id, email}) => {
        return `
        <div class="card">
             <h2>${name}</h2>
             <p>Id #${id}</p>
             <p>E-mail: ${email}</p>
             <p>Office Number: </p>
            <p>Role: </p>
         </div>
         `;
     });
     return `
     <div>${employeeArr.join('')}</div>
     `;
};
// };

module.exports = templateData => {
    console.log(templateData);
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Generator</title>
    </head>

    <body>
        <header>
            <h1>Team Profile</h1>
        </header>
        <div>
            ${managerCard(templateData[0])}

            ${employeeCard(templateData)}
          
        </div>
    </body>
    `;
};

