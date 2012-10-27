
var mongoose = require('mongoose')

module.exports = function(app){

  // Here is where we load all mongoose models to be used
  // We have already loaded the Admin model at the environment stage

  mongoose.model('User',          require('../apps/user/user_model'))
  mongoose.model('BlogPost',      require('../apps/blog/blogpost_model'))

  // In a later stage of development, we would want to load other apps' models
  // we will do it below
  // My propose is transverse the apps directory and check for
  // <directory_name>/<directory_name>_model.js and load it

  // TODO: Other apps models loading

  return app
}
