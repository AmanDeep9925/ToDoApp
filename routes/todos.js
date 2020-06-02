// Accessing the express
const express = require('express');
// Initializing the routes
const router = express.Router();

const todosController = require("../controllers/todoController");

router.get('/',todosController.todos);

module.exports = router;