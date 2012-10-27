
// We are needing the access middleware here
var access = require('../../lib/access')

module.exports = function (app) {

  // Load the admin controller
  var admin = require('./admin_controller')(app)

  // Load the routes into `app`
  app.get('/admin',               access.mustBeLoggedIn,  admin.dashboard)
  app.get('/admin/dashboard',     access.mustBeLoggedIn,  admin.dashboard)
  app.get('/admin/login',                                 admin.login)

  return app
}