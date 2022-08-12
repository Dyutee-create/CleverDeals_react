var MongoConPool=require("./app/Mongoconnection");
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports.TravLogin = function(req, res) {
    console.log("Inside Travel Login");   
    console.log("Req Body: ", req.body.place, req.body.startdate, req.body.enddate, req.body.guests);
  
    var queryJson = { 
        $and: [ { address: req.body.place }, {startdate: {$gte: req.body.startdate} }, {enddate: {$lte: req.body.enddate}}, {noofpeople: {$gte: req.body.guests} } ]
    }
    
    MongoConPool.find('ListProperty',queryJson, function(err,result) {
        if(err) {
            console.log("Error in query");
            callback(err,"Error");
        } else if(result){
            console.log("Results:", result);
            callback(null,result);
        }
    })
}

module.exports.DetailsView = function(req, res) {
    console.log("Inside DetailsView request");
    console.log("Property Details within DetailsView :", propertyDetails);

    res.value = propertyDetails;
    res.cookie('cookie',req.body.emailID,{maxAge: 900000, httpOnly: false, path : '/'});
    console.log("Queried successfully");
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });
    res.write(JSON.stringify(propertyDetails));
    res.end();
}

module.exports.getDetailsMainView = function(req, res) {
    console.log("Inside DetailsMainView GET request");
    console.log("Request: ",req.query.id);
    var propertyID = Number(req.query.id);
    console.log("propertyID: ",propertyID);
    
    var queryJson = { propertyID: propertyID }
    MongoConPool.find('ListProperty',queryJson, function(err,result) {
        if(err) {
            console.log("Error in query");
            callback(err,"Error");
        } else if(result){
            console.log("Results:", result);
            callback(null,result);
        }
    })
}
  

module.exports.DetailsMainView = function(req, res) {
    console.log("Inside DetailsMainView post request");
    console.log("Request body:", req.body);

    var myquery = { propertyID: req.body.outputID };
    var propertyID = Number(req.body.outputID);
    var newvalues = { $set: { propertybooked: req.body.bookedFlag} };
            console.log("Query", myquery, newvalues);

    MongoConPool.updateOne('ListProperty', {propertyID: propertyID }, {$set: { propertybooked: "Booked" } }, function(err, result) {
        if(err) {
            console.log("Error in query");
            callback(err,"Error");
        } else if(result){
            console.log("Results:", result);
            callback(null,result);
        }
    })
}
