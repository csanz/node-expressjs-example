var dotenv = require('dotenv');
var variable_expansion = require('dotenv-expand');
const app_enviroment = dotenv.config();
variable_expansion(app_enviroment);

var Pusher   = require('pusher');

// Setup pusher

pusher = new Pusher({
    appId  : process.env.PUSHER_APPID
  , key    : process.env.PUSHER_KEY
  , secret : process.env.PUSHER_SECRET
  , cluster : process.env.PUSHER_CLUSTER
  , useTLS : process.env.PUSHER_TLS
});


pusher.trigger(process.env.PUSHER_CHANNEL, 'post', { prepend:'<div id="5c23b271f79d583acace6f50" class="well"><a href="#" class="delete">&times;</a><a href="#" class="edit">&#9998;</a><form action="/update" method="post"><h3 class="show">fasd</h3><input type="text" value="fasd" name="title" class="hide"/><span class="body"><p class="show">fasd</p><textarea name="body" class="span3 hide">fasd</textarea></span><input type="hidden" value="5c23b271f79d583acace6f50" name="id" class="span2"/><button type="submit" class="btn hide">Save changes</button></form></div>',to: '#posts' });

