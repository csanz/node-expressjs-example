
module.exports = function (pluma) {

  var options = {}
  options.themeViewsDirectory = pluma.get('themeDirectory') + '/views'

  // In the future we will develop setters/getters of database
  // This way we can work a security model of DB access/authorizaton
  // For now, we will give `db` to the apps. (as of 0.2.0)
  options.db = pluma.settings.db

  var admin = require('../apps/admin/admin_app')(options)
  var blog  = require('../apps/blog/blog_app')(options)

  // TODO: Here should be a loop to include all the <apps>_app files
  //       on every app to be required

  // Load the applications into the middleware stack
  pluma.use('/admin', admin)
  pluma.use('/blog',  blog)

  // TODO: The loop to push the rest of the applications into the stack

  return pluma
}