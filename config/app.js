
/**
 * Load dependencies
 */
 
var express       = require('express')
  , stylus        = require('stylus')
  , mongoose      = require('mongoose')
  , nib           = require('nib')
  , models        = require('./models')
  , routes        = require('./routes')
  , environments  = require('./environments')
  , errors        = require('./errors')
  , hooks         = require('./hooks');

/**
 * Exports
 */
     
module.exports = function () {
  // Create Server
  var app = express();

  // Load Mongoose Models
  models(app)

  // Load Specific Environmental Settings
  environments(app);

  // Load routes config
  routes(app);

  // Load error routes + pages
  //errors(app);

  // Load hooks
  //hooks(app)

  return app;
};
