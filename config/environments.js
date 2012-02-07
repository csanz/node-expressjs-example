module.exports = function(app){
 
  var port = process.env.PORT || 4000;
 
  app.configure('local', function (){
    this
      .set('host', 'localhost')
      .set('port', port)
      .set('ENV','local')
  }); 
  
  app.configure('production', function (){
    this
      .set('host', 'node-blog-example.herokuapp.com')
      .set('port', port)
      .set('ENV','production')
  });

  return app
  
}