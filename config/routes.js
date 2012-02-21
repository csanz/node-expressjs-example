module.exports = function(app){

  var blog   = require('../app/controllers/blogpost_controller')(app);
  
  //  Load database and pass it down to the controllers
  
  var db = app.set('db');

  //  Load Root
  
  app.get('/', blog.index); // *Root
  
  //  Load Blog Controller + Routes
  
  app.get('/posts', blog.index); 
  app.post('/create', blog.create);
  app.post('/update', blog.update);
  app.post('/delete', blog.delete);

}