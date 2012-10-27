
var app
  , adminModel  = require('../../apps/admin/admin_model')
  , express     = require('express')
  , mongoose    = require('mongoose')
  , nib         = require('nib')
  , settings    = require('../settings.js')
  , stylus      = require('stylus')

/**
 * # Environments component
 *
 * Here we load our application environment variables
 * and our middleware functions.
 *
 * ## Default middleware list
 *
 * - 
 *
 */
module.exports = function (_app, callback) {

  app = _app

  // 0. DB connection
  getAdminKeys(gotKeys)

  function gotKeys () {
    // 1. Themes Variables
    //setThemeVariables(app)

    // 2. Logger
    //setLogger(app)

    // 3. Session Store
    //setSessionStore(app)

    // 4. Body Parser and Error Handler Middlewares
    //app.use(express.bodyParser())
    //app.use(express.errorHandler({dumpException: true, showStack: true}))

    // 5. Set version, host and port
    //app.set('version', '0.2.0')
    //app.set('host', 'localhost')
    //app.set('port', 3000)

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
function getAdminKeys (callback) {

  var dblink  = settings.mongoDBUrl
  app.set('db', mongoose.createConnection(dblink))

  // We need this model available at once
  mongoose.model('Admin', adminModel)

  // Getting the admin keys from the database:
  var Admin = app.get('db').model('Admin')

  Admin.getAllValues(function(err, values) {
    if (err) throw 'Database Error'
    app.set('admin-keys', values)
    callback()
  })
}
