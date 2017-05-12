var express = require("express");
var router = express.Router();
var db = require("../models");

module.exports = function(app) {
  router.post("/api/destination", function(req, res) {
    db.Destination.create(req.body)
    .then(function(activity) {
      res.redirect("/dashboard");
    });
  });

  router.put("/api/destination", function(req, res) {
    db.Destination.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(destination) {
      res.redirect("/dashboard");
    });
  });

  router.delete("/api/destination", function(req, res) {
    db.Destination.destroy(
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
