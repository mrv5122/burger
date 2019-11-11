//import express
var express = require("express");
//import burgers.js
var burger = require("../models/burger")
//crreate router, export router
var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObj = {
            burger_name: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });

    router.post("api/burgers", function(req,res){
        burger.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(result) { }
        )

        })
    })
})