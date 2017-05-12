var isAuthenticated = require("../config/isAuthenticated");

module.exports = function(router, db) {
  router.get("/dashboard", isAuthenticated, function(req, res) {
    db.User.findOne({
      where: {
        id: req.user.id
      },
      attributes: {
        exclude: ['password']
      },
      include: [db.Trip]
    })
    .then(function(userInfo) {
      console.log("MY QUERY: " + JSON.stringify(userInfo));
      var info = {
        user: userInfo,
        trips: [userInfo.Trip]
      }
      res.render("dashboard", info);
    });
  });

  return router;
}
