var expect = require('chai').expect;
var request = require('request');

describe('Status and content', function(){
    describe('Main Page', function() {
        it('status', function() {
            request('http://localhost:8080', function(err, res, body) {
                expect(res.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(){
            request('http://localhost:8080', function(err, res, body) {
                expect(body).to.equal('Hello World');
                done();
            });
        });
    });

    describe('About Page', function(){
        it('status', function(){
            request('http://localhost:8080/about', function(err, res, bost){
                expect(res.statusCode).to.equal(404);
                done();
            });
        });
    });

    describe('Contact Page', function(){
        it('status', function(){
            request('http://localhost:8080/contactUs', function(err, res, body){
                expect(res.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function() {
           request('http://localhost:8080/contactUs', function(err, res, body){
               expect(res.statusCode).to.equal(200);
               done();
           });
        });
    });
});