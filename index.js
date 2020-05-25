var path = require('path')

var pkg = require('./package.json')

require('./lib/exceptions')

var app = require('./config/init')();
var port = process.env.PORT || 3000;

app.listen(port);

console.log('\x1b[36mSample Blog\x1b[90m v%s\x1b[0m running as \x1b[1m%s\x1b[0m on http://%s:%d',
  pkg.version || '1.0',
  process.env.ENV || 'dev',
  process.env.HOST || 'localhost',
  process.env.PORT || 3000
);
