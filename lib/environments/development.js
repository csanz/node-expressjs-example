
var adminModel        = require('../../apps/admin/admin_model')
  , express           = require('express')
  , lessMiddleware    = require('less-middleware')
  , mongoose          = require('mongoose')
  , nib               = require('nib')
  , settings          = require('../settings.js')
  , stylus            = require('stylus')

/**
 * # Environments component
 *
 * Here we load our application environment variables
 * and our middleware functions.
 *
 * ## Default middleware list (in order)
 *
 * - Stylus middleware
 * - Express static()
 * -
 * -
 * -
 * -
 */
module.exports = function (app, callback) {

  // 0. DB connection
  getAdminKeys(app, gotKeys)

  function gotKeys (app) {
    // 1. Themes Variables
    setThemeVariables(app)

    // 2. Logger
    setLogger(app)

    // 3. Session Store
    setSessionStore(app)

    // 4. Body Parser and Error Handler Middlewares
    app.use(express.bodyParser())
    app.use(express.errorHandler({dumpException: true, showStack: true}))

    // 5. Set version, host and port
    app.set('version', '0.2.0')
    app.set('host', 'localhost')
    app.set('port', 3000)

    // 6. And Returns
    return callback(app)
  }
}

/**
 * @param     {Callback}   cb
 *
 * @api       private
 *
 * @summary   Connects with database and retrieves admin keys
 */
function getAdminKeys (app, callback) {

  var dblink  = settings.mongoDBUrl
  app.set('db', mongoose.createConnection(dblink))

  // We need this model available at once
  mongoose.model('Admin', adminModel)

  // Getting the admin keys from the database:
  var Admin = app.get('db').model('Admin')

  Admin.getAllValues(function(err, values) {
    if (err) throw 'Database Error'
    app.set('admin-keys', values)
    return callback(app)
  })
}

/**
 * Set all theme related env vars and middleware
 *
 * - Views directory
 * - View engine (jade by default)
 * - Less middleware (for admin app)
 * - Stylus middleware
 * - Static files directory middleware
 *
 */
function setThemeVariables (app) {
  var themeName       = app.get('admin-keys').theme
  var themeDirectory  = __dirname + '/../../themes/' + themeName + '/'

  // Set views directory
  app.set('views', themeDirectory + 'views')

  // Set jade as view engine
  app.set('view engine', 'jade')

  // Set Less middleware (for admin app's css)
  app.use(lessMiddleware(
    { prefix        : '/stylesheets'
    , src           : themeDirectory + 'public/stylesheets/'
    , dest          : themeDirectory + 'public/stylesheets/'
    , optimization  : 2
    , compress      : true
    }
  ))

  // Set Stylus middleware (for theme's css)
  app.use(stylus.middleware(
    { src     : themeDirectory + 'public'
    , compile : compileStylus
    })
  )

  // Stylus hack
  function compileStylus (str, path) {
    return stylus(str)
      .set('filename', path)
      .include(nib.path)
  }

  // Set static files middleware
  app.use(express.static(themeDirectory + 'public'))

  return app
}

/*
 *  Set Logger middleware
 *
 * You can choose among express native logger
 * or any winston's transport
 */
 function setLogger(app) {
  // TODO: Present winston option
  var loggerString = '\033[90m:method\033[0m \033[36m:url\033[0m'
                   + ' \033[90m:response-time ms\033[0m'
  app.use(express.logger(loggerString))

  return app
 }

/**
 * Set cookie parser and session middleware
 *
 * You can choose among using connect's session
 * or redis
 */
function setSessionStore (app) {
  app.use(express.cookieParser())

  // TODO: Boolean to load redis

  app.use(
    express.cookieSession(
      { secret : 'f29208b23abeb2099b3f24e0d53a8a36875cb43c'} ))
  return app
}
