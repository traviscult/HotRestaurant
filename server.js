// Create our server for the Hot Restaurant application
//
// Eddie Saunders saunders.eddie@outlook.com 27th April 2020
//

var express = require ("express");
var path = require ("path");

var app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var tables = [
    {
        tableName: "1",
        tableStatus: "booked"
    },
    {
        tableName: "2",
        tableStatus: "open"
    },
    {   
        tableName: "3",
        tableStatus: "booked"
    },
    {
        tableName: "4",
        tableStatus: "booked"
    },
    {
        tableName: "5",
        tableStatus: "open"
    }
];

app.get ("/", function (req,res) {
    console.log ("It's a tarp!");
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get ("/reserve", function (req,res) {
    console.log ("Reserve a table");
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get ("/tables", function (req,res) {
    console.log ("View Tables");
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get ("/api/tables", function (req, res) {
    console.log ("Tables API Call");
    res.sendFile(path.join(__dirname, "test.html"));
});

app.get ("/api/waitlist", function (req,res) {
    console.log ("Tables Waitlist API Call");
    res.sendFile(path.join(__dirname, "test.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
