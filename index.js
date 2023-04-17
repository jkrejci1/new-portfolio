//Jack Krejci portfolio server side code

//Use express to run web app
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

//Import our routes from the routes folder authRoutes to tell server to use those routes later
const routes = require('./routes/routes');

//Use public folder for css
app.use(express.static('public'));

//Set view for ejs
app.set('view engine', 'ejs')

//Use the routes file for routing everything outside of making requirements
app.use(routes);

// Custom 404 page.
app.use((request, response) => {
    response.type('text/plain')
    response.status(404)
    response.send('404 - Not Found')
  })
  
// Custom 500 page.
app.use((err, request, response, next) => {
    console.error(err.message)
    response.type('text/plain')
    response.status(500)
    response.send('500 - Server Error')
  })
  
//Connect to port 
app.listen(port, () => console.log(
    `Express started at \"http://localhost:${port}\"\n` +
    `press Ctrl-C to terminate.`)
  )