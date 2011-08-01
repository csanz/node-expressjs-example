module.exports = function(app){
 
  var port = process.env.PORT || 4000;
 
  app.configure('local', function (){
    this
      .set('version','0.1.5')
      .set('host', 'localhost')
      .set('port', port)
      .set('env','local')
  }); 
  
  app.configure('production', function (){
    this
      .set('version','0.1.5')
      .set('host', 'node-blog-example.herokuapp.com')
      .set('port', port)
      .set('env','local')
  });
  
}