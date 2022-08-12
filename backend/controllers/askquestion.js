var kafka = require('../kafka/client');

module.exports.AskQuestion = function(req,res,next){
    console.log("Inside Askquestion request");

    kafka.make_request('askquestion',req.body, function(err,result){
        console.log('in AskQuestion result');
        console.log(result);
        if (err){
            console.log("Error in AskQuestion");
            
            res.writeHead(400,{      
                'Content-Type':'text/plain'
            });
            res.end("Error in query");
        }else {
            console.log("Inside AskQuestion else");
            
            res.writeHead(200,{
                'Content-Type':'text/plain'
              });
            console.log("Result:", result);
            res.send(JSON.stringify(result));   
            res.end();
        }
    });
}
   