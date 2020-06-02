const todo = require('../models/todoModel');

module.exports.addTodo = (req,res) => {
    // console.log(req.body);

    todo.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate,
        isDone:false
    },(err,newTodo) =>{
        if(err){
            console.log("Error in creating a todo");
            return;
        }

        // console.log(newTodo);

        return res.redirect('/');
    })
}