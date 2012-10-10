
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
var cheerio             = require('cheerio')
  , should              = require('should')
  , superagent          = require('superagent');

// Dependencies to test components
process.env.NODE_ENV    = 'test';
var app                 = require('../config/app')()
  , port                = app.get('port');
app.listen(port);

describe('Render', RenderTests);

function RenderTests () {
  before(generateTestData);

  it('Should Retrieve a List of Latest Posts', ListOfLatestPostTest);

  function ListOfLatestPostTest (done) {
    var request = superagent.agent();

    request.get('http://localhost:3000/').end(onResponse);

    function onResponse (res) {
      var $       = cheerio.load(res.text)
        , onePost = $('div#posts').children()[0]
        , title   = $(onePost).find('h3.show').html();

      // Little check... We'll improve over the time
      title.should.include('Post');

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
