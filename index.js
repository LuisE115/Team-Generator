const Menu = require('./lib/Menu');
const fs = require('fs');
const generatePage = require('./src/page-template.js');



async function initApp () { 
    new Menu().initMenu()
}



initApp();