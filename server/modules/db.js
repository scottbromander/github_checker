var mongoose = require("mongoose");

//Mongo Setup
var mongoURI = "mongodb://localhost:27017/github_checker";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
    console.log("Mongo Connection Error: ", err);
});

MongoDB.once('open', function(err){
    console.log("Mongo Connection Open");
});

module.exports = MongoDB;
