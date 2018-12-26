const express       = require('express')
    , stylus        = require('stylus')
    , mongoose      = require('mongoose')
    , models        = require('./models')
    , expressjs     = require('./expressjs')
    , routes        = require('./routes')
    , environments  = require('./environments')
    , errors        = require('./errors')
    , hooks         = require('./hooks')
    , db            = require('./db')
    , libs          = require('./libs')
    , logs          = require('./logs')
     
module.exports = function () {

  // Create instance of express

  const app = express(); 

  //  Load Environmental Settings
  
  environments(app);

  //  Load Expressjs config
  
  expressjs(app);
  
  //  Load Mongoose Models
  
  models(app)

  //  Load libraries 

  libs(app);

  //  Load routes config
  
  routes(app);

  // Load database config

  db(app);
  
  //  Load error routes + pages
  
  errors(app);

  //  Load hooks

  hooks(app)
  
  return app;
  
};