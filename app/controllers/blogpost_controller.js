/**
 * Index BlogPost
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Databaes Object} db
 * @param {Callback} next
 *
 * @api public
 * @url /
 * @url /posts
 */

exports.index = function(req, res, db, next){
  res.render('home', {
    posts: db.posts.getLatestPosts()
  });
}

/**
 * Create BlogPost
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Databaes Object} db
 * @param {Callback} next
 *
 * @api public
 * @url /create
 */

exports.create = function(req, res, db, next){
  
  var BlogPost = db.main.model('BlogPost');
  var _post = new BlogPost(req.param('post'));
  
  _post.save(function(err){
    if (err) return next(err)
    res.partial('post', { object: _post }, function(err, html){
      if (err) return next(err)
      res.send({ prepend: html, to: '#posts' });
    });
  });
}