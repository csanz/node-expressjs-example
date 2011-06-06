/**
 *  Load dependencies
 */

const express = require('express')
    , stylus  = require('stylus')
    , mongoose  = require('mongoose')
    , nib     = require('nib');

/**
 *  Exports
 */

module.exports = function(app){

  //  Setup DB Connection

  var dblink = process.env.MONGOHQ_URL || 'mongodb://localhost/blogsample';

  const db  = mongoose.createConnection(dblink);

  //  Compile Hack for Stylus

  function compile(str, path) {
    return stylus(str)
      .set('filename', path)
      .include(nib.path);
  }

  //  Configure expressjs

  app.configure(function (){
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.errorHandler({dumpException: true, showStack: true}))
    app.use(express.session({ secret: 'faFka1@$aGsja'}))
  });

  //  Add template engine

  app.configure(function(){
    app.set('views', __dirname + '/../app/views');
    app.set('view engine', 'jade');
    app.use(stylus.middleware(
      { 
        src: __dirname + '/../public', 
        compile: compile 
      }));
    app.use(express.static(__dirname + '/../public'))
  });

  //  Save reference to database connection
  
  app.configure(function () {
    app.set('db', { 'main': db})
    app.set('version', '0.1.3');
  });
  
  //  Add expressjs helpers

  app.dynamicHelpers({
    messages: require('express-messages')
  });  
  
  return app;
}