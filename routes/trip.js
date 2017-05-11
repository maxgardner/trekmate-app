var express = require("express");
var router = express.Router();
var db = require("../models");

module.exports = function(app) {
  router.get("/trip/:id?", function (req, res) {
    var tripId;
    if (req.params.id) {
      tripId = req.params.id;
    } else {
      tripId = req.body.id;
    }
    db.Trip.findOne({
      where: {
        id: tripId
      },
      include: [db.User, db.Destination, db.Flight, db.Hotel, db.CarRental, db.Activity] // Include all the models here
    })
    .then(function(tripInfo) {
      var info = {
        trip: tripInfo,
        user: tripInfo.User,
        destination: tripInfo.Destination,
        flight: tripInfo.Flight,
        hotel: tripInfo.Hotel,
        carRental: tripInfo.CarRental,
        activity: tripInfo.Activity
      }
      res.render("trip", info);
    });
  });
}
