const { request, response } = require("express");
const express = require("express");
const app = express();

app.get("/", function (request, response) {
  // console.log(request);
  response.send("<h1>Hello from server.js</h1>");
});
app.get("/contact", function (request, response) {
  response.send(
    "<h1>Hello from Deepansh agrawal contact.</h1><br><h1>Hello from Deepansh agrawal contact.</h1>"
  );
});

app.get("/about", function (req, res) {
  res.send("This is about page............");
});

app.listen(3000, function () {
  console.log("port is running on 3000.");
});
