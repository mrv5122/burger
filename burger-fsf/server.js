var express = require('express');
var exphbs = require("express-handlebars");
// TODO: Import your route files from `route/`

// Initialize the app and create a port
var app = express();
var PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js")
app.use(routes);
// Start the server on the port
app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});

