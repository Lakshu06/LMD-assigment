const express = require('express');
const app = express();
const path = require('path');
const http = require('https');
const bodyParser   = require('body-parser')
require('./config/connection');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'DELETE, GET, POST, OPTIONS, PUT');
  next();
});


const api = require('./routes/api');
app.use('/', api);
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(' listening on port ' + port);
});

