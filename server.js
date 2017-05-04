// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express app
var app = express();
var port = process.env.PORT || 8080;

// Set up database connection
var db = require("./models");

// Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static files in the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Start server once Sequelize syncs database
db.sequelize.sync().then(function() {
  // Starting our express app
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
