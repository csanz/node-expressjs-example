
// Module Dependencies & Variables
var controller = {}
  , app
  , db

// Constructor
module.exports = function (_app) {
  app = _app
  db  = app.set('db')
  return controller
}

/**
 * @param   req   {Object}
 * @param   res   {Object}
 * @param   next  {Object}
 *
 * @api     private
 *
 * @url    GET    /
 */
controller.home = function(req, res, next){
  var s = {};

  // TODO: See how does templates apply here
  //       For now, we do this:
  s.template = 'home'

  // For now, I'm just rendering the last
  // 15 posts list...
  res.render( s.template
            , { vars : s }
  );
};
