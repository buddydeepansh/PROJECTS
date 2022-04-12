const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var r = n1 + n2;
  res.send("Thank you for posting." + r);
});

app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
});
app.post("/bmi", function (req, res) {
  var w1 = parseFloat(req.body.weight);
  var h1 = parseFloat(req.body.height);
  var bmi = w1 / (h1 * h1);
  res.send("YOUR BMI IS " + bmi);
});
app.listen("3000", function () {
  console.log("Server is running on port 3000");
});
