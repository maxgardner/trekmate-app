var express = require("express");
var router = express.Router();
var http = require('http');
var https = require('https');
var db = require("../models");

function FlightQueryURL(APIname, protocol, version, format, parameters, options) {

    const baseURI = "https://api.flightstats.com/flex";
    const appId = "?appId=c6ff30bc";
    const appKey = "&appKey=426abb99047676f5431844082be0f85b";

    var queryURL = baseURI +
        "/" + APIname +
        "/" + protocol +
        "/" + version +
        "/" + format +
        "/" + parameters +
        appId + appKey +
        options;

    return queryURL;
}

// db.Flight.findAll().then(function (dbFlight) {
//     var hbsObject = {
//       flights: dbFlight
//     };
//     res.render("flight", hbsObject);
// });

router.get("/flights", function (req, res) {
    // read tripid cookie
    var TripId = 1;

    db.Flight.findAll({
        include: [db.Trip],
        where: {
            TripId: TripId
        }
    }).then(function (dbTrip) {
        var hbsObject = {
            trips: dbTrip
        };
        // res.render("index", hbsObject);
        res.json(hbsObject);
    });
});


// router.get("/flights", function (req, res) {
//     // res.send("<h1>Flights API</h1>");
//
//
//     var parameters = "flight/status/" + "AA" + "/" + "5919" + "/arr/" + "2017/5/6";
//     var url = FlightQueryURL("flightstatus", "rest", "v2", "json", parameters, "", "flightInfo");
//
//     var request = https.get(url, function (response) {
//         var buffer = "",
//             data;
//         response.on("data", function (chunk) {
//             buffer += chunk;
//         });
//
//         response.on("end", function (err) {
//             // console.log(buffer);
//              // console.log("\n");
//             data = JSON.parse(buffer);
//             res.json(data);
//         });
//     });
// });


// router.get("/flights", function (req, res) {
//     // res.send("<h1>Flights API</h1>");
//
//     db.Flight.findAll().then(function (dbFlight) {
//         var hbsObject = {
//           flights: dbFlight
//         };
//         res.render("flight", hbsObject);
//     });
// });

module.exports = router;