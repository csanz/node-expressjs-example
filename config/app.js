/**
 * Load dependencies
 */
 
const express       = require('express')
    , stylus        = require('stylus')
    , mongoose      = require('mongoose')
    , nib           = require('nib')
    , models        = require('./models')
    , config        = require('./config')
    , routes        = require('./routes')
    , environments  = require('./environments')
    , errors        = require('./errors');

/**
 * Exports
 */
     
module.exports = function () {

  //  Create Server

  const app = express.createServer()
  
  //  Load Mongoose Models
  
  models(app)
  
  //  Load Expressjs config
  
  config(app);
  
  //  Load Environmental Settings
  
  environments(app);

  //  Load routes config
  
  routes(app);
  
  //  Load error routes + pages
  
  errors(app);
  
  return app;
  
};