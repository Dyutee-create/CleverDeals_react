var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

it("Should insert the property details into the ListProperty table and return status code", function(done){
    chai.request('http://127.0.0.1:3001')
    .post('/ListProperty')
    .send({ "address" : "San Diego, CA", "headline" : "Sample listing of a property", "propdesc" : "Sample listing of a property", "proptype" : "House", "noofrooms" : "1", "noofpeople" : "4", "noofbathrooms" : "1", "startdate" : "2018-11-12", "enddate" : "2018-11-15", "currency" : "USD", "baserate" : "$2300", "minstay" : "3", "cleaningfee" : "$10", "propertyID" : 15 })
    .end(function (err, res) {
        expect(200);
        done();
    });
})
