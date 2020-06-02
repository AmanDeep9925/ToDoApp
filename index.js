// Initilaizing the port
const port = 8000;

// Accessing the express
const express = require('express');

// initialinzing the express
const app  = express();

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
app.use('/',require('./routes/index'));

app.use('/todos',require('./routes/todos'));

// Firing up the server
app.listen(port,(err) =>{
    if(err){
        console.log("Unable to connect the server :/");
        return;
    }

    console.log(`Server is up at : http://localhost:${port} :)`);
})