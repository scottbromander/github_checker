var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Person = require("../models/person");
var moment = require("moment");

router.get("/all", function(req,res){
   Person.find({}, function(err, data){
       if(err) console.log(err);
       res.send(data);
   });
});

router.get("/:person", function(req,res){
    Person.findOne({github: req.params.person}, function(err, data){
        if(err) console.log(err);
        res.send(data);
    });
});

router.post("/add", function(req,res){
    console.log(req.body);

    var newPerson = new Person({name: req.body.name, github: req.body.github});

    newPerson.save(function(err, data){
        if(err) console.log(err);
        console.log(data);
        res.send(data);
    });
});

router.post("/check/", function(req,res){
    var lastDate = moment(req.body.date).format("MMMM Do YYYY, h:mm:ss a");
    var checkLastDate = moment().format("MMMM Do YYYY, h:mm:ss a");

    lastDate = lastDate.split(" ")[1];
    checkLastDate = checkLastDate.split(" ")[1];

    var responseObject = {};
    responseObject.github = req.body.github;

    if(lastDate == checkLastDate){
        responseObject.yesterday = true;
    } else {
        responseObject.yesterday = false;
    }

    res.send(responseObject);
});


module.exports = router;
