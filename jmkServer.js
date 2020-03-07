//create an express app
//require the Express module and create an instance of an Express app
const express = require ("express")
const app = express()

//use express-static middleware
//requires the use of the express.static middleware. 
//This allow to serve static files (such as HTML, CSS and JavaScript) from specified directory.
//In this case, the files will be served from a folder called public.
app.use(express.static("public"))

//define the first route
//Any URL requests to the root URL will be responded to with a simple HTML message
app.get("/", function(req,res){
    res.send("<h1>Hello Wolrd!</h1>")
})

//start the server listening for requests
//It either looks to see which port Heroku will use, or defaults to 3000 if you are running locally
app.listen(process.env.PORT  || 3000,
          () => console.log("server is running..."));
