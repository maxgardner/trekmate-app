var express = require("express");
var router = express.Router();
var db = require("../models");

module.exports = function(app) {
  router.post("/api/trips", function(req, res) {
    db.Trip.create(req.body)
    .then(function(newTrip) {
      res.redirect("/trip/" + newTrip.id);
    });
  });

  router.put("/api/trips", function(req, res) {
    db.Trip.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(trip) {
      res.redirect("/api/trip/" + trip.id);
    });
  });

  router.delete("/api/trips", function(req, res) {
    db.Trip.destroy(
      {
        where: {
          id: req.body.id
        }
      })
    .then(function() {
      res.redirect("/dashboard");
    });
  });
};
