module.exports.app = (req,res) =>{
    const title = {
        title : 'Home'
    }
    return res.render('home',title);
}