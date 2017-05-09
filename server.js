
// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var favicon = require('serve-favicon');

// Set up Express app
var app = express();
app.set('port', process.env.PORT || 8080);
// var port = process.env.PORT || 8080;

// database models for syncing
var db = require('./models');

// Serve static content
app.use(express.static(process.cwd() + '/public'));

// Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// set handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set up sessions and then initialize Passport to enable authentication
var session = require("express-session");
var passport = require("./config/passport");
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// favicon in /publicear
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));

// require Routes with app.use
// app.use(require('./controllers'));
app.use(require('./controllers/trekmate_controller'));
app.use(require('./controllers/api_flight'));
app.use(require('./routes/api_activity.js'));
app.use(require('./routes/api_destination.js'));
app.use(require('./routes/api_trips.js'));
app.use(require('./routes/dashboard.js'));
app.use(require('./routes/login.js'));
app.use(require('./routes/trip.js'));

// Syncing our sequelize models and then starting our express app
// force: true to allow structure modifications in our database,
// this is the case with associations

db.sequelize.sync({ force: false }).then(function () {
    var server = app.listen(app.get('port'), function () {
        console.log('Listening on port ' + app.get('port'));
        console.log(db.Trip);
    });
});
