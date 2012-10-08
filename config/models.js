/**
 * Load dependencies
 */
var mongoose = require('mongoose');

/**
 * Exports
 */
 
module.exports = function(app){
  
  // Load Blog Post model  
  mongoose.model('BlogPost', require('../app/models/blogpost_model'));

  return app;
};
