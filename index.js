
require.paths = require.paths.unshift(__dirname + '/../node_modules');

var app = require('./lib/boot.js')();

app.listen(4000);
