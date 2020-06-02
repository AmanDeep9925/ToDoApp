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

module.exports.app = (req,res) =>{
    const data = {
        title : 'Home',
        todos :  todo
    }
    return res.render('home',data);
}