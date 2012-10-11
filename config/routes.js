module.exports = function(app){

  var bloglist   = require('../app/controllers/bloglist_controller')(app);
  
  //  Load database and pass it down to the controllers
  
  var db = app.set('db');

  //  Load Root
  
  app.get('/',                              bloglist.home);
  app.get('/author/:author',                bloglist.author);
  app.get('/category/:category',            bloglist.category);
  app.get('/tag/:tag',                      bloglist.tag);

  return app;
};
