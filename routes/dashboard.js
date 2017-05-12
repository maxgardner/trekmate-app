var express = require("express");
var router = express.Router();
var passport = require("../config/passport");
var isAuthenticated = require("../config/isAuthenticated");
var db = require("../models");

<<<<<<< HEAD
module.exports = function(app) {
  app.get("/dashboard", function(req, res) {
    db.User.findOne({
        where: {
          id: req.user.id
        },
        attributes: {
          exclude: password
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
};

  // app.get("/dashboard", isAuthenticated, function(req, res) {
  //   if (!req.user) {
  //     res.redirect("/");
  //   }
  //   else {
  //     db.User.findOne({
  //       where: {
  //         id: req.user.id
  //       },
  //       attributes: {
  //         exclude: password
  //       },
  //       include: [db.Trip]
  //     })
  //     .then(function(userInfo) {
  //       var info = {
  //         user: userInfo,
  //         trip: userInfo.Trip
  //       }
  //       res.render("dashboard", info);
  //     });
  //   }
  // });
// }
=======
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
>>>>>>> ad3c81dffa2b9f7bbd16f67d53e2bf4ec03f8c4e
