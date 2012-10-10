
/*
 *  To run the tests install mocha
 *
 *  $ [sudo] npm install mocha -g
 *
 *  Then, step in the root directory of this module and just type:
 *
 *  $ mocha
 */

// Module Dependencies
var should              = require('should')
  , testData            = require('./utils/test_data_gen_rem');

// Dependencies to test components
process.env.NODE_ENV    = 'test';
var app                 = require('../config/app')()
  , db                  = app.get('db');

describe('Database', databaseTests);

function databaseTests () {
  var authorData = {};

  before(testData.generateTestData);

  it('Should get a list of latest posts', listOfLatestPost);
  it('Should get a list of blog authors', listOfAuthors);
  it('Should get the data of an author by their id', dataOfAnAuthorByID);
  it('Should get the data of an author by their username', dataOfAnAuthorByUsername);

  function listOfLatestPost (done) {
    db.model('BlogPost').getLatestPosts(gotPosts);

    function gotPosts (err, posts) {
      if (err) return errorHandler(err);

      // A little check
      posts[9].title.should.include('Post');
      posts[9].categories.length.should.equal(3);
      posts[9].tags.length.should.equal(3);

      done();
    };
  };

  function listOfAuthors (done) {
    db.model('BlogAuthor').getAuthorList(gotAuthors);

    function gotAuthors (err, authors) {
      if (err) return errorHandler(err);
      authorData.authorsInDB = authors;
      authorData.id          = authors[0]._id;
      authors[0].username.should.equal('johndoe');
      authors[0].fullname.should.equal('John Doe');
      done();
    };
  };

  function dataOfAnAuthorByID (done) {
    db.model('BlogAuthor').getAuthorById(authorData.id, gotAuthor);

    function gotAuthor (err, author) {
      authorData.authorsInDB[0].username.should.equal('johndoe');
      authorData.authorsInDB[0].fullname.should.equal('John Doe');
      done();
    };
  };

  function dataOfAnAuthorByUsername (done) {
    db.model('BlogAuthor').getAuthorByUsername('johndoe', gotAuthor);

    function gotAuthor (err, author) {
      authorData.authorsInDB[0]._id.should.equal(authorData.id);
      authorData.authorsInDB[0].fullname.should.equal('John Doe');
      done();
    };
  };

  after(testData.removeTestData);
};

/**
 *  Auxiliar Functions
 */
function errorHandler (err) {
  console.log(err);
  throw 'Error on test ' + arguments.callee.caller;
};
