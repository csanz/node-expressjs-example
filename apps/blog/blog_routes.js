
module.exports = function (app) {

  // Load the blog controller
  var blog = require('./blog_controller')(app)

  // Load the routes into `app`
  // Remember, all routes were stripped of prefix `blog`
  app.get('/', blog.latest)

  return app
}
