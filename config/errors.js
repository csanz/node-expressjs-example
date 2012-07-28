module.exports = function(app){
  function NotFound(msg){
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
  }

  NotFound.prototype.__proto__ = Error.prototype;
   
  //  Catch all
  
  app.all('*', function notFound(req, res, next) {
     throw new NotFound;
  });
  
  //  Load 404 page
  
  app.error(function(err, req, res, next){
      if (err instanceof NotFound) {
          res.render('home/404');
      } else {
          next(err);
      }
  });

  //  Load 500 page
  
  app.error(function(err, req, res){
    console.log(err);
    res.render('home/500', {
      error: err
    });
  });
  
  return app;
  
}