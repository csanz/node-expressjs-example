
module.exports = function(app){
  function NotFound(msg){
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
  }

  NotFound.prototype.__proto__ = Error.prototype;
   
  //  Catch all
  
  app.all('*', function notFound(req, res, next) {
    // TODO: Remove this, is just temporally
    //       until I figure out what to do with this
    res.send(500, { error: 'Sorry something bad happened!' });
  });
  
  return app;
}