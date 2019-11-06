// import orm.js
var orm = require("../config/orm.js")
//code to call ORM functions using burger-specific input for ORM
//show all burgers
orm.selectAll("burger_name");
//add burger to list
orm.insertOne("burger_name");
//update burger devoured status
orm.updateOne("burger_name", "devoured");

//export
module.exports = selectAll;
module.exports = insertOne;
module.exports = updateOne;
