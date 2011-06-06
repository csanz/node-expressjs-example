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
  var BlogPost = db.main.model('BlogPost');
  BlogPost.find().sort('_id','descending').limit(15).find({}, function(err, posts){
    if (err) return next(err);
    res.render('home', {
      posts: posts
    })
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
  var post = new BlogPost(req.param('post'));
  post.save(function(err){
    if (err) res.send({ error: err.message });
    res.partial('post', { object: post }, function(err, html){
      if (err) res.send({ error: err.message });
      res.send({ prepend: html, to: '#posts' });
    });
  });
}