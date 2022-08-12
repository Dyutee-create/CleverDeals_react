var kafka = require('../kafka/client');

module.exports.ListProperty = function(req, res, next) {
    console.log("Inside ListProperty request");

    kafka.make_request('listproperty',req.body, function(err,results){
        console.log('in listproperty result');
        console.log(results);
        if (err){
            console.log("Inside listproperty err");
            res.writeHead(400,{
                'Content-Type':'text/plain'
            });
            res.end("Error in query");
        }else{
            console.log("Inside listproperty else");
            res.writeHead(200,{
                'Content-Type':'text/plain'
            });
            res.end("Sucess in query");
        }
        
    });
};