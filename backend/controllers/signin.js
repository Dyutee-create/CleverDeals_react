var bodyParser = require('body-parser');
var crypt = require('./app/crypt');
var config = require('./config/settings');
var db1 = require('./app/db');

module.exports.SignIn = function(request,response,next) {
    console.log("Inside SignIn request");
    var emailID = request.body.emailID;
    var password = request.body.password;
    console.log("EmailID: ", emailID + " password: ", password);

    if ( emailID && password ) { 
        db1.findUser({
            emailID: emailID
        }, function (res) {
            var user = {
                id: res.id,
                emailID: res.emailID,
            };
            console.log("func.resu;t: ", res);
            // Check if password matches
            crypt.compareHash(request.body.password, res.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // Create token if the password matched and no error was thrown
                    var token = jwt.sign(user, config.secret, {
                        expiresIn: 10080 // in seconds
                    });
                    console.log("Value of token:", token);
                    response.sendStatus(200)
                    response.end().json({success: true, token: 'JWT' + token});
                } else {
                    console.log("Authentication failed. Passwords did not match")
                    response.sendStatus(400)
                    response.end("Authentication failed. Passwords did not match");
                }
            }, function (err) {
                console.log(err);
                response.writeHead(400,{
                    'Content-Type':'text/plain'
                });
                console.log("Authentication failed. User not found");
                response.end("Authentication failed. User not found");
           
            });
        }, function (err) {
            console.log(err);
            response.writeHead(400,{
                'Content-Type':'text/plain'
            });
            console.log("Authentication failed. User not found");
            response.end("Authentication failed. User not found");
       
        });
    }
}
