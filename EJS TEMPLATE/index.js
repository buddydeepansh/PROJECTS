const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var todays = today.getDay();
  var day = "";

  if (todays === 2) {
    day = "Tuesday";
    res.render("list", { kindOfDay: day });
  } else {
    day = "NOT TUESDAY";
    res.render("list", { kindOfDay: day });
    res.send("!Tuesday");
  }
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
