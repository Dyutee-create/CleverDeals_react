var MongoClient = require('mongodb');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const client = mongoose.connect('mongodb://localhost:27017/HomeAway', { useNewUrlParser: true });
const url = 'mongodb://localhost:27017/HomeAway';

module.exports.getTravelerDashboard = function(req, res) {
    console.log("Inside TravelerDashboard GET request");

    MongoClient.connect(url, (err, client) => {
        if(err) {
            console.log("Error connecting to mongo database");
        } else {
            console.log("Connection successful");
            const db = client.db('HomeAway');
    
            db.collection('ListProperty').find({
                propertybooked: "Booked"
            })
            .toArray()
            .then((docs) => {
                console.log("Document fetched");
                console.log(JSON.stringify(docs, undefined, 2));
                propertyDetails = docs;
                res.cookie('cookie',req.body.emailID,{maxAge: 900000, httpOnly: false, path : '/'});
                res.writeHead(200,{
                    'Content-Type':'text/plain'
                });
                res.end(JSON.stringify(propertyDetails));
            }, (err) => {
                console.log("Unable to fetch documents : ", err);
                res.cookie('cookie',req.body.emailID,{maxAge: 900000, httpOnly: false, path : '/'});
                res.writeHead(400,{
                    'Content-Type':'text/plain'
                });
                res.end("Error in query");
            })
        }
    })
}

module.exports.TravelerDashboard = function(req, res) {
    console.log("Inside TravelerDashboard Login");   
    console.log("Req Body: ", req.body.place);
  
    MongoClient.connect(url, (err, client) => {
        if(err) {
            console.log("Error connecting to mongo database");
        } else {
            console.log("Connection successful");
            const db = client.db('HomeAway');

            db.collection('ListProperty').find({
                address: req.body.place
            })
            .toArray()
            .then((docs) => {
                console.log("Document fetched");
                console.log(JSON.stringify(docs, undefined, 2));
                propertyDetails = docs;
                //res.cookie('cookie',req.body.emailID,{maxAge: 900000, httpOnly: false, path : '/'});
                res.writeHead(200,{
                    'Content-Type':'text/plain'
                });
                res.end(JSON.stringify(propertyDetails));
            }, (err) => {
                console.log("Unable to fetch documents : ", err);
                //res.cookie('cookie',req.body.emailID,{maxAge: 900000, httpOnly: false, path : '/'});
                res.writeHead(400,{
                    'Content-Type':'text/plain'
                });
                res.end("Error in query");
            })

        }
    })
}
