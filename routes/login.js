var passport = require("passport");
var db = require("../models");

// Setting up Passport for user authentication
module.exports = function(app) {
  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.post("/login", passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/login',
      failureFlash: true
    }));
  });
}
