
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
  it('Should get the latest posts by author username', listOfLatestPostsByAuthorUsername);

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
      authorData.username    = authors[0].username;
      authorData.fullname    = authors[0].fullname;

      var authorUsernames = [ authors[0].username
                            , authors[1].username];
      authorUsernames.should.include('johndoe');

      var authorFullnames = [ authors[0].fullname
                            , authors[1].fullname];
      authorFullnames.should.include('John Doe');
      done();
    };
  };

  function dataOfAnAuthorByID (done) {
    db.model('BlogAuthor').getAuthorById(authorData.id, gotAuthor);

    function gotAuthor (err, author) {
      author.username.should.equal(authorData.username);
      author.fullname.should.equal(authorData.fullname);
      done();
    };
  };

  function dataOfAnAuthorByUsername (done) {
    db.model('BlogAuthor').getAuthorByUsername(authorData.username, gotAuthor);

    function gotAuthor (err, author) {
      author._id.toString().should.equal(authorData.id.toString());
      author.fullname.should.equal(authorData.fullname);
      done();
    };
  };

  function listOfLatestPostsByAuthorUsername (done) {
    db.model('BlogPost').getLatestPostsByAuthorUsername('johndoe', gotFirstList);

    function gotFirstList (err, list) {
      for (var i = 0; i < list.length; i++) {
        list[i].author.username.should.equal('johndoe');
      }
      db.model('BlogPost').getLatestPostsByAuthorUsername('kernelpanic', gotSecondList);
    };

    function gotSecondList (err, list) {
      for (var i = 0; i < list.length; i++) {
        list[i].author.username.should.equal('kernelpanic');
      }
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
