// import orm.js
var orm = require("../config/orm.js");

//code to call ORM functions using burger-specific input for ORM

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burger", function(res) {
            callback(res);
        });
    },
    insertOne: function(colms, values, callback) {
        orm.insertOne("burger", colms, values, function(res) {
            callback(res);
        });
    },
    updateOne: function(devouredStatOld, devouredStatNew, burgerName, callback) {
        orm.updateOne("burger", devouredStatOld, devouredStatNew, burgerName, function(res) {
            callback(res);
        })
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};


//export
module.exports = burger;
