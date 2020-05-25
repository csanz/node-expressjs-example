/**
 *  Load dependencies
 */

const express       = require('express')
    , stylus        = require('stylus')
    , nib           = require('nib')
    , logger        = require('morgan')
    , cookieParser  = require('cookie-parser')
    , bodyParser    = require('body-parser')
    , errorHandler  = require('errorhandler')
    , path          = require('path')
    , session       = require('express-session')
    , colors        = require("colors")
    , expose        = require('express-expose')
    , morgan        = require('morgan');

module.exports = function(app){

  // Set header

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  console.log("Setting up expressjs...".input)

  //  Configure expressjs

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(errorHandler({dumpException: true, showStack: true}));
  app.use(session({
    secret: process.env.SESSION_KEY || 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  //  Add template engine

  app.set('views', path.join(__dirname, '/../app/views'));
  app.set('view engine', 'pug');

  // Add style engine

  app.use(require('stylus').middleware(__dirname + '/../public'));
  app.use(express.static(path.join(__dirname, '/../public')));

  // Setup expose

  expose(app);


  return app
}
