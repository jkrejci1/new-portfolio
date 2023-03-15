//Jack Krejci portfolio server side code
const app = express();
const port = process.env.PORT || 8080;

//Use public folder for css
app.use(express.static('public'));

//Use checkUser to find if we have a user that is already logged in to give information in views
app.get('*', checkUser) //Apply this to every route

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