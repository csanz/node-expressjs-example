var app          = require('../lib/object')
  , models       = require('../config/models')
  , db           = require('../config/db')
  , environments = require('../config/environments')
  , libs         = require('../config/libs')
  
environments(app);
models(app)
libs(app);
db(app);

var _app = app;


_app.settings.db.blogposts.getLatestPosts(found)


function found(err, data){

  console.log("err:", err);

  console.log("data:", data);

}


