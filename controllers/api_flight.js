var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/flights", function (req, res) {
    // res.send("<h1>Flights API</h1>");

    db.Flight.findAll().then(function (dbFlight) {
        var hbsObject = {
          flights: dbFlight
        };
        res.render("flight", hbsObject);
    });
});

module.exports = router;