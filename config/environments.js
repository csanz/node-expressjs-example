var Pusher   = require('pusher')

module.exports = function(app){
 
  var port = process.env.PORT || 4000
    , push;
 
  app.configure('local', function (){

    // Setup pusher

    push = new Pusher({
        appId  : '15248'
      , appKey : '4ba149ec25cf69edff9c'
      , secret : 'fd9b0ace66816292bfe6'
    })

    this
      .set('host', 'localhost')
      .set('port', port)
      .set('ENV','local')
  }); 
  
  app.configure('production', function (){

    // Setup pusher

    push = new Pusher({
        appId  : 'YOUR_PUSHER_APP_ID'
      , appKey : 'YOUR_PUSHER_APP_KEY'
      , secret : 'YOUR_PUSHER_SECRET_KEY'
    })

    this
      .set('host', 'node-blog-example.herokuapp.com')
      .set('port', port)
      .set('ENV','production')
  });

  // Set pusher
  app
    .set('pusher', { 'blog_post': push.channel('blog_post') })
    .set('pusher_key', push.options.appKey)

  return app
  
}