const express = require('express');
const app = express();
const bodyParser   = require('body-parser')
const cors = require('cors');
require('./config/connection');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors)

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
  console.log(api,' listening on port ' + port);
});

