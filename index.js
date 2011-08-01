/**
 *  Load external modules / see readme for bundle instructions
 */
 
require.paths = require.paths.unshift(__dirname + '/../node_modules');
require('./lib/exceptions')

//  Load boot file and fire away!

var app = require('./config/app')();
var port = process.env.PORT || 3000;

app.listen(port);

console.log('\x1b[36mSample Blog\x1b[90m v%s\x1b[0m running as \x1b[1m%s\x1b[0m on http://%s:%d',
  app.set('version'),
  app.set('env'),
  app.set('host'),
  app.address().port
);


