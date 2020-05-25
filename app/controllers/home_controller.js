// Set all global variables

var controller = {}
  , _app = {};

// Constructor

module.exports = function (app) {
  _app = app
  return controller
}

/**
 * Index
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

  console.log("Loading index page".info)

  // expose pusher key

  res.expose({
      app_key   : req.app.set('pusher_key')
    , app_id    : req.app.set('pusher_appid')
    , channel   : req.app.set('pusher_channel')
    , cluster   : req.app.set('pusher_cluster')
    , event     : 'post'
  }, 'PUSHER')

  _app.settings.db.posts.getLatestPosts(found)

  function found(err, data){

    // Render

    res.render('index', {
      posts : data
    })

  }

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

  // Set variables

  var BlogPost   = {}
    , Post       = {}
    , Validation = {}
    , errors     = {};

  // Initialize variables

  PostModel  = _app.settings.db.main.model('Post');
  Post       = new PostModel(req.body);
  Validation = Post.validateSync();

  // Do validation

  if(Validation){

    // Save all the errors and send them back to the client

    Object.keys(req.body).forEach(function(key) {

      if(Validation['errors'][key])
        errors[key] = Validation['errors'][key].message

    });

    res.send({validation_errors: errors})

  }else{

    Post.save(postSaved);

  }

  function postSaved(err){

    if (err) return next(err)

    console.log("Saved!".success)
    res.render('_post', { layout : false, post : Post }, function(err, html){

      if (err) return next(err)

      console.log("Calling pusher via hook...".input)
      req.app.emit('event:create_blog_post', { prepend: html, to: '#posts' }, req)
      return res.send({ prepend: html, to: '#posts' });

    });
  }
}


/**
 * Update Post
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Callback} next
 *
 * @api public
 * @url /delete
 */

controller.update = function(req, res, next){

  var PostModule = _app.settings.db.main.model('Post')
    , PostUpdate = req.body;

  PostModule.update( {_id : PostUpdate.id } , PostUpdate, postUpdated);

  function postUpdated(err){

    if (err) return next(err)

      req.app.emit('event:update_blog_post', {update: PostUpdate, target : PostUpdate.id }, req)
      res.send({ update: PostUpdate, target : PostUpdate.id });
  }
}


/**
 * Delete Post
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Callback} next
 *
 * @api public
 * @url /delete
 */

controller.delete = function(req, res, next){

  var PostModule = _app.settings.db.main.model('Post')
    , _id        = req.body.id;

  console.log("_id:", _id)

  PostModule.remove( {_id : _id} , postRemoved);

  function postRemoved(err){

    if (err) return next(err)

      req.app.emit('event:delete_blog_post', {remove: true, target : _id }, req)
      res.send({ remove: true,  target : _id });
  }
}
