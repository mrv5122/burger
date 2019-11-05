var connection = require("./connection");

var orm = {
    selectAll: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(burgerName) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES ('??') WHERE ?? = ?";
        console.log(queryString);
        connection.query(queryString, [burgerName], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(devouredStatOld, devouredStatNew, burgerName) {
        var queryString = "UPDATE burgers SET devoured = REPLACE(devoured, '??','??') WHERE burger_name = ??";
        console.log(queryString);
        connection.query(queryString, [devouredStatOld, devouredStatNew, burgerName], function(err, result) {
            if (err) throw err;
            console.log(result);

        })
    }
    
};

module.exports = orm;

//create methods to execute MySQL commands in the controllers> methods required to retrieve and store data in database
//selectAll()
//insertOne()
//updateOne()
// export ORM object in module.exports