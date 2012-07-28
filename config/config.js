/**
 *  Load dependencies
 */

const express   = require('express')
    , stylus    = require('stylus')
    , expose    = require('express-expose')
    , mongoose  = require('mongoose')
    , nib       = require('nib')

/**
 *  Exports
 */

module.exports = function(app){

  //  Setup DB Connection

  var dblink = process.env.MONGOHQ_URL || 'mongodb://localhost/blogsample'

  const db  = mongoose.createConnection(dblink)

  //  Compile Hack for Stylus

  function compile(str, path) {
    return stylus(str)
      .set('filename', path)
      .include(nib.path)
  }

  //  Configure expressjs

  app.configure(function (){
    this
      .use(express.logger('\033[90m:method\033[0m \033[36m:url\033[0m \033[90m:response-time ms\033[0m'))
      .use(express.cookieParser())
      .use(express.bodyParser())
      .use(express.errorHandler({dumpException: true, showStack: true}))
      .use(express.session({ secret: 'faFka1@$aGsja'}))
  })

  //  Add template engine

  app.configure(function(){
    this
      .set('views', __dirname + '/../app/views')
      .set('view engine', 'jade')
      .use(stylus.middleware(
      { 
        src: __dirname + '/../public', 
        compile: compile 
      }))
      .use(express.static(__dirname + '/../public'))
  })

  //  Save reference to database connection
  
  app.configure(function () {
    app.set('db', { 
        'main': db
      , 'posts': db.model('BlogPost')
    })
    app.set('version', '0.1.6')
  })
   
  
  return app
}