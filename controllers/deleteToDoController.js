const todo = require('../models/todoModel');

module.exports.deleteTodo = (req,res) => {
    // console.log(req.body);

    let id = req.query.id;

    todo.findByIdAndDelete(id,(err) =>{
        if(err) {
            console.log("Error in Deleting Object from database :/");
        }
        return res.redirect('back');
    })
}