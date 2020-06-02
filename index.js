// Initilaizing the port
const port = 8000;

// Accessing the express
const express = require('express');
// Intiliazing the layouts
const expressLayouts = require('express-ejs-layouts');

// initialinzing the express
const app  = express();

// Accessing the express layouts
app.use(expressLayouts);

// Setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

// urlEncoder
app.use(express.urlencoded());

// Accessing the static folder
app.use(express.static('./assets'))

// Accessing the routes
app.use('/',require('./routes'));



// Firing up the server
app.listen(port,(err) =>{
    if(err){
        console.log("Unable to connect the server :/");
        return;
    }

    console.log(`Server is up at : http://localhost:${port} :)`);
})