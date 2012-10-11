
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
  , superagent          = require('superagent')
  , testData            = require('./utils/test_data_gen_rem');

// Dependencies to test components
process.env.NODE_ENV    = 'test';
var app                 = require('../config/app')()
  , port                = app.get('port');
app.listen(port);

describe('Render', renderTests);

function renderTests () {
  before(testData.generateTestData);

  it('Should retrieve a list of latest posts', listOfLatestPosts);
  it('Should retrieve a list of latest posts by author `kernelpanic`', listOfLatestPostsByAuthor);
  it('Should retrieve a list of latest posts by category `eight`', listOfLatestPostsByCategory);
  it('Should retrieve a list of latest posts by tag `Phi`', listOfLatestPostsByTag);

  function listOfLatestPosts (done) {
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

  function listOfLatestPostsByAuthor (done) {
    var request = superagent.agent();

    request.get('http://localhost:3000/author/kernelpanic').end(onResponse);

    function onResponse (res) {
      var $       = cheerio.load(res.text)
        , onePost = $('div#posts').children()[0]
        , title   = $(onePost).find('h3.show').html()
        , author  = $($('p#author.show')[0]).html();

      // Value checks
      title.should.include('Post');
      author.should.equal('Frank Doe');

      done();
    };
  };

  function listOfLatestPostsByCategory (done) {
    var request = superagent.agent();

    request.get('http://localhost:3000/category/eight').end(onResponse);

    function onResponse (res) {
      var $           = cheerio.load(res.text)
        , onePost     = $('div#posts').children()[0]
        , title       = $(onePost).find('h3.show').html()
        , categories  = $($('p#categories.show')[0]).html();

      // Little check... We'll improve over the time
      title.should.include('Post');
      categories.should.include('eight');

      done();
    };
  };

  function listOfLatestPostsByTag (done) {
    var request = superagent.agent();

    request.get('http://localhost:3000/tag/Phi').end(onResponse);

    function onResponse (res) {
      var $       = cheerio.load(res.text)
        , onePost = $('div#posts').children()[0]
        , title   = $(onePost).find('h3.show').html()
        , tags    = $($('p#tags.show')[0]).html();

      // Little check... We'll improve over the time
      title.should.include('Post');
      tags.should.include('Phi');

      done();
    };
  };

  after(testData.removeTestData);
};
