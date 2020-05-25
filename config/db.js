var mongoose  = require('mongoose')

module.exports = function(app){

  console.log("Setting up database...".input)

  // Setup DB Connection

  var dblink = process.env.MONGOHQ_URL || 'mongodb://localhost/express-sample'

  const db = mongoose.createConnection(dblink, {
    autoIndex: process.env.AUTOINDEX || true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  //Save reference to database connection

  app.set('db',
  { main: db
  , posts: db.model('Post')
  });

  return app

}
