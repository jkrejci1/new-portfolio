//Required for handeling parsing urls
var url = require('url');

//Function for getting the home file
module.exports.home_get = (req, res) => {
    res.render('index')
}

module.exports.about_get = (req, res) => {
    res.render('about')
}

module.exports.education_get = (req, res) => {
    res.render('education')
}

module.exports.projects_get = (req, res) => {
    res.render('projects')
}


