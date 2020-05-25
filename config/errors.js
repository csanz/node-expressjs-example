module.exports = function(app){

  console.log("Setting up error handlers...".input)

  function NotFound(msg){
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
  }

  NotFound.prototype.__proto__ = Error.prototype;

  // Catch all

  app.all('*', function notFound(req, res, next) {
     throw new NotFound;
  });

  app.use(function(err, req, res, next) {
    if (err instanceof NotFound) {
      res.render('404');
    } else {
      res.status(500);
      console.log(err);
      res.render('500', {
        error: err
      });
    }
  });

  return app;

}
