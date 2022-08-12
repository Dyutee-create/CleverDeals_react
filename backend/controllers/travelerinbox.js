var kafka = require('../kafka/client');

module.exports.TravelerOutbox = function(req, res){

    kafka.make_request('traveleroutbox',req.body, function(err,result){
        console.log('in TravelerOutbox result');
        console.log(result);
        if (err){
            console.log("Error in TravelerOutbox");
            
            res.writeHead(400,{      
                'Content-Type':'text/plain'
            });
            res.end("Error in query");
        }else {
            console.log("Inside TravelerOutbox else");
            
            res.writeHead(200,{
                'Content-Type':'text/plain'
              });
            console.log("Result:", result);
            res.end(JSON.stringify(result));   
        }
    });

}

module.exports.TravelerInbox = function(req, res) {

    kafka.make_request('travelerinbox',req.body, function(err,result){
        console.log('in TravelerInbox result');
        console.log(result);
        if (err){
            console.log("Error in TravelerInbox");
            
            res.writeHead(400,{      
                'Content-Type':'text/plain'
            });
            res.end("Error in query");
        }else {
            console.log("Inside TravelerInbox else");
            
            res.writeHead(200,{
                'Content-Type':'text/plain'
              });
            console.log("Result:", result);
            res.end(JSON.stringify(result));   
        }
    });
}