var express = require('express');

// handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Initialize the app and create a port
var app = express();
var PORT = process.env.PORT || 4000;

// Set up body parsing, static, and route middleware
app.use(express.static("public"));


//parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// import routes
var routes = require("./controllers/burgers_controllers.js")
app.use(routes);


// Start the server on the port
app.listen(PORT, function() {
  console.log('Server Listening on PORT: ' + PORT);
});
