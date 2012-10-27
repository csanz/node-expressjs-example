
module.exports = function (app) {

  // Load the blog controller
  var blog = require('./blog_controller')(app)

  // Load the routes into `app`
  app.get('/blog', blog.latest)

  return app
}