/**
 * Load controllers
 */

const blog   = require('../app/controllers/blogpost_controller');

/**
 * Exports
 */
 
module.exports = function(app){
  
  //  Load database and pass it down to the controllers
  
  var db = app.set('db');

  //  Load Root
  
  app.get('/', function (req, res, next){ blog.index(req, res, db, next) }); // *Root
  
  //  Load Blog Controller + Routes
  
  app.get('/posts', function (req, res, next){ blog.index(req, res, db, next) }); 
  app.post('/create', function (req, res, next){ blog.create(req, res, db, next) }); 

}