// const todo = [
//     {
//         id : 1,
//         description :"Get Martha's food",
//         category : "Home",
//         dueDate : "08/06/2020"
//     },
//     {
//         id : 2,
//         description :"Get Groceries",
//         category : "Kitchen",
//         dueDate : "08/06/2020"
//     },
//     {
//         id : 3,
//         description :"Get Car Washed",
//         category : "Home",
//         dueDate : "10/06/2020"
//     }
// ]

// Accesing the database

const db = require('../config/mongoose');

const todo = require('../models/todoModel');



module.exports.app = (req,res) =>{
    todo.find({},(err,todos) =>{
        if(err){
            console.log("Error in Fetching Todos from DB");
            return;
        }

        return res.render('home',{
            title: "Todos",
            Todos : todos
        })
    }) 
}
