//import
let assert = require('chai').assert;
let expect = require('chai').expect;
let should = require('chai').should();
let chaihttp = require('chai-http');
var chai = require('chai')
  , chaiHttp = require('chai-http');
chai.use(chaiHttp);




describe('For Fithub Test API Automation', function(){
    it(`Should success to get user info`, function(done){
            let res = chai.request('https://reqres.in')
            .get('/api/users/2')
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res.body.data.id).to.equal(2);
                expect(res.body.data.email).to.equal('janet.weaver@reqres.in');
                done();
            });     
    });
    it(`Should success to get list of users`, function(done){
        let res = chai.request('https://reqres.in')
        .get('/api/users?page=2')
        .end(function(err, res){
            expect(res).to.have.status(200);
            expect(res.body.data.length).to.equal(6);
            expect(res.body.data[1].first_name).to.equal('Lindsay');
            done();
        });     
    });
    it(`Should success to create user`, function(done){
        let name = 'morpheus';
        let job = 'leader';
        let res = chai.request('https://reqres.in')
        .post('/api/users')
        .send({
            "name": name,
            "job": job
        }
        )
        .end(function(err, res){
            expect(res).to.have.status(201);
            expect(res.body.name).to.equal(name);
            expect(res.body.job).to.equal(job);
            done();
        });     
    });
    it(`Should failed get user`, function(done){
        let name = 'morpheus';
        let job = 'leader';
        let res = chai.request('https://reqres.in')
        .get('/api/unknown/23')
        .end(function(err, res){
            expect(res).to.have.status(404);
            done();
        });     
    });
});