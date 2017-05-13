var isAuthenticated = require("../config/isAuthenticated");

module.exports = function(router, db) {
  router.get("/dashboard", isAuthenticated, function(req, res) {
    db.Trip.findAll({
      where: {
        Userid: req.user.id
      },
      // attributes: {
      //   exclude: ['password']
      // },
      include: [db.User]
    })
    .then(function(tripInfo) {

      var info = {
        trips: tripInfo
        // user: [userInfo.User]
      };
      res.render("dashboard", info);
      //res.json(info);
    });
  });

  return router;
};