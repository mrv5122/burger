var connection = require("./connection.js");

var orm = {
    //select all burgers from burgers table
    selectAll: function(burgerTable, callback) {

        var queryString = "SELECT * FROM ??";
        console.log(queryString);

        connection.query(queryString, [burgerTable], function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(response);
        });
    },
    //insert a burger into burgers table
    insertOne: function(burgerTable, colms, values, callback) {

        var queryString = "INSERT INTO ??(??) VALUES (?)";
        console.log(queryString);

        connection.query(queryString, [burgerTable, colms.toString(), values], function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(response);
        });
    },
    //update devoured status of an existing burger in burgers table
    updateOne: function(devouredStatOld, devouredStatNew, burgerName, callback) {

        var queryString = "UPDATE burgers SET devoured = REPLACE(devoured, '??','??') WHERE burger_name = ??";
        console.log(queryString);

        connection.query(queryString, [devouredStatOld, devouredStatNew, burgerName], function(err, result) {
            if (err) throw err;
            console.log(result);
           callback(response);
        });
    }
};

module.exports = orm;
//export ORM object