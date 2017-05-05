var express = require("express");
var router = express.Router();
var db = require("../models");

// routes

router.get("/", function (req, res) {
    // burger.all(function (data) {
    //     var hbsObject = {
    //         burgers: data
    //     };
    //     res.render("index", hbsObject);
    // });
    // db.Burger.findAll().then(function (dbBurger) {
    //     var hbsObject = {
    //         burgers: dbBurger
    //     };
    //     res.render("index", hbsObject);
    // });
    res.render("index");
});


module.exports = router;