module.exports = function(router, db) {
  router.get("/trip/:id?", function (req, res) {
    var tripId;
    if (req.params.id) {
      tripId = req.params.id;
    } else {
      tripId = req.body.uuid;
    }
    db.Trip.findOne({
      where: {
        uuid: tripId
      },
      include: [db.User],
      include: [db.Destination],
      include: [db.Flight],
      include: [db.Hotel],
      include: [db.Car_Rental],
      include: [db.Activity]
    })
    .then(function(tripInfo) {
      console.log("Trip Info returned: " + JSON.stringify(tripInfo));
      var info = {
        trip: tripInfo,
        user: tripInfo.User,
        destination: tripInfo.Destination,
        flight: tripInfo.Flight,
        hotel: tripInfo.Hotel,
        carRental: tripInfo.CarRental,
        activity: tripInfo.Activity
      }
      res.render("tripinfo", info);
    });
  });

  router.get("/trips", function(req, res) {
    res.render("tripinfo");
  });

  return router;
};
