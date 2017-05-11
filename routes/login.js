var passport = require("../config/passport");
var db = require("../models");

// Setting up Passport for user authentication
module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/frontpage");
    }
    res.render("index");
  });

  app.post("/login", passport.authenticate('local'), function(req, res) {
    res.redirect("/login");
  });

  app.post("/signup", function(req, res) {
    db.User.create(req.body)
    .then(function() {
      res.redirect(307, "/login");
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
}
