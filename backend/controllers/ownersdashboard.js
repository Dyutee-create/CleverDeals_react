var kafka = require('../kafka/client');

module.exports.OwnersDashboardBooked = function(req, res) {
    kafka.make_request('ownersdashboardbooked',req.body, function(err,result){
        console.log('in OwnersDashboardBooked result');
        console.log(result);
        if (err){
            console.log("Error in OwnersDashboardBooked");
            
            res.writeHead(400,{      
                'Content-Type':'text/plain'
            });
            res.end("Error in query");
        }else {
            console.log("Inside OwnersDashboardBooked else");
            
            res.writeHead(200,{
                'Content-Type':'text/plain'
              });
            console.log("Result:", result);
            res.end(JSON.stringify(result));   
        }
    });
};

module.exports.OwnersDashboardAll = function(req, res) {

    kafka.make_request('ownersdashboardall',req.body, function(err,result){
        console.log('in OwnersDashboardAll result');
        console.log(result);
        if (err){
            console.log("Error in OwnersDashboardAll");
            
            res.writeHead(400,{      
                'Content-Type':'text/plain'
            });
            res.end("Error in query");
        }else {
            console.log("Inside OwnersDashboardAll else");
            
            res.writeHead(200,{
                'Content-Type':'text/plain'
              });
            console.log("Result:", result);
            res.end(JSON.stringify(result));   
        }
    });
};
