require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use('/target',require('./route/targetroute'));
app.listen(8000, () => {
  console.log("Server is running on 8000 port: ");
});
    