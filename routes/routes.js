//Get routes from express package
const { Router } = require('express');

//Will use controller as a reference to the controller folder to handle the routes
//So we can use the functions in the controller folder now as the functions for the get and post requests
const authController = require('../controller/controller');

//Variable for the routes
const router = Router();

//Get the home page
router.get('/', authController.home_get);

//Get the about page
router.get('/about', authController.about_get);

//Get the education page
router.get('/education', authController.education_get);

//Get the projects page
router.get('/projects', authController.projects_get);

//Export routes to be imported into index.js
module.exports = router;