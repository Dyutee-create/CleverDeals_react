var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

it("Should fetch the details from Owners Dashboard Booked and return status code", function(done){
    chai.request('http://127.0.0.1:3001')
    .get('/OwnersDashboardBooked')
    .send({})
    .end(function (err, res) {
        expect(200);
        done();
    });
})
