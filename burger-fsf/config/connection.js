//connect node to mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 4000,
    user: "root",
    password: "Omicronf15",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
//export connection