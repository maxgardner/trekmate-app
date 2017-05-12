module.exports = function(router, db) {
  router.post("/api/trip", function(req, res) {
    console.log(req.body);
    db.Trip.create({
      city: req.body.city,
      state: req.body.state,
      departure_date: req.body.departure_date,
      return_date: req.body.return_date,
      UserId: req.body.userId
    })
    .then(function(newTrip) {
      console.log("TRIP AFTER INITIALLY ADDING IT " + JSON.stringify(newTrip));
      db.User.update({
        TripUuid: newTrip.uuid
      }, {
        where: {
          id: newTrip.UserId
        }
      })
      .then(function(user) {
        console.log("USER TRIP ID " + user);
        res.redirect("/dashboard");
      });
    });
  });

  router.put("/api/trip", function(req, res) {
    db.Trip.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(trip) {
      res.redirect("/trip/" + trip.id);
    });
  });

  router.delete("/api/trip", function(req, res) {
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

  return router;
}
