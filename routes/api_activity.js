module.exports = function(router, db) {
  router.post("/api/activity", function(req, res) {
    db.Activity.create(req.body)
    .then(function(activity) {
      var newEntry = {
        activity: activity
      }
      res.redirect("/trip/" + activity.tripId);
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

  return router;
}
