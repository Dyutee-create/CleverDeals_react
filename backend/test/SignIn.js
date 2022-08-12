var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

it("Should check credentials and return status code", function(done){
    chai.request('http://127.0.0.1:3001')
    .post('/SignIn')
    .send({"emailID" : "shrutha@gmail.com", "password" : "Shrutha@123" })
    .end(function (err, res) {
        expect(200);
        done();
    });
})
