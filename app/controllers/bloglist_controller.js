
// Module Dependencies & Variables
var controller = {}
  , app
  , BlogAuthor
  , BlogPost
  , db;

// Constructor
module.exports = function (_app) {
  app         = _app;
  db          = app.set('db');
  BlogAuthor  = db.model('BlogAuthor');
  BlogPost    = db.model('BlogPost');
  return controller;
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
  BlogPost.getLatestPosts(gotPosts);

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

/**
 * @param   req     {Object}
 * @param   res     {Object}
 * @param   next    {Object}
 *
 * @api     public
 *
 * @url     GET     /author/:author
 */
controller.author = function(req, res, next) {
  var s               = {};
  var authorUsername  = req.params.author || '';

  if (authorUsername === '') return res.send(404);
  BlogAuthor.getAuthorByUsername(authorUsername, gotAuthor);

  function gotAuthor (err, author) {
    if (err) return next();
    s.author    = author;
    s.template  = 'home/author';
    BlogPost.getLatestPostsByAuthorUsername(authorUsername, gotPosts);
  };

  function gotPosts (err, posts) {
    if (err) return next();
    if (posts.length === 0) res.send(404);
    s.posts = posts;
    render();
  };

  function render () {
    res.render( s.template
              , { vars : s }
    );
  };
};

/**
 * @param   req     {Object}
 * @param   res     {Object}
 * @param   next    {Object}
 *
 * @api     public
 *
 * @url     GET     /category/:category
 */
controller.category = function(req, res, next) {
  var s               = {};
  var category  = req.params.category || '';

  if (category === '') return res.send(404);
  BlogPost.getLatestPostsByCategory(category, gotPosts);

  function gotPosts (err, posts) {
    if (err) return next();
    if (posts.length === 0) res.send(404);
    s.category  = category;
    s.template  = 'home/category'
    s.posts     = posts;
    render();
  };

  function render () {
    res.render( s.template
              , { vars : s }
    );
  };
};

/**
 * @param   req     {Object}
 * @param   res     {Object}
 * @param   next    {Object}
 *
 * @api     public
 *
 * @url     GET     /tag/:tag
 */
controller.tag = function(req, res, next) {
  var s               = {};
  var tag  = req.params.tag || '';

  if (tag === '') return res.send(404);
  BlogPost.getLatestPostsByTag(tag, gotPosts);

  function gotPosts (err, posts) {
    if (err) return next();
    if (posts.length === 0) res.send(404);
    s.tag      = tag;
    s.template = 'home/tag'
    s.posts    = posts;
    render();
  };

  function render () {
    res.render( s.template
              , { vars : s }
    );
  };
};
