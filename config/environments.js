
module.exports = function(app){
  // Loads the adequate environment
  var env  = process.env.NODE_ENV || 'development';
  var settings  = require('./environments/' + env)(app);
  return app;
};