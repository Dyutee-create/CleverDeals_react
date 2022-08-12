var bodyParser = require('body-parser');
var crypt = require('./app/crypt');
var config = require('./config/settings');
var db1 = require('./app/db');
var MongoClient = require('mongodb');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const client = mongoose.connect('mongodb://localhost:27017/HomeAway', { useNewUrlParser: true });
const url = 'mongodb://localhost:27017/HomeAway';

module.exports.SignUpEmail = function(request,response,next) {
    console.log("Inside SignUpEmail request");
    console.log("Body: ", request.body);
    var firstName = request.body.firstname;
    var lastName = request.body.lastname;
    var emailID = request.body.emailID;
    var password = request.body.password;

    console.log("EmailID: ", emailID + " password: ", password + " firstName: ", firstName + " lastName: ", lastName);
    if (firstName && lastName && emailID && password) {
        var passwordHash;
        crypt.createHash(password, function (res) {
            passwordHash = res;
            console.log("Hash password: ", passwordHash);

            MongoClient.connect(url, (err, client) => {
                if(err) {
                    console.log("Error connecting to Mongo database");
                } else {
                    console.log("Connection successful");
                    const db = client.db('HomeAway');
                    db.collection('SignUpEmail').insertOne({
                        firstName : firstName,
                        lastName : lastName,
                        emailID : emailID,
                        password : passwordHash
                    }, (err, result) => {
                        if(err) {
                            console.log("Error in query");
                            response.code = "400";
                            response.value = "The firstName, lastName, emailId and password could not be inserted. Please double-check and try again.";
                            response.sendStatus(400).end(); 
                        } else {
                            console.log("Inserted in SignUpEmail");
                            db.collection('SignIn').insertOne({
                                emailID: emailID,
                                password : passwordHash
                            }, (err, result) => {
                                if(err) {
                                    console.log("Error in query");
                                    response.code = "400";
                                    response.value = "The email and password could not be inserted. Please double-check and try again.";
                                    response.sendStatus(400).end(); 
                                } else {
                                    console.log("Success");
                                    response.status(200).json({success: true, message: 'Successfully created new user.'});
                                }
                            })
                        }
                    })      
                }
            })
        })
    }
}