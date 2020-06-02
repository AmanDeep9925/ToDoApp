// Accessing the express ;

const express = require('express');

// Intitialzing the routes 
const router = express.Router();

// accessing the action
const homeController = require('../controllers/home');

router.get('/',homeController.app);

router.use('/todos',require('./todos'));

module.exports = router;