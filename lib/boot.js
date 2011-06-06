const express = require('express')
    , stylus = require('stylus')
    , mongoose = require('mongoose')
    , nib = require('nib');

require('../app/models');

module.exports = function () {
  
  var dblink = process.env.MONGOHQ_URL || 'mongodb://localhost/blogsample';
  
  const app = express.createServer()
      , db = mongoose.createConnection(dblink);
      
  const BlogPost = db.model('BlogPost');

  function compile(str, path) {
    return stylus(str)
      .set('filename', path)
      .include(nib.path);
  }

  // Configure expressjs

  app.configure(function (){
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.errorHandler({dumpException: true, showStack: true}))
    app.use(express.session({ secret: 'faFka1@$aGsja'}))
  });

  //add template engine

  app.configure(function(){
    app.set('views', __dirname + '/../app/views');
    app.set('view engine', 'jade');
    app.use(stylus.middleware(
      { 
        src: __dirname + '/../public', 
        compile: compile 
      }));
    app.use(express.static(__dirname + '/../public'))
  });

  // Add expressjs helpers

  app.dynamicHelpers({
    messages: require('express-messages')
  });
  
  //create route and process data

  app.get('/', function(req, res){
    //var Blog = mongoose.model('BlogPost', BlogPost);
    BlogPost.find().sort('_id','descending').limit(15).find({}, function(err, posts){
      if (err) return next(err);
      res.render('home', {
        posts: posts
      })
    })
  });

  app.post('/create', function(req, res, next){
    //var Blog = mongoose.model('BlogPost', BlogPost);
    var post = new BlogPost(req.param('post'));
    post.save(function(err){
      if (err) res.send({ error: err.message });
      res.partial('post', { object: post }, function(err, html){
        if (err) res.send({ error: err.message });
        res.send({ prepend: html, to: '#posts' });
      });
    })
  });
  
  return app;
  
};