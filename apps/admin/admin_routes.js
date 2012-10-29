
module.exports = function (app) {

  // Load the admin controller
  var admin = require('./admin_controller')(app)

  // Load the routes into `app`
  app.get('/',           admin.dashboard)
  app.get('/dashboard',  admin.dashboard)
  app.get('/login',      admin.login)

  return app
}