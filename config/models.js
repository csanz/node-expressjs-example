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
  // Load Blog Author model
  mongoose.model('BlogAuthor', require('../app/models/blogauthor_model'));

  return app;
};
