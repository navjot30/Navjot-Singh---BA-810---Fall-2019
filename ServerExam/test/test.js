//During the test the env variable is set to test
//During the test the env variable is set to test
const mongoose = require("mongoose"),
  Gadget = require("../app/models/gadgets");

process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();

chai.use(chaiHttp);

it('it should GET the index.html file', (done) => {
    chai.request(server)
        .get('/index.html')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html;
            done();
        });
});

it('it should return 404', (done) => {
    chai.request(server).get('/index2.html')
        .end((err, res) => {
            res.should.have.status(404);
            done();
        });
});
describe('Gadget', () => {
    beforeEach(done => {
        Gadget.remove({}, err => {
            done();
        });
    });
    //Insert user tests here
    it('it should GET all the Gadgets', done => {
        var gadget = new Gadget({
            yoo: 'Gadget1'
        });
        gadget.save((err, gadget) => {
            chai.request(server)
                .get('/api/gadgets')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });
    });
    it("It should DELETE the Gadget with the given ID", done => {
        var gadget = new Gadget({
          yoo: "Gadget",
          hoo: 300
        });
        gadget.save((err, gadget) => {
          chai
            .request(server)
            .delete("/api/gadgets/" + gadget._id)
            .send({
              _id: gadget._id,
              hoo: 300
            })
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("msg").eql("Gadget Deleted");
              done();
            });
        });
      });
});
