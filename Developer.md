
## Simple Installation

      Install node, npm, mongodb
      Run `npm install` in the project directory
      Run `node .` and point your browser to http://localhost:3000

[See Node.js + Heroku Instructions Here](http://node-example-csanz.herokuapp.com/)

You'll need to add a new config entry using heroku terminal utility. 

      heroku config:add NODE_ENV=production

## Debugging Mongoose

      $node
      > var mongoose = require('mongoose')
      > var db = mongoose.connect('mongodb://localhost/blogsample')
      > db.model('BlogPost', require('./app/models/blogpost'))
      { [Function: model] getLatestPosts: [Function], modelName: 'BlogPost' }
      > db.model('BlogPost').findOne({}, function(err, data){ console.log(data) })
      { model: { [Function: model] getLatestPosts: [Function], modelName: 'BlogPost' }, op: 'findOne' }
      > initializing...
      { is_active: true, date_created: Thu, 12 May 2011 06:05:57 GMT, title: 'Testing', body: 'Hello Blog Post', _id: 4dcb78c5218ef26905000025 }
