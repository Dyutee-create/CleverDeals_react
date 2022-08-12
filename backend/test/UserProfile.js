var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

it("Should insert the User details into the user profile table and return status code", function(done){
    chai.request('http://127.0.0.1:3001')
    .post('/UserProfile')
    .send({"firstname": "Rakesh", "lastname": "Naidu", "aboutme": "Employee", "mycountry": "San Jose", "company": "SJSU", "school": "", "hometown": "India", "languages": "English", "gender": "female", "phonenum": "1243324342", "emailID": "rakeshnaidu@gmail.com "})
    .end(function (err, res) {
        expect(200);
        done();
    });
})
