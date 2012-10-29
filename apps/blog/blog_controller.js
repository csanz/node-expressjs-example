
// Module Dependencies & Variables
var controller = {}
  , app
  , BlogPost
  , db

// Constructor
module.exports = function (_app) {
  app         = _app
  db          = app.get('db')
  BlogPost    = db.model('BlogPost')
  return controller
}

/**
 * @param   req     {Object}
 * @param   res     {Object}
 * @param   next    {Object}
 *
 * @api     public
 *
 * @url     GET     /blog
 */
controller.latest = function (req, res, next) {
  var s = {}
  s.template = 'blog/index'
  BlogPost.getLatestPosts(gotPosts)

  function gotPosts (err, posts) {
    if (err) return next(err)
    s.posts = posts
    render()
  }

  function render () {
    res.render( s.template, s )
  }
}
