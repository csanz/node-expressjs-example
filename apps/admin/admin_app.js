
var express            = require('express')
  , less_middleware    = require('less-middleware')

module.exports = function (options) {
  // Create app object
  var app = express()

  // Make `db` an app variable of blog
  app.set('db', options.db)

  // Set views engine and directory
  app.set('view engine', 'jade')
  app.set('views', __dirname + '/views')

  // Set admin's css compiler
  app.use(less_middleware(
    { prefix        : '/stylesheets'
    , src           : __dirname + '/public/stylesheets/'
    , dest          : __dirname + '/public/stylesheets/'
    , optimization  : 2
    , compress      : true
    }
  ))

  // Set public static directory here
  app.use('/', express.static(__dirname + '/public'))

  // Load routes
  require('./admin_routes')(app)

  return app
}
