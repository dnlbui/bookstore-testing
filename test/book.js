let Book = require("../app/models/book");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");

let should = chai.should();

chai.use(chaiHttp);

beforeEach(() => {
  Book.removeAll();
})

describe("Books", () => {
  describe("/GET book", () => {
    it("it should GET all the books", (done) => {
      chai
        .request(server)
        .get("/book")
        .end((err, res) => {
          res.should.have.status(200); //res.status = 200
          res.body.should.be.an("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe("/POST book", () => {
    it("it should POST a book", done => {
      //arrange
      let book = {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        year: 2008,
        pages: 301
      }
      //act
      chai
        .request(server)
        .post('/book')
        .send(book)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property("title");
          res.body.should.have.property("author");
          res.body.should.have.property("pages");
          res.body.should.have.property("year");
          done();
        })
    });
    it("should not POST a book without pages field", done => {
      //arrange
      let book ={
        title: "The Hunger Games",
        author: "Suzanne Collins",
        year: 2008,
        pages: 0 
      }
      //act
      chai
        .request(server)
        .post("/book")
        .send(book)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        })
    })
  });
});