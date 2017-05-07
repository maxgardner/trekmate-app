var db = require("../models");

// Setting up Passport for user authentication
module.exports = function(app) {
  app.get("/dashboard", function(req, res) {
    db.User.findOne({
      where: {
        id: req.body.id
      },
      include: [db.Trip]
    })
    .then(function(userInfo) {
      var info = {
        user: userInfo,
        trip: userInfo.Trip
      }
      res.render("dashboard", info);
    });
  });
}
