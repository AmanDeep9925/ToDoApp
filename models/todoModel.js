// Making the Schema

const mongoose = require('mongoose');

// modeling the schema

const todoSchema = new mongoose.Schema({
    // making the database fields
    // description field
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate:{
        type: Date,
        default: Date.now
    },
    isDone:{
        type:Boolean,
        default:false
    }
})

const todo = mongoose.model('todos',todoSchema);

module.exports = todo;