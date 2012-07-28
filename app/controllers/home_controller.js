// Set all global variables 

var pusher = require('pusher')
  , controller = {}
  , app
  , db

// Constructor

module.exports = function (_app) {
  app = _app
  db  = app.set('db')
  return controller
}

controller.load = function(template, req, res, next){
  if(!template) return next(new Error("missing template"))
  res.render(template, {
      layout     : '../layout/index'
  })
}

/**
 * Index BlogPost
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Callback} next
 *
 * @api public
 * @url /
 * @url /posts
 */

controller.index = function(req, res, next){

  // expose pusher key
  
  res.expose({ 
      app_key   : req.app.set('pusher_key') 
    , channel   : 'blog_post'
    , events    : 'post'
  }, 'PUSHER')

  // render template

  res.render('home/index', {
      layout     : '../layout/index'
    , posts   : db.posts.getLatestPosts()
  })

}

/**
 * Create BlogPost
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Callback} next
 *
 * @api public
 * @url /create
 */

controller.create = function(req, res, next){

  var BlogPost = db.main.model('BlogPost')
    , Post     = new BlogPost(req.param('post'));

  Post.save(postSaved)

  function postSaved(err){
    if (err) return next(err)
    res.partial('home/post', { object: Post }, function(err, html){
      if (err) return next(err)

      // Send the hook

      req.app.emit('event:create_blog_post', { prepend: html, to: '#posts' }, req)

      // Send response

      return res.send({ prepend: html, to: '#posts' });
    });
  }
}


/**
 * Update BlogPost
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Callback} next
 *
 * @api public
 * @url /delete
 */

controller.update = function(req, res, next){
  
  var BlogPost = db.main.model('BlogPost')
    , Post     = req.param('post');

  BlogPost.update( {_id : Post.id } , Post, postUpdated);

  function postUpdated(err){
    if (err) return next(err)

      // Send the hook
      
      req.app.emit('event:update_blog_post', {update: Post, target : Post.id }, req)

      // Send response

      res.send({ update: Post, target : Post.id });
  }
}


/**
 * Delete BlogPost
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Callback} next
 *
 * @api public
 * @url /delete
 */

controller.delete = function(req, res, next){
  
  var BlogPost = db.main.model('BlogPost');

  BlogPost.remove( {_id : req.param('id')} , postRemoved);

  function postRemoved(err){
    if (err) return next(err)

      // Send the hook
      
      req.app.emit('event:delete_blog_post', {remove: true, target : req.param('id') }, req)

      // Send response

      res.send({ remove: true,  target : req.param('id') });
  }
}