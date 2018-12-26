const mongoose = require('mongoose');

require('express-mongoose');  

module.exports = function(){

  console.log("Setting up dabase models...".input)
  
  //  Load Blog Post model
  
  mongoose.model('Post', require('../app/models/post'));

}