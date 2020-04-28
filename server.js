// Create our server for the Hot Restaurant application
//
// Eddie Saunders saunders.eddie@outlook.com 27th April 2020
//

const express = require ("express");
const path = require ("path");

var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let tables = [
    {name: "1",
    phone: "1",
    email: "1",
    customerID: 1},
    {name: "2",
    phone: "2",
    email: "2",
    customerID: 2},
    {name: "3",
    phone: "3",
    email: "3",
    customerID: 3},
    {name: "4",
    phone: "4",
    email: "4",
    customerID: 4},
    {name: "5",
    phone: "5",
    email: "5",
    customerID: 5},
    ];

app.get ("/", function (req,res) {
    console.log ("It's a tarp!");
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get ("/tables", function (req,res) { 
    console.log ("View Tables");
    res.sendFile(path.join(__dirname, "view.html"));
});


app.get ("/reserve", function (req,res) {
    console.log ("Reserve a table");
    res.sendFile(path.join(__dirname, "reserve.html"));
});


app.get('/api/tables', function (req, res) {
    res.json(tables);
  });



app.post('/api/tables', function (req, res) {
	console.log('reserve request submitted');
	console.log(req.body);

  var newReservation = req.body;

  tables.push(newReservation);

  //console.log(tables);

  // Check if user is in the first 5 in list
  var isBooked;
  if(tables.length <= 5){
    isBooked = true;
  }
  else{
    isBooked = false;
  }

  res.json(isBooked);

});


app.get ("/api/waitlist", function (req,res) {
    console.log ("Tables Waitlist API Call");
    res.sendFile(path.join(__dirname, "test.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
