var express = require("express");
var router = express.Router();
var passport = require("../config/passport");
var isAuthenticated = require("../config/isAuthenticated");
var db = require("../models");

//testing only, uncomment!!!
// module.exports = function(app) {
//   app.get("/dashboard", isAuthenticated, function(req, res) {
//     if (!req.user) {
//       res.redirect("/");
//     }
//     else {
//       db.User.findOne({
//         where: {
//           id: req.user.id
//         },
//         attributes: {
//           exclude: password
//         },
//         include: [db.Trip]
//       })
//       .then(function(userInfo) {
//         var info = {
//           user: userInfo,
//           trip: userInfo.Trip
//         }
//         res.render("dashboard", info);
//       });
//     }
//   });
// };

module.exports = function (app) {
    app.get("/dashboard", function (req, res) {
        res.render("dashboard");
    });
};
