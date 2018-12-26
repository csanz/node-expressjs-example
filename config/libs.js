var Pusher   = require('pusher');

module.exports = function(app){

  console.log("Setting libraries...".input)

  // Set variables
 
  var pusher = {};

  // Instantiate

  pusher = new Pusher({
      appId  : process.env.PUSHER_APPID
    , key    : process.env.PUSHER_KEY
    , secret : process.env.PUSHER_SECRET
    , cluster : process.env.PUSHER_CLUSTER
    , useTLS : process.env.PUSHER_TLS
  })

  // Set pusher

  app.set('pusher_channel', process.env.PUSHER_CHANNEL)
  app.set('pusher_key', process.env.PUSHER_KEY)
  app.set('pusher_appid', process.env.PUSHER_APPID)
  app.set('pusher_cluster', process.env.PUSHER_CLUSTER)
  app.set('pusher', pusher)

  return app;

}