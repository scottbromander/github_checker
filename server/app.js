var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var app = express();
var db = require("./modules/db");

var mongoose = require("mongoose");

var index = require('./routes/index');
var challenge = require("./routes/people");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/challenge', challenge);
app.use('/', index);

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;

