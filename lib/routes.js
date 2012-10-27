
module.exports = function (app) {

  // Each app has its own routes, which are preceded by the app name
  // For example, all `admin` routes are preceded by `/admin`.
  // This way we can avoid errors in the order in which routes
  // are parsed

  // Here we require each app route file
  // admin is imperative and blog is advisable (what do we do without a blog?)
  require('../apps/admin/admin_routes')(app)
  require('../apps/blog/blog_routes')(app)

  // TODO: See a developer friendly way to manage `home` routes, should
  //       the programmer needs use them, i.e. /<username> /about etc.
  // matter if fact, I (HJ) have to solve this one soon
  app.get('/',                        homeRedirection)

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
