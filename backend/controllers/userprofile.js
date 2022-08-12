var kafka = require('../kafka/client');

module.exports.UserProfile = function(req, res, next) {
    console.log("Inside UserProfile request");
    kafka.make_request('userprofile1',req.body, function(err,result){
        console.log('in userprofile result');
        console.log(result);
        if (err) {
            console.log("Error in query");
            
            res.writeHead(400,{      
                'Content-Type':'text/plain'
            });
            res.end("Error in query");
        } else {
            console.log("Inside userprofile else");
            
            res.writeHead(200,{
                'Content-Type':'text/plain'
              });
            console.log("Result:", result);
            res.end(JSON.stringify(result));   
        }
        
    });
}
