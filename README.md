# expressjs-blog

ExpressJS sample blog that uses Mongoose, Jade, Stylus and AJAX/jQuery and Twitter Bootstrap  

![Screenshot](https://github.com/csanz/expressjs-blog/raw/master/public/images/sample.png)

## Simple Installation

      Install node, npm, mongodb
      Run `npm install` in the project directory
      Run `node .` and point your browser to http://localhost:3000

## Sample Data

If for any reason you need to see some same data, do the following

      # Run this script
      $ mongo test/mongo_scripts/generate_test_data.js

      # Run the application in `test` mode
      $ NODE_ENV=test node .

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

## Author and Contributors

  * Christian Sanz &lt;chrissanz@gmail.com&gt; [@csanz](http://www.twitter.com/csanz)
  * Herman Junge &lt;haj@neosource.cl&gt; [Github: hermanjunge](http://github.com/hermanjunge)
