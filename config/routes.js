module.exports = function(app){

  var list   = require('../app/controllers/list_controller')(app);
  
  //  Load database and pass it down to the controllers
  
  var db = app.set('db');

  //  Load Root
  
  app.get('/', list.home);
  // app.get('/about', home.load.bind(null, 'home/about'));
  
  //  Load Blog Controller + Routes
  
/*  app.get('/posts', home.index); 
  app.post('/create', home.create);
  app.post('/update', home.update);
  app.post('/delete', home.delete);*/

};
