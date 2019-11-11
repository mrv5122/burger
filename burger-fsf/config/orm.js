var connection = require("./connection.js");

// helper function for sql syntax
function printQmarks(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        array.push("?");
    }

    return array.toString();
}

//helper function to convert object key/value pairs to SQL syntax
function objToSql(obj) {
    var arr = [];
    //loop thru keys and push key/value as string into array
    for (var key in obj) {
        var value = obj[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(obj, key)) {
            // if string with spaces, add quotes
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {
    //select all burgers from burgers table
    selectAll: function(tableInput, cb) {

        var queryString = "SELECT * FROM ??" + tableInput + ";";
        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {throw err;}
            
            cb(result);
        });
    },
    //insert a burger into burgers table
    insertOne: function(table, cols, vals, cb) {

        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += "VALUES (";
        queryString += printQmarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {throw err;}
            cb(result);
        });
    },
    //update devoured status of an existing burger in burgers table
    updateOne: function(table, objColVals, cond, cb) {

        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += cond;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {throw err;}
            cb(result);
        });
    },
    delete: function(table, cond, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += cond;

        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;
//export ORM object