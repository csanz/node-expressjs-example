module.exports = function(app){

  console.log("Setting up controllers...".input)

  var home = require('../app/controllers/home_controller')(app);

  console.log("Setting up routes...".input)

  //  Load Root
  
  app.get('/', home.index); 
  
  //  Load Post Controller + Routes
  
  app.get('/posts', home.index); 
  app.post('/create', home.create);
  app.post('/update', home.update);
  app.post('/delete', home.delete);

  return app;

}