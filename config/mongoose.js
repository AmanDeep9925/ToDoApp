// Making connection to Data Base

// Accessing the mongoose

const mongoose = require('mongoose');

// Making connection to database

mongoose.connect('mongodb://localhost/todo_DB');

const db = mongoose.connection;

// Handling the error

db.on('error',console.error.bind(`
    Error connecting to the DataBase :/
`));

// handling the connection

db.once('open',() => {
    console.log("Successfully Connected to DataBase :)");
})