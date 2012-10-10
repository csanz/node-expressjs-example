
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
 * @param   req     {Object}
 * @param   res     {Object}
 * @param   next    {Object}
 *
 * @api     public
 *
 * @url     GET     /
 */
controller.home = function(req, res, next) {
  var s = {};
  s.template = 'home';
  db.model('BlogPost').getLatestPosts(gotPosts);

  function gotPosts (err, posts) {
    if (err) return next();
    s.posts = posts;
    render();
  };

  function render () {
    res.render( s.template
              , { vars : s }
    );
  };
};
