/**
 * Load dependencies
 */

const mongoose = require('mongoose');

require('express-mongoose');  

/**
 * Exports
 */
 
module.exports = function(){
  
  //  Load Blog Post model
  
  mongoose.model('BlogPost', require('../app/models/blogpost'));

}