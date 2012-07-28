module.exports = function(app){

  var home   = require('../app/controllers/home_controller')(app);
  
  //  Load database and pass it down to the controllers
  
  var db = app.set('db');

  //  Load Root
  
  app.get('/', home.index); // *Root
  app.get('/about', home.load.bind(null, 'home/about'));
  
  //  Load Blog Controller + Routes
  
  app.get('/posts', home.index); 
  app.post('/create', home.create);
  app.post('/update', home.update);
  app.post('/delete', home.delete);

}