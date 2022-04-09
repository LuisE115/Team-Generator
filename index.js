const Menu = require('./lib/Menu');

// Function to initialize the App
async function initApp () { 
    new Menu().initMenu()
}


// Call the function
initApp();