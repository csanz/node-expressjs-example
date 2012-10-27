
/**
 * PlumaJS
 *
 * version 0.2.0
 *
 * This is the main file of the application
 *
 * it loads the expressJS framework, its environment,
 * models, routes and error (404 & 500) handlers.
 *
 */

var express       = require('express')
  , models        = require('./models')
  , routes        = require('./routes')
  , errors        = require('./errors')

// Loads the adequate environment variable
var env  = process.env.NODE_ENV || 'development'

module.exports = function (callback) {
  var app = express()

  // Since we are querying mongo during loading,
  // environments must be invoked in an async fashion
  // i.e. using a callback
  require('./environments/' + env)(app, onLoadedEnv)

  function onLoadedEnv (app) {
    // For now, we can load the following
    // in a synchronous way
    models(app)
    routes(app)
    errors(app)

    // Loading of core is ready
    callback(app)
  }
}
