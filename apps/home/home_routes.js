
module.exports = function (app) {

  // Load the home controller
  var home = require('./home_controller')()

  // Load the routes into `app`
  app.get('/',      home.index)
  app.get('/about', home.about)

  return app
}
