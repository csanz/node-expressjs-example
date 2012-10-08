
/**
 *  Load dependencies
 */
var express   = require('express')
  , mongoose  = require('mongoose')
  , nib       = require('nib')
  , stylus    = require('stylus');

/**
 *  Environment Module
 */
module.exports = function(app) {
  // Setup DB Connection
  var dblink  =
       process.env.MONGOHQ_URL
    || 'mongodb://localhost/ExpressJS-Blog_Test1775b07a285330b1aef727ea8dc695e7';
  app.set('db', mongoose.createConnection(dblink));

  // Compile Hack for Stylus
  function compile(str, path) {
    return stylus(str)
      .set('filename', path)
      .include(nib.path)
  };

  // Configure ExpressJS
  app.configure(function (){
    this
      .use(express.logger('\033[90m:method\033[0m \033[36m:url\033[0m \033[90m:response-time ms\033[0m'))
      .use(express.cookieParser())
      .use(express.bodyParser())
      .use(express.errorHandler({dumpException: true, showStack: true}))
  });

  // Add Template engine
  app.configure(function(){
    this
      .set('views', __dirname + '../../../app/views')
      .set('view engine', 'jade')
      .use(stylus.middleware(
      {
        src: __dirname + '../../../public',
        compile: compile
      }))
      .use(express.static(__dirname + '../../../public'))
  });

  // Other Variables
  app.set('version', '0.2.0');
  app.set('host', 'localhost')
  app.set('port', 3000);

  return app;
}