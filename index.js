//libs

var express = require('express')
  , mongoose = require('mongoose')
  , stylus = require('stylus')
  , nib = require('nib');

//creating the connection

mongoose.connect('mongodb://localhost/simpleblog');

//instatiating the schema
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

//defining the blog post model
var BlogPost = new Schema({
    title: { type: String, required: true }
  , body: { type: String, required: true }
  , is_active: { type: Boolean, default:true }
  , date_created: { type: Date, default: Date.now }
  , date_updated: { type: Date } 
})

//this happens before it saves, they are called middleware
BlogPost.pre('save', function(next){
  console.log('Saving...');
  next();
});
//this happens before it removes, they are called middleware
BlogPost.pre('remove', function(next){
  console.log('removing...');
  next();
});
//this happens when it inititializes, they are called middleware
BlogPost.pre('init', function(next){
  console.log('initializing...');
  next();
});

// stylus compiler

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .include(nib.path);
}

//create server

var app = express.createServer();

//add express configuration

app.configure(function (){
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.errorHandler({dumpException: true, showStack: true}))
  app.use(express.session({ secret: 'idiosmiosanto'}))
})

//add template engine

app.configure(function(){
  app.set('views', __dirname + '');
  app.set('view engine', 'jade');
  app.use(stylus.middleware({ src: __dirname + '/public', compile: compile }));
  app.use(express.static(__dirname + '/public'))
}) 

//add express helpers

app.dynamicHelpers({
  messages: require('express-messages')
});
 
//create route and process data

app.get('/', function(req, res){
  var Blog = mongoose.model('BlogPost', BlogPost);
  Blog.find().sort('_id','descending').limit(15).find({}, function(err, posts){
    if (err) return next(err);
    res.render('home', {
      posts: posts
    })
  })
  
});

app.post('/create', function(req, res, next){
  var Blog = mongoose.model('BlogPost', BlogPost);
  var post = new Blog(req.param('post'));
  post.save(function(err){
    if (err) res.send({ error: err.message });
    res.partial('post', { object: post }, function(err, html){
      if (err) res.send({ error: err.message });
      res.send({ prepend: html, to: '#posts' });
    });
  })
})
app.listen(4000);

















