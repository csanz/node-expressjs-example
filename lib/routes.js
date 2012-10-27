
module.exports = function (app) {

  // Each app has its own routes, which are preceded by the app name
  // For example, all `admin` routes are preceded by `/admin`.
  // This way we can avoid errors in the order in which routes
  // are parsed

  // Here we require each app route file
  // admin is imperative and blog is advisable (what do we do without a blog?)
  require('../apps/admin/admin_routes')(app)
  require('../apps/blog/blog_routes')(app)
  // Here we have the '/' route, '/about' route
  require('../apps/home/home_routes')(app)

  return app
}

/**
 * @param {Object} req
 * @param {Object} res
 *
 * @url   GET /
 *
 * @api   private
 *
 * @summary A hacky patch, it deals with the home redirection
 *          Soon we will have to implement a `home` app just to deal
 *          with the control and rendering of these routes
 */
function homeRedirection (req, res) {
  return res.redirect('/blog/')
}
