
// Module Dependencies & Variables
var controller = {}
  , app

// Constructor
module.exports = function (_app) {
  app         = _app
  return controller
}

/**
 * @param   {Object}  req
 * @param   {Object}  res
 * @param   {Object}  next
 *
 * @api     public
 *
 * @url     GET     /admin
 */
controller.dashboard = function (req, res, next) {
  var s = {};
  s.template = 'admin/dashboard'

  res.render(s.template)
}

/**
 * @param   {Object}  req
 * @param   {Object}  res
 * @param   {Object}  next
 *
 * @api     public
 *
 * @url     GET     /admin/login
 */
controller.login = function (req, res, next) {
  var s = {};
  s.template = 'admin/login'

  res.render(s.template)
}

