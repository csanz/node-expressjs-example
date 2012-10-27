
module.exports = function (app){
  
  function NotFound (msg) {
    this.name = 'NotFound'
    Error.call(this, msg)
    Error.captureStackTrace(this, arguments.callee)
  }

  NotFound.prototype.__proto__ = Error.prototype;
   
  // Catch all  
  app.all('*', function notFound(req, res, next) {
    throw new NotFound;
  })

  // Load 404 page
  app.use(function(err, req, res, next) {
    if (!(err instanceof NotFound)) return next(err)

    res.statusCode = 404
    res.render('./error/404', {})
  })

  // Load 500 page
  app.use(function(err, req, res, next) {
    console.log('ERROR: \n--------------------------')
    console.log(err)

    res.statusCode = 500
    res.render('./error/500', {'error' : err})
  })
  
  return app
}
