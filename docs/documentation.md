# plumajs

plumajs is a super light, super simple and developer-friendly blog app built on Node.js

## Simple Installation

* Install [node](http://nodejs.org/) and [mongoDB](http://www.mongodb.org/).
* Run `$ npm install` in the project directory.
* Run `$ ./bin/install` to set up your admin user and other default values.
* Run `$ node .` and point your browser to `http://localhost:3000`.
* Access the administration panel at `http://localhost:3000/admin`, your default `user/pass` are `admin/admin`
* You can start writing posts right away!

## Configuration and Customization
    
  * (TODO) Changing the theme....
  * (TODO) Creating a theme...
  * (TODO) Wait, I want to use other template engine...
  * (TODO) I want to add a hook (like an eMail hook?)...
  * (TODO) Deploying in a server

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

## Testing

  (TODO)

  ... To run the tests....

## Author and Contributors

  * Christian Sanz &lt;chrissanz@gmail.com&gt; [@csanz](http://www.twitter.com/csanz)
  * Herman Junge &lt;haj@neosource.cl&gt; [Github: hermanjunge](http://github.com/hermanjunge)
