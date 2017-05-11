var express = require("express");
var router = express.Router();
var db = require("../models");

module.exports = function(app) {
  router.post("/api/activity", function(req, res) {
    db.Activity.create(req.body)
    .then(function(activity) {
      var newEntry = {
        activity: activity
      }
      res.redirect("/dashboard");
    });
  });

  router.put("/api/activity", function(req, res) {
    db.Activity.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(activity) {
      res.redirect("/dashboard");
    });
  });

  router.delete("/api/activity", function(req, res) {
    db.Activity.destroy(
      {
        where: {
          id: req.body.id
        }
      })
    .then(function() {
      res.redirect("/dashboard");
    });
  });
}
