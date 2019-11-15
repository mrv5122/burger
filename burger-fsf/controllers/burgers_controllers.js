//import express
var express = require("express");

//import burgers.js
var burger = require("../models/burger")

//create router for export
var router = express.Router();


// show all burger data
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObj = {
            burger_name: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});


// add a burger
router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function (result) {
            res.json({ id: result.insertID });
        });
});


// update burger devoured status
router.put("/api/burgers/:id", function (req, res) {

    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    cat.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//optioin to delete a burger
router.delete("/api/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;

    burgers.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// export routes to use in server.js
module.exports = router;