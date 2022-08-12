var kafka = require('../kafka/client');

module.exports.OwnersInbox = function(req, res) {
    kafka.make_request('ownersinbox',req.body, function(err,result){
        console.log('in OwnersInbox result');
        console.log(result);
        if (err){
            console.log("Error in OwnersInbox");
            
            res.writeHead(400,{      
                'Content-Type':'text/plain'
            });
            res.end("Error in query");
        }else {
            console.log("Inside OwnersInbox else");
            
            res.writeHead(200,{
                'Content-Type':'text/plain'
              });
            console.log("Result:", result);
            res.end(JSON.stringify(result));   
        }
    });
}

module.exports.OwnersOutbox = function(req, res) {
    kafka.make_request('ownersoutbox',req.body, function(err,result){
        console.log('in OwnersOutbox result');
        console.log(result);
        if (err){
            console.log("Error in OwnersOutbox");
            
            res.writeHead(400,{      
                'Content-Type':'text/plain'
            });
            res.end("Error in query");
        }else {
            console.log("Inside OwnersOutbox else");
            
            res.writeHead(200,{
                'Content-Type':'text/plain'
              });
            console.log("Result:", result);
            res.end(JSON.stringify(result));   
        }
    });
}

module.exports.OwnersReply = function(req, res) {
    kafka.make_request('ownersreply',req.body, function(err,result){
        console.log('in OwnersReply result');
        console.log(result);
        if (err){
            console.log("Error in OwnersReply");
            
            res.writeHead(400,{      
                'Content-Type':'text/plain'
            });
            res.end("Error in query");
        }else {
            console.log("Inside OwnersReply else");
            
            res.writeHead(200,{
                'Content-Type':'text/plain'
              });
            console.log("Result:", result);
            res.end(JSON.stringify(result));   
        }
    });
}

module.exports.getOwnersReply = function(req, res) {
    kafka.make_request('ownersreply',req.body, function(err,result){
        console.log('in OwnersReply result');
        console.log(result);
        if (err){
            console.log("Error in OwnersReply");
            
            res.writeHead(400,{      
                'Content-Type':'text/plain'
            });
            res.end("Error in query");
        }else {
            console.log("Inside OwnersReply else");
            
            res.writeHead(200,{
                'Content-Type':'text/plain'
              });
            console.log("Result:", result);
            res.end(JSON.stringify(result));   
        }
    });
}