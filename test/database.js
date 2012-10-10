
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
var app                 = require('../config/app')();

describe('Database', DatabaseTests);

function DatabaseTests () {
  before(testData.generateTestData);

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

  after(testData.removeTestData);
};
