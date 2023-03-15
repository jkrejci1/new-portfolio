//Required for handeling parsing urls
var url = require('url');

//Function for getting the home file
module.exports.home_get = (req, res) => {
    res.render('index')
}