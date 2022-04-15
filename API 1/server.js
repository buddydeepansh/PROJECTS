const express = require("express");

const app = express();

const https = require("https");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body.city_name);
  const place = req.body.city_name;
  api_key = "af3019428c2b4fd597b110856220404";
  const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${place}&aqi=no`;

  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      // console.log(data);
      const whetherdata = JSON.parse(data);
      console.log(whetherdata);
      const temp = whetherdata.current.condition.text;
      const temp2 = whetherdata.current.temp_c;
      console.log(temp);
      res.write(`<h1>The Temperature in ${place} feels like ${temp}</h1>`);
      res.write(
        `<h1>The temperature in ${place} is ${temp2} degree celcius.</h1>`
      );
      res.send();
    });
  });
});

app.listen(3000);
