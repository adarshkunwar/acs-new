require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use('/target',require('./route/targetroute'));
app.listen(8080, () => {
  console.log("Server is running on 8080 port: ");
});
    