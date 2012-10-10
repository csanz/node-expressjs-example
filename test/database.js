
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
var should              = require('should');

// Dependencies to test components
process.env.NODE_ENV    = 'test';
var app                 = require('../config/app')();

describe('Database', DatabaseTests);

function DatabaseTests () {
  before(generateTestData);

  it('Should Get a List of Latest Posts', ListOfLatestPostTest);

  function ListOfLatestPostTest (done) {
    var db = app.get('db');
    db.model('BlogPost').getLatestPosts(gotPosts);

    function gotPosts (err, posts) {
      if (err) {
        console.log(err)
        throw 'Error on Data Query for Test!'
      }

      // A little check
      posts[9].title.should.include('Post');
      posts[9].categories.length.should.equal(3);
      posts[9].tags.length.should.equal(3);

      done();
    };
  };

  after(removeTestData);
};

/**
 * Auxiliar Test Functions
 */

function generateTestData (done) {
  var exec = require("child_process").exec;
  var cmd  = 'mongo test/mongo_scripts/generate_test_data.js';

  exec(cmd, function (error, stdout, stderr) {
    if (error || stderr) {
      console.log(error || stderr);
      throw 'Error on Data Generation for Test!'
    } else {
      done();
    }
  });
};

function removeTestData (done) {
  this.timeout(3000)
  var exec = require("child_process").exec;
  var cmd  = 'mongo test/mongo_scripts/remove_test_data.js';
  exec(cmd, function (error, stdout, stderr) {
    if (error || stderr) {
      console.log(error || stderr);
      throw 'Error on Data Removal for Test!'
    } else {
      done();
    }
  });
};
