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
// Accessing the home home Controller
// const homeController = require('./controllers')

const todo = [
    {
        id : 1,
        description :"Get Martha's food",
        category : "Home",
        dueDate : "08/06/2020"
    },
    {
        id : 2,
        description :"Get Groceries",
        category : "Kitchen",
        dueDate : "08/06/2020"
    },
    {
        id : 3,
        description :"Get Car Washed",
        category : "Home",
        dueDate : "10/06/2020"
    }
]
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