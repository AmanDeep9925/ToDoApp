
// Accessing the express ;

const express = require('express');

// Intitialzing the routes 
const router = express.Router();

// accessing the action
const homeController = require('../controllers/homeController');
const addTodoController = require('../controllers/addToDoController');
const deleteTodoController = require('../controllers/deleteToDoController')

router.get('/',homeController.app);

router.post('/add-todo',addTodoController.addTodo);

// router.get('/delete-todo',de)

router.use('/todos',require('./todos'));

module.exports = router;