// Initilaizing the port
const port = 8000;

// Accessing the express
const express = require('express');

// initialinzing the express
const app  = express();


// Firing up the server
app.listen(port,(err) =>{
    if(err){
        console.log("Unable to connect the server :/");
        return;
    }

    console.log(`Server is up at : http://localhost:${port} :)`);
})