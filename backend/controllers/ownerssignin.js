var bodyParser = require('body-parser');
var crypt = require('./app/crypt');
var config = require('./config/settings');
var db1 = require('./app/db');

module.exports.OwnersSignIn = function(request,response,next) {
    console.log("Inside OwnersSignIn request");
    var emailID = request.body.emailID;
    var password = request.body.password;
    console.log("EmailID: ",emailID + " password: ",password);

    db1.findUser1({
        emailID: emailID
    }, function (res) {
        var user = {
            id: res.id,
            emailID: res.emailID,
        };

        // Check if password matches
        crypt.compareHash(request.body.password, res.password, function (err, isMatch) {
            if (isMatch && !err) {
                // Create token if the password matched and no error was thrown
                var token = jwt.sign(user, config.secret, {
                    expiresIn: 10080 // in seconds
                });
                console.log("Value of token:", token);
                response.writeHead(200,{
                    'Content-Type':'text/plain'
                });
                response.end("Success");
            } else {
                response.writeHead(400,{
                    'Content-Type':'text/plain'
                });
                response.end("Authentication failed. User not found.");
            }
        }, function (err) {
            console.log(err);
            response.writeHead(400,{
                'Content-Type':'text/plain'
            });
            response.end("Authentication failed. User not found.");
        });
    }, function (err) {
        console.log(err);
        response.writeHead(400,{
            'Content-Type':'text/plain'
        });
        response.end("Authentication failed. User not found."); 
    });
}