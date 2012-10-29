
var express = require('express')

module.exports = function (options) {
  // Create app object
  var app = express()

  // Make `db` an app variable of blog
  app.set('db', options.db)

  // Set views engine and directory
  app.set('view engine', 'jade')
  app.set('views', options.themeViewsDirectory)

  // Load routes
  require('./blog_routes')(app)

  return app
}
