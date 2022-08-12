
var crypt = require('./crypt');
var config = require('../config/settings');
var db = {};
var MongoClient = require('mongodb');

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const client = mongoose.connect('mongodb://localhost:27017/HomeAway', { useNewUrlParser: true });
const url = 'mongodb://localhost:27017/HomeAway';


db.findUser = function(user, successCallback, failureCallback) {
    MongoClient.connect(url, (err, client) => {
        if(err) {
            console.log("Error connecting to mongo database");
        } else {
            console.log("Connection successful");
    
            const dbo = client.db('HomeAway');
            dbo.collection('SignIn').findOne({
                emailID: user.emailID
            }, (err, result) => {
                if(err) {
                    console.log("Authentication failed. EmailID doesn't match");
                    failureCallback(err);
                    return;
                } else if (result) {
                    console.log("DB: Result: ", result);
                    successCallback(result);
                } 
            })
        }
    })
}

db.findUser1 = function(user, successCallback, failureCallback) {
    MongoClient.connect(url, (err, client) => {
        if(err) {
            console.log("Error connecting to mongo database");
        } else {
            console.log("Connection successful");
        
            const dbo = client.db('HomeAway');
            dbo.collection('OwnersSignIn').findOne({
                emailID: user.emailID
            }, (err, result) => {
                if(err) {
                    console.log("DB : Error in query");
                    failureCallback(err);
                    return;
                } else if (result) {
                    console.log("DB: Result: ", result);
                    successCallback(result);
                } 
            })
        }
    })
}

//Protected authenticated route with JWT
app.get('/protectedRoute', requireAuth, function (request, response) {
    response.send('Your User id is: ' + request.user.id + ', emailID is: ' + request.user.emailID + '.');
});

// Home route. We'll end up changing this to our main front end index later.
app.get('/', function (req, res) {
    res.send('This Route is not yet defined.');
});

module.exports = db;
