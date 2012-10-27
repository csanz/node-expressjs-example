
// Module Dependencies & Variables
var controller = {}

// Constructor
module.exports = function () {
  return controller
}

/**
 * @param   req     {Object}
 * @param   res     {Object}
 *
 * @api     public
 *
 * @url     GET     /
 */
controller.index = function (req, res) {
  return res.redirect('/blog')
}

/**
 * @param   req     {Object}
 * @param   res     {Object}
 *
 * @api     public
 *
 * @url     GET     /about
 */
controller.about = function (req, res) {
  return res.render('home/about')
}
