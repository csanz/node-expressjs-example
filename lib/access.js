
/**
 * @param        {Object} req
 * @param        {Object} res
 * @param        {Object} next
 *
 *
 *
 * @middleware    public
 *
 * @summary       middleware function to ensure the user
 *                is logged in, if not, then they are redirected to
 *                login page before to continue.
 */
exports.mustBeLoggedIn = function (req, res, next) {
// PLACEHOLDER
return next() // we don't care yet about this
// PLACEHOLDER

  if (req.session.is_logged_in) return next()

  req.session.redirect = req.url
  return res.redirect('/admin/login')
}
