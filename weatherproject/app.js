const https = require("https");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=af3019428c2b4fd597b110856220404&q=London";
  https.get(url, function (response) {
    console.log(response);
    console.log(response.statusCode);
  });
  res.send("Server is up & running.");
});

app.listen("3000", function () {
  console.log("Server is running on port 3000.");
});
