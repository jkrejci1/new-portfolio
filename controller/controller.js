//Function for getting the home file
module.exports.home_get = (req, res) => {
    res.render('index')
}

//Function for getting the about file
module.exports.about_get = (req, res) => {
    res.render('about')
}

//Function for getting the education file
module.exports.education_get = (req, res) => {
    res.render('education')
}

//Function for getting the projects file
module.exports.projects_get = (req, res) => {
    res.render('projects')
}


